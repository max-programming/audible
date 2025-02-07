function Footer() {
  return (
    <div className="w-full p-10 bg-gray-100 dark:bg-gray-800 dark:text-gray-100">
      <div className="grid w-full grid-flow-row-dense mx-auto leading-loose max-w-7xl sm:grid-cols-4">
        <div className="mb-5">
          <a className="cursor-pointer hover:underline"><p>Contact Us</p></a>
          <a className="cursor-pointer hover:underline"><p>Help</p></a>
          <a className="cursor-pointer hover:underline"><p>Business Enquiries</p></a>
          <a className="cursor-pointer hover:underline"><p>Affiliates</p></a>
          <a className="cursor-pointer hover:underline"><p>Mobile Site</p></a>
        </div>
        <div className="mb-5">
          <a className="cursor-pointer hover:underline"><p>Audible Mobile Apps</p></a>
          <a className="cursor-pointer hover:underline"><p>Gift Centre</p></a>
          <a className="cursor-pointer hover:underline"><p>Redeem a Promotional Code</p></a>
          <a className="cursor-pointer hover:underline"><p>Whispersync for Voice</p></a>
        </div>
        <div className="mb-5 ">
          <a className="cursor-pointer hover:underline"><p>Best Sellets</p></a>
          <a className="cursor-pointer hover:underline"><p>New Releases</p></a>
          <a className="cursor-pointer hover:underline"><p>Foreign Language</p></a>
          <a className="cursor-pointer hover:underline"><p>Mystery, Thriller & Suspense</p></a>
          <a className="cursor-pointer hover:underline"><p>Science Ficiton & Fantasy</p></a>
          <a className="cursor-pointer hover:underline"><p>Road Tripe Listens</p></a>
          <a className="cursor-pointer hover:underline"><p>Summer Listens</p></a>
        </div>
        <div className="mb-5">
          <a className="cursor-pointer hover:underline"><p>History</p></a>
          <a className="cursor-pointer hover:underline"><p>Biographies & Memoirs</p></a>
          <a className="cursor-pointer hover:underline"><p>Business & Careers</p></a>
          <a className="cursor-pointer hover:underline"><p>Health & Wellness</p></a>
          <a className="cursor-pointer hover:underline"><p>Literacture & Fiction</p></a>
          <a className="cursor-pointer hover:underline"><p>Children's Audiobooks</p></a>
          <a className="cursor-pointer hover:underline"><p>Comedy</p></a>
        </div>
      </div>
      <hr className="my-5 border-gray-400 dark:border-gray-100" />
    </div>
  );
}

export default Footer;
