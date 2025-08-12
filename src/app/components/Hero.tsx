import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="py-28 container max-w-7xl mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex flex-col items-center mb-4">
          <Image
            src="/projects/myPhoto.jpg"
            alt="profile image"
            width={100}
            height={100}
            className="rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-primary"
          />
          <h1 className="text-4xl md:test-6xl font-bold mb-6">Eric Garcia</h1>
          <p className="text-xl md:text-2xl mb-8">
            Experienced software engineer
          </p>
        </div>
        <div>
          <Link
            href="/projects"
            className="bg-primary inline-block min-w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/80 transition-colors"
          >
            View All Skills
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
