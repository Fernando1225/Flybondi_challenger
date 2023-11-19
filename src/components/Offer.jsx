import "./styles/offer.css";

const Offer = () => {
  return (
    <>
      <div className="h-fit bg-white">
        <div className="juice3 bg-gray-100 bg-opacity-90 py-10">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row">
            <div className="juice relative lg:w-2/3 rounded-xl bg-secondary-lite bg-cover p-16">

            </div>
            <div className="juice2 mt-6 lg:mt-0 lg:ml-6 lg:w-1/3 rounded-xl bg-primary-lite bg-cover p-16">
              <div className="max-w-sm">
                <p className="text-4xl font-semibold uppercase text-yellow-800">
                  20% Discount on Flights Reservations
                </p>
                <p className="mt-8 font-semibold text-gray-800">
                  Book now for 20% off flights. Limited time offer. Fly to your
                  desired destination at a great price. 
                  <br />
                  Reserve your seats today
                </p>
                <button className="mt-12 bg-white font-semibold px-8 py-2 rounded hover:bg-gray-200">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;