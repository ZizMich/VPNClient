// import I18n from 'i18n-js';
import { getLocales} from 'expo-localization';
import {I18n} from 'i18n-js';
import en from './langs/en.json';
import ru from './langs/ru.json';
import de from './langs/de.json';
import ja from './langs/ja.json';
import kr from './langs/kr.json';
const i18n = new I18n();

// Function to simplify locale format (e.g., "en-GB" to "en")
const simplifyLocale = (locale: string) => locale.split('-')[0].toLowerCase();
export function setLoacalLanguage(){
// Attempt to get the browser's preferred languages if available
const browserLocales = typeof navigator !== 'undefined' ? navigator.languages : undefined;

// Process the first browser locale to simplify its format, or fallback to the first system locale, or default to 'en'
i18n.locale = browserLocales ? simplifyLocale(browserLocales[0]) : simplifyLocale(getLocales()[0].languageCode ?? "") || 'en';
}
i18n.translations = { en, ru, de , ja, kr};

export default i18n;