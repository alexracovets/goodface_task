import type { Metadata } from "next";

import { LayoutGoodface } from "@templates";

import { staticMetaData } from "@utils";
import { ChildrenType } from "@types";

export const metadata: Metadata = staticMetaData;

export default function GoodfaceLayout({ children }: ChildrenType) {
  return <LayoutGoodface>{children}</LayoutGoodface>;
}
