'use client'

import { useState, useEffect, useRef } from 'react'

type Slide = {
  title: string
  text: string
  list?: string[]
}

const slides: Slide[] = [
  {
    title: 'Что такое Qatar Financial Centre?',
    text: 'QFC — это специальная экономическая финансовая зона в Катаре, созданная в 2005 году. Работает по английскому общему праву (Common Law), имеет собственного регулятора QFCRA и отдельные суды. Позволяет компаниям из разных стран регистрировать бизнес с 100% иностранным владением.',
  },
  {
    title: 'Идеально для холдинговых структур',
    text: 'QFC — одна из немногих юрисдикций, где холдинговая компания может получать доходы из-за рубежа полностью без налога. Корпоративный налог 10% применяется только к прибыли, полученной в Катаре, а все зарубежные поступления — дивиденды, проценты, роялти — исключены из налоговой базы. Дополнительно действует participation exemption: дивиденды от дочерних компаний и прибыль от продажи их акций освобождены от налога.',
    list: [
      '0% налог на зарубежную прибыль — доходы из других стран не облагаются корпоративным налогом в Катаре',
      '0% налог на дивиденды — все полученные дивиденды освобождены от налога',
      'Participation exemption — прирост от продажи квалифицирующих акций дочерних компаний не облагается налогом',
      '0% withholding tax — на выплату дивидендов, процентов и роялти',
      'Нет ограничений на репатриацию — 100% вывода прибыли',
      '80+ соглашений об избежании двойного налогообложения — доступ к сети DTA Катара',
    ],
  },
  {
    title: 'Какие преимущества?',
    text: '0% налог на иностранную прибыль, 100% иностранное владение, Common Law, 80+ соглашений об избежании двойного налогообложения, отсутствие налога у источника, стратегическое положение между Азией, Европой и Африкой, стабильная экономика Катара.',
  },
]

// Дублируем слайды: [клон последнего, ...оригиналы, клон первого]
const loopedSlides = [slides[slides.length - 1], ...slides, slides[0]]

export default function Overview() {
  // Начинаем с индекса 1 — это первый настоящий слайд
  const [index, setIndex] = useState(1)
  const [paused, setPaused] = useState(false)
  const [dragStartX, setDragStartX] = useState<number | null>(null)
  const [dragOffset, setDragOffset] = useState(0)
  const [noTransition, setNoTransition] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Автопрокрутка
  useEffect(() => {
    if (paused || dragStartX !== null) return

    timerRef.current = setInterval(() => {
      setIndex((prev) => prev + 1)
    }, 5000)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [paused, dragStartX])

  // Обработка бесконечности: если вышли за пределы — прыгаем без анимации
  useEffect(() => {
    if (index === 0) {
      setTimeout(() => {
        setNoTransition(true)
        setIndex(slides.length)
      }, 500)
    } else if (index === loopedSlides.length - 1) {
      setTimeout(() => {
        setNoTransition(true)
        setIndex(1)
      }, 500)
    }
  }, [index])

  // Возвращаем анимацию после «прыжка»
  useEffect(() => {
    if (noTransition) {
      const t = setTimeout(() => setNoTransition(false), 50)
      return () => clearTimeout(t)
    }
  }, [noTransition])

  const handlePointerDown = (e: React.PointerEvent) => {
    setDragStartX(e.clientX)
    setDragOffset(0)
    ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    if (dragStartX === null) return
    setDragOffset(e.clientX - dragStartX)
  }

  const handlePointerUp = (e: React.PointerEvent) => {
    if (dragStartX === null) return

    const offset = e.clientX - dragStartX
    const threshold = 50

    if (offset < -threshold) {
      setIndex((prev) => prev + 1)
    } else if (offset > threshold) {
      setIndex((prev) => prev - 1)
    }

    setDragStartX(null)
    setDragOffset(0)
    ;(e.target as HTMLElement).releasePointerCapture(e.pointerId)
  }

  // Точки: переводим «реальный» индекс (0..2) в «ленточный» (1..3)
  const realIndex = (index - 1 + slides.length) % slides.length

  const goTo = (i: number) => setIndex(i + 1)

  const translateX = `calc(-${index * 100}% + ${dragOffset}px)`

  return (
    <section
      className="relative mt-40 w-full overflow-hidden rounded-3xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overview-bg" />

      <div
        className="overflow-hidden rounded-2xl bg-white select-none cursor-grab active:cursor-grabbing"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div
          className={`flex ${dragStartX === null && !noTransition ? 'transition-transform duration-500 ease-in-out' : ''}`}
          style={{ transform: `translateX(${translateX})` }}
        >
          {loopedSlides.map((slide, i) => (
            <div
              key={i}
              className="w-full shrink-0 px-8 py-20 md:px-20 md:py-32"
            >
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-8 md:gap-16 items-start">
                <div>
                  <h3 className="text-4xl md:text-6xl font-semibold text-violet-700 leading-tight">
                    {slide.title}
                  </h3>
                </div>

                <div>
                  <p className="text-gray-600 leading-relaxed md:text-lg">
                    {slide.text}
                  </p>
                  {slide.list && (
                    <ul className="mt-6 space-y-3">
                      {slide.list.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-600 md:text-lg">
                          <span className="mt-2 size-2 shrink-0 rounded-full bg-violet-700"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Точки-индикаторы */}
      <div className="absolute bottom-6 right-6 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`dot-indicator cursor-pointer h-3 rounded-full transition-all duration-300 ${
              realIndex === i ? 'w-12' : 'w-3'
            }`}
            aria-label={`Слайд ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}