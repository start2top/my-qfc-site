import { WaveDivider, coloredSectionStyle } from './WaveDivider'

const licences = [
  'Морское посредничество — судостроительные брокеры и агенты по морским перевозкам',
  'Оценка инвестиционных активов и классификация',
  'Головной офис компании — управление, казначейство, смежные функции',
  'Профессиональные услуги — аудит, бухгалтерия, налоги, юристы',
  'Холдинговая компания и управление трастами',
  'Управление компаниями и их создание',
]

type LicencesProps = {
  colored?: boolean
  wave?: boolean
  className?: string
}

export default function Licences({
  colored = false,
  wave = false,
  className = '',
}: LicencesProps) {
  return (
    <section
      className={`relative ${className}`}
      style={colored ? coloredSectionStyle : undefined}
    >
      <div className="max-w-5xl mx-auto px-4 py-16 md:py-20">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-center text-[32px] font-semibold">
            Виды лицензий в QFC
          </h2>
          <p className="mt-3 max-w-xs text-center text-gray-500 md:max-w-lg">
            Большинство видов деятельности не требует дополнительного регулирования QFCRA
          </p>
        </div>

        {/* Сетка карточек — 6 видов без доп. лицензии */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {licences.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-6 rounded-xl border border-gray-200 ring-1 ring-gray-300/60 ring-offset-2 ring-offset-white bg-white shadow-sm transition-all duration-300 ease-out hover:ring-2 hover:ring-violet-500/80 hover:border-violet-300"
            >
              <span className="mt-2 size-2 shrink-0 rounded-full bg-violet-700"></span>
              <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
            </div>
          ))}
        </div>

        {/* Акцентная карточка — финансовые сервисы */}
        <div className="mt-8 rounded-2xl border border-violet-200 ring-2 ring-violet-500/30 ring-offset-2 ring-offset-white bg-violet-50 p-8 md:p-10 transition-all duration-300 ease-out hover:ring-violet-500/60 hover:border-violet-300">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="mt-2 text-xl md:text-2xl font-semibold text-gray-800">
                Финансовые сервисы
              </h3>
              <p className="text-sm font-semibold uppercase tracking-wide text-violet-700">
                Требуют дополнительной лицензии
              </p>
              <p className="mt-2 text-gray-600 leading-relaxed md:text-lg">
                Банкинг, страхование, управление активами, брокерские услуги и другие виды финансовой деятельности требуют отдельного одобрения регулятора QFCRA.
              </p>
            </div>

            <span className="shrink-0 self-start md:self-center rounded-full bg-violet-700 px-5 py-2 text-sm font-medium text-white">
              QFCRA
            </span>
          </div>
        </div>
      </div>

      {wave && <WaveDivider />}
    </section>
  )
}