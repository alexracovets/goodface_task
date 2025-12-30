"use client";

import { AtomWrapper, AtomText, СircleCheck } from "@atoms";

const datacenterProxies = ["3-day Trial", "Customer Success Manager"];

export const AsideList = () => {
  return (
    <AtomWrapper variant="aside_list_block">
      <AtomText variant="aside_list_block_title">Datacenter Proxies</AtomText>
      <AtomWrapper variant="additional_content_list" asChild>
        <ul>
          {datacenterProxies.map((item, idx) => (
            <AtomWrapper
              variant="additional_content_list_item"
              key={idx}
              asChild
            >
              <li>
                <СircleCheck className="w-[20px] min-w-[20px] h-[20px] min-h-[20px]" />
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
