import type { Metadata } from "next";

import { LayoutProduct } from "@templates";

import { staticMetaData } from "@utils";
import { ChildrenType } from "@types";

export const metadata: Metadata = staticMetaData;

export default function ProductLayout({ children }: ChildrenType) {
  return <LayoutProduct>{children}</LayoutProduct>;
}
