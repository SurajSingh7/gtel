import React from 'react';

const Animation = () => {
  return (
    <div className="group overflow-hidden bg-[#374151] p-2">
      <div className="animate-marquee">
        <p className="inline-block bg-yellow-400 whitespace-nowrap text-black text-lg font-semibold">
            ⚠️  Important Information -: Due to the merger of Hotstar & Jio, the Hotstar subscription is on hold till further update from JioHotstar, please take the same in your kind consideration.</p>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 20s linear infinite;
        }
        /* On hover, pause the animation */
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Animation;