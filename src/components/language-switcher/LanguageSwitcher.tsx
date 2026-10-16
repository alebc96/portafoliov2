import { useLanguage } from '../../i18n/LanguageContext'
import type { Language } from '../../i18n/translations'
import './LanguageSwitcher.css'

const languages: { code: Language; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
]

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="language-switcher">
      {languages.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          className={language === code ? 'lang-btn active' : 'lang-btn'}
          onClick={() => setLanguage(code)}
          aria-pressed={language === code}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

export default LanguageSwitcher
