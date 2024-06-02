import BetterIcon from "@/components/BetterIcon";
import ButtonAccount from "@/components/ButtonAccount";
import ButtonCheckout from "@/components/ButtonCheckout";
import ButtonGradient from "@/components/ButtonGradient";
import ButtonLead from "@/components/ButtonLead";
import ButtonPopover from "@/components/ButtonPopover";
import ButtonSupport from "@/components/ButtonSupport";
import config from "@/config";

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  return (
    <main className="min-h-screen p-8 pb-24">
      <section className="max-w-xl mx-auto space-y-8">
        <ButtonAccount />

        <h1 className="text-3xl md:text-4xl font-extrabold">
          Subscribe to get access:
        </h1>
    <ButtonLead/>
    <ButtonGradient/>
    <ButtonPopover/>
    <ButtonSupport/>
    <BetterIcon/>
        <ButtonCheckout
          mode="subscription"
          priceId={config.stripe.plans[0].priceId}
        />
      </section>
    </main>
  );
}
