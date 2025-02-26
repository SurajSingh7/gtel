import Link from "next/link";

// pages/enterprise.jsx
export default function Enterprise() {
    return (
      <>
      <div className="h-14"></div>
      <div className="bg-gray-50  ">
        {/* Hero Section */}
        <div className="relative bg-cover bg-center h-[50vh] flex items-center justify-center" style={{ backgroundImage: 'url(/images/enterprise-bg.jpg)' }}>
          <div className="bg-black bg-opacity-50 text-center p-6 rounded-lg text-white">
            <h1 className="text-4xl font-bold">Enterprise Solutions</h1>
            <p className="mt-4 text-lg">Empowering businesses with speed, performance, and reliability.</p>
          </div>
        </div>
        
        {/* Introduction Section */}
        <section className="max-w-7xl mx-auto px-6 py-12 -mt-24">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-800">Why Choose Gigantic for Your Enterprise?</h2>
            <p className="mt-4 text-lg text-gray-600">
              If you are looking for a leaner cost structure and augmenting productivity that leads to better and improved business results, then, we have a solution.
            </p>
          </div>
  
          <div className="mt-8 text-center">
            <p className="text-gray-700">
              As businesses are becoming super powerful, they are looking for technologies and solutions that can give them better business results. Undoubtedly, scalable networks increase profitability. 
              Gigantic offers speed, performance, and reliability for the enterprise’s network.
            </p>
          </div>
        </section>
  
        {/* Solutions Section */}
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-2xl font-semibold text-gray-800 text-center">Our Solutions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
              {[
                'Enterprise Networking',
                'Cable Structuring',
                'Voice Solutions',
                'Call Center Solutions',
                'Dedicated Lease Line',
                'Wireless Broadband',
                'Wireless Networking',
                'AFAR-P2P Long Range',
                'RADWIN – E1/T1',
                'Smart Bridge (PMP)',
              ].map((solution, index) => (
                <div key={index} className="p-6 border rounded-lg shadow-sm hover:shadow-md bg-gray-50 text-center">
                  <h4 className="text-lg font-medium text-gray-700">{solution}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Call-to-Action Section */}
        <section className="bg-blue-600 py-12">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h3 className="text-3xl font-semibold text-white">Ready to Transform Your Business?</h3>
            <p className="mt-4 text-lg text-blue-200">
              Get in touch with us today to discover how Gigantic can empower your enterprise.
            </p>
            <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100">
              <Link href="/contact-us">Contact Us</Link>
              
            </button>
          </div>
        </section>
      </div>
      </>
    );
  }
  