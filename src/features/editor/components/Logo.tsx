import Link from "next/link";
import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="block">
      <div className="relative w-[75px] h-[90px] transition-transform hover:scale-105">
        <Image
          src="/seven.svg"
          fill
          alt="Logo"
          className="object-contain hover:opacity-90 transition-opacity duration-200"
          priority
        />
      </div>
    </Link>
  );
};

export default Logo;
