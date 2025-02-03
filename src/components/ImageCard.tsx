"use client";

import Image from "next/image";

type Props = {
  img: string;
};

export default function ImageCard({ img }: Props) {
  return (
    <div className="">
      <Image src={img} alt="product" />
    </div>
  );
}
