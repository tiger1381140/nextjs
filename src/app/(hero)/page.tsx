//import Hero from "@/components/hero";
import { Button } from "antd";
/*
const homeSrc = "/images/home.jpg";
const homeTitle = "welcome to the best platform for home";
const homeDescription = "welcome to the best platform for home";
*/

/**
export const metadata = {
  title: "Home",
}
*/

export default function Page () {
  /** 
  return (
    <Hero imageSrc={homeSrc} title={homeTitle} description={homeDescription}/>
  );
  */
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Hello World</h1>
      <Button type="primary">Click me</Button>
    </div>
);
}
