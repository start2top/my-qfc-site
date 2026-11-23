import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Otherview from './components/Otherview'
import { WaveDivider, coloredSectionStyle } from './components/WaveDivider'
import Licences from './components/Licences';


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Otherview />
      <Licences colored wave />


      {/* НАЛОГИ — ЧЁТНАЯ секция с фоном и волнистым нижним краем */}
      <section className="mt-40 relative">
        <div className="max-w-5xl mx-auto px-4 py-16 md:py-20">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-center text-[32px] font-semibold">Налогообложение в QFC</h2>
            <p className="mt-3 max-w-xs text-center text-gray-500 md:max-w-lg">
              Ключевые цифры, которые важно знать до регистрации
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center p-8 rounded-xl border border-gray-200 ring-1 ring-gray-300/60 ring-offset-2 ring-offset-white bg-white shadow-sm transition-all duration-300 ease-out hover:ring-2 hover:ring-violet-500/80 hover:border-violet-300">
              <span className="text-4xl font-bold text-indigo-600">10%</span>
              <p className="text-sm text-gray-500 mt-2 text-center">Налог на прибыль из местных источников</p>
            </div>
            <div className="flex flex-col items-center p-8 rounded-xl border border-gray-200 ring-1 ring-gray-300/60 ring-offset-2 ring-offset-white bg-white shadow-sm transition-all duration-300 ease-out hover:ring-2 hover:ring-violet-500/80 hover:border-violet-300">
              <span className="text-4xl font-bold text-indigo-600">0%</span>
              <p className="text-sm text-gray-500 mt-2 text-center">На иностранную прибыль (при соблюдении условий)</p>
            </div>
            <div className="flex flex-col items-center p-8 rounded-xl border border-gray-200 ring-1 ring-gray-300/60 ring-offset-2 ring-offset-white bg-white shadow-sm transition-all duration-300 ease-out hover:ring-2 hover:ring-violet-500/80 hover:border-violet-300">
              <span className="text-4xl font-bold text-indigo-600">80+</span>
              <p className="text-sm text-gray-500 mt-2 text-center">Стран с СОИДН (соглашения об избежании двойного налогообложения)</p>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}