"use client";

import {
  GithubLogo,
  LinkedinLogo,
  InstagramLogo,
  EnvelopeSimple,
} from "@phosphor-icons/react";

const Socials = () => {
  return (
    <div className="w-auto h-auto flex gap-4">
      <GithubLogo color="black" weight="regular" size={40} />
      <LinkedinLogo color="black" weight="regular" size={40} />
      <InstagramLogo color="black" weight="regular" size={40} />
      <EnvelopeSimple color="black" weight="regular" size={40} />
    </div>
  );
};

export default Socials;
