import Sidebar from "@/components/sidebar";
import HeaderSearch from "@/components/search-header";
import ItemPreview from "@/components/item-preview";
import RestaurantPreview from "@/components/restaurant-preview";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen">

      <Sidebar />

      <div className="flex-1 bg-white">
        <HeaderSearch />

        <section className="mt-8 px-8">
          <h2 className="text-xl font-bold mb-4">Melhores avaliados</h2>
          <div className="flex gap-4 overflow-x-auto">
            <Link href="/item/1">
            <ItemPreview />
            </Link>
            <ItemPreview />
            <ItemPreview />
            <ItemPreview />
          </div>
        </section>

        <section className="mt-8 px-8">
          <h2 className="text-xl font-bold mb-4">Melhores avaliados</h2>
          <div className="flex gap-4 overflow-x-auto">
            <Link href="/restaurant/1">
            <RestaurantPreview />
            </Link>
            <RestaurantPreview />
            <RestaurantPreview />
            <RestaurantPreview />
          </div>
        </section>
      </div>
    </div>
  );
}