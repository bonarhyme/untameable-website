"use client";

import { I18nextProvider } from "react-i18next";
import initTranslations from "@/app/i18n";
import { createInstance } from "i18next";
import React, { PropsWithChildren } from "react";

export type TranslationsProviderType = PropsWithChildren & {
  locale: string;
  namespaces: string[];
  resources: any;
};

export default function TranslationsProvider({
  children,
  locale,
  namespaces,
  resources,
}: TranslationsProviderType) {
  const i18n = createInstance();

  initTranslations(locale, namespaces, i18n, resources);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
