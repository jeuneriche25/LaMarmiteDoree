import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { href: '#specialites', label: 'Spécialités' },
  { href: '#carte', label: 'La Carte' },
  { href: '#galerie', label: 'Galerie' },
  { href: '#reservation', label: 'Réservation' },
  { href: '#carrieres', label: 'Carrières' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header id="site-header" className={scrolled ? 'scrolled' : ''}>
      <div className="wrap nav-row">
        <a href="#top" className="brand">
          <img className="pot-icon" src={`${import.meta.env.BASE_URL}assets/pot-icon.png`} alt="Logo" width="45" height="40" />
          La Marmite <span>Dorée</span>
        </a>

        <nav style={{ position: 'relative' }}>
          <ul
            style={
              menuOpen
                ? {
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'absolute',
                    top: '64px',
                    right: '32px',
                    background: 'rgba(14,12,10,0.96)',
                    border: '1px solid var(--ligne)',
                    padding: '20px 28px',
                    gap: '16px',
                    borderRadius: '4px',
                  }
                : undefined
            }
          >
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#reservation" className="btn btn-solid btn-small">
          Réserver
        </a>
        <button
          className="menu-toggle"
          aria-label="menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          ☰
        </button>
      </div>
    </header>
  )
}
