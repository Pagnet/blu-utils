import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <img src='https://portal.useblu.com.br/favicon.svg' width={30} alt='logo' />,
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
