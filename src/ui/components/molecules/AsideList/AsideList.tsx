"use client";

import { AtomWrapper, AtomText, СircleCheck } from "@atoms";

const datacenterProxies = ["3-day Trial", "Customer Success Manager"];

export const AsideList = () => {
  return (
    <AtomWrapper variant="list">
      <AtomText variant="aside_list_block_title">Datacenter Proxies</AtomText>
      <AtomWrapper variant="list" className="w-fit" asChild>
        <ul>
          {datacenterProxies.map((item, idx) => (
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
  );
};
