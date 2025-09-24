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
            Wij ontwerpen en produceren nieuwe producten en merken — digitaal én fysiek.
          </h1>
          <p className="mt-5 text-lg md:text-xl text-white/80">
            Van design tot productie, wij bouwen concepten die uitgroeien tot merken met impact.
          </p>
        </div>
      </section>

      {/* Wie wij zijn */}
      <section id="about" className="container py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold">Wie wij zijn</h2>
          <p className="mt-4 text-neutral-700">
            EPG Labs is de plek waar ideeën vorm krijgen. Wij starten met design — het creatieve fundament.
            Vervolgens produceren we wat ertoe doet en bouwen we aan merken die relevant zijn vandaag en klaar voor morgen.
          </p>
        </div>
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-soft">
          <Image src={CUBE_IMG} alt="Abstract visual" fill className="object-cover" />
        </div>
      </section>

      {/* Wat wij doen */}
      <section id="what" className="bg-black text-white py-20">
        <div className="container">
          <h2 className="text-3xl font-bold">Wat wij doen</h2>
          <div className="grid md:grid-cols-3 gap-10 mt-8">
            <div className="p-6 rounded-xl border border-white/10 bg-white/5 text-center">
              <div className="mx-auto w-16 h-16 relative mb-4">
                <Image src={ICON_CONCEPT} alt="Concept icon" fill className="object-contain" />
              </div>
              <h3 className="text-xl font-semibold">Design & Concept</h3>
              <p className="mt-2">Elk idee begint met ontwerp.</p>
            </div>
            <div className="p-6 rounded-xl border border-white/10 bg-white/5 text-center">
              <div className="mx-auto w-16 h-16 relative mb-4">
                <Image src={ICON_PRODUCTION} alt="Production icon" fill className="object-contain" />
              </div>
              <h3 className="text-xl font-semibold">Productie</h3>
              <p className="mt-2">Van concept naar werkelijkheid.</p>
            </div>
            <div className="p-6 rounded-xl border border-white/10 bg-white/5 text-center">
              <div className="mx-auto w-16 h-16 relative mb-4">
                <Image src={ICON_INNOVATE} alt="Innovate icon" fill className="object-contain" />
              </div>
              <h3 className="text-xl font-semibold">Innovatie</h3>
              <p className="mt-2">Creëren van toekomstbestendige merken.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projecten */}
      <section id="projects" className="container py-20">
        <h2 className="text-3xl font-bold">Projecten</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
         <div className="relative aspect-video rounded-xl overflow-hidden shadow-soft">
            <Image src={ICON_MYORA} alt="Project 2" fill className="object-cover" />
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-soft">
            <Image src={ICON_WAVERELAY} alt="Project 1" fill className="object-cover" />
          </div>

          <div className="relative aspect-video rounded-xl overflow-hidden shadow-soft">
            <Image src={ICON_HSTEEN} alt="Project 3" fill className="object-cover" />
          </div>
        </div>
        <p className="mt-6 text-neutral-600">
          Onze projecten verschillen, maar delen één principe: ze zetten de toon voor wat er komt.
        </p>
      </section>

      {/* Quote */}
<section className="relative py-32 text-white text-center">
  {/* Achtergrondafbeelding */}
  <Image
    src="/assets/sphere.png" // 👈 vervang dit pad door jouw gewenste background image
    alt="Background"
    fill
    priority
    className="object-cover -z-10 "
  />
  {/* Overlay (optioneel voor meer contrast) */}
  <div className="absolute inset-0 bg-black/40 -z-10" />

  {/* Tekst */}
  <blockquote className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto leading-snug">
    “Innovatie ontstaat door te durven creëren.”
  </blockquote>
</section>


      {/* Contact */}
      <section id="contact" className="container py-20 text-center">
        <h2 className="text-3xl font-bold">Samen iets nieuws bouwen?</h2>
        <p className="mt-4">Laten we verkennen hoe jouw idee vorm kan krijgen.</p>
      </section>
    </main>
  )
}
