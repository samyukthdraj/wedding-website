"use client";
import { useMemo, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import {
  FaCheck,
  FaCopy,
  FaDownload,
  FaExternalLinkAlt,
  FaWhatsapp,
} from "react-icons/fa";
import {
  buildGuestInviteUrl,
  COUPLE,
  DEFAULT_INVITE_MESSAGE_TEMPLATE,
  DEFAULT_SITE_URL,
  encodeGuestParam,
  ENGAGEMENT_EVENT,
} from "../constants/engagement";
import { FloralCrest, FloralDivider } from "./FloralAccents";

type GeneratedInvite = {
  name: string;
  queryValue: string;
  url: string;
  message: string;
};

const GUEST_LIST_PLACEHOLDER = [
  "Rahul & Priya",
  "The Nair Family",
  "Asha & Rohan",
].join("\n");

function formatInviteMessage(
  template: string,
  guestName: string,
  url: string,
): string {
  return template
    .replace(/\{name\}/g, guestName)
    .replace(/\{link\}/g, url)
    .replace(/\{couple\}/g, `${COUPLE.bride} & ${COUPLE.groom}`)
    .replace(/\{date\}/g, ENGAGEMENT_EVENT.date);
}

function formatGeneralInviteMessage(template: string, url: string): string {
  return template
    .replace(/^[^\r\n]*\{name\}[^\r\n]*(?:\r?\n)*/gim, "")
    .replace(
      /^[^\r\n]*open your personalized invitation here:?[^\r\n]*(?:\r?\n)?/gim,
      "",
    )
    .replace(/\{link\}/g, url)
    .replace(/\{couple\}/g, `${COUPLE.bride} & ${COUPLE.groom}`)
    .replace(/\{date\}/g, ENGAGEMENT_EVENT.date)
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function escapeCsvCell(value: string): string {
  return `"${value.replace(/"/g, '""')}"`;
}

const subscribeEmpty = () => () => {};

function getClientBaseUrl(): string {
  const { hostname, origin } = window.location;
  if (hostname === "localhost" || hostname === "127.0.0.1") {
    return DEFAULT_SITE_URL;
  }
  return origin.endsWith("/") ? origin : `${origin}/`;
}

function getServerBaseUrl(): string {
  return DEFAULT_SITE_URL;
}

type InviteRowCardProps = {
  title: string;
  badge?: string;
  previewHref: string;
  url: string;
  message: string;
  idPrefix: string;
  copiedId: string | null;
  onCopy: (text: string, id: string) => void;
  isGeneral?: boolean;
};

const InviteRowCard = ({
  title,
  badge,
  previewHref,
  url,
  message,
  idPrefix,
  copiedId,
  onCopy,
  isGeneral = false,
}: InviteRowCardProps) => {
  const linkId = `${idPrefix}-link`;
  const msgId = `${idPrefix}-msg`;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;

  return (
    <article
      className={
        isGeneral ? "invite-row-card invite-row-card-general" : "invite-row-card"
      }
    >
      <div className="invite-row-top">
        <div>
          <div className="invite-row-title-line">
            <h2 className="invite-row-name">{title}</h2>
            {badge && <span className="invite-row-badge">{badge}</span>}
          </div>
          <p className="invite-row-url">{url}</p>
        </div>

        <div className="invite-row-actions">
          <Link
            href={previewHref}
            target="_blank"
            rel="noopener noreferrer"
            className="invite-chip-btn"
          >
            <FaExternalLinkAlt /> Preview
          </Link>

          <button
            type="button"
            onClick={() => onCopy(url, linkId)}
            className="invite-chip-btn"
          >
            {copiedId === linkId ? <FaCheck /> : <FaCopy />}
            {copiedId === linkId ? "Copied" : "Copy Link"}
          </button>

          <button
            type="button"
            onClick={() => onCopy(message, msgId)}
            className="invite-chip-btn"
          >
            {copiedId === msgId ? <FaCheck /> : <FaCopy />}
            {copiedId === msgId ? "Copied" : "Copy Message"}
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="invite-chip-btn invite-chip-whatsapp"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
};

export const InviteSender = () => {
  const baseUrl = useSyncExternalStore(
    subscribeEmpty,
    getClientBaseUrl,
    getServerBaseUrl,
  );
  const [guestInput, setGuestInput] = useState("");
  const [template, setTemplate] = useState(DEFAULT_INVITE_MESSAGE_TEMPLATE);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const effectiveTemplate = template.trim() || DEFAULT_INVITE_MESSAGE_TEMPLATE;
  const generalUrl = `${baseUrl.trim().replace(/\/+$/, "")}/`;

  const generalMessage = useMemo(
    () => formatGeneralInviteMessage(effectiveTemplate, generalUrl),
    [effectiveTemplate, generalUrl],
  );

  const invites = useMemo<GeneratedInvite[]>(() => {
    const names = guestInput
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean);

    return names.map((name) => {
      const queryValue = encodeGuestParam(name);
      const url = buildGuestInviteUrl(baseUrl, name);
      const message = formatInviteMessage(effectiveTemplate, name, url);
      return { name, queryValue, url, message };
    });
  }, [baseUrl, guestInput, effectiveTemplate]);

  const copyText = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => {
        setCopiedId((current) => (current === id ? null : current));
      }, 2000);
    } catch {
      const area = document.createElement("textarea");
      area.value = text;
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      document.body.removeChild(area);
      setCopiedId(id);
      setTimeout(() => {
        setCopiedId((current) => (current === id ? null : current));
      }, 2000);
    }
  };

  const handleCopyAllLinks = () => {
    const payload = invites.map((item) => `${item.name}: ${item.url}`).join("\n");
    void copyText(payload, "all-links");
  };

  const handleCopyAllMessages = () => {
    const payload = invites
      .map((item) => `--- ${item.name} ---\n${item.message}`)
      .join("\n\n");
    void copyText(payload, "all-messages");
  };

  const handleDownloadCsv = () => {
    const header = ["Guest Name", "Personalized Link", "Message"]
      .map(escapeCsvCell)
      .join(",");
    const rows = invites.map((item) =>
      [item.name, item.url, item.message].map(escapeCsvCell).join(","),
    );
    const csv = [header, ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = `${COUPLE.bride}-${COUPLE.groom}-guest-invites.csv`;
    link.click();
    URL.revokeObjectURL(blobUrl);
  };

  return (
    <main className="invites-page">
      <div className="invites-container">
        <header className="invites-header">
          <FloralCrest className="invites-crest" />
          <p className="invites-eyebrow">
            {COUPLE.bride} &amp; {COUPLE.groom} • {ENGAGEMENT_EVENT.shortDate}
          </p>
          <h1 className="invites-title">Personalized Invite Sender</h1>
          <p className="invites-subtitle">
            Share the general link with everyone, or add guest and family names
            (one per line) for personalized <code>?guest=</code> invitations.
          </p>
          <FloralDivider className="invites-divider" />
        </header>

        <section className="invites-controls">
          <div className="invites-field">
            <label htmlFor="base-url">Website Base URL</label>
            <input
              id="base-url"
              type="url"
              value={baseUrl}
              readOnly
              aria-readonly="true"
            />
          </div>

          <div className="invites-grid">
            <div className="invites-field">
              <label htmlFor="guest-list">
                Guest / Family List ({invites.length}{" "}
                {invites.length === 1 ? "invite" : "invites"})
              </label>
              <textarea
                id="guest-list"
                rows={7}
                value={guestInput}
                onChange={(e) => setGuestInput(e.target.value)}
                placeholder={GUEST_LIST_PLACEHOLDER}
              />
            </div>

            <div className="invites-field">
              <label htmlFor="message-template">
                Message Template (<code>{"{name}"}</code>,{" "}
                <code>{"{link}"}</code>)
              </label>
              <textarea
                id="message-template"
                rows={7}
                value={template}
                onChange={(e) => setTemplate(e.target.value)}
              />
            </div>
          </div>

          <div className="invites-bulk-actions">
            <button
              type="button"
              className="invites-btn-primary"
              disabled={invites.length === 0}
              onClick={handleCopyAllMessages}
            >
              {copiedId === "all-messages" ? <FaCheck /> : <FaCopy />}
              {copiedId === "all-messages"
                ? "Copied All Messages"
                : "Copy All Messages"}
            </button>

            <button
              type="button"
              className="invites-btn-secondary"
              disabled={invites.length === 0}
              onClick={handleCopyAllLinks}
            >
              {copiedId === "all-links" ? <FaCheck /> : <FaCopy />}
              {copiedId === "all-links" ? "Copied All Links" : "Copy All Links"}
            </button>

            <button
              type="button"
              className="invites-btn-secondary"
              disabled={invites.length === 0}
              onClick={handleDownloadCsv}
            >
              <FaDownload /> Export CSV
            </button>
          </div>
        </section>

        <section className="invites-results">
          <InviteRowCard
            title="General Invitation"
            badge="Send to Everyone"
            previewHref="/"
            url={generalUrl}
            message={generalMessage}
            idPrefix="general"
            copiedId={copiedId}
            onCopy={(text, id) => void copyText(text, id)}
            isGeneral
          />

          {invites.length === 0 ? (
            <p className="invites-hint">
              Add guest or family names above to also generate personalized{" "}
              <code>?guest=</code> cards below.
            </p>
          ) : (
            invites.map((item, idx) => (
              <InviteRowCard
                key={`${item.name}-${idx}`}
                title={`Dear ${item.name},`}
                previewHref={`/?guest=${item.queryValue}`}
                url={item.url}
                message={item.message}
                idPrefix={`guest-${idx}`}
                copiedId={copiedId}
                onCopy={(text, id) => void copyText(text, id)}
              />
            ))
          )}
        </section>
      </div>
    </main>
  );
};
