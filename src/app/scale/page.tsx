import Hero from "@/components/hero";

const scaleSrc = "/images/scale.jpg";
const scaleTitle = "welcome to the best platform for scale";
const scaleDescription = "welcome to the best platform for scale";

export default function Page () {
  return (
    <Hero imageSrc={scaleSrc} title={scaleTitle} description={scaleDescription}/>
  );
}
