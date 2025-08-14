"use client";

import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <section className="py-28 container max-w-7xl mx-auto px-4 bg-cyan-500 text-black">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex flex-col items-center mb-4">
          <h1 className="text-4xl md:test-6xl font-bold mb-6">Eric Garcia</h1>
          <p className="text-xl md:text-2xl mb-4">
            Experienced software engineer
          </p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto">
        <Link
          href="/about"
          className="bg-primary text-center inline-block min-w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/80 transition-colors"
        >
          View All Skills
        </Link>
      </div>
    </section>
  );
};

export default Contact;
