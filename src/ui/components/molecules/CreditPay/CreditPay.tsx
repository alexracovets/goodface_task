"use client";

import { AtomImage, AtomWrapper } from "@atoms";

const paymentOptions = [
  {
    alt: "visa",
    image: "/png/payment/visa.png",
  },
  {
    alt: "master",
    image: "/png/payment/master.png",
  },
  {
    alt: "american express",
    image: "/png/payment/american.png",
  },
  {
    alt: "pay",
    image: "/png/payment/pay.png",
  },
  {
    alt: "unionpay",
    image: "/png/payment/union.png",
  },
];

export const CreditPay = () => {
  return (
    <AtomWrapper variant="credit_pay">
      {paymentOptions.map((option, idx) => (
        <AtomImage
          key={idx}
          src={option.image}
          alt={option.alt}
          variant="payment"
        />
      ))}
    </AtomWrapper>
  );
};
