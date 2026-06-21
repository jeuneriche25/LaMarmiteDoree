import Reveal from './Reveal'

const DISHES = [
  {
    src: '/assets/theibou.webp',
    alt: 'Thiéboudiène',
    title: 'Thiéboudiène',
    desc: 'Le plat national sénégalais à base de riz, poisson et légumes frais.',
  },
  {
    src: '/assets/yassa.jpg',
    alt: 'Yassa poulet',
    title: 'Yassa Poulet',
    desc: 'Poulet mariné au citron, oignons et moutarde accompagné de riz.',
  },
  {
    src: '/assets/mafe.jpg',
    alt: 'Mafé maison',
    title: 'Mafé Maison',
    desc: "Savoureux mélange de viande tendre et sauce à la pâte d'arachide.",
  },
  {
    src: '/assets/soupou kandia.jpg',
    alt: 'Soupou Kandia',
    title: 'Soupou Kandia',
    desc: 'Poisson frais mijoté dans une sauce traditionnelle aux légumes.',
  },
]

export default function Gallery() {
  return (
    <section className="section-pad" id="galerie">
      <div className="wrap">
        <Reveal className="section-head" as="div">
          <div className="eyebrow center">Galerie</div>
          <h2>
            Un avant-goût de <em>nos plats</em>
          </h2>
        </Reveal>

        <Reveal className="gallery" as="div">
          {DISHES.map((dish) => (
            <div className="dish-card" key={dish.title}>
              <img src={dish.src} alt={dish.alt} />
              <div className="info">
                <h3>{dish.title}</h3>
                <p>{dish.desc}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}