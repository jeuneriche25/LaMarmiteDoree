import { useState } from 'react'
import Reveal from './Reveal'
import { tabs, menuData, menuNotes } from '../data/menuData'

export default function Menu() {
  const [active, setActive] = useState(tabs[0].id)

  return (
    <section className="menu-section section-pad" id="carte">
      <div className="wrap">
        <Reveal className="section-head" as="div">
          <div className="eyebrow center">La Carte</div>
          <h2>
            Notre <em>menu</em> complet
          </h2>
          <p>
            Petit déjeuner, déjeuner, dîner, fast-food et boissons — tous nos prix en Francs
            CFA, service de livraison disponible.
          </p>
        </Reveal>

        <Reveal className="tabs" as="div">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-btn ${active === tab.id ? 'active' : ''}`}
              onClick={() => setActive(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </Reveal>

        <div className="menu-panel active">
          <div className="menu-groups">
            {menuData[active].map((group) => (
              <div className="menu-group" key={group.title}>
                <h4>{group.title}</h4>
                {group.items.map((item) => (
                  <div className="menu-item" key={item.name + (item.note || '')}>
                    <span className="name">
                      {item.name}
                      {item.note && <small>{item.note}</small>}
                    </span>
                    <span className="price">{item.price}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {menuNotes[active] && (
            <div className="menu-note">
              {menuNotes[active].split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < menuNotes[active].split('\n').length - 1 && <br />}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
