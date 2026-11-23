import { ReactNode } from 'react'

// ===== Волна-разделитель =====
// SVG-волна, прижата к низу секции.
export function WaveDivider() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-0 right-0 -bottom-px w-full leading-[0]"
    >
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="block w-full h-[40px] md:h-[60px]"
      >
        <path
          d="M0,30 C240,60 480,0 720,20 C960,40 1200,60 1440,30 L1440,0 L0,0 Z"
          fill="rgba(168, 159, 145, 0.1)"
        />
      </svg>
    </div>
  )
}

// ===== Стиль цветных секций =====
export const coloredSectionStyle: React.CSSProperties = {
  backgroundColor: 'rgba(168, 159, 145, 0.1)',
  borderTop: '1px solid rgba(168, 159, 145, 0.2)',
}

// ===== Цветная секция =====
// Рендерит <div> (обёртка), а не <section>, чтобы не создавать
// вложенные <section>, если внутри есть свой <section>.
type ColoredSectionProps = {
  children: ReactNode
  index: number
  className?: string
}

export function ColoredSection({ children, index, className = '' }: ColoredSectionProps) {
  const isColored = index % 2 === 1

  return (
    <div
      className={`relative ${className}`}
      style={isColored ? coloredSectionStyle : undefined}
    >
      {children}
      {isColored && <WaveDivider />}
    </div>
  )
}