import PricingCard from "@/components/pricingCard";
import PricingTable from "@/components/pricingTable";

export default function Planes() {
  return (
    <>
      <PricingCard viewComparison={false} />
      <PricingTable/>
    </>
  );
}
