import { updateSingleType } from './lib/strapi-client.js';

const homepageData = {
  body: [
    {
      __component: 'blocks.hero-section',
      headline: 'PI Planning : la vue business qui manque à Jira',
      subheadline: 'Synchronisez les features Jira, nettoyez la donnée, offrez une visibilité claire aux métiers et aux dirigeants. Devenez opérationnel en 1 PI, pas en 6 mois.',
      primaryCta: {
        label: 'Demander une démo',
        url: '/fr/contact',
        variant: 'primary',
      },
      secondaryCta: {
        label: 'Découvrir en 5 min',
        url: '#video',
        variant: 'secondary',
      },
      trustBadges: [
        { label: '100+ clients' },
        { label: 'Opérationnel en 1 PI' },
        { label: '-80% temps de reporting' },
      ],
    },
    {
      __component: 'blocks.metrics-section',
      metrics: [
        { value: '0', label: 'PowerBI à maintenir' },
        { value: '1 PI', label: 'pour être opérationnel' },
        { value: '-80%', label: 'temps de reporting' },
        { value: '100+', label: 'clients entreprise' },
      ],
    },
    {
      __component: 'blocks.pain-points-section',
      sectionTitle: 'Le quotidien du RTE aujourd\'hui',
      items: [
        { number: 1, title: 'Le Program Board vit sur Miro', description: 'Pendant 2 jours, puis c\'est le chaos.' },
        { number: 2, title: 'Jira est sur-customisé', description: 'Configurer Jira devient le métier au lieu du métier de RTE.' },
        { number: 3, title: 'Les rapports Jira sont mauvais', description: 'Données incomplètes, rapports peu fiables.' },
        { number: 4, title: 'Les retards causent des pertes', description: 'Données perdues et workarounds manuels.' },
        { number: 5, title: 'Les métiers ne vont pas dans Jira', description: 'L\'outil est trop technique pour les sponsors.' },
        { number: 6, title: 'Le RTE devient expert Excel', description: 'Au lieu d\'être expert delivery.' },
      ],
    },
    {
      __component: 'blocks.feature-section',
      tagline: 'Connecteur Jira',
      title: 'Import → Nettoyage → Vue claire',
      description: '<p>Import natif des features Jira. Le nettoyage se fait dans AirSaaS, pas dans Jira. Visibilité automatique sur la consommation et la charge.</p>',
      imagePosition: 'right',
      bulletPoints: [
        { text: 'Import natif des features Jira' },
        { text: 'Nettoyage dans AirSaaS, pas dans Jira' },
        { text: 'Synchronisation continue' },
      ],
    },
    {
      __component: 'blocks.feature-section',
      tagline: 'Vue Business',
      title: 'Synchronisez les features, masquez le bruit technique',
      description: '<p>Les features Jira se synchronisent de manière bidirectionnelle. Les tickets et stories restent cachés des dirigeants. Agrégation en initiatives en langage métier.</p>',
      imagePosition: 'left',
      bulletPoints: [
        { text: 'Synchronisation bidirectionnelle avec Jira' },
        { text: 'Tickets et stories masqués aux dirigeants' },
        { text: 'Cadrage adapté aux sponsors' },
      ],
    },
    {
      __component: 'blocks.feature-section',
      tagline: 'Capacity Planning',
      title: 'Peut-on prendre ce projet ?',
      description: '<p>Visualisation charge vs capacité par équipe et par PI. Alertes automatiques de surcharge. T-shirt sizing (S, M, L, XL). Comparaison de scénarios.</p>',
      imagePosition: 'right',
      bulletPoints: [
        { text: 'Charge vs capacité par équipe/PI' },
        { text: 'Alertes automatiques de surcharge' },
        { text: 'T-shirt sizing et scénarios A/B/C' },
      ],
    },
    {
      __component: 'blocks.before-after-table',
      title: 'Avant / Après AirSaaS',
      beforeLabel: 'Avant (bricolage)',
      afterLabel: 'Après (AirSaaS)',
      rows: [
        { metric: 'PI Planning', beforeValue: 'Miro temporaire', afterValue: 'Suivi PI dynamique permanent' },
        { metric: 'Reporting', beforeValue: 'PowerBI + 3 semaines', afterValue: 'Flash Report en 1 clic' },
        { metric: 'Capacity', beforeValue: 'Excel manuel', afterValue: 'Visibilité charge/équipe/PI' },
        { metric: 'Sponsors', beforeValue: 'Rien pour les métiers', afterValue: 'Roadmap partageable' },
        { metric: 'Temps reporting', beforeValue: '3 semaines', afterValue: '3 minutes' },
      ],
    },
    {
      __component: 'blocks.competitor-comparison',
      sectionTitle: 'Pourquoi pas les alternatives ?',
      competitors: [
        { name: 'Jira Align', weakness: '6 mois de déploiement. Tarif excessif. Système complexe utilisé uniquement par le RTE.' },
        { name: 'PowerBI + Jira', weakness: 'Maintenance infinie. Casse à chaque changement de workflow. Nécessite une expertise BI.' },
        { name: 'piplanning.io', weakness: 'Excellent pour l\'événement PI Planning. Aucun suivi continu ni visibilité dirigeants.' },
      ],
      airsaasAdvantage: 'AirSaaS : 1 PI pour être opérationnel, tarif accessible, utilisé au quotidien par les équipes ET les dirigeants.',
    },
    {
      __component: 'blocks.cta-section',
      title: 'Prêt à transformer votre PI Planning ?',
      description: 'Découvrez comment AirSaaS peut vous faire gagner du temps et de la visibilité.',
      primaryCta: {
        label: 'Demander une démo',
        url: '/fr/contact',
        variant: 'primary',
      },
      backgroundVariant: 'gradient',
    },
  ],
  seo: {
    metaTitle: 'PI Planning : la vue business qui manque à Jira | AirSaaS',
    metaDescription: 'Synchronisez Jira, nettoyez la donnée, offrez une visibilité claire aux métiers. Capacity planning, flash reports, roadmap partagée. Opérationnel en 1 PI.',
  },
};

async function main() {
  console.log('Importing homepage content...');
  await updateSingleType('homepage', homepageData);
  console.log('Homepage imported successfully!');
}

main().catch(console.error);
