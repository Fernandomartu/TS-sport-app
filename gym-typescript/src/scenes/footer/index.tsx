const Footer = () => {
  return (
    <section className="md:flex w-full bg-primary-100 justify-center gap-20 py-10 px-10">
      <div className="flex flex-col gap-5 basis-1/3 mb-10">
        <h3 className="font-bold">EVOGYM</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id urna
          tempor urna mollis bibendum non vitae mauris. Aenean porttitor augue
          ante.
        </p>
        <p>Evogym All Right Reserved</p>
      </div>
      <div className="flex flex-col gap-5 mb-10">
        <p className="font-bold">Links</p>
        <p>lobortis bibendum enim</p>
        <p>tincidunt erat lobortis in</p>
        <p>tincidunt erat lobortis in</p>
      </div>
      <div className="flex flex-col gap-5">
        <p className="font-bold">Contact Us</p>
        <p>lobortis bibendum enim vel tincidunt</p>
        <p>(333)425-6825</p>
      </div>
    </section>
  );
};

export default Footer;
