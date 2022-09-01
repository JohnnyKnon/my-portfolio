
import { createI18n } from 'vue-i18n'
import en from './locales/english.json'
import ko from './locales/korean.json'
import jp from './locales/japanese.json'

export default createI18n({
  locale:'ko',
  fallbackLocale:'en',
  messages: {ko, en, jp}
})