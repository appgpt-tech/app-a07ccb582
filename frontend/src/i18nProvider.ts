//Source code generated by AppGPT (www.appgpt.tech)
import { mergeTranslations } from 'ra-core';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import enOriginal from 'ra-language-english';
import frOriginal from 'ra-language-french';

const enResources = {
  resources: {
    Brands: {
      name: 'Brands',
      fields: {
        name: 'Name',
        logo: 'Logo',
        category: 'Category',
        foundingYear: 'Founding Year',
        currentStatus: 'Current Status',
        id: 'id',
      },
    },
    Wallpapers: {
      name: 'Wallpapers',
      fields: {
        image: 'Image',
        title: 'Title',
        description: 'Description',
        brand: 'Brand',
        categories: 'Categories',
        id: 'id',
      },
    },
    Categories: { name: 'Categories', fields: { name: 'Name', id: 'id' } },
  },
};
const frResources = {
  resources: {
    Brands: {
      name: 'Brands (fr)',
      fields: {
        name: 'Name (fr)',
        logo: 'Logo (fr)',
        category: 'Category (fr)',
        foundingYear: 'Founding Year (fr)',
        currentStatus: 'Current Status (fr)',
        id: 'id',
      },
    },
    Wallpapers: {
      name: 'Wallpapers (fr)',
      fields: {
        image: 'Image (fr)',
        title: 'Title (fr)',
        description: 'Description (fr)',
        brand: 'Brand (fr)',
        categories: 'Categories (fr)',
        id: 'id',
      },
    },
    Categories: {
      name: 'Categories (fr)',
      fields: { name: 'Name (fr)', id: 'id' },
    },
  },
};

const en = mergeTranslations(enOriginal, enResources);
const fr = mergeTranslations(frOriginal, frResources);

const translations = { en, fr };
export const i18nProvider = polyglotI18nProvider(
  (locale) => translations[locale],
  'en', //default locale
  [
    { locale: 'en', name: 'English' },
    { locale: 'fr', name: 'Français' },
  ],
);
