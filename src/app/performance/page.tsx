import Hero from "@/components/hero";

const performanceSrc = "/images/performance.jpg";
const performanceTitle = "welcome to the best platform for performance";
const performanceDescription = "welcome to the best platform for performance";

export default function Page () {
  return (
    <Hero imageSrc={performanceSrc} title={performanceTitle} description={performanceDescription}/>
  );
}
