{group.items.map((item) => (
  <div className="menu-item" key={item.name + (item.note || '')}>
    {/* Exemple d'intégration si vous ajoutez un champ image plus tard */}
    {item.image && (
      <img 
        src={`${import.meta.env.BASE_URL}assets/${item.image}`} 
        alt={item.name} 
        className="menu-item-thumb" 
      />
    )}
    <span className="name">
      {item.name}
      {item.note && <small>{item.note}</small>}
    </span>
    <span className="price">{item.price}</span>
  </div>
))}