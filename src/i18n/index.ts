import { setupI18n, type I18n } from '@lingui/core';
import { messages as en } from '../locales/en.po';
import { messages as pl } from '../locales/pl.po';

export const LANGS = ['en', 'pl'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'en';
export const LANG_NAMES: Record<Lang, string> = { en: 'English', pl: 'Polski' };
export const OG_LOCALE: Record<Lang, string> = { en: 'en_US', pl: 'pl_PL' };

export const isLang = (x: unknown): x is Lang => typeof x === 'string' && (LANGS as readonly string[]).includes(x);

const catalogs = { en, pl };
const cache: Partial<Record<Lang, I18n>> = {};

export function i18nFor(lang: Lang): I18n {
  return (cache[lang] ??= setupI18n({ locale: lang, messages: { [lang]: catalogs[lang] } }));
}

export type T = (id: string, values?: Record<string, unknown>) => string;

/** Translator bound to a locale. The English source string is the message id. */
export function useT(lang: Lang): T {
  const i = i18nFor(lang);
  return (id, values) => i._(id, values);
}

/** `/en/results`, `/pl` … `path` must start with "/" (or be empty for the home page). */
export const href = (lang: Lang, path = '') => `/${lang}${path === '/' ? '' : path}`;

/** Path without its locale prefix: "/pl/creeds/nicene" → "/creeds/nicene". */
export function stripLang(pathname: string) {
  const m = pathname.match(/^\/(en|pl)(?=\/|$)(.*)$/);
  return m ? m[2] || '/' : pathname;
}

/** getStaticPaths helper for pages with no other params. */
export const langPaths = () => LANGS.map((lang) => ({ params: { lang } }));
