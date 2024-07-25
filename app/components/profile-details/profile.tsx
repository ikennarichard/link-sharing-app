'use client'

import SubmitButton from "../submit-button";
import ProfileDetail from "./profile-detail";
import ProfileImageUpload from "./profile-image";

export default function Profile() {
  return (
    <form className="flex flex-col justify-between h-full">
      <div className="p-8 bg-white h-full pb-10">
        <h2 className="font-bold text-[2rem] leading-[48px] text-dark-grey">
          Profile Details
        </h2>
        <p className="text-[1rem] leading-6 text-nickel">
          Add your details to create a personal touch to your profile.
        </p>
        <ProfileImageUpload/>
        <div className="bg-light-grey mt-3 h-[13rem] flex flex-col gap-3 p-5 rounded-xl">
          <ProfileDetail place="John" label="firstname" labelText="First name*" />
          <ProfileDetail place="Appleseed" label="lastname" labelText="Last name*" />
          <ProfileDetail place="John" label="user-mail" labelText="Email" type="email" />
        </div>
      </div>
      <div className="border-t-[2px] rounded-ee-xl rounded-es-xl border-light-grey bg-white py-6 px-10 flex justify-end items-center">
        <SubmitButton label="Save" />
      </div>
    </form>
  )
}
