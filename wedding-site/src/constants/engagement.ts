/**
 * Central configuration for Midhuna & Gautham's engagement website.
 * Update names, dates, times, venue details, coordinates, or asset paths here.
 */

export type VenueCoordinates = {
  /** Decimal latitude (e.g. 9.9312). Set to null to fall back to address search. */
  latitude: number | null;
  /** Decimal longitude (e.g. 76.2673). Set to null to fall back to address search. */
  longitude: number | null;
};

export type EngagementEventConfig = {
  eventType: string;
  title: string;
  date: string;
  shortDate: string;
  time: string;
  /** Local ISO-style timestamp for calendar export: YYYYMMDDTHHMMSS */
  startTimeISO: string;
  /** Local ISO-style timestamp for calendar export: YYYYMMDDTHHMMSS */
  endTimeISO: string;
  calendarDescription: string;
  calendarFileName: string;
  venueName: string;
  address: string;
  coordinates: VenueCoordinates;
  /** Optional direct Google Maps share link; overrides coordinates and address when set. */
  customDirectionsUrl: string;
};

export const COUPLE = {
  bride: "Midhuna",
  groom: "Gautham",
  monogram: "M & G",
  togetherText: "Together with their families",
  brideFamily: {
    relation: "Daughter of",
    parents: "Mr. Pavithran & Smt. Sheena",
  },
  groomFamily: {
    relation: "Son of",
    parents: "Mr. Suresh & Smt. Asha",
    blessedBy: "Blessed by: Family and Friends",
  },
} as const;

export const ENGAGEMENT_EVENT: EngagementEventConfig = {
  eventType: "ENGAGEMENT",
  title: "Engagement Ceremony",
  date: "December 23, 2026",
  shortDate: "DEC 23, 2026",
  time: "10:00 AM",
  startTimeISO: "20261223T100000",
  endTimeISO: "20261223T140000",
  calendarDescription: `Engagement celebration of ${COUPLE.bride} & ${COUPLE.groom}`,
  calendarFileName: `${COUPLE.bride}-${COUPLE.groom}-Engagement.ics`,
  venueName: "Thimiri Bank Convention Centre",
  address: "Kuttamath, Pilicode, Kasaragod",
  coordinates: {
    latitude: null,
    longitude: null,
  },
  customDirectionsUrl: "https://share.google/6xdzNO5b9HX7ORNMm",
};

export const HERO_COPY = {
  subtitle: `${ENGAGEMENT_EVENT.eventType} • ${ENGAGEMENT_EVENT.date.toUpperCase()}`,
} as const;

export const INVITATION_COPY = {
  personalizedBlessing: `With the blessings of the Almighty, we joyfully request the honour of your presence at the engagement of ${COUPLE.bride} & ${COUPLE.groom} as they begin their forever journey.`,
  defaultBlessing: `With the blessings of the Almighty and the love of our families, we joyfully request the honour of your presence at the engagement of ${COUPLE.bride} & ${COUPLE.groom} as they begin their forever journey.`,
} as const;

export const DEFAULT_SITE_URL = "https://midhunagautham.vercel.app/";

export const DEFAULT_INVITE_MESSAGE_TEMPLATE = `Dear {name},

With the love of our families, we joyfully invite you to ${COUPLE.bride} & ${COUPLE.groom}'s engagement celebration on ${ENGAGEMENT_EVENT.date}.

Open your personalized invitation here:
{link}`;

/** Encodes a guest name into a URL-safe query value for ?guest=. */
export function encodeGuestParam(guestName: string): string {
  return encodeURIComponent(guestName.trim().replace(/\s+/g, "-"));
}

/** Builds a share-safe personalized URL for the guest query parameter. */
export function buildGuestInviteUrl(baseUrl: string, guestName: string): string {
  const cleanBase = baseUrl.trim().replace(/\/+$/, "");
  return `${cleanBase}/?guest=${encodeGuestParam(guestName)}`;
}

export const SITE_ASSETS = {
  heroBackground: "/bg-hero-floral.svg",
  ganeshaIcon: "/ganesha-floral.svg",
  audioTrack: "/bg-music.mp3",
  ogImage: "/MG_favicon.png",
  ogImageAlt: `${COUPLE.bride} & ${COUPLE.groom} Logo`,
} as const;

export const SITE_METADATA = {
  title: `${COUPLE.bride} & ${COUPLE.groom} | Engagement`,
  description: `Engagement celebration of ${COUPLE.bride} & ${COUPLE.groom} - ${ENGAGEMENT_EVENT.date}`,
} as const;

/** Builds the Google Maps directions URL, preferring custom URL, then coordinates, then address. */
export function getDirectionsUrl(event: EngagementEventConfig): string {
  if (event.customDirectionsUrl.trim()) {
    return event.customDirectionsUrl.trim();
  }

  const { latitude, longitude } = event.coordinates;
  if (latitude !== null && longitude !== null) {
    return `https://maps.google.com/?q=${latitude},${longitude}`;
  }

  return `https://maps.google.com/?q=${encodeURIComponent(event.address)}`;
}

