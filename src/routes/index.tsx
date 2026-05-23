import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import menu from "@/assets/menu.jpg";
import craft from "@/assets/craft.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Blue Moon Coffee — Dotham, Nova Jersey" },
      {
        name: "description",
        content:
          "Blue Moon is a craft coffee bar in Dotham, Nova Jersey serving single-origin espresso, slow-brewed pour-overs, and pastries baked daily.",
      },
      { property: "og:title", content: "Blue Moon Coffee — Dotham, Nova Jersey" },
      { property: "og:description", content: "Craft coffee, slow mornings, late nights." },
      { property: "og:image", content: hero },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
});

function Moon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      <defs>
        <radialGradient id="m" cx="35%" cy="35%">
          <stop offset="0%" stopColor="oklch(0.95 0.05 85)" />
          <stop offset="100%" stopColor="oklch(0.72 0.17 55)" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="40" fill="url(#m)" />
      <circle cx="62" cy="44" r="36" fill="var(--background)" />
    </svg>
  );
}

function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <a href="#top" className="flex items-center gap-2.5">
          <Moon className="h-7 w-7" />
          <span className="font-display text-lg font-semibold tracking-tight">Blue Moon</span>
        </a>
        <ul className="hidden items-center gap-9 text-sm text-foreground/80 md:flex">
          <li><a href="#menu" className="transition hover:text-primary">Menu</a></li>
          <li><a href="#story" className="transition hover:text-primary">Our Story</a></li>
          <li><a href="#visit" className="transition hover:text-primary">Visit</a></li>
        </ul>
        <a
          href="#visit"
          className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-ember transition hover:opacity-90"
        >
          Find us
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      <img
        src={hero}
        alt="Interior of Blue Moon coffee bar at dusk"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/55 to-background" />
      <div className="absolute inset-0 bg-moonlight" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-20 pt-40 md:px-10 md:pb-28">
        <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-primary">
          <span className="h-px w-10 bg-primary" /> Dotham · Nova Jersey
        </p>
        <h1 className="font-display text-5xl font-light leading-[1.05] text-balance text-foreground md:text-7xl lg:text-[5.5rem]">
          Coffee that arrives <em className="not-italic text-primary">once in a blue moon.</em>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
          A small neighborhood coffee bar pulling shots from single-origin beans roasted within
          twenty miles. Open early. Stays late.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#menu"
            className="inline-flex items-center rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-ember transition hover:-translate-y-0.5"
          >
            See the menu
          </a>
          <a
            href="#visit"
            className="inline-flex items-center rounded-full border border-border bg-card/40 px-7 py-3.5 text-sm font-medium text-foreground backdrop-blur transition hover:bg-card"
          >
            Plan a visit →
          </a>
        </div>
      </div>
    </section>
  );
}

const menuItems = [
  { name: "Single-Origin Espresso", note: "Ethiopia · Guji", price: "4" },
  { name: "Blue Moon Latte", note: "lavender honey, oat", price: "6" },
  { name: "Slow Pour-Over", note: "rotating roaster, V60", price: "7" },
  { name: "Cortado", note: "double ristretto, steamed milk", price: "5" },
  { name: "Cold Brew Tonic", note: "house tonic, orange peel", price: "6" },
  { name: "Morning Bun", note: "baked daily next door", price: "4" },
];

function Menu() {
  return (
    <section id="menu" className="relative px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">The Menu</p>
          <h2 className="mt-4 font-display text-4xl font-light leading-tight md:text-5xl">
            Six things, done <em className="text-primary">exceptionally</em> well.
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            We keep the menu short on purpose. Every cup is dialed in each morning and tasted
            before the doors open.
          </p>
          <div className="mt-10 overflow-hidden rounded-2xl border border-border">
            <img
              src={menu}
              alt="Three coffee drinks from above"
              width={1200}
              height={900}
              loading="lazy"
              className="h-72 w-full object-cover"
            />
          </div>
        </div>

        <ul className="lg:col-span-7 lg:pt-12">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="group flex items-baseline gap-4 border-b border-border py-6 transition hover:pl-2"
            >
              <div className="flex-1">
                <h3 className="font-display text-2xl font-medium text-foreground">{item.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.note}</p>
              </div>
              <span aria-hidden className="flex-1 border-b border-dashed border-border/60" />
              <span className="font-display text-2xl text-primary">${item.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="relative overflow-hidden bg-card px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div className="relative">
          <img
            src={craft}
            alt="Barista pouring latte art"
            width={1200}
            height={1400}
            loading="lazy"
            className="rounded-3xl object-cover shadow-glow"
          />
          <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-ember md:flex">
            <div className="text-center">
              <div className="font-display text-3xl">est.</div>
              <div className="text-sm tracking-widest">2019</div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Our Story</p>
          <h2 className="mt-4 font-display text-4xl font-light leading-tight md:text-5xl">
            A quiet corner of Dotham, lit warm against the night.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Blue Moon started as a two-person bar inside a converted print shop on Magnolia
            Street. We roast in small batches, pull every shot by hand, and know our regulars by
            order before name.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6">
            {[
              { k: "Single", v: "origin beans" },
              { k: "Roasted", v: "within 20 mi" },
              { k: "Open", v: "7am – 10pm" },
            ].map((s) => (
              <div key={s.k} className="border-l border-primary/60 pl-4">
                <div className="font-display text-2xl text-foreground">{s.k}</div>
                <div className="text-sm text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section id="visit" className="relative px-6 py-28 md:px-10 md:py-40">
      <div className="absolute inset-0 bg-moonlight opacity-60" />
      <div className="relative mx-auto max-w-5xl text-center">
        <Moon className="mx-auto h-14 w-14" />
        <h2 className="mt-8 font-display text-5xl font-light leading-tight md:text-7xl">
          Come sit awhile.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          We're on the corner of Magnolia &amp; 4th, with the navy awning and the warm window.
        </p>

        <div className="mx-auto mt-14 grid max-w-3xl gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
          {[
            { h: "Address", l1: "214 Magnolia St.", l2: "Dotham, NJ 07423" },
            { h: "Hours", l1: "Mon – Fri  7a – 10p", l2: "Sat – Sun  8a – 11p" },
            { h: "Contact", l1: "(551) 555-0184", l2: "hello@bluemoon.coffee" },
          ].map((c) => (
            <div key={c.h} className="bg-card p-8 text-left">
              <div className="text-xs uppercase tracking-[0.3em] text-primary">{c.h}</div>
              <div className="mt-3 font-display text-lg text-foreground">{c.l1}</div>
              <div className="text-sm text-muted-foreground">{c.l2}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
        <div className="flex items-center gap-2">
          <Moon className="h-5 w-5" />
          <span>© {new Date().getFullYear()} Blue Moon Coffee</span>
        </div>
        <div>Brewed slowly in Dotham, Nova Jersey.</div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Menu />
      <Story />
      <Visit />
      <Footer />
    </main>
  );
}
