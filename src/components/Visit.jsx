import Reveal from './Reveal'

export default function Visit() {
  return (
    <section 
      className="visit" 
      id="contact"
      style={{
        backgroundImage: `linear-gradient(180deg, var(--noir) 0%, rgba(14, 12, 10, 0.55) 35%, rgba(14, 12, 10, 0.55) 65%, var(--noir) 100%), url(${import.meta.env.BASE_URL}assets/storefront.jpg)`
      }}
    >
      <Reveal className="wrap" as="div">
        <div className="eyebrow center">Venez nous voir</div>
        <h2 style={{ marginTop: '16px' }}>
          Merci de nous choisir pour vos{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--or-clair)' }}>
            moments délicieux et chaleureux
          </em>
        </h2>
        <p>
          Sur place, à emporter ou en livraison — La Marmite Dorée vous accueille tous les
          jours.
        </p>
        <div className="hero-actions" style={{ justifyContent: 'center' }}>
          <a href="https://wa.me/221786311111" className="btn btn-solid">
            Commander sur WhatsApp
          </a>
          <a href="#reservation" className="btn btn-outline">
            Réserver une table
          </a>
        </div>
        <div className="hours">
          <div className="hours-item">
            <div className="eyebrow">Service Continu</div>
            <div className="val">08h00 — 23h30</div>
          </div>
          <div className="hours-item">
            <div className="eyebrow">Téléphone</div>
            <div className="val">76 024 16 16</div>
          </div>
          <div className="hours-item">
            <div className="eyebrow">WhatsApp</div>
            <div className="val">78 631 11 11</div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
