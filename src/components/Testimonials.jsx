import Reveal from './Reveal'

const TESTIMONIALS = [
  {
    initial: 'A',
    name: 'Aïssatou D.',
    role: 'Cliente fidèle, Dakar',
    quote:
      "« Le thiéboudienne est exactement comme à la maison, peut-être même meilleur. Le service est rapide et l'accueil très chaleureux. »",
  },
  {
    initial: 'M',
    name: 'Moussa K.',
    role: 'Client entreprise',
    quote:
      "« Idéal pour un déjeuner d'équipe : large choix, livraison ponctuelle et toujours bien chaud. La dibi guinar est incontournable. »",
  },
  {
    initial: 'F',
    name: 'Fatou S.',
    role: 'Habituée du quartier',
    quote:
      '« Un cadre soigné, une carte impressionnante du petit déjeuner au dîner, et un excellent rapport qualité-prix. On y retourne sans hésiter. »',
  },
]

export default function Testimonials() {
  return (
    <section className="section-pad">
      <div className="wrap">
        <Reveal className="section-head" as="div">
          <div className="eyebrow center">Avis</div>
          <h2>
            Ce que disent <em>nos clients</em>
          </h2>
        </Reveal>

        <Reveal className="testi-grid" as="div">
          {TESTIMONIALS.map((t) => (
            <div className="testi-card" key={t.name}>
              <div className="testi-stars">★★★★★</div>
              <p className="quote">{t.quote}</p>
              <div className="testi-name">
                <div className="testi-avatar">{t.initial}</div>
                <div className="meta">
                  <b>{t.name}</b>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
