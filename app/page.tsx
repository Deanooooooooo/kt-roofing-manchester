"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Clock3,
  Hammer,
  Home,
  Instagram,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  TriangleAlert,
  Wrench,
} from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const assets = (name: string) => `${basePath}/assets/${name}`;

const businessName = "KT Roofing";
const phoneDisplay = "07468 598751";
const phoneHref = "tel:+447468598751";
const email = "Ktroofingx@hotmail.com";
const facebookUrl = "https://www.facebook.com/people/KT-roofing/61573177970777/";
const instagramUrl = "https://www.instagram.com/kt_roofing/";
const googleShareUrl = "https://share.google/A01tcsV1xS69ju7bf";
const mapsUrl = "https://www.google.com/maps/search/?api=1&query=KT%20Roofing%20Manchester";
const mapEmbedUrl = "https://www.google.com/maps?q=KT%20Roofing%20Manchester&output=embed";

const services = [
  {
    icon: Home,
    title: "Tiling and slating",
    body: "Roof tile and slate work for Manchester homes, from repair sections to larger roofline projects.",
  },
  {
    icon: Sparkles,
    title: "Leadwork and chimneys",
    body: "Lead detail, chimney revamps and practical fixes around the areas where roofs usually start letting water in.",
  },
  {
    icon: TriangleAlert,
    title: "Roof repairs",
    body: "Straightforward help for slipped tiles, weather damage, leaks and roof issues that need a clear next step.",
  },
  {
    icon: Hammer,
    title: "Flat roofs and roofline",
    body: "Flat roof work, fascias, guttering and edge details for a cleaner, more weather-ready roof system.",
  },
];

const proofPoints = [
  "Manchester roofing enquiries can go straight through by phone or email, with a clear route for urgent roof issues.",
  "Core work covers tiled roofs, slate roofs, leadwork, chimney revamps, flat roofs, fascias and guttering.",
  "Customers can share their area, roof issue, access details and preferred contact time before KT Roofing calls back.",
  "The Google listing is linked and embedded below so visitors can quickly check the business route from the page.",
];

const visuals = [
  {
    src: "hero-roof-manchester.png",
    alt: "Manchester roofing visual showing slate roof, chimney and city rooftops",
    title: "Tiling and slate roof work",
  },
  {
    src: "service-leadwork.png",
    alt: "Lead flashing around a red brick chimney on a slate roof",
    title: "Leadwork and chimney detail",
  },
  {
    src: "service-flat-roof.png",
    alt: "Flat roof and gutter edge detail on a brick building",
    title: "Flat roof and edge repairs",
  },
  {
    src: "service-fascia-guttering.png",
    alt: "Black fascia and guttering on a brick UK house",
    title: "Fascias, soffits and guttering",
  },
];

const faqs = [
  ["Do they handle slate and tiled roofs?", "Yes. KT Roofing lists tiling and slating as core services."],
  ["Can KT help with chimneys and leadwork?", "Yes. Leadwork and chimney revamps are part of the service list."],
  ["Is there an email route?", "Yes. Enquiries can be sent to Ktroofingx@hotmail.com."],
  ["What should I mention when I call?", "Share the postcode, what part of the roof is affected, when the issue started and whether access is straightforward."],
];

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      className="group w-full rounded-xl border border-white/10 bg-white/[0.045] p-5 text-left transition hover:border-sky-300/35 hover:bg-white/[0.075]"
      onClick={() => setOpen((current) => !current)}
      type="button"
    >
      <span className="flex items-center justify-between gap-4 text-base font-black text-white">
        {q}
        <ArrowUpRight className={`shrink-0 text-sky-300 transition ${open ? "-rotate-45" : ""}`} size={19} />
      </span>
      {open ? <span className="mt-4 block text-sm leading-7 text-white/68">{a}</span> : null}
    </button>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.08 5.66 21.25 10.44 22v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.47h-1.25c-1.24 0-1.63.78-1.63 1.57v1.89h2.77l-.44 2.91h-2.33V22C18.34 21.25 22 17.08 22 12.06z" />
    </svg>
  );
}

export default function Page() {
  const main = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.28], [0, -90]);
  const [service, setService] = useState("Roof repair");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [area, setArea] = useState("");
  const [details, setDetails] = useState("");

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true, syncTouch: false });
    let rafId = 0;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".service-card", {
        y: 44,
        opacity: 0,
        duration: 0.8,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: { trigger: ".services-grid", start: "top 74%" },
      });
      const track = document.querySelector<HTMLElement>(".gallery-track");
      const media = gsap.matchMedia();
      media.add("(min-width: 768px)", () => {
        if (!track) return;
        const overflow = () => Math.max(0, track.scrollWidth - window.innerWidth + 64);
        gsap.to(track, {
          x: () => -overflow(),
          ease: "none",
          scrollTrigger: {
            trigger: ".gallery-stage",
            start: "top top",
            end: () => `+=${Math.max(1500, overflow() + window.innerHeight * 0.75)}`,
            scrub: 0.45,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      });
      gsap.to(".proof-line", {
        scaleX: 1,
        transformOrigin: "left center",
        ease: "none",
        scrollTrigger: { trigger: ".proof-section", start: "top 70%", end: "bottom 42%", scrub: true },
      });
      return () => media.revert();
    }, main);
    return () => ctx.revert();
  }, []);

  const mailSubject = encodeURIComponent(`Roofing enquiry from ${name || "website visitor"}`);
  const mailBody = encodeURIComponent(
    `Hi KT Roofing,\n\nName: ${name}\nContact: ${contact}\nArea/postcode: ${area}\nService: ${service}\nDetails: ${details}\n\nPlease contact me about this roofing enquiry.`,
  );
  const mailHref = `mailto:${email}?subject=${mailSubject}&body=${mailBody}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: businessName,
    image: `${basePath}/assets/logo.jpg`,
    telephone: "+447468598751",
    email,
    areaServed: ["Manchester", "Greater Manchester"],
    url: "https://deanooooooooo.github.io/kt-roofing-manchester/",
    hasMap: mapsUrl,
    sameAs: [facebookUrl, instagramUrl, googleShareUrl],
    description:
      "Manchester roofing contractor for tiling, slating, leadwork, chimney revamps, flat roofs, fascias and guttering.",
  };

  return (
    <main ref={main} className="min-h-screen overflow-hidden bg-[#eef3f5] text-[#121b22]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/14 bg-[#111b22]/86 text-white backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-8">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-sky-200/25 bg-white/10">
              <Image src={assets("logo.jpg")} alt="KT Roofing logo" fill sizes="56px" className="object-cover" priority />
            </span>
            <span className="min-w-0">
              <span className="block text-lg font-black leading-tight">KT Roofing</span>
              <span className="block text-sm font-semibold text-white/68">Manchester roofers</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-black lg:flex">
            <a href="#services" className="transition hover:text-sky-200">Services</a>
            <a href="#gallery" className="transition hover:text-sky-200">Visuals</a>
            <a href="#proof" className="transition hover:text-sky-200">Proof</a>
            <a href="#contact" className="transition hover:text-sky-200">Contact</a>
          </nav>
          <a href={phoneHref} className="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-xl bg-sky-200 px-4 py-3 text-sm font-black text-[#111b22] shadow-[0_16px_48px_rgba(125,211,252,0.22)] transition hover:bg-white sm:px-5">
            <Phone size={18} />
            <span className="hidden sm:inline">{phoneDisplay}</span>
          </a>
        </div>
      </header>

      <section id="top" className="relative flex min-h-screen items-center overflow-hidden bg-[#111b22] px-4 pb-14 pt-28 text-white sm:px-8 lg:pt-24">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <Image src={assets("hero-roof-manchester.png")} alt="Manchester roofing visual with slate roof and chimney detail" fill sizes="100vw" priority className="object-cover opacity-78" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,27,34,0.98)_0%,rgba(17,27,34,0.78)_46%,rgba(17,27,34,0.32)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_48%,rgba(125,211,252,0.18),transparent_35%)]" />
        </motion.div>
        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-[0.96fr_0.84fr] xl:gap-12">
          <Reveal>
            <div className="mb-6 inline-flex flex-wrap items-center gap-2 rounded-full border border-sky-200/28 bg-sky-200/12 px-4 py-2 text-sm font-black text-sky-100">
              <ShieldCheck size={18} /> Manchester roofing, tiles, slates and leadwork
            </div>
            <h1 className="max-w-4xl text-4xl font-black leading-[1.02] sm:text-6xl lg:text-[4.55rem] xl:text-[4.85rem]">
              Roof repairs and roofline work without the guesswork.
            </h1>
            <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-white/76 sm:text-xl">
              KT Roofing handles tiling, slating, leadwork, chimney revamps, flat roofs, fascias and guttering across Manchester.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={phoneHref} className="inline-flex min-h-14 items-center gap-2 rounded-xl bg-sky-200 px-6 py-4 text-base font-black text-[#111b22] shadow-[0_22px_80px_rgba(125,211,252,0.24)] transition hover:bg-white">
                <Phone size={20} /> Call {phoneDisplay}
              </a>
              <a href="#gallery" className="inline-flex min-h-14 items-center gap-2 rounded-xl border border-white/18 bg-white/10 px-6 py-4 text-base font-black text-white backdrop-blur-xl transition hover:bg-white hover:text-[#111b22]">
                <ArrowUpRight size={20} /> See roof areas
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form className="w-full max-w-xl rounded-2xl border border-white/16 bg-white/[0.10] p-5 shadow-[0_24px_90px_rgba(0,0,0,0.44)] backdrop-blur-2xl sm:p-6 lg:justify-self-end" onSubmit={(event) => event.preventDefault()}>
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-black uppercase text-sky-100">Roof enquiry</p>
                  <h2 className="mt-2 text-3xl font-black leading-tight text-white">Send KT the roof details.</h2>
                </div>
                <Wrench className="shrink-0 text-sky-200" size={34} />
              </div>
              <div className="grid gap-3">
                <input value={name} onChange={(event) => setName(event.target.value)} className="min-h-13 rounded-xl border border-white/12 bg-white/92 px-4 text-base font-semibold text-[#111b22] outline-none ring-sky-300 transition focus:ring-4" placeholder="Name" />
                <input value={contact} onChange={(event) => setContact(event.target.value)} className="min-h-13 rounded-xl border border-white/12 bg-white/92 px-4 text-base font-semibold text-[#111b22] outline-none ring-sky-300 transition focus:ring-4" placeholder="Phone or email" />
                <div className="grid gap-3 sm:grid-cols-2">
                  <select value={service} onChange={(event) => setService(event.target.value)} className="min-h-13 rounded-xl border border-white/12 bg-white/92 px-4 text-base font-semibold text-[#111b22] outline-none ring-sky-300 transition focus:ring-4">
                    <option>Roof repair</option>
                    <option>Tiling / slating</option>
                    <option>Leadwork</option>
                    <option>Chimney revamp</option>
                    <option>Flat roof</option>
                    <option>Fascia / guttering</option>
                  </select>
                  <input value={area} onChange={(event) => setArea(event.target.value)} className="min-h-13 rounded-xl border border-white/12 bg-white/92 px-4 text-base font-semibold text-[#111b22] outline-none ring-sky-300 transition focus:ring-4" placeholder="Area / postcode" />
                </div>
                <textarea value={details} onChange={(event) => setDetails(event.target.value)} className="min-h-28 rounded-xl border border-white/12 bg-white/92 px-4 py-3 text-base font-semibold leading-7 text-[#111b22] outline-none ring-sky-300 transition focus:ring-4" placeholder="What needs looking at? Leak, missing tile, chimney, flat roof, guttering, access..." />
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto]">
                <Button asChild className="min-h-14 rounded-xl bg-sky-200 text-base font-black text-[#111b22] hover:bg-white">
                  <a href={mailHref}><Mail size={20} /> Send enquiry</a>
                </Button>
                <a href={phoneHref} className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-white/16 px-5 text-base font-black text-white transition hover:bg-white hover:text-[#111b22]">
                  <Phone size={19} /> Call
                </a>
              </div>
              <p className="mt-4 text-sm font-semibold leading-6 text-white/62">Email goes to the public KT Roofing address. For urgent roof issues, call instead.</p>
            </form>
          </Reveal>
        </div>
      </section>

      <section id="services" className="bg-[#eef3f5] px-4 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-3xl">
            <p className="mb-3 text-sm font-black uppercase text-sky-700">Roofing services</p>
            <h2 className="text-4xl font-black leading-none sm:text-6xl">A tight service list for common Manchester roof problems.</h2>
          </Reveal>
          <div className="services-grid mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {services.map((item) => (
              <article key={item.title} className="service-card rounded-2xl border border-[#111b22]/10 bg-white p-6 shadow-[0_18px_60px_rgba(17,27,34,0.08)]">
                <item.icon className="mb-7 text-sky-700" size={34} />
                <h3 className="text-2xl font-black leading-tight">{item.title}</h3>
                <p className="mt-4 text-base font-medium leading-7 text-[#4d5b64]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="gallery-stage overflow-hidden bg-[#111b22] py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <Reveal>
            <p className="mb-3 text-sm font-black uppercase text-sky-200">Roof areas</p>
            <h2 className="max-w-4xl text-4xl font-black leading-none sm:text-6xl">Roofing details customers usually need checked first.</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/68">
              Tiles, slates, leadwork, chimneys, flat roofs, fascias and guttering are the common areas worth checking before small defects spread.
            </p>
          </Reveal>
        </div>
        <div className="gallery-track mx-auto mt-12 grid w-full max-w-7xl grid-cols-1 gap-4 px-4 sm:px-8 md:flex md:w-max md:max-w-none md:gap-6">
          {visuals.map((item) => (
            <motion.figure key={item.src} className="relative h-[72vh] max-h-[640px] min-h-[430px] w-full shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:min-h-[540px] md:h-[620px] md:w-[740px]" whileHover={{ y: -10, scale: 1.012 }}>
              <Image src={assets(item.src)} alt={item.alt} fill sizes="(min-width: 768px) 740px, 100vw" loading="eager" className="object-cover" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/68 to-transparent p-5">
                <span className="block text-xl font-black">{item.title}</span>
                <span className="mt-1 block text-sm font-bold text-white/64">Roofing detail</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      <section id="proof" className="proof-section bg-white px-4 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1fr]">
          <Reveal>
            <p className="mb-3 text-sm font-black uppercase text-sky-700">Verified proof</p>
            <h2 className="text-4xl font-black leading-none sm:text-6xl">Useful details before you make the call.</h2>
            <div className="proof-line mt-8 h-1 w-full origin-left scale-x-0 rounded-full bg-sky-400" />
          </Reveal>
          <div className="grid gap-4">
            {proofPoints.map((point) => (
              <Reveal key={point}>
                <div className="flex gap-4 rounded-2xl border border-[#111b22]/10 bg-[#eef3f5] p-5">
                  <BadgeCheck className="mt-1 shrink-0 text-sky-700" size={24} />
                  <p className="text-base font-bold leading-7 text-[#35434b]">{point}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0d151b] px-4 py-24 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.86fr]">
          <Reveal>
            <p className="mb-3 text-sm font-black uppercase text-sky-200">Common questions</p>
            <h2 className="text-4xl font-black leading-none sm:text-6xl">Before asking for roof help.</h2>
          </Reveal>
          <div className="grid gap-3">
            {faqs.map(([q, a]) => <FAQItem key={q} q={q} a={a} />)}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#eef3f5] px-4 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl border border-[#111b22]/10 bg-white shadow-[0_24px_90px_rgba(17,27,34,0.12)] lg:grid-cols-[0.92fr_1.08fr]">
          <div className="p-6 sm:p-9 lg:p-12">
            <p className="mb-3 text-sm font-black uppercase text-sky-700">Contact</p>
            <h2 className="text-4xl font-black leading-none sm:text-5xl">Speak to KT Roofing about a Manchester roof issue.</h2>
            <div className="mt-8 grid gap-4">
              <a href={phoneHref} className="flex items-center gap-4 rounded-xl bg-[#111b22] p-4 text-white transition hover:bg-[#263640]"><Phone className="text-sky-200" /> <span className="font-black">{phoneDisplay}</span></a>
              <a href={`mailto:${email}`} className="flex items-center gap-4 rounded-xl bg-[#eef3f5] p-4 transition hover:bg-sky-100"><Mail className="text-sky-700" /> <span className="font-black">{email}</span></a>
              <a href={mapsUrl} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-xl bg-[#eef3f5] p-4 transition hover:bg-sky-100"><MapPin className="text-sky-700" /> <span className="font-black">KT Roofing on Google Maps</span></a>
            </div>
            <p className="mt-7 flex items-center gap-2 text-base font-bold text-[#4d5b64]"><Clock3 size={20} /> Contact directly for availability and response times.</p>
          </div>
          <div className="relative min-h-[420px] overflow-hidden bg-[#111b22]">
            <iframe
              title="KT Roofing Google Maps listing"
              src={mapEmbedUrl}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#111b22]/92 via-[#111b22]/36 to-transparent p-6 text-white sm:p-8">
              <p className="text-sm font-black uppercase text-sky-200">Google Maps</p>
              <p className="mt-2 max-w-xl text-2xl font-black leading-tight">KT Roofing on Google Maps for quick route and listing checks.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#111b22] px-4 py-10 text-white sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xl font-black">KT Roofing</p>
            <p className="mt-2 max-w-2xl text-sm font-semibold leading-6 text-white/58">Manchester roofing services for tiling, slating, leadwork, chimneys, flat roofs, fascias and guttering.</p>
          </div>
          <div className="flex gap-3">
            <a href={phoneHref} aria-label="Call KT Roofing" className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/12 bg-white/10 text-white transition hover:bg-white hover:text-[#111b22]"><Phone size={20} /></a>
            <a href={`mailto:${email}`} aria-label="Email KT Roofing" className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/12 bg-white/10 text-white transition hover:bg-white hover:text-[#111b22]"><Mail size={20} /></a>
            <a href={facebookUrl} target="_blank" rel="noreferrer" aria-label="KT Roofing on Facebook" className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/12 bg-white/10 text-white transition hover:bg-white hover:text-[#111b22]"><FacebookIcon /></a>
            <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="KT Roofing on Instagram" className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/12 bg-white/10 text-white transition hover:bg-white hover:text-[#111b22]"><Instagram size={20} /></a>
            <a href={googleShareUrl} target="_blank" rel="noreferrer" aria-label="KT Roofing Google listing" className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/12 bg-white/10 text-white transition hover:bg-white hover:text-[#111b22]"><Building2 size={20} /></a>
          </div>
        </div>
      </footer>
    </main>
  );
}
