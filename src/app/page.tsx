import Hero from "@/components/hero";

const homeSrc = "/images/home.jpg";
const homeTitle = "welcome to the best platform for home";
const homeDescription = "welcome to the best platform for home";

export default function Page () {
  return (
    <Hero imageSrc={homeSrc} title={homeTitle} description={homeDescription}/>
  );
}
