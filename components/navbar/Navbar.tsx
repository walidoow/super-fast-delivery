import Link from 'next/link';
import { usePathname } from "next/navigation";

type Path = {
  href: string,
  name: string
};

const paths: Path[] = [
  {
    href: "/pricing",
    name: "Pricing",
  },
  {
    href: "/login",
    name: "Login",
  },
  {
    href: "/review",
    name: "Review",
  },
  {
    href: "/track",
    name: "Track your order",
  },
  {
    href: "/support",
    name: "Customer Support",
  },
];

const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className="bg-primary-mint-green p-4 shadow-black drop-shadow-lg">
      <div className="container mx-auto flex justify-between items-center shadow-black drop-shadow-lg">
        <Link href={"/"}>
          <h1 className="text-primary-dark-grey text-3xl font-bold">
            Super Fast Delivery
          </h1>
        </Link>
        <div className={`flex space-x-10`}>
          {paths.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-lg text-primary-dark-grey hover:text-primary-orange hover:text-xl transition-font-size 
              ease-in-out duration-500 ${item.href === pathname ? "underline underline-offset-4" : ""}`}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>);
};

export default Navbar;
