import Advantages from "@/components/advantages";
import ContactSection from "@/components/contact";
import Customers from "@/components/customers";
import Functionalities from "@/components/functionalities";
import Hero from "@/components/hero";
import Integration from "@/components/integration";
import Mobile from "@/components/mobile";
import PricingCard from "@/components/pricingCard";
import { QuestionsAnswers } from "@/components/questionAnswers";
import Recommend from "@/components/recommend";

export default function Home() {
  return (
    <>
      <div className="backgroundImage"></div>
      <Hero />
      <Customers />
      <Functionalities />
      <PricingCard viewComparison />
      <Advantages />
      <Mobile />
      <Integration />
      <Recommend />
      <QuestionsAnswers />
      <ContactSection />
    </>
  );
}
