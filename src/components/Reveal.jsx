import useReveal from '../hooks/useReveal'

/**
 * Enveloppe un bloc avec l'animation "reveal" au scroll.
 * Usage: <Reveal className="..."> ... </Reveal>
 */
export default function Reveal({ children, className = '', as: Tag = 'div', ...rest }) {
  const ref = useReveal()
  return (
    <Tag ref={ref} className={`reveal ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  )
}
