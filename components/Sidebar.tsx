"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  Megaphone,
  ShoppingBag,
  Wallet,
  Search,
  Store,
  Video,
  Settings,
} from "lucide-react";

const items = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard },
  { label: "Orders", href: "/orders", icon: Package },
  { label: "Ads", href: "/ads", icon: Megaphone },
  { label: "Products", href: "/products", icon: ShoppingBag },
  { label: "Profit", href: "/profit", icon: Wallet },
  { label: "Research", href: "/research", icon: Search },
  { label: "Competitors", href: "/competitors", icon: Store },
  { label: "Creatives", href: "/creatives", icon: Video },
  { label: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 min-h-screen bg-zinc-950 border-r border-zinc-800 p-6">
      <h1 className="text-2xl font-bold text-white">DS Command Center</h1>
      <p className="mt-2 text-zinc-400">Build. Scale. Automate.</p>

      <nav className="mt-10 space-y-2">
        {items.map((item) => {
          const active = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl p-3 transition ${
                active
                  ? "bg-white text-black font-semibold"
                  : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
              }`}
            >
              <Icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}