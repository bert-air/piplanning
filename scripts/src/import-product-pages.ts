import { createEntry, delay } from './lib/strapi-client.js';

const productPages = [
  {
    title: 'Connecteur Jira',
    slug: 'connecteur-jira',
    featureKey: 'jira-connector',
    body: [
      {
        __component: 'blocks.hero-section',
        headline: 'Connecteur Jira natif',
        subheadline: 'Importez vos features Jira, nettoyez la donnée dans AirSaaS, offrez une vue claire à tous.',
        primaryCta: { label: 'Demander une démo', url: '/fr/contact', variant: 'primary' },
      },
      {
        __component: 'blocks.feature-section',
        title: 'Import → Nettoyage → Vue claire',
        description: '<p>Le connecteur Jira natif importe automatiquement vos features. Le nettoyage des données se fait dans AirSaaS sans toucher à votre configuration Jira.</p>',
        imagePosition: 'right',
        bulletPoints: [
          { text: 'Import natif des features Jira' },
          { text: 'Nettoyage dans AirSaaS, pas dans Jira' },
          { text: 'Synchronisation continue et bidirectionnelle' },
          { text: 'Visibilité automatique sur la consommation' },
        ],
      },
      {
        __component: 'blocks.cta-section',
        title: 'Connectez Jira en quelques minutes',
        primaryCta: { label: 'Demander une démo', url: '/fr/contact', variant: 'primary' },
        backgroundVariant: 'gradient',
      },
    ],
    seo: {
      metaTitle: 'Connecteur Jira natif pour PI Planning | AirSaaS',
      metaDescription: 'Importez vos features Jira, nettoyez la donnée, synchronisez en continu. Le connecteur Jira qui manque à votre PI Planning.',
    },
  },
  {
    title: 'Vue Business',
    slug: 'vue-business',
    featureKey: 'business-view',
    body: [
      {
        __component: 'blocks.hero-section',
        headline: 'La vue business pour vos dirigeants',
        subheadline: 'Masquez le bruit technique, montrez l\'essentiel aux sponsors.',
        primaryCta: { label: 'Demander une démo', url: '/fr/contact', variant: 'primary' },
      },
      {
        __component: 'blocks.cta-section',
        title: 'Offrez la visibilité que vos sponsors méritent',
        primaryCta: { label: 'Demander une démo', url: '/fr/contact', variant: 'primary' },
        backgroundVariant: 'dark',
      },
    ],
    seo: {
      metaTitle: 'Vue Business - Visibilité dirigeants | AirSaaS',
      metaDescription: 'Synchronisez les features Jira et masquez le bruit technique. Offrez une vue métier claire à vos dirigeants et sponsors.',
    },
  },
  {
    title: 'Roadmap Partagée',
    slug: 'roadmap-partagee',
    featureKey: 'shared-roadmap',
    body: [
      {
        __component: 'blocks.hero-section',
        headline: 'Partagez votre roadmap sans login',
        subheadline: 'Liens sécurisés, vue dynamique en temps réel, fini les slides à maintenir.',
        primaryCta: { label: 'Demander une démo', url: '/fr/contact', variant: 'primary' },
      },
      {
        __component: 'blocks.cta-section',
        title: 'Partagez votre roadmap en un clic',
        primaryCta: { label: 'Demander une démo', url: '/fr/contact', variant: 'primary' },
        backgroundVariant: 'gradient',
      },
    ],
    seo: {
      metaTitle: 'Roadmap Partagée - Communication Stakeholders | AirSaaS',
      metaDescription: 'Partagez votre roadmap via des liens sécurisés. Vue dynamique en temps réel, sans login requis.',
    },
  },
  {
    title: 'Capacity Planning',
    slug: 'capacity-planning',
    featureKey: 'capacity-planning',
    body: [
      {
        __component: 'blocks.hero-section',
        headline: 'Peut-on prendre ce projet ?',
        subheadline: 'Visualisez la charge vs capacité par équipe et par PI. Alertes automatiques. Scénarios A/B/C.',
        primaryCta: { label: 'Demander une démo', url: '/fr/contact', variant: 'primary' },
      },
      {
        __component: 'blocks.cta-section',
        title: 'Maîtrisez votre capacité',
        primaryCta: { label: 'Demander une démo', url: '/fr/contact', variant: 'primary' },
        backgroundVariant: 'dark',
      },
    ],
    seo: {
      metaTitle: 'Capacity Planning pour PI Planning | AirSaaS',
      metaDescription: 'Visualisez charge vs capacité par équipe et par PI. Alertes de surcharge, T-shirt sizing, scénarios A/B/C.',
    },
  },
  {
    title: 'Flash Report',
    slug: 'flash-report',
    featureKey: 'flash-report',
    body: [
      {
        __component: 'blocks.hero-section',
        headline: 'Reporting en 1 clic',
        subheadline: 'Génération automatique de rapports Jira-to-dirigeants. Fini les 3 semaines de reporting.',
        primaryCta: { label: 'Demander une démo', url: '/fr/contact', variant: 'primary' },
      },
      {
        __component: 'blocks.cta-section',
        title: 'Passez de 3 semaines à 3 minutes',
        primaryCta: { label: 'Demander une démo', url: '/fr/contact', variant: 'primary' },
        backgroundVariant: 'gradient',
      },
    ],
    seo: {
      metaTitle: 'Flash Report - Reporting 1 clic | AirSaaS',
      metaDescription: 'Reporting automatique de Jira aux dirigeants en 1 clic. Personnalisable par audience, historique des versions.',
    },
  },
  {
    title: 'Suivi PI Continu',
    slug: 'suivi-pi-continu',
    featureKey: 'continuous-pi-tracking',
    body: [
      {
        __component: 'blocks.hero-section',
        headline: 'Le PI ne s\'arrête pas après 2 jours',
        subheadline: 'Suivi permanent des objectifs PI. Taux de delivery, blockers, amélioration cycle par cycle.',
        primaryCta: { label: 'Demander une démo', url: '/fr/contact', variant: 'primary' },
      },
      {
        __component: 'blocks.cta-section',
        title: 'Suivez vos PI en continu',
        primaryCta: { label: 'Demander une démo', url: '/fr/contact', variant: 'primary' },
        backgroundVariant: 'dark',
      },
    ],
    seo: {
      metaTitle: 'Suivi PI Continu | AirSaaS',
      metaDescription: 'Visibilité permanente sur les objectifs PI. Taux de delivery, identification des blockers, amélioration continue.',
    },
  },
  {
    title: 'Fonctionnalités IA',
    slug: 'fonctionnalites-ia',
    featureKey: 'ai-features',
    body: [
      {
        __component: 'blocks.hero-section',
        headline: 'L\'IA au service du PI Planning',
        subheadline: 'Découpage d\'initiatives basé sur la vélocité historique. Comparaison de scénarios A/B/C. Décisions tracées et documentées.',
        primaryCta: { label: 'Demander une démo', url: '/fr/contact', variant: 'primary' },
      },
      {
        __component: 'blocks.cta-section',
        title: 'Passez aux décisions data-driven',
        primaryCta: { label: 'Demander une démo', url: '/fr/contact', variant: 'primary' },
        backgroundVariant: 'gradient',
      },
    ],
    seo: {
      metaTitle: 'IA pour PI Planning - Scénarios et découpage | AirSaaS',
      metaDescription: 'Découpage d\'initiatives par IA basé sur la vélocité historique. Comparaison de scénarios, décisions data-driven.',
    },
  },
];

async function main() {
  console.log('Importing product pages...');
  for (const page of productPages) {
    await createEntry({ contentType: 'product-pages', data: page });
    await delay();
  }
  console.log(`${productPages.length} product pages imported successfully!`);
}

main().catch(console.error);
