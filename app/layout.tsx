import type { Metadata } from "next";

import { LayoutDefault } from "@templates";

import { staticMetaData } from "@utils";
import { ChildrenType } from "@types";

export const metadata: Metadata = staticMetaData;

export default function RootLayout({ children }: ChildrenType) {
  return <LayoutDefault>{children}</LayoutDefault>;
}
