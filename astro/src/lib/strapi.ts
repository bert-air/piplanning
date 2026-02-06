interface FetchApiOptions {
  endpoint: string;
  query?: Record<string, string>;
  locale?: string;
  wrappedByKey?: string;
  wrappedByList?: boolean;
}

export async function fetchApi<T>({
  endpoint,
  query,
  locale,
  wrappedByKey,
  wrappedByList,
}: FetchApiOptions): Promise<T> {
  if (endpoint.startsWith('/')) endpoint = endpoint.slice(1);

  const url = new URL(`${import.meta.env.STRAPI_URL}/api/${endpoint}`);

  if (locale) url.searchParams.append('locale', locale);
  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }

  const headers: HeadersInit = {};
  if (import.meta.env.STRAPI_TOKEN) {
    headers['Authorization'] = `Bearer ${import.meta.env.STRAPI_TOKEN}`;
  }

  const res = await fetch(url.toString(), { headers });
  if (!res.ok) throw new Error(`Strapi API error: ${res.status} ${res.statusText}`);

  let data = await res.json();
  if (wrappedByKey) data = data[wrappedByKey];
  if (wrappedByList) data = data[0];

  return data as T;
}

export async function fetchCollection<T>(
  contentType: string,
  locale: string,
  additionalQuery?: Record<string, string>,
): Promise<T[]> {
  return fetchApi<T[]>({
    endpoint: `${contentType}?populate=deep`,
    locale,
    query: additionalQuery,
    wrappedByKey: 'data',
  });
}

export async function fetchSingleType<T>(
  contentType: string,
  locale: string,
): Promise<T> {
  return fetchApi<T>({
    endpoint: `${contentType}?populate=deep`,
    locale,
    wrappedByKey: 'data',
  });
}

export function getStrapiMediaUrl(url: string): string {
  if (url.startsWith('http')) return url;
  return `${import.meta.env.STRAPI_URL}${url}`;
}
