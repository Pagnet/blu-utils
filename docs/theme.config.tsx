import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: 'Blu Utils',
  project: {
    link: 'https://github.com/Pagnet/blu-utils',
  },
  docsRepositoryBase: 'https://github.com/Pagnet/blu-utils',
  footer: {
    text: 'Blu Pagamentos',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Blu Utils',
    };
  },
  head: (
    <>
      <link rel="icon" href="https://portal.useblu.com.br/favicon.ico" sizes="any" />
    </>
  ),
};

export default config;
