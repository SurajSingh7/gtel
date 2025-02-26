import ServiceCard2 from "./ServiceCard2";
import Image from "next/image";

export default function ServiceCard() {
    const services = [
        {
          title: 'Digital HD Cable TV (CTV)',
          description: 'Experience high-quality cable TV like never before.',
          imageUrl: '/cable.jpg',
          href:"/FTTH"
        },
        {
          title: 'IP Telephony',
          description: 'Advanced telecommunication solutions for businesses.',
          imageUrl: '/intercome.jpg',
             href:"/Intercom"
        },
        {
          title: 'Smart TV Streaming',
          description: 'Enjoy your favorite shows with smart streaming solutions.',
          imageUrl: '/smarttv.jpeg',
             href:"/IPTV"
        },
        {
          title: 'Enterprise Solutions',
          description: 'Seamless integration for enterprise needs.',
          imageUrl: '/enterprise.jpg',
             href:"/enterprise"
         
        },
        {
          title: 'High Speed Fiber Internet',
          description: 'The mesmerizing experience that will drive you crazy!',
          imageUrl: '/internet.avif',
             href:"/HighSpeed"
        },
        {
          title: 'Fiber To The Home',
          description: 'Experience a new way of browsing, downloading and uploading!',
          imageUrl: '/ftth.jpeg',
             href:"/FTTH"
        },
      ];
    
      return (
        <div className="min-h-screen bg-gray-100 py-10">
          <h2 className="mb-20 text-center text-3xl font-bold text-orange-600">Our Services</h2>
          <div className="container mx-auto grid grid-cols-1 gap-6 px-6 lg:grid-cols-3">
            {/* Large Image on the Left */}
            <div className="relative h-full overflow-hidden rounded-lg shadow-lg lg:col-span-1">
            <Image
            src="/boy.avif" 
            alt="Large img"
            fill
            objectFit="cover"
            className="transition-transform duration-500 hover:scale-110"
          />
            </div>
    
            {/* Service Cards on the Right */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2">
              {services.map((service, index) => (
                <ServiceCard2
                  key={index}
                  title={service.title}
                  description={service.description}
                  imageUrl={service.imageUrl}
                  href={service.href}
                />
              ))}
            </div>
          </div>
        </div>
      );
}
