import Hero from "@/components/hero";

const reliabilitySrc = "/images/reliability.jpg";
const reliabilityTitle = "welcome to the best platform for reliability";
const reliabilityDescription = "welcome to the best platform for reliability";

export const metadata = {
  title: "Reliability",
}

export default function Page () {
  return (
    <Hero imageSrc={reliabilitySrc} title={reliabilityTitle} description={reliabilityDescription}/>
  );
}
