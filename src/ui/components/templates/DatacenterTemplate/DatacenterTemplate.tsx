"use client";

import { AtomWrapper, Container } from "@atoms";
import { PageHeroBlock, FormProxies, PlanesIncludes } from "@molecules";

export const DatacenterTemplate = () => {
  return (
    <>
      <Container asChild className="order-0">
        <section>
          <AtomWrapper variant="product_main_content">
            <PageHeroBlock />
            <FormProxies />
          </AtomWrapper>
        </section>
      </Container>
      <Container asChild className="order-2">
        <section>
          <PlanesIncludes />
        </section>
      </Container>
    </>
  );
};
