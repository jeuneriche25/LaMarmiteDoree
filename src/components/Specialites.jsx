import Reveal from './Reveal'

export default function Specialites() {
  return (
    <section className="section-pad" id="specialites">
      <div className="wrap">
        <Reveal className="section-head" as="div">
          <div className="eyebrow center">Nos Spécialités</div>
          <h2>
            Le <em>roi</em> des trois « S »
          </h2>
          <p>
            Une sélection de plats emblématiques de la Marmite Dorée, du riz au poisson mijoté
            à la volaille braisée sur charbon.
          </p>
        </Reveal>

        <div className="bento">
          <Reveal
            className="bento-card photo big"
            style={{ backgroundImage: "url('/assets/theibou.webp')" }}
          >
            <div className="content">
              <span className="tag">Plat signature</span>
              <h3>Thiéboudienne Rouge</h3>
              <p className="desc">
                Riz brisé au gras, poisson farci, légumes fondants &amp; citron — la fierté de
                notre marmite.
              </p>
              <div className="price">à partir de 1 000 Fcfa</div>
            </div>
          </Reveal>

          <Reveal
            className="bento-card photo"
            style={{ backgroundImage: "url('/assets/poulet.jpg')" }}
          >
            <div className="content">
              <span className="tag">Diné</span>
              <h3>Poulet Rôti</h3>
              <div className="price">2 500 Fcfa</div>
            </div>
          </Reveal>

          <Reveal 
          className="bento-card" style ={{ backgroundImage: "url('/assets/dibiterie.jpg')" }}>
            <div className="content">
              {/* <span className="tag">Dibiterie</span> */}
              <h3>Dibi Guinar</h3>
              {/* <p>Pintade grillée façon dibiterie, servie entière ou en moitié.</p> */}
              <div className="price">3 500 / 7 000 Fcfa</div>
            </div>
          </Reveal>

          <Reveal
            className="bento-card photo wide"
            style={{ backgroundImage: "url('/assets/yassa.jpg')" }}
          >
            <div className="content">
              <span className="tag">Déjeuner</span>
              <h3>Yassa au Poulet</h3>
              <p className="desc">Oignons caramélisés, moutarde &amp; citron — un classique revisité.</p>
              <div className="price">1 500 Fcfa</div>
            </div>
          </Reveal>

          <Reveal className="bento-card plain">
            <div className="content">
              <span className="tag">Fast-food</span>
              <h3>Pizza Maison</h3>
              <p className="desc">PM · MM · GM, pâte fine cuite au four.</p>
              <div className="price">2 000 — 5 000 Fcfa</div>
            </div>
          </Reveal>

          <Reveal
            className="bento-card photo"
            style={{ backgroundImage: "url('/assets/mafe.jpg')" }}
          >
            <div className="content">
              <span className="tag">Diné</span>
              <h3>Volailles Braisées</h3>
              <div className="price">sur riz créole</div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
