import Link from "next/link";

const Content2 = () => {
    return (
      <>
        <div className="flex flex-col md:flex-row items-center justify-between py-10 px-6 bg-white">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-orange-500 text-3xl md:text-4xl font-bold">
              Welcome to Gigantic
            </h1>
            <div className="w-16 h-1 bg-orange-500 my-4 mx-auto md:mx-0"></div>
            <p className="text-gray-700 text-lg font-medium">
              Gigantic Infotel Pvt. Ltd was founded in 2002.
            </p>
            <p className="text-gray-600 mt-4">
              The Best Broadband Internet Provider Company from Internet bandwidth
              to Internet telephony to Broadband Services and more, we offer such
              related services to both corporate as well as domestic users.
            </p>
            <Link href="/About">
            <button className="mt-6 px-6 py-2 bg-orange-500 text-white text-sm font-semibold rounded-md hover:bg-orange-600 transition">
              ABOUT MORE
            </button>
            </Link>
          </div>
  
          <div className="md:w-1/2 mt-10 md:mt-0 flex items-center justify-center relative">
            <div className="relative">
              <div className="relative w-72 h-72 rounded-full overflow-hidden bg-black shadow-lg">
                <img
                  src="/images/asset 7.png"
                  alt="Gigantic Infotel Graphic"
                  className="object-cover w-full h-full opacity-80"
                />
              </div>
  
              
            </div>
          </div>
        </div>
      </>
    );
  };
  export default Content2;
  