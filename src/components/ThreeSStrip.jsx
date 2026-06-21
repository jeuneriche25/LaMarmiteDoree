import Reveal from './Reveal'

const ITEMS = [
  {
    glyph: 'Set',
    title: 'Propre & Soigné',
    text: 'Un cadre élégant et impeccable, pensé pour vos repas en famille, en équipe ou entre amis.',
  },
  {
    glyph: 'Saff',
    title: 'Net & Généreux',
    text: 'Des portions copieuses préparées avec rigueur, des sauces mijotées à l\'ancienne.',
  },
  {
    glyph: 'Sell',
    title: 'Authentique & Vrai',
    text: 'Le vrai goût du Sénégal — recettes traditionnelles, épices locales, sans compromis.',
  },
]

export default function ThreeSStrip() {
  return (
    <section className="strip">
      <div className="wrap">
        {ITEMS.map((item) => (
          <Reveal key={item.glyph} className="strip-item">
            <div className="glyph">{item.glyph}</div>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
