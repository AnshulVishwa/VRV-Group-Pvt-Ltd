import React from "react";
import PropertyCard from "./PropertyCard";
import { SlidersHorizontal } from "lucide-react";

export default function PropertyGrid({ properties, view = "grid", onClearFilters }) {
  if (!properties.length) {
    return (
      <div className="flex min-h-[320px] w-full flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-10 text-center shadow-sm">
        <SlidersHorizontal className="mb-3 h-10 w-10 text-gold" />
        <h3 className="text-lg font-bold text-navy">No matching properties found</h3>
        <p className="mt-1 text-xs text-slate-500 max-w-sm">
          Try resetting or adjusting your filter criteria to see more available listings in Mathura & Vrindavan.
        </p>
        <button
          onClick={onClearFilters}
          className="mt-4 rounded-md bg-navy px-5 py-2.5 text-xs font-bold text-white hover:bg-[#142143] transition"
        >
          Reset All Filters
        </button>
      </div>
    );
  }

  if (view === "list") {
    return (
      <div className="grid min-w-0 grid-cols-1 gap-4">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} variant="list" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} variant="grid" />
      ))}
    </div>
  );
}
