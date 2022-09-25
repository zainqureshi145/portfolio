import { useEffect, useState } from 'react'
import { BsSun, BsMoon } from "react-icons/bs";

const themes = ['light', 'dark']

export default function ThemeToggle() {
  const [isMounted, setIsMounted] = useState(false)
  const [theme, setTheme] = useState(() => {
    if (import.meta.env.SSR) {
      return undefined
    }
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme')
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  })
  const toggleTheme = () => {
    const t = theme === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', t)
    setTheme(t)
  }

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'light') {
      root.classList.remove('dark')
    } else {
      root.classList.add('dark')
    }
  }, [theme])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return isMounted ? (
    <div className="inline-flex relative items-center p-[1px] rounded-3xl bg-indigo-300 dark:bg-orange-300 transition-all duration-1000">
      {themes.map(t => {
        const checked = t === theme
        return (
          <button
            key={t}
            className={`${
              checked ? 'bg-indigo-400 dark:bg-zinc-500 text-black transition-all duration-1000' : ''
            } cursor-pointer rounded-3xl p-2`}
            onClick={toggleTheme}
          >
            {t === 'light' ? <BsSun /> : <BsMoon />}
          </button>
        )
      })}
    </div>
  ) : (
    <div />
  )
}