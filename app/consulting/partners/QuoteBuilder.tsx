"use client";

import { useState } from "react";
import { APPS, price } from "./pricing";

/** Pick an app and add-ons: the customer's price, what the partner pays us and keeps. Usage not included. */
export function QuoteBuilder() {
  const [appKey, setAppKey] = useState<"crm" | "helpdesk">("helpdesk");
  const [picked, setPicked] = useState<Record<string, boolean>>({ "helpdesk-0": true, "helpdesk-1": true });
  const app = APPS.find((a) => a.key === appKey)!;
  const license = app.core[0]!;
  const monthly = app.core[1]!;
  let wholesale = license.wholesale ?? 0;
  let suggested = license.suggested ?? 0;
  app.addOns.forEach((a, i) => {
    if (picked[`${appKey}-${i}`]) {
      wholesale += a.wholesale ?? 0;
      suggested += a.suggested ?? 0;
    }
  });
  const mw = monthly.wholesale ?? 0;
  const ms = monthly.suggested ?? 0;
  const row = (label: string, value: number, keep = false) => (
    <>
      <dt className="text-charcoal/60 dark:text-cream/60">{label}</dt>
      <dd className={`text-right tabular-nums ${keep ? "font-bold text-charcoal dark:text-cream" : ""}`}>{price(value)}</dd>
    </>
  );
  const group = "col-span-2 mt-3 text-[11px] tracking-[0.25em] uppercase text-charcoal/50 dark:text-cream/50";

  return (
    <div className="grid border border-charcoal/15 dark:border-cream/15 md:grid-cols-[1.3fr_1fr]">
      <div className="p-5 space-y-4 border-b md:border-b-0 md:border-r border-charcoal/15 dark:border-cream/15">
        <div role="group" aria-label="App" className="inline-flex border border-charcoal dark:border-cream">
          {APPS.map((a) => (
            <button
              key={a.key}
              type="button"
              aria-pressed={appKey === a.key}
              onClick={() => setAppKey(a.key)}
              className={`px-4 py-2 text-sm font-bold ${appKey === a.key ? "bg-charcoal text-cream dark:bg-cream dark:text-charcoal" : "text-charcoal dark:text-cream"}`}
            >
              {a.name}
            </button>
          ))}
        </div>
        <fieldset className="space-y-2.5">
          <legend className="mb-2 text-[11px] tracking-[0.25em] uppercase text-charcoal/50 dark:text-cream/50">Add-ons</legend>
          {app.addOns.map((a, i) => {
            const id = `${appKey}-${i}`;
            return (
              <label key={id} htmlFor={id} className="flex items-start gap-3 text-sm cursor-pointer">
                <input
                  id={id}
                  type="checkbox"
                  className="mt-1 accent-charcoal dark:accent-cream"
                  checked={Boolean(picked[id])}
                  onChange={(e) => setPicked((p) => ({ ...p, [id]: e.target.checked }))}
                />
                <span className="flex-1">{a.name}</span>
                <span className="tabular-nums text-charcoal/60 dark:text-cream/60">{price(a.suggested)}</span>
              </label>
            );
          })}
        </fieldset>
      </div>
      <div className="p-5" aria-live="polite">
        <dl className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-1.5 text-sm">
          <div className="col-span-2 text-[11px] tracking-[0.25em] uppercase text-charcoal/50 dark:text-cream/50">Once</div>
          {row("Customer pays you", suggested)}
          {row("You pay us", wholesale)}
          {row("You keep", suggested - wholesale, true)}
          <div className={group}>Monthly</div>
          {row("Customer pays you", ms)}
          {row("You pay us", mw)}
          {row("You keep", ms - mw, true)}
          <div className={group}>First year, customer total</div>
          {row("License, add-ons and 12 months", suggested + 12 * ms)}
        </dl>
      </div>
    </div>
  );
}
