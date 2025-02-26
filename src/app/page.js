import Content1 from "./components/Content1"
import Slider from "./components/Slider";
import Content2 from "./components/Content2";
import ServiceCard from "./components/ServiceCard/ServiceCard1";
import Carousel from "./components/Carousel";
// import { Content3 } from "./components/LazyLoadImg";

export default function Home() {
  return (
    <>
   <div className='h-1'></div>
   <div className="bg-gray-50 py-12 mt-10"> 
      <Slider />
      <Content1 />
      <Content2/>
      <ServiceCard />
      <Carousel />
   </div>
   {/* <Content3 /> */}
   </>
  );
}
