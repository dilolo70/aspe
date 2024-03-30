import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  children: ReactNode;
};

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = `/${usePathname().split("/")[1]}`; // active paths on dynamic subpages
  const active = pathname === href;

  return (
    <Link
      className={clsx(
        "px-4 py-2 rounded-lg text-sm hover:text-blue-500 transition-colors",
        active ? " text-blue-500" : "text-foreground/50"
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
