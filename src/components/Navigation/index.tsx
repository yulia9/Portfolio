"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Link = {
  title: string;
  href: string;
};

const links: Link[] = [
  {
    title: "HOME",
    href: "/",
  },
  {
    title: "MY EXPERIENCE",
    href: "/about/",
  },
  {
    title: "MY PROJECTS",
    href: "/projects/",
  },
  {
    title: "MY CONTACTS",
    href: "/contacts/",
  },
];

const Navigation = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-center p-5 bg-wenge border-2 border-wenge border-b-crayola fixed top-0 left-0 right-0 z-20">
      <ul className="flex justify-around w-4/5 text-white font-bold">
        {links.map(({ title, href }) => (
          <li key={href}>
            <Link
              href={href}
              className={`hover:text-tiffany ${
                pathname === href ? "text-tiffany" : ""
              }`}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
