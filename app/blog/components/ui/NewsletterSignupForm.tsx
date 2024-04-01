"use client";

import { FormEventHandler, useCallback, useState } from "react";

import Halo from "@/components/ui/Halo";
import FlipNumber from "@/components/FlipNumber";
import fetcher from "@/lib/fetcher";

export default function NewsletterSignupForm() {






  return (
    <Halo strength={5}>
      <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-secondaryA p-6 text-center lg:p-8">
        <p className="font-medium text-primary">Subscribe to my newsletter</p>
        <p className="max-w-md text-secondary">
          The Modern Blueprint —monthly readings on topics like tech, design,
          productivity, programming, and more!
        </p>
        <form
          className="mt-2 flex  w-full max-w-md flex-col items-center gap-2 md:flex-row"
        >
          <div className="w-full">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="block w-full rounded-md  border border-primary bg-primary px-4 py-1.5 text-primary placeholder:text-tertiary focus:ring-inset focus:ring-blue-600"
              placeholder="you@example.com"
            />
          </div>
          <button className="w-full whitespace-nowrap rounded-md bg-neutral-800 px-4 py-1.5 text-white hover:bg-neutral-900 focus:ring-inset focus:ring-blue-600 focus-visible:outline focus-visible:outline-2 dark:bg-neutral-300 dark:text-black hover:dark:bg-neutral-100 md:w-fit ">
            {"Sign up"}
          </button>
        </form>
        <p className="text-sm text-tertiary">
          Join the  other
          readers.
        </p>
      </div>
    </Halo>
  );
}
