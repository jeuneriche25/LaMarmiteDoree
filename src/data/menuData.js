// Données de la carte — La Marmite Dorée
// Tous les prix sont en Francs CFA (Fcfa)

export const tabs = [
  { id: 'pdj', label: 'Petit Déjeuner' },
  { id: 'dej', label: 'Déjeuner' },
  { id: 'dine', label: 'Dîner & Grillades' },
  { id: 'fast', label: 'Fast-Food' },
  { id: 'boissons', label: 'Boissons & Jus' },
]

export const menuData = {
  pdj: [
    {
      title: 'Boissons chaudes',
      items: [
        { name: 'Café noir', price: '500 Fcfa' },
        { name: 'Café au lait', price: '500 Fcfa' },
        { name: 'Café espresso', price: '1 000 Fcfa' },
      ],
    },
    {
      title: 'Œufs & Sandwichs',
      items: [
        { name: 'Omelette nature', price: '1 000 Fcfa' },
        { name: 'Omelette jambon', price: '1 500 Fcfa' },
        { name: 'Sandwich', note: 'viande, poulet, jambon, saucisson ou poisson', price: '1 000 Fcfa' },
        { name: 'Sandwich crevettes', price: '1 500 Fcfa' },
        { name: 'Panini', price: '1 500 Fcfa' },
      ],
    },
    {
      title: 'Spécialités du chef',
      items: [
        { name: 'Spécialité du chef', price: '2 800 Fcfa' },
        { name: 'Préférence quotidienne', price: '2 000 Fcfa' },
        { name: 'Thiéré ak méw', price: '1 000 Fcfa' },
      ],
    },
    {
      title: 'Bouillies traditionnelles',
      items: [
        { name: 'Lakh saw', price: '1 000 Fcfa' },
        { name: 'Lakh neuteurie', price: '1 000 Fcfa' },
        { name: 'Fondé', price: '500 Fcfa' },
      ],
    },
  ],

  dej: [
    {
      title: 'Thiébou & Riz',
      items: [
        { name: 'Thiébou dienne', price: '1 000 Fcfa' },
        { name: 'Thiébou yapp', price: '1 500 Fcfa' },
        { name: 'Thiébou guinar', price: '1 500 Fcfa' },
        { name: 'Thiébou niébé', price: '1 500 Fcfa' },
        { name: 'Thiébou diagua', price: '1 500 Fcfa' },
        { name: 'Paëlla', price: '2 000 Fcfa' },
      ],
    },
    {
      title: 'Yassa',
      items: [
        { name: 'Yassa au poulet', price: '1 500 Fcfa' },
        { name: 'Yassa au poisson', price: '1 500 Fcfa' },
        { name: 'Yassa yapp', price: '1 500 Fcfa' },
        { name: 'Yassa crevettes', note: 'braisé, grillé ou frit', price: '2 500 Fcfa' },
      ],
    },
    {
      title: 'Sauces & Mafé',
      items: [
        { name: 'Mafé yapp', price: '1 500 Fcfa' },
        { name: 'Souloukhou', price: '1 500 Fcfa' },
        { name: 'Domoda', note: 'yapp, boulettes ou dienne', price: '1 500 Fcfa' },
        { name: 'Mbaxal yapp', price: '1 500 Fcfa' },
        { name: 'Mbaxal saloum yapp', price: '1 500 Fcfa' },
        { name: 'Mbaxal soul', price: '1 000 Fcfa' },
        { name: 'Dakhine yapp', price: '1 500 Fcfa' },
        { name: 'Ngourbane', price: '1 500 Fcfa' },
      ],
    },
    {
      title: 'Thiou & Soupes',
      items: [
        { name: 'Thiou dienne', price: '1 500 Fcfa' },
        { name: 'Thiou boulette', price: '1 500 Fcfa' },
        { name: 'Thiou yapp', price: '1 500 Fcfa' },
        { name: 'Thiou diwtir', price: '1 500 Fcfa' },
        { name: 'Thiou guinar', price: '1 500 Fcfa' },
        { name: 'Thiou crevettes', price: '2 500 Fcfa' },
        { name: 'Soupe kandjia', price: '1 500 Fcfa' },
        { name: 'Kaldou', price: '1 000 Fcfa' },
        { name: 'Mborokhé', price: '1 500 Fcfa' },
        { name: 'Attiéké', price: '1 500 Fcfa' },
        { name: 'Fou fou', price: '1 500 Fcfa' },
      ],
    },
  ],

  dine: [
    {
      title: 'Riz, pâtes & sauces',
      items: [
        { name: 'Couscous', price: '1 500 Fcfa' },
        { name: 'Vermicelle', price: '1 500 Fcfa' },
        { name: 'Thiéré', price: '1 500 Fcfa' },
        { name: 'Touffé', price: '2 000 Fcfa' },
        { name: 'Soupe', price: '2 000 Fcfa' },
        { name: 'Sauce macaronis', price: '1 500 Fcfa' },
        { name: 'Sauce spaghetti', price: '1 500 Fcfa' },
        { name: 'Spaghetti bolognaise', price: '1 500 Fcfa' },
        { name: 'Lakh saw / neuteurie', price: '1 000 Fcfa' },
        { name: 'Nambé', price: '1 000 Fcfa' },
      ],
    },
    {
      title: 'Volailles & Gibier',
      items: [
        { name: 'Plat poulet', price: '2 500 Fcfa' },
        { name: 'Brochettes poulet', price: '3 000 Fcfa' },
        { name: 'Brochettes yapp', price: '3 000 Fcfa' },
        { name: 'Dibi guinar', note: 'moitié', price: '3 500 Fcfa' },
        { name: 'Dibi guinar', note: 'entier', price: '7 000 Fcfa' },
        { name: 'Dibi lapin', price: '5 000 Fcfa' },
        { name: 'Pigeons', price: '3 000 Fcfa' },
        { name: 'Poulet du pays', price: '9 000 Fcfa' },
        { name: 'Canard rôti, grillé ou braisé', note: 'moitié', price: '5 000 Fcfa' },
        { name: 'Canard rôti, grillé ou braisé', note: 'entier', price: '10 000 Fcfa' },
      ],
    },
    {
      title: 'Viandes & Grillades',
      items: [
        { name: 'Méchoui', note: '500 g', price: '5 000 Fcfa' },
        { name: 'Filet de bœuf', price: '4 000 Fcfa' },
        { name: 'Côtelettes', price: '4 000 Fcfa' },
      ],
    },
    {
      title: 'Poissons & Fruits de mer',
      items: [
        { name: 'Poisson braisé, grillé ou frit', price: '2 000 Fcfa' },
        { name: 'Crevettes sautées à l\'ail', price: '5 000 Fcfa' },
        { name: 'Gambas sautées à l\'ail', price: '6 000 Fcfa' },
      ],
    },
  ],

  fast: [
    {
      title: 'Burgers',
      items: [
        { name: 'Burger simple', price: '1 500 Fcfa' },
        { name: 'Burger double', price: '2 000 Fcfa' },
        { name: 'Cheese burger', price: '2 000 Fcfa' },
        { name: 'Burger sénégalais', price: '1 300 Fcfa' },
      ],
    },
    {
      title: 'Chawarma & Sandwichs',
      items: [
        { name: 'Chawarma simple', price: '1 500 Fcfa' },
        { name: 'Chawarma royal', price: '2 000 Fcfa' },
        { name: 'Chawarma poulet', price: '2 000 Fcfa' },
        { name: 'Chawarma crevettes', price: '2 000 Fcfa' },
        { name: 'Sandwich viande / poulet / foie', price: '1 000 Fcfa' },
        { name: 'Sandwich royal', note: 'frites, œuf, viande/poulet & crudités', price: '1 500 Fcfa' },
      ],
    },
    {
      title: 'Pizzas & Tacos',
      items: [
        { name: 'Pizza PM', price: '2 000 Fcfa' },
        { name: 'Pizza MM', price: '4 000 Fcfa' },
        { name: 'Pizza GM', price: '5 000 Fcfa' },
        { name: 'Tacos', price: '2 500 Fcfa' },
        { name: 'Norvégienne simple', price: '1 500 Fcfa' },
        { name: 'Norvégienne royale', price: '2 000 Fcfa' },
      ],
    },
    {
      title: 'Snacks & Beignets',
      items: [
        { name: 'Fataya simple', price: '700 Fcfa' },
        { name: 'Fataya complète', price: '1 000 Fcfa' },
        { name: 'Plat Nems', price: '1 500 Fcfa' },
        { name: 'Nems', note: 'à l\'unité', price: '250 Fcfa' },
        { name: 'Beignet crevettes', note: 'à l\'unité', price: '300 Fcfa' },
        { name: 'Pain chinois', note: 'à l\'unité', price: '250 Fcfa' },
        { name: 'Mini fataya', note: 'à l\'unité', price: '250 Fcfa' },
        { name: 'Rissole', note: 'à l\'unité', price: '300 Fcfa' },
        { name: 'Frites', price: '500 Fcfa' },
      ],
    },
  ],

  boissons: [
    {
      title: 'Jus locaux',
      items: [
        { name: 'Bissap', note: 'verre / pichet', price: '500 / 2 000 Fcfa' },
        { name: 'Bouille', note: 'verre / pichet', price: '500 / 2 000 Fcfa' },
        { name: 'Gingembre', note: 'verre / pichet', price: '500 / 2 000 Fcfa' },
        { name: 'Lait caillé', note: 'verre / pichet', price: '500 / 2 500 Fcfa' },
        { name: 'Carasole', note: 'verre / pichet', price: '500 / 2 500 Fcfa' },
      ],
    },
    {
      title: 'Cocktails & Spécialités',
      items: [
        { name: 'Spécialité saisonnière', note: 'verre / pichet', price: '500 / 2 000 Fcfa' },
        { name: 'Cocktail maison', note: 'verre / pichet', price: '500 / 2 000 Fcfa' },
        { name: 'Diabolo menthe', price: '1 000 Fcfa' },
      ],
    },
    {
      title: 'Boissons gazeuses',
      items: [
        { name: 'Boisson gazeuse sucrée', price: '500 — 1 000 Fcfa' },
      ],
    },
  ],
}

export const menuNotes = {
  dej: "Crevettes sautées à l'ail — 5 000 Fcfa · Gambas sautées à l'ail — 6 000 Fcfa\nAccompagnement riz, frites, plantain ou légumes inclus",
  dine: 'Accompagnement au choix — riz, frites, plantains ou légumes — 500 Fcfa',
}
