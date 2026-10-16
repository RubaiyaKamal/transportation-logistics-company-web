import { Boxes, FileCheck, Globe, Route, Truck, Warehouse } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  id:
    | "ftl"
    | "ltl"
    | "distribution"
    | "international"
    | "warehousing"
    | "customs";
  slug: string;
  Icon: LucideIcon;
};

export const services: readonly Service[] = [
  { id: "ftl", slug: "full-truckload", Icon: Truck },
  { id: "ltl", slug: "groupage", Icon: Boxes },
  { id: "distribution", slug: "benelux-distribution", Icon: Route },
  { id: "international", slug: "international-transport", Icon: Globe },
  { id: "warehousing", slug: "warehousing", Icon: Warehouse },
  { id: "customs", slug: "customs-support", Icon: FileCheck },
];
