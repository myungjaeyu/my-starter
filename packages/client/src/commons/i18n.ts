import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import koJSON from '@assets/i18n/ko.json'
import mnJSON from '@assets/i18n/mn.json'

/* https://github.com/i18next/i18next
 */
i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            ko: {
                translations: koJSON
            },
            mn: {
                translations: mnJSON
            }
        },
        fallbackLng: 'ko',
        ns: ['translations'],
        defaultNS: 'translations'
    })

export default i18n
