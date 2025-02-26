import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#111] text-white">
        {/* Upper Section */}
        <div className="bg-blue-900 py-10 ">
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between text-center lg:text-left px-4">
            <h2 className="text-2xl md:text-4xl font-bold text-white">
              Smart deals. Smart Picks. Please don’t wait to click here!
            </h2>

            <Link
              href="/contact-us"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded mt-6 lg:mt-0"
            >
              CONTACT US
            </Link>
          </div>
        </div>

        {/* Footer Links */}
        <div className="py-12 px-4 lg:px-0">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo Section */}
            <div className="flex flex-col mt-10 items-center md:items-start mx-8 ">
              <Link href="/">
                <Image
                  src="/logo (1).png"
                  alt="Gigantic Logo"
                  width={100}
                  height={100}
                  className="mb-4"
                />
              </Link>
              <div className="flex space-x-4 ml-[11]">
                <a
                  href="#"
                  className="bg-orange-500 hover:bg-orange-600 p-2 rounded-full"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="bg-orange-500 hover:bg-orange-600 p-2 rounded-full"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="bg-orange-500 hover:bg-orange-600 p-2  rounded-full"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            {/* for desktop */}
           
              {/* Quick Links */}
              <div className="hidden md:block">
                <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/About" className="hover:underline">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/enterprise" className="hover:underline">
                      Enterprises
                    </Link>
                  </li>
                  <li>
                    <Link href="/PrivacyPolicy" className="hover:underline">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/Terms" className="hover:underline">
                      Terms and Conditions
                    </Link>
                  </li>
                  <li>
                    <Link href="RefundPolicy" className="hover:underline">
                      Refund Policy
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Useful Links */}
              <div className="hidden md:block">
                <h4 className="text-lg font-bold mb-4">Useful Links</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/FTTH" className="hover:underline">
                      Fiber to The Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/HighSpeed" className="hover:underline">
                      High-Speed Fiber Internet
                    </Link>
                  </li>
                  <li>
                    <Link href="Intercom" className="hover:underline">
                      Intercom & Telephony
                    </Link>
                  </li>
                  <li>
                    <Link href="/CCTV" className="hover:underline">
                      CCTV
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="AutomaticBoomBarier"
                      className="hover:underline"
                    >
                      Automatic Boom Barrier
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="hidden md:block">
                <h4 className="text-lg font-bold mb-4">Contact Info</h4>
                <ul className="space-y-2">
                  <li>
                    <i className="fas fa-map-marker-alt text-orange-500"></i>{" "}
                    Registered Address:

                    508, Usha Kiran Building, Nani Wala Bagh Commercial Complex,
                    Azadpur, North West Delhi
                  </li>
                  <li>
                    <i className="fas fa-phone text-orange-500"></i> Phone: +91
                    8860606969
                  </li>
                  <li>
                    <i className="fas fa-envelope text-orange-500"></i> Email:
                    sales@gtel.in
                  </li>
                </ul>
              </div>
            

{/* for mobile  */}
            <div className=" md:hidden flex flex-wrap justify-between items-center ">
          
              <div>
                <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/About" className="hover:underline">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/enterprise" className="hover:underline">
                      Enterprises
                    </Link>
                  </li>
                  <li>
                    <Link href="/PrivacyPolicy" className="hover:underline">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/Terms" className="hover:underline">
                      Terms and Conditions
                    </Link>
                  </li>
                  <li>
                    <Link href="RefundPolicy" className="hover:underline">
                      Refund Policy
                    </Link>
                  </li>
                </ul>
              </div>

             
              <div>
                <h4 className="text-lg font-bold mb-4">Useful Links</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/FTTH" className="hover:underline">
                      Fiber to The Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/HighSpeed" className="hover:underline">
                      High-Speed Fiber Internet
                    </Link>
                  </li>
                  <li>
                    <Link href="Intercom" className="hover:underline">
                      Intercom & Telephony
                    </Link>
                  </li>
                  <li>
                    <Link href="/CCTV" className="hover:underline">
                      CCTV
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="AutomaticBoomBarier"
                      className="hover:underline"
                    >
                      Automatic Boom Barrier
                    </Link>
                  </li>
                </ul>
              </div>

             
              <div className="mt-8">
                <h4 className="text-lg font-bold ">Contact Info</h4>
                <ul className="space-y-2">
                  <li>
                    <i className="fas fa-map-marker-alt text-orange-500"></i>{" "}
                    Registered Address:
  
                    508, Usha Kiran Building, Nani Wala Bagh Commercial Complex,
                    Azadpur, North West Delhi
                  </li>
                  <li>
                    <i className="fas fa-phone text-orange-500"></i> Phone: +91
                    8860606969
                  </li>
                  <li>
                    <i className="fas fa-envelope text-orange-500"></i> Email:
                    sales@gtel.in
                  </li>
                </ul>
              </div>
            </div>


          </div>
        </div>
        <div className="text-center text-sm font-bold mt-5">
          &copy; Copyright Gigantic Infotel Private Limited | All Right Reserved | <Link href="/PrivacyPolicy">Privacy Policy</Link> | <Link href="/Terms">Terms of Use</Link> |
        </div>
      </footer>
      <div className="h-6 bg-[#111]"></div>
    </>
  );
};

export default Footer;
