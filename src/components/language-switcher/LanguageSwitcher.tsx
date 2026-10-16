import { useLanguage } from '../../i18n/LanguageContext'
import type { Language } from '../../i18n/translations'
import './LanguageSwitcher.css'

const languages: Record<Language, { flag: string; code: string }> = {
  en: { flag: '🇬🇧', code: 'EN' },
  es: { flag: '🇪🇸', code: 'ES' },
}

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => setLanguage(language === 'en' ? 'es' : 'en')

  // El tooltip describe la acción en el idioma actual de la interfaz.
  const title = language === 'en' ? 'Switch to Spanish' : 'Cambiar a inglés'

  return (
    <button
      type="button"
      className="language-switcher"
      onClick={toggleLanguage}
      title={title}
      aria-label={title}
    >
      <span className="language-flag" aria-hidden="true">{languages[language].flag}</span>
      <span className="language-code">{languages[language].code}</span>
    </button>
  )
}

export default LanguageSwitcher

