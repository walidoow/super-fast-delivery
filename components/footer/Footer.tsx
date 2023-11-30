const Footer = () => (
  <footer className="bg-primary-dark-grey text-white">
    <div className="container mx-0 px-4 py-6">
      <div className="flex flex-col justify-start items-start gap-4 md:flex-row">
        <div className="mb-6 md:mb-0">
          <h2 className="text-xl font-bold">Super Fast Delivery</h2>
        </div>
        <div className="flex flex-col gap-10 ml-5 mt-1 md:flex-row md:items-center">
          <a href="/quotation" className="mb-4 md:mb-0 md:mr-6 hover:text-primary-orange">
            Request a quotation
          </a>
          <a href="/track" className="mb-4 md:mb-0 md:mr-6 hover:text-primary-orange">
            Track an order
          </a>
          <a href="/review" className="hover:text-primary-orange">
            Leave a review
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
