import { supabase } from "@/lib/supabase";

export default async function DashboardPage() {
  const { data } = await supabase
    .from("stores")
    .select("*");

  return (
    <>
      <h1 className="text-4xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="rounded-2xl bg-zinc-900 p-6">
        <pre>
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </>
  );
}