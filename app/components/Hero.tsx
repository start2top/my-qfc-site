'use client'

import { useState } from 'react'
import Modal from './Modal'
import CtaButton from './CtaButton'

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
<section className="hero relative flex flex-col items-center justify-center h-svh overflow-hidden">

        <video autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10">
          <source src="/video/doha.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/40 -z-10"></div>

        <div className="flex flex-wrap items-center justify-center p-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm">
          <div className="flex items-center -space-x-3">
            <img className="size-7 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50" alt="user1"/>
            <img className="size-7 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50" alt="user2"/>
            <img className="size-7 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop" alt="user3"/>
          </div>
          <p className="pl-2 pr-3 text-white text-sm">Более 120 компаний уже получили лицензию QFC</p>
        </div>

        <h1 className="text-4xl md:text-6xl/18 text-center font-semibold max-w-2xl mt-5 text-white">
          Регистрация бизнеса в Qatar Financial Centre под ключ
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <CtaButton />
        </div>

      </section>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}