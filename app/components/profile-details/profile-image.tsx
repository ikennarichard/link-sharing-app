"use client";
import UploadImage from "@/app/ui/icons/upload-image";
import Image from "next/image";
import { ChangeEvent, useState } from "react";

export default function ProfileImageUpload() {
  const [image, setImage] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setImage(reader.result);
        } else {
          console.error('FileReader result is not a string');
        }
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="w-full h-[233px] bg-light-grey p-5 pr-0 flex items-center rounded-xl mt-6">
      <p className="w-[45%] text-grey text-[1rem] leading-6">Profile Picture</p>

      <div className="flex items-center justify-between w-full">
        <div className="w-[80%] h-[200px] relative bg-light-purple rounded-xl">
          <input
            type="file"
            hidden
            onChange={handleChange}
            id="profile_image"
          />
          <label
            htmlFor="profile_image"
            className={`flex flex-col items-center w-[8rem] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 cursor-pointer rounded-xl ${
              image ? "text-white" : "text-han-purple"
            } font-semibold gap-2`}
          >
            <UploadImage />+ Upload Image
          </label>
          {image && (
            <Image
              src={image}
              alt="headshot"
              fill
              sizes="50vw"
              objectFit="cover"
              className="rounded-xl"
            />
          )}
          <div
            className={`absolute rounded-xl inset-0 ${
              image ? "bg-[#00000050]" : "bg-[#ffffff10]"
            }`}
          ></div>
        </div>
        <p className="text-[0.75rem] ml-3 leading-{1.125rem] text-nickel text-left w-[15rem]">
          Image must be below 1024x1024px. Use PNG or JPG format.
        </p>
      </div>
    </div>
  );
}
