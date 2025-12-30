"use client";

import { AtomWrapper, Container } from "@atoms";
import { PageHeroBlock, FormProxies } from "@molecules";

export const DatacenterTemplate = () => {
  return (
    <AtomWrapper variant="product_main_content">
      <Container asChild>
        <section>
          <AtomWrapper variant="product_main_content">
            <PageHeroBlock />
            <FormProxies />
          </AtomWrapper>
        </section>
      </Container>
      <Container asChild>
        <section></section>
      </Container>
    </AtomWrapper>
  );
};
