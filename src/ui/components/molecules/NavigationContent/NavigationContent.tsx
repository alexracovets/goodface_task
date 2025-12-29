"use client";

import {
  NavigationAdditional,
  NavigationSection,
  NewProxies,
} from "@molecules";
import {
  ClipboardList,
  UserPlusIcon,
  AtomWrapper,
  MonitorIcon,
  ReceiptIcon,
  HelpCircle,
  BasketIcon,
  UsersIcon,
  SelectAll,
  CoinIcon,
  EyeIcon,
  KeyIcon,
  AtomHR,
} from "@atoms";

const navigationSections = [
  {
    title: "System Overview",
    content: [
      {
        name: "Observability Overview",
        icon: <EyeIcon />,
        link: "#",
      },
      {
        name: "Live Log Monitor",
        icon: <MonitorIcon />,
        link: "#",
        live: true,
      },
    ],
  },
  {
    title: "My Services",
    content: [
      {
        name: "Summary",
        icon: <SelectAll />,
        link: "#",
      },
      {
        name: "Proxy List",
        icon: <ClipboardList />,
        link: "#",
      },
      {
        name: "User Settings",
        icon: <UsersIcon />,
        link: "#",
      },
      {
        name: "All Products",
        icon: <BasketIcon />,
        link: "/",
      },
    ],
  },
  {
    title: "Developer Section",
    content: [
      {
        name: "API Keys",
        icon: <KeyIcon />,
        link: "#",
      },
      {
        name: "Proxy List",
        icon: <ClipboardList />,
        link: "#",
      },
    ],
  },
  {
    title: "Affiliate Programs",
    content: [
      {
        name: "Resellers Statistics",
        icon: <CoinIcon />,
        link: "#",
      },
      {
        name: "Affiliate Program",
        icon: <UserPlusIcon />,
        link: "#",
      },
    ],
  },
];

const navigationAdditional = [
  {
    name: "Billing",
    icon: <ReceiptIcon />,
    options: [
      {
        name: "Billing 1",
        link: "#",
      },
      {
        name: "Billing 2",
        link: "#",
      },
      {
        name: "Billing 3",
        link: "#",
      },
    ],
  },
  {
    name: "Help",
    icon: <HelpCircle />,
    options: [
      {
        name: "Help 1",
        link: "#",
      },
      {
        name: "Help 2",
        link: "#",
      },
      {
        name: "Help 3",
        link: "#",
      },
    ],
  },
];

export const NavigationContent = () => {
  return (
    <AtomWrapper variant="navigation_content">
      <NewProxies />
      {navigationSections.map((section) => (
        <NavigationSection
          key={section.title}
          title={section.title}
          content={section.content}
        />
      ))}
      <AtomHR />
      <NavigationAdditional additional={navigationAdditional} />
    </AtomWrapper>
  );
};
