import { BadgeCheck, Handshake, Leaf, ShieldCheck } from "lucide-react";

export const companyValues = [
  { id: "reliability", Icon: BadgeCheck },
  { id: "safety", Icon: ShieldCheck },
  { id: "sustainability", Icon: Leaf },
  { id: "partnership", Icon: Handshake },
] as const;
