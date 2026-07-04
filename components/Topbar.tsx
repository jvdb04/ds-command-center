export default function Topbar() {
  const today = new Date().toLocaleDateString("nl-NL", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="mb-8 flex items-center justify-between border-b border-zinc-800 pb-6">
      <div>
        <h1 className="text-3xl font-bold">Goedemorgen 👋</h1>
        <p className="mt-1 text-zinc-400">{today}</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="rounded-xl bg-zinc-900 px-4 py-2">
          <p className="text-sm text-zinc-400">Status</p>
          <p className="font-semibold text-green-400">Online</p>
        </div>

        <div className="h-12 w-12 rounded-full bg-zinc-800" />
      </div>
    </header>
  );
}