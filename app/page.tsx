import StatCard from "@/components/StatCard";

export default function Home() {
  return (
    <>
      <div className="mb-10">
        <p className="text-sm text-zinc-400">Vandaag</p>
        <h2 className="mt-2 text-4xl font-bold">Command Center</h2>
        <p className="mt-3 text-zinc-400">
          Hier komt straks automatisch je omzet, winst, ROAS, spend en orders binnen.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <StatCard title="Omzet vandaag" value="€0,00" subtitle="Shopify nog niet gekoppeld" />
        <StatCard title="Winst vandaag" value="€0,00" subtitle="Na kosten & ads" />
        <StatCard title="Ad Spend" value="€0,00" subtitle="Meta Ads nog niet gekoppeld" />
        <StatCard title="ROAS" value="0.00" subtitle="Revenue / Spend" />
        <StatCard title="Orders" value="0" subtitle="Vandaag" />
        <StatCard title="CPA" value="€0,00" subtitle="Kosten per order" />
      </div>
    </>
  );
}