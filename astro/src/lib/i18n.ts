export const LOCALES = ['fr', 'en', 'de', 'es'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'fr';

const uiTranslations: Record<Locale, Record<string, string>> = {
  fr: {
    'nav.product': 'Produit',
    'nav.guides': 'Guides',
    'nav.blog': 'Blog',
    'nav.demo': 'Demander une démo',
    'nav.comparisons': 'Comparaisons',
    'blog.readMore': 'Lire la suite',
    'blog.minutes': 'min de lecture',
    'blog.backToList': 'Retour au blog',
    'blog.category': 'Catégorie',
    'footer.legal': 'Mentions légales',
    'footer.privacy': 'Politique de confidentialité',
    'footer.product': 'Produit',
    'footer.resources': 'Ressources',
    'contact.title': 'Demander une démo',
    'contact.description': 'Découvrez comment AirSaaS peut transformer votre PI Planning.',
  },
  en: {
    'nav.product': 'Product',
    'nav.guides': 'Guides',
    'nav.blog': 'Blog',
    'nav.demo': 'Book a demo',
    'nav.comparisons': 'Comparisons',
    'blog.readMore': 'Read more',
    'blog.minutes': 'min read',
    'blog.backToList': 'Back to blog',
    'blog.category': 'Category',
    'footer.legal': 'Legal notices',
    'footer.privacy': 'Privacy policy',
    'footer.product': 'Product',
    'footer.resources': 'Resources',
    'contact.title': 'Book a demo',
    'contact.description': 'Discover how AirSaaS can transform your PI Planning.',
  },
  de: {
    'nav.product': 'Produkt',
    'nav.guides': 'Leitfäden',
    'nav.blog': 'Blog',
    'nav.demo': 'Demo buchen',
    'nav.comparisons': 'Vergleiche',
    'blog.readMore': 'Weiterlesen',
    'blog.minutes': 'Min. Lesezeit',
    'blog.backToList': 'Zurück zum Blog',
    'blog.category': 'Kategorie',
    'footer.legal': 'Impressum',
    'footer.privacy': 'Datenschutz',
    'footer.product': 'Produkt',
    'footer.resources': 'Ressourcen',
    'contact.title': 'Demo buchen',
    'contact.description': 'Entdecken Sie, wie AirSaaS Ihr PI Planning transformieren kann.',
  },
  es: {
    'nav.product': 'Producto',
    'nav.guides': 'Guías',
    'nav.blog': 'Blog',
    'nav.demo': 'Solicitar demo',
    'nav.comparisons': 'Comparaciones',
    'blog.readMore': 'Leer más',
    'blog.minutes': 'min de lectura',
    'blog.backToList': 'Volver al blog',
    'blog.category': 'Categoría',
    'footer.legal': 'Aviso legal',
    'footer.privacy': 'Política de privacidad',
    'footer.product': 'Producto',
    'footer.resources': 'Recursos',
    'contact.title': 'Solicitar demo',
    'contact.description': 'Descubra cómo AirSaaS puede transformar su PI Planning.',
  },
};

export function t(locale: Locale, key: string): string {
  return uiTranslations[locale]?.[key] ?? uiTranslations[DEFAULT_LOCALE][key] ?? key;
}

export function getLocalePath(locale: Locale, path: string): string {
  return `/${locale}${path.startsWith('/') ? path : '/' + path}`;
}

export function getAlternateLocales(
  currentLocale: Locale,
  currentPath: string,
): Array<{ locale: Locale; href: string }> {
  return LOCALES.filter((l) => l !== currentLocale).map((locale) => ({
    locale,
    href: `/${locale}${currentPath.replace(/^\/[a-z]{2}/, '')}`,
  }));
}

export function isValidLocale(locale: string): locale is Locale {
  return LOCALES.includes(locale as Locale);
}
