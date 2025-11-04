import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";
import UserDropdown from "./UserDropdown";

const Header = () => {
  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/icons/logo.svg"
            alt="Investalive logo"
            width={140}
            height={32}
            className="h-8 w-auto cursor-pointer"
          ></Image>
          <h1 className="text-lg text-blue-400 font-bold">InvestaLive</h1>
        </Link>
        <nav className="hidden sm:block">
          <NavItems />
        </nav>

        <UserDropdown />
      </div>
    </header>
  );
};

export default Header;
