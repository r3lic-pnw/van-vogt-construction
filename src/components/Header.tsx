import Link from "next/link";
import VanVogtIcon from "./VanVogtIcon";

export default function Header() {
  return (
    <nav className="flex items-center justify-between py-4 px-6 bg-[#111] text-white dark:bg-white dark:text-[#111]">
      <Link href="/" className="text-lg font-semibold self-start">
        <VanVogtIcon className="h-8 w-auto" aria-hidden />
      </Link>
    </nav>
  );
}
