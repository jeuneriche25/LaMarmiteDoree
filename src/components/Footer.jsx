export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="brand">
              <img className="pot-icon" src="/assets/pot-icon.png" alt="" width="38" height="30" />
              La Marmite <span>Dorée</span>
            </div>
            <p>
              Restaurant-traiteur · Fast food · Dibiterie · Pizzeria. Saveurs authentiques
              sénégalaises et internationales, sur place ou en livraison, au Sénégal.
            </p>
          </div>
          <div className="foot-col">
            <h5>Navigation</h5>
            <ul>
              <li><a href="#specialites">Spécialités</a></li>
              <li><a href="#carte">La Carte</a></li>
              <li><a href="#galerie">Galerie</a></li>
              <li><a href="#reservation">Réservation</a></li>
              <li><a href="#carrieres">Carrières</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Services</h5>
            <ul>
              <li>Petit déjeuner</li>
              <li>Déjeuner &amp; Dîner</li>
              <li>Fast-food &amp; Pizzeria</li>
              <li>Livraison à domicile</li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Contact</h5>
            <ul>
              <li><a href="tel:+221760241616">(+221) 76 024 16 16</a></li>
              <li><a href="tel:+221786311111">(+221) 78 631 11 11</a></li>
              <li><a href="https://wa.me/221786311111">WhatsApp</a></li>
              <li>Sénégal</li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 La Marmite Dorée — Saveurs Authentiques</span>
          <span>Site réalisé par Diallo Digital Solutions</span>
        </div>
      </div>
    </footer>
  )
}
