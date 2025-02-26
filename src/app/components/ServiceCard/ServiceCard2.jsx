// components/ServiceCard.js
"use client"
import { useRouter } from "next/navigation";
export default function ServiceCard2({ title, description, imageUrl, href }) {


  const router = useRouter("")
  const handleClick =()=>{
    router.push(href)
  }


    return (
      <div className="group relative w-full overflow-hidden rounded-lg shadow-lg">
        <img
          src={imageUrl}
          alt={title}
          className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="p-4 text-white">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm">{description}</p>
            <button className="mt-2 inline-block rounded bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600" onClick={handleClick}>
              Read More
            </button>
          </div>
        </div>
      </div>
    );
  }
  