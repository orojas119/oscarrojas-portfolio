"use client";

import { useState } from "react";
import { APPS, PLAN, planPrice, price, type Line } from "./pricing";

type Mode = "crm" | "helpdesk" | "behavior" | "plan";

/** Pick an app (or the all-in-one plan) and add-ons: the customer's price, what the partner pays us and keeps. Usage not included. */
export function QuoteBuilder() {
  const [mode, setMode] = useState<Mode>("helpdesk");
  const [picked, setPicked] = useState<Record<string, boolean>>({ "helpdesk-0": true, "helpdesk-1": true });
  const isPlan = mode === "plan";
  // On the plan: no license, every app's add-ons at the plan discount.
  const addOns: { id: string; line: Line }[] = isPlan
    ? APPS.flatMap((a) => a.addOns.map((l, i) => ({ id: `${a.key}-${i}`, line: { ...l, name: `${a.name}: ${l.name}`, wholesale: planPrice(l.wholesale), suggested: planPrice(l.suggested) } })))
    : APPS.find((a) => a.key === mode)!.addOns.map((l, i) => ({ id: `${mode}-${i}`, line: l }));
  const app = isPlan ? null : APPS.find((a) => a.key === mode)!;
  let wholesale = app?.core[0]!.wholesale ?? 0;
  let suggested = app?.core[0]!.suggested ?? 0;
  for (const a of addOns) {
    if (picked[a.id]) {
      wholesale += a.line.wholesale ?? 0;
      suggested += a.line.suggested ?? 0;
    }
  }
  const mw = isPlan ? PLAN.wholesale : app!.core[1]!.wholesale ?? 0;
  const ms = isPlan ? PLAN.suggested : app!.core[1]!.suggested ?? 0;
  const row = (label: string, value: number, keep = false) => (
    <>
      <dt className="text-charcoal/60 dark:text-cream/60">{label}</dt>
      <dd className={`text-right tabular-nums ${keep ? "font-bold text-charcoal dark:text-cream" : ""}`}>{price(value)}</dd>
    </>
  );
  const group = "col-span-2 mt-3 text-[11px] tracking-[0.25em] uppercase text-charcoal/50 dark:text-cream/50";
  const modes: { key: Mode; name: string }[] = [...APPS.map((a) => ({ key: a.key, name: a.name })), { key: "plan", name: PLAN.name }];

  return (
    <div className="grid border border-charcoal/15 dark:border-cream/15 md:grid-cols-[1.3fr_1fr]">
      <div className="p-5 space-y-4 border-b md:border-b-0 md:border-r border-charcoal/15 dark:border-cream/15">
        <div role="group" aria-label="App or plan" className="inline-flex flex-wrap border border-charcoal dark:border-cream">
          {modes.map((m) => (
            <button
              key={m.key}
              type="button"
              aria-pressed={mode === m.key}
              onClick={() => setMode(m.key)}
              className={`px-4 py-2 text-sm font-bold ${mode === m.key ? "bg-charcoal text-cream dark:bg-cream dark:text-charcoal" : "text-charcoal dark:text-cream"}`}
            >
              {m.name}
            </button>
          ))}
        </div>
        {isPlan && <p className="text-sm text-charcoal/60 dark:text-cream/60">Every app, no license. Add-ons are 25% off.</p>}
        <fieldset className="space-y-2.5">
          <legend className="mb-2 text-[11px] tracking-[0.25em] uppercase text-charcoal/50 dark:text-cream/50">Add-ons</legend>
          {addOns.map(({ id, line }) => (
            <label key={id} htmlFor={`q-${id}`} className="flex items-start gap-3 text-sm cursor-pointer">
              <input
                id={`q-${id}`}
                type="checkbox"
                className="mt-1 accent-charcoal dark:accent-cream"
                checked={Boolean(picked[id])}
                onChange={(e) => setPicked((p) => ({ ...p, [id]: e.target.checked }))}
              />
              <span className="flex-1">{line.name}</span>
              <span className="tabular-nums text-charcoal/60 dark:text-cream/60">{price(line.suggested)}</span>
            </label>
          ))}
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
          {row(isPlan ? "Add-ons and 12 months" : "License, add-ons and 12 months", suggested + 12 * ms)}
        </dl>
      </div>
    </div>
  );
}
