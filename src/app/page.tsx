"use client";

import { Input } from "@nextui-org/input";
import { Snippet } from "@nextui-org/snippet";
import { useState } from "react";
import { Select, SelectItem } from "@nextui-org/select";
import owoify from "owoify-js";

export default function HomePage() {
  const [text, setText] = useState("hello! i am your worst nightmare");
  const [variant, setVariant] = useState("owo");

  return (
    <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
      <h1 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-[5rem]">
        OwOfier
      </h1>
      <div className="flex w-unit-96 flex-col flex-wrap gap-4 sm:flex-1 md:gap-8">
        <Input
          type="text"
          label="Input"
          onChange={(e) => setText(e.target.value)}
          placeholder={"hello! i am your worst nightmare"}
        />
        <Select
          label="Mode"
          defaultSelectedKeys={["owo"]}
          onChange={(e) => setVariant(e.target.value)}
          disallowEmptySelection
        >
          <SelectItem key="owo" value="owo">
            OwO
          </SelectItem>
          <SelectItem key="uwu" value="uwu">
            UwU
          </SelectItem>
          <SelectItem key="uvu" value="uvu">
            UvU
          </SelectItem>
        </Select>
        <Snippet symbol={""} className="">
          {owoify(text, variant)}
        </Snippet>
      </div>
    </div>
  );
}
