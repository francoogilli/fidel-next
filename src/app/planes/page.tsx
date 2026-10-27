import PricingCard from "@/components/pricingCard";
import PricingTable from "@/components/pricingTable";

export default function Planes() {
  return (
    <div className="pb-32">
      <PricingCard viewComparison={false} headingLevel="h1" />
      <PricingTable/>
    </div>
  );
}
