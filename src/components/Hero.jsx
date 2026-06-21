import Reveal from './Reveal'

export default function Hero() {
  return (
    <section 
      className="hero" 
      id="top"
      style={{ 
        backgroundImage: `linear-gradient(180deg, rgba(14,12,10,0.35) 0%, rgba(14,12,10,0.55) 45%, var(--noir) 96%), url(${import.meta.env.BASE_URL}assets/hero-bg.jpeg)` 
      }}
    >
      <Reveal className="wrap hero-inner in" as="div">
        <div>
          <div className="eyebrow">Restaurant · Traiteur · Dibiterie · Pizzeria</div>
          <h1>
            La Marmite
            <br />
            <em>Dorée</em>
          </h1>
          <div className="hero-tagline">« Le plaisir du palais commence ici »</div>
          <div className="hero-actions">
            <a href="#reservation" className="btn btn-solid">
              Réserver une table
            </a>
            <a href="#carte" className="btn btn-outline">
              Découvrir la carte
            </a>
          </div>
        </div>
        <div className="hero-side">
          <div className="eyebrow">Saveurs Authentiques</div>
          <p style={{ marginTop: '14px' }}>
            Cuisine sénégalaise et internationale préparée chaque jour avec des produits frais
            — thiéboudienne, yassa, mafé, grillades et fast-food, à savourer sur place ou en
            livraison.
          </p>
          <div className="three-s">
            <b>Set</b> · <b>Saff</b> · <b>Sell</b>
          </div>
        </div>
      </Reveal>
      <div className="scroll-cue">Faire défiler</div>
    </section>
  )
}