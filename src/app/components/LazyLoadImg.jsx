import { motion } from "framer-motion";
import Image from "next/image";

export const Content3 = () => {
  const features = [
    { id: 1, title: "150,000+", description: "Home Pass" },
    { id: 2, title: "100,000+", description: "Internet Users" },
    { id: 3, title: "20+", description: "Cities Digitized" },
  ];

  return (
    <div>
      
      {/* Hero Section */}
      <section className="bg-orange-500 text-white flex items-center justify-center min-h-screen">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-6xl font-bold">Ultra High-Speed Internet</h1>
          <p className="text-lg md:text-2xl mt-4">Latest Technology and Best Plans</p>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="bg-green-800 text-white py-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="p-8 bg-green-900 rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold">{feature.title}</h2>
              <p className="mt-2 text-lg">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lazy Image Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/asset 29.jpeg" 
              alt="Latest Technology"
              width={600}
              height={400}
              className="rounded-lg mx-auto"
            />
            <p className="mt-4 text-lg text-gray-700">
              Explore the Latest Technology with Us!
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};


