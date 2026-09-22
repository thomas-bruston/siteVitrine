export interface ImageProjet {
  src: string;
  alt: string;
}

export interface Projet {
  id: string;
  titre: string;
  contexte: string;
  image: string;
  stack: string[];
  statut: string;
  etatActuel: string;
  defis: string;
  galerie?: ImageProjet[];
}

export const PROJETS: Projet[] = [
  {
    id: 'packmap',
    titre: 'PackMap',
    contexte:
      'Permettre aux backpackers de publier et partager des activités géolocalisées sur une carte interactive.',
    image: 'assets/accueilPackmap.webp',
    stack: ['Angular 22', 'spartan/ui', 'Node/Express', 'MySQL', 'JWT'],
    statut: 'Bêta privée',
    etatActuel:
      'Bêta privée en cours de développement. Repo privé (accès sur demande.)',
    defis: `Choix d'Angular 22 pour pratiquer les signal forms et recentrage du produit avec la suppression volontaire d'une fonctionnalité (posts de type "offre de trajet") pour clarifier le scope.

Choix de spartan/ui pour bénéficier de composants accessibles et personnalisables sans dépendre d'une librairie UI figée, tout en gardant le contrôle du style via Tailwind.

Conformité RGPD : consentement explicite (cases non pré-cochées), politique de suppression après inactivité.`,
    galerie: [
      { src: 'assets/mapPackmap.webp', alt: 'Carte interactive des activités' },
      { src: 'assets/postPackmap.webp', alt: "Création d'un post" },
      { src: 'assets/chatPackmap.webp', alt: 'Messagerie entre utilisateurs' },
      { src: 'assets/profilePackmap.webp', alt: 'Profil utilisateur' },
      { src: 'assets/activityPackmap.webp', alt: 'Détail d\'une activité' },
    ],
  },
  {
    id: 'appfirstv2',
    titre: 'AppFirstV2',
    contexte: 'Premier projet Angular, réalisé coté back-end avec DummyJSON.',
    image: 'assets/accueilFirstAppV2.webp',
    stack: ['Angular 22','DummyJSON'],
    statut: 'Démo',
    etatActuel: 'Démo disponible via les captures d\'écran ci-dessous.',
    defis: 'Reconstruction de mémoire pour ancrer les fondamentaux Angular (Signals, smart/dumb components, formulaires réactifs, guards, intercepteurs), avec un bug exécution API identifié et documenté comme preuve de capacité de diagnostic.',
    galerie: [
      { src: 'assets/produitFirstAppV2.webp', alt: 'Liste des produits' },
      { src: 'assets/detailProduitFirstAppV2.webp', alt: 'Détail produit' },
      { src: 'assets/nouveauProduitFirstAppV2.webp', alt: 'Création de produit' },
      { src: 'assets/modifProduitFirstAppV2.webp', alt: 'Modification de produit' },
      { src: 'assets/loginFirstAppV2.webp', alt: 'Connexion' },
    ],
  },
  {
    id: 'ju-coach-sportif',
    titre: 'Ju Coach Sportif',
    contexte: 'Site e-commerce pour un coach sportif à Madagascar.',
    image: 'assets/accueilJucoach.webp',
    stack: ['HTML','CSS','JS','PHP'],
    statut: 'Démo',
    etatActuel: 'Démo disponible via les captures d\'écran ci-dessous.',
    defis: 'MVC PHP fait maison, choix métier assumés (pas de paiement en ligne, base lean) et sécurité soignée sur les uploads. Application pensée pour coller à l\'usage réel du client plutôt qu\'à une solution générique.',
    galerie: [
      { src: 'assets/programmeJucoach.webp', alt: 'Programmes proposés' },
      { src: 'assets/login Jucoach.webp', alt: 'Connexion' },
      { src: 'assets/questionnaireJucoach.png', alt: 'Questionnaire client' },
      { src: 'assets/gestionProgrammeAdminJucoach.png', alt: 'Gestion des programmes (admin)' },
    ],
  },
];
