import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { translations, type Language, type Translation } from './translations'

interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
  t: Translation
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

const STORAGE_KEY = 'portfolio-language'

// Por defecto el sitio se muestra en inglés.
const getInitialLanguage = (): Language => {
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === 'es' || stored === 'en' ? stored : 'en'
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage)

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage)
    window.localStorage.setItem(STORAGE_KEY, newLanguage)
  }

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = (): LanguageContextValue => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
