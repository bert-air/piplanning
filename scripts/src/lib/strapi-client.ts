import 'dotenv/config';

const STRAPI_URL = process.env.STRAPI_URL;
const STRAPI_ADMIN_TOKEN = process.env.STRAPI_ADMIN_TOKEN;

if (!STRAPI_URL || !STRAPI_ADMIN_TOKEN) {
  throw new Error('STRAPI_URL and STRAPI_ADMIN_TOKEN must be set in .env');
}

interface CreateOptions {
  contentType: string;
  data: Record<string, unknown>;
  locale?: string;
}

export async function createEntry({ contentType, data, locale = 'fr' }: CreateOptions) {
  const url = `${STRAPI_URL}/api/${contentType}`;

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${STRAPI_ADMIN_TOKEN}`,
    },
    body: JSON.stringify({ data: { ...data, locale } }),
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Failed to create ${contentType}: ${res.status} ${error}`);
  }

  const result = await res.json();
  console.log(`  Created ${contentType}: ${data.title || data.name || 'entry'} (ID: ${result.data?.documentId || result.data?.id})`);
  return result.data;
}

export async function updateSingleType(contentType: string, data: Record<string, unknown>, locale = 'fr') {
  const url = `${STRAPI_URL}/api/${contentType}`;

  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${STRAPI_ADMIN_TOKEN}`,
    },
    body: JSON.stringify({ data: { ...data, locale } }),
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Failed to update ${contentType}: ${res.status} ${error}`);
  }

  const result = await res.json();
  console.log(`  Updated ${contentType} (${locale})`);
  return result.data;
}

// Small delay to respect rate limits
export function delay(ms = 500) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
