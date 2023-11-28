import Link from 'next/link';

const Navbar = () => (
  <nav className="bg-primary-mint-green p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-primary-dark-grey text-3xl font-bold">
        Super Fast Delivery
      </h1>

      <div className="flex space-x-10">
        <Link href="/pricing" className="text-primary-dark-grey hover:text-primary-orange">
          Pricing
        </Link>
        <Link href="/login" className="text-primary-dark-grey hover:text-primary-orange">
          Login
        </Link>
        <Link href="/review" className="text-primary-dark-grey hover:text-primary-orange">
          Review
        </Link>
        <Link href="/track" className="text-primary-dark-grey hover:text-primary-orange">
          Track your order
        </Link>
        <Link href="/support" className="text-primary-dark-grey hover:text-primary-orange">
          Customer Support
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
