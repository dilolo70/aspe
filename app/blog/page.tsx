import { Metadata } from "next";
import PostList from "./components/ui/PostList";
import NewsletterSignupForm from "./components/ui/NewsletterSignupForm";
import Header from "@/components/ui/Header";
import Halo from "@/components/ui/Halo";

export const metadata: Metadata = {
  title: "Blog | Brian Ruiz",
  description:
    "I write about programming, design, and occasionally life updates!",
};

export default function Blog() {
 

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div className="flex flex-col gap-8">
     <Header title="Blog" subtitle="Notre blog "/>
      </div>
      <div
        className="animate-in"
        style={{ "--index": 2 } as React.CSSProperties}
      >
        {/* <PostList posts={posts} /> */}
      </div>
      <div
        className="animate-in"
        style={{ "--index": 3 } as React.CSSProperties}
      >
      </div>

      <div className="mt-32 ">
        <Header title="" subtitle="Notre Newsletter." />
        <div className="flex flex-col md:flex-row  items-center mt-8 md:mt-[3.31rem]">
        <Halo strength={5}>
      <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-secondaryA p-6 text-center lg:p-8">
        <p className="max-w-md text-foreground text-xl">
        Pour ne rien manquez Nous avons notre Communauté sur WhatsApp où nous partageons toutes nos activités inserer votre numéro et nous vous y ajouterons 
        </p>
        <form
          className="mt-2 flex  w-full max-w-md flex-col items-center gap-2 md:flex-row"
        >
          <div className="w-full">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="number"
              id="email"
              className="block w-full rounded-md  border border-primary bg-primary px-4 py-1.5 text-primary placeholder:text-tertiary focus:ring-inset focus:ring-blue-600"
              placeholder="+227 12345678"
            />
          </div>
          <button className="w-full whitespace-nowrap rounded-md bg-neutral-800 px-4 py-1.5 text-white hover:bg-neutral-900 focus:ring-inset focus:ring-blue-600 focus-visible:outline focus-visible:outline-2 dark:bg-neutral-300 dark:text-black hover:dark:bg-neutral-100 md:w-fit ">
            {"Envoyer"}
          </button>
        </form>
        <p className="text-sm text-tertiary">
        </p>
      </div>
    </Halo>
          
        </div>
      </div>
    </div>
  );
}
