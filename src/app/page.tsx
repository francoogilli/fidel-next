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
      <div id="funcionalidades">
      <Functionalities />
      </div>
      <div id="planes">
        <PricingCard viewComparison />
      </div>
      <Ventajas />
      <AppMobile />
      <Recommend />
      <QuestionsAnswers />
      <ContactSection />
    </>
  );
}
