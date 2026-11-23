'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Modal from './Modal'
import CtaButton from './CtaButton'

export default function Navbar() {
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false)
      } else {
        setVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <>
      {/* Навбар */}
      <nav
        className={`sticky top-0 z-50 flex w-full items-center justify-between bg-white/50 px-4 py-3.5 backdrop-blur-md md:px-16 lg:px-24 transition-transform duration-300 ${
          visible && !menuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Логотип */}
        <Link
          href="/"
          onClick={() => {
            setMenuOpen(false)
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="text-2xl font-bold text-indigo-600"
        >
          QFC Partner
        </Link>

        {/* Десктоп-меню */}
        <div className="hidden items-center space-x-7 text-gray-700 md:flex">
          <Link className="transition hover:text-black" href="/">Главная</Link>
          <Link className="transition hover:text-black" href="/services">Услуги</Link>
          <Link className="transition hover:text-black" href="/tax">Налоги</Link>
          <Link className="transition hover:text-black" href="/blog">Блог</Link>
          <Link className="transition hover:text-black" href="/roadmap">Roadmap</Link>
        </div>

        {/* Десктоп-кнопка */}
       <div className="hidden md:block">
          <CtaButton
            label="Узнать больше"
            className="rounded-full bg-indigo-600 px-8 py-2.5 font-medium text-white transition-opacity hover:opacity-90"
          />
        </div>

        {/* Бургер */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="transition active:scale-90 md:hidden"
          aria-label="Меню"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu size-6.5">
            {menuOpen ? (
              <>
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </>
            ) : (
              <>
                <path d="M4 5h16" />
                <path d="M4 12h16" />
                <path d="M4 19h16" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Мобильное меню */}
      <div
        className={`fixed top-0 right-0 z-40 w-full h-[40vh] flex flex-col items-center justify-center gap-3 bg-white/95 backdrop-blur-xl text-base font-medium md:hidden transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Кнопка закрытия */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 right-5 flex items-center justify-center size-10 rounded-full text-gray-500 hover:text-violet-700 hover:bg-gray-100 transition"
          aria-label="Закрыть меню"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        <Link onClick={() => setMenuOpen(false)} className="text-gray-800 hover:text-violet-700 transition" href="/">Главная</Link>
        <Link onClick={() => setMenuOpen(false)} className="text-gray-800 hover:text-violet-700 transition" href="/services">Услуги</Link>
        <Link onClick={() => setMenuOpen(false)} className="text-gray-800 hover:text-violet-700 transition" href="/tax">Налоги</Link>
        <Link onClick={() => setMenuOpen(false)} className="text-gray-800 hover:text-violet-700 transition" href="/blog">Блог</Link>
        <Link onClick={() => setMenuOpen(false)} className="text-gray-800 hover:text-violet-700 transition" href="/roadmap">Roadmap</Link>

        <CtaButton label="Узнать больше" className="hidden rounded-full bg-indigo-600 px-8 py-2.5 font-medium text-white transition hover:opacity-90 md:inline-block" />
      </div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}