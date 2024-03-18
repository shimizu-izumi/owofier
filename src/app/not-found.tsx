"use client";

import Image from "next/image";

export default function Notfound() {
  return (
    <div>
      <Image
        src={"https://http.dog/404.jpg"}
        alt={"Not Found"}
        width={512}
        height={512}
      />
    </div>
  );
}
