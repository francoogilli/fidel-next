import AppMobile from "@/components/appmobile";
import ContactSection from "@/components/contact";
import Functionalities from "@/components/functionalities";
import Hero from "@/components/hero";
import PricingCard from "@/components/pricingCard";
import { QuestionsAnswers } from "@/components/questionAnswers";
import Recommend from "@/components/recommend";
import Ventajas from "@/components/ventajas";

export default function Home() {
  return (
    <>
      <div className="backgroundImage"></div>
      <Hero />
      <Functionalities />
      <PricingCard viewComparison />
      <Ventajas />
      <AppMobile />
      <Recommend />
      <QuestionsAnswers />
      <ContactSection />
    </>
  );
}
