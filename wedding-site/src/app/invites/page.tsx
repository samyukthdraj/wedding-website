import type { Metadata } from "next";
import { InviteSender } from "../../components/InviteSender";
import { COUPLE } from "../../constants/engagement";

export const metadata: Metadata = {
  title: `${COUPLE.bride} & ${COUPLE.groom} | Personalized Invite Sender`,
  robots: {
    index: false,
    follow: false,
  },
};

export default function InvitesPage() {
  return <InviteSender />;
}

