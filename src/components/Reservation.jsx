import { useState } from 'react'
import Reveal from './Reveal'
import { tables } from '../data/tables'

export default function Reservation() {
  const [selectedTable, setSelectedTable] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  // 1. États pour récupérer les données du formulaire
  const [nom, setNom] = useState('')
  const [telephone, setTelephone] = useState('')
  const [date, setDate] = useState('')
  const [heure, setHeure] = useState('19:00')
  const [couverts, setCouverts] = useState('2')

  const handleSubmit = (e) => {
    e.preventDefault()

    // 2. CONFIGURATION DU NUMÉRO (Mettez le numéro du client ici, sans le + ni espaces)
    const numeroRestaurant = "221786311111" 

    // 3. Construction du message WhatsApp propre et lisible
    let message = `🔴 *Nouvelle Demande de Réservation* 🔴\n\n`
    message += `👤 *Nom du client :* ${nom || 'Non renseigné'}\n`
    message += `📞 *Téléphone :* ${telephone || 'Non renseigné'}\n`
    message += `📅 *Date :* ${date}\n`
    message += `⏰ *Heure :* ${heure}\n`
    message += `👥 *Nombre de couverts :* ${couverts} personne(s)\n`
    
    if (selectedTable) {
      const seatsTable = tables.find((t) => t.id === selectedTable)?.seats
      message += `🪑 *Table sélectionnée :* n°${selectedTable} (${seatsTable} places)\n`
    } else {
      message += `🪑 *Table souhaitée :* Aucune table spécifique sélectionnée\n`
    }

    message += `\n_Merci de me confirmer la disponibilité de cette table._`

    // 4. Encodage du message pour l'URL
    const messageEncode = encodeURIComponent(message)
    const urlWhatsApp = `https://wa.me/${numeroRestaurant}?text=${messageEncode}`

    // 5. Ouverture de WhatsApp dans un nouvel onglet et mise à jour de l'interface
    window.open(urlWhatsApp, '_blank')
    setSubmitted(true)
  }

  const handleReset = (e) => {
    e.preventDefault()
    setNom('')
    setTelephone('')
    setDate('')
    setHeure('19:00')
    setCouverts('2')
    setSelectedTable(null)
    setSubmitted(false)
  }

  return (
    <section className="reservation section-pad" id="reservation">
      <div className="wrap">
        <Reveal className="section-head" as="div">
          <div className="eyebrow center">Réservation</div>
          <h2>
            Choisissez votre <em>table</em>
          </h2>
          <p>
            Cliquez sur une table disponible dans notre plan de salle pour la sélectionner,
            puis complétez le formulaire de réservation.
          </p>
        </Reveal>

        <div className="resa-grid">
          <Reveal as="div">
            <div className="marmite-plan">
              <svg viewBox="0 0 400 400">
                <g className="steam">
                  <path d="M150 30 C140 20 160 10 150 0" />
                  <path d="M200 26 C190 16 210 6 200 -4" />
                  <path d="M250 30 C240 20 260 10 250 0" />
                </g>
                <path className="pot-rim" d="M120 55 H280" />
                <ellipse className="pot-body" cx="200" cy="220" rx="170" ry="170" />
                <path className="pot-rim" d="M30 200 C18 200 12 215 22 228" />
                <path className="pot-rim" d="M370 200 C382 200 388 215 378 228" />
              </svg>

              {tables.map((t) => {
                const isSelected = selectedTable === t.id
                const classes = ['table-pt']
                if (t.status === 'occupe') classes.push('occupe')
                else classes.push('dispo')
                if (isSelected) classes.push('selection')

                return (
                  <div
                    key={t.id}
                    className={classes.join(' ')}
                    style={{ left: `${t.left}%`, top: `${t.top}%` }}
                    onClick={() => {
                      if (t.status === 'dispo') setSelectedTable(t.id)
                    }}
                  >
                    {t.id}
                  </div>
                )
              })}
            </div>
            <div className="legend">
              <span>
                <i className="dot d1"></i> Disponible
              </span>
              <span>
                <i className="dot d2"></i> Sélectionnée
              </span>
              <span>
                <i className="dot d3"></i> Occupée
              </span>
            </div>
          </Reveal>

          <Reveal className="resa-form" as="div">
            {!submitted ? (
              <form onSubmit={handleSubmit} id="resa-form-inner">
                <h3>Votre réservation</h3>
                <div className="sub">
                  Remplissez vos informations, nous confirmons par WhatsApp.
                </div>

                <div className="selected-table">
                  {selectedTable ? (
                    <>
                      Table <b>n°{selectedTable}</b> sélectionnée —{' '}
                      {tables.find((t) => t.id === selectedTable)?.seats} couverts
                    </>
                  ) : (
                    'Aucune table sélectionnée — choisissez une table dans le plan.'
                  )}
                </div>

                <div className="field-row">
                  <div className="field">
                    <label>Nom complet</label>
                    <input 
                      type="text" 
                      placeholder="Votre nom" 
                      required
                      value={nom}
                      onChange={(e) => setNom(e.target.value)}
                    />
                  </div>
                  <div className="field">
                    <label>Téléphone</label>
                    <input 
                      type="tel" 
                      placeholder="+221 XX XXX XX XX" 
                      required
                      value={telephone}
                      onChange={(e) => setTelephone(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field-row">
                  <div className="field">
                    <label>Date</label>
                    <input 
                      type="date" 
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                  <div className="field">
                    <label>Heure</label>
                    <input 
                      type="time" 
                      value={heure}
                      onChange={(e) => setHeure(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field">
                  <label>Nombre de couverts</label>
                  <select 
                    value={couverts}
                    onChange={(e) => setCouverts(e.target.value)}
                  >
                    <option value="1">1 personne</option>
                    <option value="2">2 personnes</option>
                    <option value="4">4 personnes</option>
                    <option value="6">6 personnes</option>
                    <option value="8">8 personnes et +</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-solid">
                  Confirmer la réservation
                </button>
              </form>
            ) : (
              <div className="resa-success show">
                <div className="check">✓</div>
                <h3>Demande envoyée</h3>
                <p>
                  Merci ! Votre application WhatsApp s'est ouverte pour transmettre les détails.
                  Notre équipe vous confirmera la réservation très vite.
                </p>
                <a
                  href="#reservation"
                  className="btn btn-outline btn-small"
                  style={{ marginTop: '24px' }}
                  onClick={handleReset}
                >
                  Nouvelle réservation
                </a>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}