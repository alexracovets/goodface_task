"use client";

import { AtomWrapper, AtomText, СircleCheck } from "@atoms";

const list = [
  "Unlimited Concurrent Sessions",
  "Automatic Proxy Potation",
  "Proxy Servers in 195+ Countries",
  "API access",
  "Country, Region, City, or ISP Targeting",
  "HTTP, SOCKS5, and UDP support",
  "Email and Chat Support",
  "Custom Responses for Your Proxy Roquests",
];

export const PlanesIncludes = () => {
  const midpoint = Math.ceil(list.length / 2);
  const firstHalf = list.slice(0, midpoint);
  const secondHalf = list.slice(midpoint);

  return (
    <AtomWrapper variant="additional_content">
      <AtomText variant="additional_title" asChild>
        <h2>All plans include</h2>
      </AtomText>
      <AtomWrapper variant="additional_content_lists">
        <AtomWrapper variant="list" className="w-fit" asChild>
          <ul>
            {firstHalf.map((item, idx) => (
              <AtomWrapper variant="center_row_wrapper" key={idx} asChild>
                <li>
                  <СircleCheck variant="icon" />
                  <AtomText variant="additional_content_list_item">
                    {item}
                  </AtomText>
                </li>
              </AtomWrapper>
            ))}
          </ul>
        </AtomWrapper>
        <AtomWrapper variant="list" className="w-fit" asChild>
          <ul>
            {secondHalf.map((item, idx) => (
              <AtomWrapper variant="center_row_wrapper" key={idx} asChild>
                <li>
                  <СircleCheck variant="icon" />
                  <AtomText variant="additional_content_list_item">
                    {item}
                  </AtomText>
                </li>
              </AtomWrapper>
            ))}
          </ul>
        </AtomWrapper>
      </AtomWrapper>
    </AtomWrapper>
  );
};
