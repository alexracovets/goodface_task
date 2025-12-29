"use client";

import { AtomWrapper, Container } from "@atoms";
import { PageHeroBlock, FormProxies } from "@molecules";

export const DatacenterTemplate = () => {
  return (
    <>
      <Container>
        <AtomWrapper variant="product_main_content">
          <PageHeroBlock />
          <FormProxies />
        </AtomWrapper>
      </Container>
    </>
  );
};
