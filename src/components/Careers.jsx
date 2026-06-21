import { useState } from 'react'
import Reveal from './Reveal'

export default function Careers() {
  const [submitted, setSubmitted] = useState(false)
  const [idFile, setIdFile] = useState(null)
  const [cvFile, setCvFile] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleReset = (e) => {
    e.preventDefault()
    setSubmitted(false)
    setIdFile(null)
    setCvFile(null)
  }

  return (
    <section className="careers section-pad" id="carrieres">
      <div className="wrap">
        <Reveal className="section-head" as="div">
          <div className="eyebrow center">Recrutement</div>
          <h2>
            Postuler au <em>restaurant</em>
          </h2>
          <p>
            Vous souhaitez rejoindre l'équipe de La Marmite Dorée ? Envoyez-nous votre
            candidature, nous vous recontacterons rapidement.
          </p>
        </Reveal>

        <Reveal className="careers-card" as="div">
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div className="field-row">
                <div className="field">
                  <label>Nom</label>
                  <input type="text" placeholder="Votre nom" required />
                </div>
                <div className="field">
                  <label>Prénom</label>
                  <input type="text" placeholder="Votre prénom" required />
                </div>
              </div>

              <div className="field-row">
                <div className="field">
                  <label>Adresse mail</label>
                  <input type="email" placeholder="vous@exemple.com" required />
                </div>
                <div className="field">
                  <label>Numéro de téléphone</label>
                  <input type="tel" placeholder="+221 XX XXX XX XX" required />
                </div>
              </div>

              <div className="field">
                <label>Adresse complète</label>
                <input type="text" placeholder="Quartier, ville, pays" required />
              </div>

              <div className="field">
                <label>Bref descriptif de ton parcours</label>
                <textarea
                  rows="5"
                  placeholder="Expériences, formations, postes occupés, motivations..."
                  required
                ></textarea>
              </div>

              <h4 className="subhead">Pièces jointes</h4>

              <div className="field">
                <label>Pièce d'identité</label>
                <div className="file-field">
                  <span className="file-label">
                    {idFile ? (
                      <span className="file-name">{idFile}</span>
                    ) : (
                      'CNI, passeport ou carte d\'identité'
                    )}
                  </span>
                  <span className="file-tag">Choisir un fichier</span>
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => setIdFile(e.target.files?.[0]?.name || null)}
                    required
                  />
                </div>
              </div>

              <div className="field">
                <label>CV</label>
                <div className="file-field">
                  <span className="file-label">
                    {cvFile ? <span className="file-name">{cvFile}</span> : 'Votre curriculum vitae'}
                  </span>
                  <span className="file-tag">Choisir un fichier</span>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => setCvFile(e.target.files?.[0]?.name || null)}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-solid">
                Envoyer ma candidature
              </button>
            </form>
          ) : (
            <div className="careers-success show">
              <div className="check">✓</div>
              <h3>Candidature envoyée</h3>
              <p>
                Merci pour votre candidature ! L'équipe de La Marmite Dorée l'examinera et
                vous contactera si votre profil correspond à un poste disponible.
              </p>
              <a
                href="#carrieres"
                className="btn btn-outline btn-small"
                style={{ marginTop: '24px' }}
                onClick={handleReset}
              >
                Envoyer une autre candidature
              </a>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  )
}
