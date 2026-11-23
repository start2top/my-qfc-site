'use client'

import { useState } from 'react'
import Modal from './Modal'

type CtaButtonProps = {
  label?: string
  className?: string
  onOpen?: () => void
}

export default function CtaButton({ label = 'Оставить заявку' }: CtaButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="cursor-pointer rounded-full bg-violet-700 px-8 py-3 text-lg font-semibold text-white transition hover:opacity-90 active:scale-[0.98]"
      >
        {label}
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}