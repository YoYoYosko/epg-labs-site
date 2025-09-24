import Image from "next/image";

const HERO_IMG = "/assets/hero.png";
const CUBE_IMG = "/assets/space.png";
const SPHERE_IMG = "/assets/sphere.png";
const ICON_CONCEPT = "/assets/concept.png";
const ICON_PRODUCTION = "/assets/production.png";
const ICON_INNOVATE = "/assets/innovate.png";
const ICON_WAVERELAY = "/assets/waverelay.png";
const ICON_MYORA = "/assets/myora.png";
const ICON_HSTEEN = "/assets/hsteen.png";

export default function Page() {
  return (
    <main>
      {/* Hero */}
      <section className="dark-hero text-white relative">
        <Image
          src={HERO_IMG}
          alt="Hero visual"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="container py-36 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            We design and produce new products and brands — both digital and physical.
          </h1>
          <p className="mt-5 text-lg md:text-xl text-white/80">
            From design to production, we build concepts that grow into impactful brands.
          </p>
        </div>
      </section>

      {/* Who we are */}
      <section id="about" className="container py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold">Who we are</h2>
          <p className="mt-4 text-neutral-700">
            EPG Labs is where ideas take shape. We start with design — the creative foundation.
            Then we produce what matters and build brands that are relevant today and ready for tomorrow.
          </p>
        </div>
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-soft">
          <Image src={CUBE_IMG} alt="Abstract visual" fill className="object-cover" />
        </div>
      </section>

      {/* What we do */}
      <section id="what" className="bg-black text-white py-20">
        <div className="container">
          <h2 className="text-3xl font-bold">What we do</h2>
          <div className="grid md:grid-cols-3 gap-10 mt-8">
            <div className="p-6 rounded-xl border border-white/10 bg-white/5 text-center">
              <div className="mx-auto w-16 h-16 relative mb-4">
                <Image src={ICON_CONCEPT} alt="Concept icon" fill className="object-contain" />
              </div>
              <h3 className="text-xl font-semibold">Design & Concept</h3>
              <p className="mt-2">Every idea starts with design.</p>
            </div>
            <div className="p-6 rounded-xl border border-white/10 bg-white/5 text-center">
              <div className="mx-auto w-16 h-16 relative mb-4">
                <Image src={ICON_PRODUCTION} alt="Production icon" fill className="object-contain" />
              </div>
              <h3 className="text-xl font-semibold">Production</h3>
              <p className="mt-2">From concept to reality.</p>
            </div>
            <div className="p-6 rounded-xl border border-white/10 bg-white/5 text-center">
              <div className="mx-auto w-16 h-16 relative mb-4">
                <Image src={ICON_INNOVATE} alt="Innovate icon" fill className="object-contain" />
              </div>
              <h3 className="text-xl font-semibold">Innovation</h3>
              <p className="mt-2">Creating brands ready for the future.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="container py-20">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-soft">
            <Image src={ICON_MYORA} alt="Project Myora" fill className="object-cover" />
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-soft">
            <Image src={ICON_WAVERELAY} alt="Project WaveRelay" fill className="object-cover" />
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-soft">
            <Image src={ICON_HSTEEN} alt="Project Herinneringsteen" fill className="object-cover" />
          </div>
        </div>
        <p className="mt-6 text-neutral-600">
          Our projects vary, but share one principle: they set the tone for what comes next.
        </p>
      </section>

      {/* Quote */}
      <section className="relative py-32 text-white text-center">
        {/* Background image */}
        <Image
          src={SPHERE_IMG}
          alt="Background"
          fill
          priority
          className="object-cover -z-10"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 -z-10" />

        {/* Text */}
        <blockquote className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto leading-snug">
          “Innovation begins with the courage to create.”
        </blockquote>
      </section>

      {/* Contact */}
      <section id="contact" className="container py-20 text-center">
        <h2 className="text-3xl font-bold">Ready to build something new?</h2>
        <p className="mt-4">Let’s explore how your idea can take shape.</p>
      </section>
    </main>
  )
}
