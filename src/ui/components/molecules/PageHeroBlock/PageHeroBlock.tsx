"use client";

import { AtomImage, AtomText, AtomWrapper } from "@atoms";

export const PageHeroBlock = () => {
  return (
    <AtomWrapper variant="page_hero_block">
      <AtomImage
        src="/svg/data_proxies.svg"
        alt="Datacenter Proxies"
        variant="hero"
      />
      <AtomWrapper variant="hero_content">
        <AtomText variant="heading1" className="text-grey-800" asChild>
          <h1>Datacenter Proxies</h1>
        </AtomText>
        <AtomText variant="hero_description">
          High-speed, reliable proxies sourced from data centers, ideal for
          managing high-volume, concurrent requests.
        </AtomText>
      </AtomWrapper>
    </AtomWrapper>
  );
};
