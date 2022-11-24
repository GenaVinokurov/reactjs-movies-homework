import React from 'react';
import { IntlProvider } from 'react-intl';
import { useAppSelector } from '../store/store';
import messages from './messages';

type ProviderProp = {
  children: React.ReactNode;
};

function LocalizationProvider({ children }: ProviderProp) {
  const { lang } = useAppSelector((state) => state.language);
  return (
    <IntlProvider locale={lang} messages={messages[lang]}>
      {children}
    </IntlProvider>
  );
}

export default LocalizationProvider;
