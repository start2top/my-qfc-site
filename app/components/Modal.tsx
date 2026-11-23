'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEsc)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!mounted || !isOpen) return null

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-[70vw] h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="h-full overflow-y-auto p-8 md:p-12">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 flex items-center justify-center size-10 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition cursor-pointer"
            aria-label="Закрыть"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>

          <h2 className="text-3xl md:text-4xl font-semibold text-violet-700">
            Оставить заявку
          </h2>
          <p className="mt-3 text-gray-500">
            Заполните форму, и мы свяжемся с вами в течение 24 часов.
          </p>

          <form className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">
                Имя <span className="text-violet-700">*</span>
              </label>
              <input type="text" required placeholder="Ваше имя"
                className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100 transition" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">
                Номер телефона <span className="text-violet-700">*</span>
              </label>
              <input type="tel" required placeholder="+XX XXX XXX XXXX"
                className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100 transition" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">
                Email <span className="text-violet-700">*</span>
              </label>
              <input type="email" required placeholder="you@company.com"
                className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100 transition" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">Гражданство</label>
              <input type="text" placeholder="Паспорт учредителя"
                className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100 transition" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">Новый бизнес или расширение</label>
              <select className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100 transition bg-white">
                <option value="">Выберите</option>
                <option value="new">Новый бизнес</option>
                <option value="expand">Расширение</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">Вид деятельности</label>
              <input type="text" placeholder="Консалтинг, IT, трейдинг..."
                className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100 transition" />
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-sm font-medium text-gray-700">Когда планируете сетап</label>
              <select className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100 transition bg-white">
                <option value="">Выберите</option>
                <option value="now">Сразу</option>
                <option value="2-4">2–4 месяца</option>
                <option value="year">Больше года</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-sm font-medium text-gray-700">
                Описание компании <span className="text-violet-700">*</span>
              </label>
              <textarea required rows={5} placeholder="Расскажите о вашем бизнесе, целях и планах в Катаре..."
                className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100 transition resize-none" />
            </div>

            <div className="md:col-span-2 mt-4">
              <button
                type="submit"
                className="w-full cursor-pointer rounded-full bg-violet-700 px-8 py-4 text-xl font-medium text-white transition hover:opacity-90 active:scale-[0.98]"
              >
                Отправить заявку
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>,
    document.body
  )
}