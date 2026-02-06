import { execSync } from 'child_process';

async function main() {
  console.log('=== PI Planning Content Import ===\n');

  console.log('Step 1: Importing homepage...');
  execSync('npx tsx src/import-homepage.ts', { stdio: 'inherit' });

  console.log('\nStep 2: Importing product pages...');
  execSync('npx tsx src/import-product-pages.ts', { stdio: 'inherit' });

  console.log('\nStep 3: Importing blog posts...');
  execSync('npx tsx src/import-blog-posts.ts', { stdio: 'inherit' });

  console.log('\n=== All content imported successfully! ===');
  console.log('Next steps:');
  console.log('  1. Review content in Strapi admin panel');
  console.log('  2. Check AI translations for EN/DE/ES');
  console.log('  3. Publish all locales');
}

main().catch(console.error);
