import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { FaTruck, FaLeaf, FaStar, FaBolt, FaTag } from "react-icons/fa6";

const CountdownTimer = () => {
  const [time, setTime] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        let { hours, minutes, seconds } = prevTime;

        if (hours === 0 && minutes === 0 && seconds === 0) {
          return { hours: 23, minutes: 59, seconds: 59 };
        }

        if (seconds > 0) {
          return { ...prevTime, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { ...prevTime, minutes: minutes - 1, seconds: 59 };
        } else if (hours > 0) {
          return { hours: hours - 1, minutes: 59, seconds: 59 };
        }
        return prevTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const pad = (num) => String(num).padStart(2, "0");

  return (
    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
      <h4 className="text-white text-center font-bold mb-3">Offer Ends In:</h4>
      <div className="flex justify-center gap-2">
        {[
          { value: pad(time.hours), label: "Hours" },
          { value: pad(time.minutes), label: "Minutes" },
          { value: pad(time.seconds), label: "Seconds" },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="bg-white text-purple-700 font-bold text-xl md:text-2xl w-14 h-14 md:w-16 md:h-16 rounded-lg flex items-center justify-center shadow-lg">
              {item.value}
            </div>
            <span className="text-white text-xs mt-1">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const DiscountMarquee = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 my-12 md:my-20">
      <div className="bg-gradient-to-r from-sky-200 to-purple-300 rounded-2xl p-6 shadow-xl overflow-hidden relative">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-yellow-400 animate-float"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 5 + 5}s`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center mb-8">
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">
            FLASH SALE! <span className="text-yellow-300">30% OFF</span>
          </h3>
          <p className="text-black text-lg">
            Limited time offer - Hurry before it's gone!
          </p>
          <div className="mt-4 flex justify-center">
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center">
              <FaTag className="text-yellow-300 mr-2" />
              <span className="text-white font-medium">Use code: SAVE30</span>
            </div>
          </div>
        </div>

        <Marquee
  autoFill={true}
  speed={50}
  gradient={true}
  gradientColor={[88, 28, 135]}
  gradientWidth={100}
  pauseOnHover={true}
  className="py-2 overflow-hidden"
>
  <div className="flex items-center gap-6 md:gap-12 px-2">
    {[
      {
        icon: <FaTruck className="text-4xl text-yellow-300" />,
        text: "Express Delivery",
        discount: "30% OFF",
      },
      {
        icon: <FaLeaf className="text-4xl text-emerald-300" />,
        text: "Eco Wash",
        discount: "30% OFF",
      },
      {
        icon: <FaStar className="text-4xl text-amber-300" />,
        text: "5-Star Service",
        discount: "30% OFF",
      },
      {
        icon: <FaBolt className="text-4xl text-blue-300" />,
        text: "Quick Wash",
        discount: "30% OFF",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 p-3 rounded-xl hover:scale-105 transition-all duration-300 min-w-[140px] md:min-w-[160px] h-[150px] relative overflow-hidden group"
      >
        <div className="absolute -right-8 -top-0 bg-red-500 text-white text-xs font-bold px-8 py-1 transform rotate-45 shadow-lg">
          {item.discount}
        </div>

        <div className="mb-2 group-hover:scale-110 transition-transform">
          {item.icon}
        </div>
        <span className="text-white text-sm font-medium text-center">
          {item.text}
        </span>
      </div>
    ))}
  </div>
</Marquee>


        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {/* Countdown Timer */}
          <CountdownTimer />

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: "500+", label: "Orders Today" },
              { number: "30%", label: "Discount" },
              { number: "24/7", label: "Support" },
              { number: "1Hr", label: "Express Delivery" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-3 rounded-lg text-center hover:scale-[1.03] transition-transform border border-white/20"
              >
                <p className="text-2xl font-bold text-yellow-300">
                  {stat.number}
                </p>
                <p className="text-sm text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountMarquee;
