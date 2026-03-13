import { useRef } from "react";
import { Baby, Heart, Star } from "lucide-react";

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating hearts */}
      <div className="absolute top-20 left-[10%] animate-float opacity-20">
        <Heart className="w-8 h-8 text-primary fill-primary" />
      </div>
      <div className="absolute top-40 right-[15%] animate-float-slow opacity-15">
        <Heart className="w-6 h-6 text-baby-pink-glow fill-baby-pink-glow" />
      </div>
      <div className="absolute bottom-32 left-[20%] animate-float opacity-10">
        <Star className="w-10 h-10 text-baby-yellow fill-baby-yellow" />
      </div>
      <div className="absolute top-60 left-[70%] animate-wiggle opacity-15">
        <Star className="w-5 h-5 text-baby-yellow fill-baby-yellow" />
      </div>
      <div className="absolute bottom-48 right-[25%] animate-float-slow opacity-20">
        <Heart className="w-7 h-7 text-primary fill-primary" />
      </div>

      {/* Soft gradient blobs */}
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-baby-pink-light opacity-40 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-baby-yellow-light opacity-30 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-baby-peach opacity-20 blur-3xl" />
    </div>
  );
};

export default FloatingElements;
