import "./styles/banner.css";

const Banner = () => {
  return (
    <>
      <div className="flex flex-col group justify-center items-center h-[35vh] md:h-[400px] lg:h-[60vh]">
        <div
          className="flex flex-col banner rounded-2xl border-yellow-500 bg-no-repeat bg-cover bg-center px-[30px] py-[30px] md:px-[64px] md:py-[56px] max-w-[95%] xl:max-w-[98%] xl:w-full lg:w-full "
          style={{
            backgroundImage: `url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fa.storyblok.com%2Ff%2F77475%2F1600x468%2F7b7aad311a%2Fbanner-pases-preguntas-frecuentes.jpg&f=1&nofb=1&ipt=afef67413d86b9d39b2ddf38d5cd8c0860e9be507615298aad0c3a6c65f5b192&ipo=images")`,
            opacity: 0.8,
          }}
        >
          <div className="w-full z-20">
            <h4 className="mb-[14px] max-w-full text-xl invisible group-hover:visible transition-opacity duration-200 font-bold text-white md:w-[64%] md:text-3xl md:leading-[42px] lg:w-[46%] xl:w-[85%] 2xl:w-[75%] 3xl:w-[52%]">
              Explore, Secure, and Enjoy Unlimited Flight Passes
            </h4>
            <p className="mb-[40px] max-w-full invisible group-hover:visible transition-opacity duration-200 text-base font-medium text-yellow-700 md:w-[64%] lg:w-[40%] xl:w-[72%] 2xl:w-[60%] 3xl:w-[45%]">
            Discover exclusive flight passes to reach any destination effortlessly. 
            </p>
            <div className="mt-[36px] flex items-center justify-between invisible group-hover:visible transition-opacity duration-200 gap-4 sm:justify-start 2xl:gap-10">
              <button className="text-black linear rounded-md bg-white px-4 py-2 text-center text-base font-medium transition duration-200 hover:!bg-white/80 active:!bg-white/70">
                Discover now
              </button>
              <button className="text-base font-medium hover:text-yellow-500 text-lightPrimary hover:text-lightPrimary 2xl:ml-2">
                Watch Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;