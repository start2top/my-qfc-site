import Link from 'next/link'
import Navbar from '../components/Navbar'
import CtaButton from '../components/CtaButton'
import { WaveDivider, coloredSectionStyle } from '../components/WaveDivider'


export default function RoadmapPage() {
  return (
    <>
      <Navbar />

      <main className="pt-20 md:pt-32 pb-20 md:pb-32">
        {/* Заголовок */}
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">🇶🇦</span>
            <h1 className="text-3xl md:text-5xl font-semibold text-violet-700">
              Регистрация в Катаре: QFC
            </h1>
          </div>

          <p className="mt-6 text-gray-600 leading-relaxed md:text-lg">
            Если рассматривать Катар, то стоимость регистрации компании будет выше, чем в некоторых других юрисдикциях. Но если говорить именно про <strong>Qatar Financial Centre (QFC)</strong>, здесь можно получить <strong>0% налогообложение</strong> на иностранную прибыль.
          </p>
        </div>

        {/* 1. Налоги — нечётная */}
        <section className="mt-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-violet-700">
              1. Налоги
            </h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-gray-200 ring-1 ring-gray-300/60 ring-offset-2 ring-offset-white p-6 bg-white shadow-sm transition-all duration-300 ease-out hover:ring-2 hover:ring-violet-500/80 hover:border-violet-300">
                <p className="text-sm text-gray-500">Corporate Tax</p>
                <p className="text-3xl font-bold text-violet-700 mt-2">10%</p>
                <p className="text-sm text-gray-600 mt-2">Только на прибыль из катарских источников</p>
              </div>
              <div className="rounded-2xl border border-gray-200 ring-1 ring-gray-300/60 ring-offset-2 ring-offset-white p-6 bg-white shadow-sm transition-all duration-300 ease-out hover:ring-2 hover:ring-violet-500/80 hover:border-violet-300">
                <p className="text-sm text-gray-500">VAT</p>
                <p className="text-3xl font-bold text-violet-700 mt-2">0%</p>
                <p className="text-sm text-gray-600 mt-2">Планируют ввести 5% в ближайшее время</p>
              </div>
              <div className="rounded-2xl border border-gray-200 ring-1 ring-gray-300/60 ring-offset-2 ring-offset-white p-6 bg-white shadow-sm transition-all duration-300 ease-out hover:ring-2 hover:ring-violet-500/80 hover:border-violet-300">
                <p className="text-sm text-gray-500">Освобождение</p>
                <p className="text-lg font-semibold text-violet-700 mt-2">Без сотрудников</p>
                <p className="text-sm text-gray-600 mt-2">Не требует наличия штата для льгот</p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Свободная зона — ЧЁТНАЯ, с фоном и волнистым нижним краем */}
        <section className="mt-16 relative" style={coloredSectionStyle}>
          <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-violet-700">
              2. Свободная зона
            </h2>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3 text-gray-600 md:text-lg">
                <span className="mt-2 size-2 shrink-0 rounded-full bg-violet-700"></span>
                <span>Требуется офис (можно Flexi-desk)</span>
              </li>
              <li className="flex items-start gap-3 text-gray-600 md:text-lg">
                <span className="mt-2 size-2 shrink-0 rounded-full bg-violet-700"></span>
                <span>Сотрудники не требуются для получения льгот</span>
              </li>
            </ul>
          </div>
          {/* Волна-переход снизу */}
          <WaveDivider />
        </section>

        {/* 3. Сроки регистрации — нечётная */}
        <section className="mt-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-violet-700">
              3. Сроки регистрации
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed md:text-lg">
              На регистрацию компании, получение Qatar ID и открытие банковского счёта нужно <strong>~2 месяца</strong>:
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 rounded-2xl border border-gray-200 ring-1 ring-gray-300/60 ring-offset-2 ring-offset-white p-6 bg-white shadow-sm transition-all duration-300 ease-out hover:ring-2 hover:ring-violet-500/80 hover:border-violet-300">
                <span className="flex items-center justify-center size-10 shrink-0 rounded-full bg-violet-100 text-violet-700 font-semibold">
                  1
                </span>
                <div>
                  <p className="font-semibold text-gray-800">Регистрация компании</p>
                  <p className="text-sm text-gray-500 mt-1">~5–7 рабочих дней (удалённо)</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-gray-200 ring-1 ring-gray-300/60 ring-offset-2 ring-offset-white p-6 bg-white shadow-sm transition-all duration-300 ease-out hover:ring-2 hover:ring-violet-500/80 hover:border-violet-300">
                <span className="flex items-center justify-center size-10 shrink-0 rounded-full bg-violet-100 text-violet-700 font-semibold">
                  2
                </span>
                <div>
                  <p className="font-semibold text-gray-800">Получение Qatar ID</p>
                  <p className="text-sm text-gray-500 mt-1">~10 рабочих дней (требуется присутствие)</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-gray-200 ring-1 ring-gray-300/60 ring-offset-2 ring-offset-white p-6 bg-white shadow-sm transition-all duration-300 ease-out hover:ring-2 hover:ring-violet-500/80 hover:border-violet-300">
                <span className="flex items-center justify-center size-10 shrink-0 rounded-full bg-violet-100 text-violet-700 font-semibold">
                  3
                </span>
                <div>
                  <p className="font-semibold text-gray-800">Открытие корпоративного банковского счёта</p>
                  <p className="text-sm text-gray-500 mt-1">~1 месяц (требуется присутствие на этапе подачи и получения документов)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

     

        {/* 5. Гарантия — нечётная */}
        <section className="mt-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-violet-700">
              5. Гарантия
            </h2>
            <div className="mt-6 rounded-2xl bg-violet-50 border border-violet-100 p-6 md:p-8">
              {/* Гарантируем */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-violet-700">
                  Гарантируем
                </p>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-start gap-3 text-gray-700 md:text-lg">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-violet-700"></span>
                    <span>Одобрение регистрации компании</span>
                  </li>
                </ul>
              </div>

              {/* При необходимости также гарантируем */}
              <div className="mt-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-violet-700">
                  При необходимости также гарантируем
                </p>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-start gap-3 text-gray-700 md:text-lg">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-violet-700"></span>
                    <span>Получение Qatar ID</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700 md:text-lg">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-violet-700"></span>
                    <span>
                      Открытие корпоративного банковского счёта{' '}
                      <span className="text-gray-500 italic">
                        (вне зависимости от гражданства учредителя)
                      </span>
                    </span>
                  </li>
                </ul>
              </div>

              {/* Договор */}
              <p className="mt-6 pt-6 border-t border-violet-100 text-gray-800 font-semibold md:text-lg">
                Все гарантии прописываются в договоре
              </p>
            </div>
            {/* Кнопка внутри секции 5, по центру, с отступом сверху */}
            <div className="mt-10 flex justify-center">
              <CtaButton 
                label='Узнать стоимость'
              />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
