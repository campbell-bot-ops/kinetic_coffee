"use client";

import { Package, Truck, CheckCircle, ArrowLeft, Download } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function OrderDetailsPage() {
  const params = useParams();
  const orderId = params.id as string;

  const steps = [
    { label: "Ingested", status: "complete", icon: CheckCircle },
    { label: "Roasting", status: "current", icon: Package },
    { label: "Stability Test", status: "upcoming", icon: CheckCircle },
    { label: "In Transit", status: "upcoming", icon: Truck },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-32 space-y-16">
      <div>
        <Link href="/" className="inline-flex items-center gap-2 text-aluminum hover:text-onyx transition-colors text-xs font-bold uppercase tracking-widest mb-12">
          <ArrowLeft size={14} />
          Back to Hub
        </Link>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h1 className="text-sm font-black uppercase tracking-[0.4em] text-aluminum mb-4">Tracking Protocol</h1>
            <p className="text-6xl font-black text-onyx tracking-tighter uppercase">{orderId}</p>
          </div>
          <button className="flex items-center gap-3 px-8 py-4 bg-crema text-onyx rounded-full font-black text-xs uppercase tracking-widest border border-aluminum/10 hover:bg-onyx hover:text-crema transition-all">
            <Download size={16} />
            Export Protocol Log
          </button>
        </div>
      </div>

      {/* Progress Tracker */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map((step, idx) => (
          <div key={idx} className="relative group">
            <div className={`p-8 rounded-[2.5rem] border ${step.status === 'complete' ? 'bg-onyx text-crema border-onyx' : step.status === 'current' ? 'bg-white border-onyx shadow-xl' : 'bg-white border-aluminum/10 opacity-40'} transition-all`}>
              <step.icon size={24} className="mb-6" />
              <h3 className="text-xs font-black uppercase tracking-widest">{step.label}</h3>
              <p className="text-[10px] mt-2 opacity-60 font-medium">
                {step.status === 'complete' ? 'Timestamp: 20:04' : step.status === 'current' ? 'Status: Active' : 'Scheduled'}
              </p>
            </div>
            {idx < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-aluminum/20 -z-10" />
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Logistics Summary */}
        <div className="lg:col-span-8 p-12 bg-white rounded-[3rem] border border-aluminum/10 space-y-10">
           <h2 className="text-xl font-black tracking-tighter uppercase">Logistics Log</h2>
           <div className="space-y-8">
              {[
                { time: "20:04", event: "Order Ingested at Kinetic Lab", desc: "Data sequence validated and payment confirmed." },
                { time: "20:05", event: "Batch #88 assigned for Roasting", desc: "Selecting optimal thermal profile for Velocity Blend." },
              ].map((log, i) => (
                <div key={i} className="flex gap-8">
                   <span className="text-xs font-black text-aluminum w-20 flex-shrink-0">{log.time}</span>
                   <div className="space-y-1">
                      <p className="font-bold text-onyx leading-none">{log.event}</p>
                      <p className="text-sm text-aluminum">{log.desc}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* Shipping Destination */}
        <div className="lg:col-span-4 p-12 bg-platinum rounded-[3rem] space-y-8">
           <h2 className="text-sm font-black tracking-[0.3em] text-aluminum uppercase">Destination</h2>
           <div className="space-y-4">
              <p className="text-2xl font-black text-onyx tracking-tighter">VICTORIA ISLAND</p>
              <p className="text-sm font-medium text-aluminum leading-relaxed">
                Adetokunbo Ademola St,<br />
                Victoria Island 106104,<br />
                Lagos, Nigeria
              </p>
           </div>
           <div className="pt-8 border-t border-aluminum/10">
              <p className="text-[10px] font-black uppercase tracking-widest text-aluminum mb-2">Protocol Lead</p>
              <p className="text-lg font-bold text-onyx">Kinetic Dispatch Lab</p>
           </div>
        </div>
      </div>
    </div>
  );
}
