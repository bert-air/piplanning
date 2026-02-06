import { createEntry, delay } from './lib/strapi-client.js';

const blogPosts = [
  {
    title: 'Les 10 meilleures pratiques du RTE en PI Planning',
    slug: 'meilleures-pratiques-rte-pi-planning',
    excerpt: 'Découvrez les pratiques essentielles pour les Release Train Engineers lors du PI Planning.',
    content: '<h2>Introduction</h2><p>Le rôle du Release Train Engineer (RTE) est central dans le PI Planning. Voici les 10 pratiques qui font la différence.</p><h2>1. Préparer le PI Planning en amont</h2><p>Un PI Planning réussi se prépare 2 à 3 semaines à l\'avance. Le RTE doit s\'assurer que le backlog est priorisé, que les dépendances sont identifiées, et que les équipes ont les informations nécessaires.</p><h2>2. Faciliter, ne pas diriger</h2><p>Le RTE est un facilitateur, pas un chef de projet. Son rôle est de créer les conditions pour que les équipes s\'auto-organisent et prennent leurs engagements.</p>',
    author: 'Équipe AirSaaS',
    readingTime: 8,
    seo: {
      metaTitle: '10 Best Practices du RTE en PI Planning | AirSaaS',
      metaDescription: 'Guide complet des meilleures pratiques pour les Release Train Engineers lors du PI Planning SAFe.',
    },
  },
  {
    title: 'Capacity Planning : comment éviter la surcharge des équipes',
    slug: 'capacity-planning-eviter-surcharge',
    excerpt: 'Le capacity planning est la clé pour des engagements réalistes en PI Planning. Voici comment le maîtriser.',
    content: '<h2>Pourquoi le capacity planning est essentiel</h2><p>Sans capacity planning, les équipes s\'engagent sur des volumes irréalistes. Le résultat : des objectifs non atteints, de la frustration, et une perte de confiance des sponsors.</p><h2>La méthode T-shirt sizing</h2><p>Le T-shirt sizing (S, M, L, XL) permet d\'estimer rapidement la charge sans entrer dans le détail des story points. C\'est une approche pragmatique qui fonctionne particulièrement bien en PI Planning.</p>',
    author: 'Équipe AirSaaS',
    readingTime: 6,
    seo: {
      metaTitle: 'Capacity Planning : éviter la surcharge en PI Planning | AirSaaS',
      metaDescription: 'Maîtrisez le capacity planning pour des engagements réalistes. T-shirt sizing, visualisation charge vs capacité.',
    },
  },
];

async function main() {
  console.log('Importing blog posts...');
  for (const post of blogPosts) {
    await createEntry({ contentType: 'blog-posts', data: post });
    await delay();
  }
  console.log(`${blogPosts.length} blog posts imported successfully!`);
}

main().catch(console.error);
