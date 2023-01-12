import LangSlice, { actionsLanguage } from '../../store/reducers/Language/LangSlice';

describe('LangSlice', () => {
  it('should change language state', () => {
    const state = {
      lang: 'en',
    };
    expect(LangSlice(state, actionsLanguage.changeLang('ru'))).toEqual({ lang: 'ru' });
  });
});
