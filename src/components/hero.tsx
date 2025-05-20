import Image from "next/image";

interface HeroProps {
    imageSrc: string;
    title: string;
    description: string;
}

export default function Hero (myProps : HeroProps) {
  return (
    <div className="h-screen relative">
      <div className="absolute inset-0 -z-10">
        <Image src={myProps.imageSrc} alt={myProps.title} fill style={{ objectFit: "cover" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950"/>
      </div>
      <div className="flex justify-center pt-96">
        <h1 className="text-white text-5xl font-bold">{myProps.description}</h1>
      </div>
    </div>
  );
}
