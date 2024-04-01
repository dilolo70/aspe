import Link from "@/components/ui/Link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 | ASPE",
  description:
    "Uh oh! Cette Page n'existe pas woh!",
};

const Custom404 = (): JSX.Element => (
  <div className="flex flex-col gap-2 mx-auto h-screen">
    <h1>404 - Page not found</h1>
    <p className="text-secondary">
      Uh oh! Cette page nI&apos;existe pas, ou vous avez cliqué sur un lien non cliquable
    </p>
    <div className="h-2" />
    <Link href="/" underline>
      Retouré à la page dI&apos;acceuil...
    </Link>
  </div>
);

export default Custom404;
