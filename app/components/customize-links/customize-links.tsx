"use client";

import CustomizeBanner from "./customize-banner";
import { Fragment, useState } from "react";
import SubmitButton from "../submit-button";
import Menubar from "@/app/ui/icons/social/menu-bar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Input from "../input";

import Github from "@/app/ui/icons/social/github";
import Links from "@/app/ui/icons/link";

export default function CustomizeLinks() {
  const [links, setLinks] = useState<string[]>([]);

  function handleAddLink() {
    setLinks([...links, "links"]);
  }
  return (
    <form className="flex flex-col justify-between min-h-[700px]">
      <div className="p-8 bg-white h-full">
        <h2 className="font-bold text-[2rem] leading-[48px] text-dark-grey">
          Customize your links
        </h2>
        <p className="text-[1rem] leading-6 text-nickel">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
        <button
          type="button"
          onClick={handleAddLink}
          className="w-full outline-none mt-6 text-han-purple py-[11px] font-semibold px-[27px] rounded-lg border-[1px] border-han-purple"
        >
          <span className="mr-2">+</span>Add new link
        </button>
        {links.length === 0 && (
          <div className="bg-light-grey rounded-xl p-5 mt-6 pt-16">
            <CustomizeBanner />
          </div>
        )}
        <div className="flex flex-col items-center gap-3 mt-6">
          {links.length !== 0 &&
            links.map((_, index) => (
              <Fragment key={index + 1}>
                <SocialLinkForm count={index + 1} handle />
              </Fragment>
            ))}
        </div>
      </div>
      <div className="border-t-[2px] rounded-ee-xl rounded-es-xl border-light-grey bg-white py-6 px-10 flex justify-end items-center">
        <SubmitButton label="Save" />
      </div>
    </form>
  );
}

function SocialLinkForm({
  count,
  handleRemove,
}: {
  count: number;
  handleRemove: () => void;
}) {
  function removeLink(item: number) {
    handleRemove(item);
  }
  return (
    <div className="rounded-xl p-5 w-full gap-3 bg-light-grey">
      <div className="text-nickel text-[1rem] leading-6 font-bold flex items-center justify-between">
        <p className="flex gap-2 items-center">
          <Menubar />
          Link #{count}
        </p>
        <button
          onClick={() => removeLink(count - 1)}
          className="text-[1rem] leading-6 text-nickel"
        >
          Remove
        </button>
      </div>
      <p className="flex flex-col justify-center mt-3 gap-1">
        <label className="text-[0.75rem] leading-[1.125rem] text-dark-grey">
          Platform
        </label>
        <Select>
          <SelectTrigger className="w-full outline-none py-6 px-4">
            <div className="flex items-center gap-3">
              <Github />
              <SelectValue placeholder="Github" />
            </div>
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </p>
      <p className="mt-3 flex flex-col gap-1">
        {/* <Input labelID="" label="Link" icon={<Links />}>

        </Input> */}
      </p>
    </div>
  );
}
