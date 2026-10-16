import { Clock, Globe, Headset, Truck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type WhyPoint = {
  id: "punctual" | "coverage" | "fleet" | "support";
  Icon: LucideIcon;
};

export const whyPoints: readonly WhyPoint[] = [
  { id: "punctual", Icon: Clock },
  { id: "coverage", Icon: Globe },
  { id: "fleet", Icon: Truck },
  { id: "support", Icon: Headset },
];
