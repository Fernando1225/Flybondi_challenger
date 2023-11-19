const AboutSectionRight = () => {
  return (
    <>
      <div className="py-12 bg-yellow-600">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                Enhance Your In-Flight Experience with Our Exceptional Hostess
                Service for Unmatched Comfort and Care{" "}
              </h2>
              <p className="mt-6 text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                omnis voluptatem accusantium nemo perspiciatis delectus atque
                autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
                consequatur! Officiis id consequatur atque doloremque!
              </p>
              <p className="mt-4 text-gray-600">
                {" "}
                Nobis minus voluptatibus pariatur dignissimos libero quaerat
                iure expedita at? Asperiores nemo possimus nesciunt dicta veniam
                aspernatur quam mollitia.
              </p>
            </div>
            <div className="md:5/12 lg:w-6/12">
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fconocedores.com%2Fwp-content%2Fuploads%2F2018%2F12%2Fflybondi.jpg&f=1&nofb=1&ipt=62f1fdd185ec82181ef7e2ab5c0503429df6179d8705edd075bab55a73f35895&ipo=images"
                alt="Flybondi inside airplane image"
                className="rounded-lg h-full shadow-2xl shadow-yellow-200"
                loading="lazy"
                width=""
                height=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSectionRight;
