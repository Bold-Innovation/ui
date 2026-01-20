"use client"

import { DigitalTransformationJourney } from "@/components/DigitalTransformationJourney"
import { InteractiveMap } from "@/components/InteractiveMap"
import { Eye, TrendingUp, Shield, Users, Hand, Code, Puzzle, Network, Brain, Search, FileText, Upload, Settings, ClipboardList, Heart } from "lucide-react"

export function ServiceSections() {
  return (
    <section className="py-32 px-6 bg-gray-50 dark:bg-[rgb(74,87,100)] transition-colors relative z-10">
      <div className="container mx-auto max-w-5xl space-y-32">
        {/* Open Source Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-display font-light mb-8 text-gray-900 dark:text-white transition-colors tracking-tight">Open Source – wolność, która się opłaca</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 leading-relaxed transition-colors font-light">
            Coraz więcej firm na świecie wybiera otwarte technologie zamiast zamkniętych, licencjonowanych rozwiązań. Dlaczego? Bo Open Source to większa niezależność, niższe koszty i dostęp do innowacji, które rozwijają się szybciej niż tradycyjne oprogramowanie. Traktujemy Open Source jako przemyślaną strategię, a nie modę. Dzięki niej mamy pełną kontrolę nad technologią, którą wykorzystujemy – możemy ją rozwijać, modyfikować i dopasowywać do realnych potrzeb klientów.
          </p>
          <InteractiveMap 
            title="Jak wygląda droga do Open Source?"
            steps={[
              {
                number: 1,
                title: "Oceniamy i planujemy",
                description: "sprawdzamy, z jakich narzędzi korzystamy i gdzie możemy je zastąpić otwartymi odpowiednikami. Tworzymy plan działania – krok po kroku.",
                icon: ClipboardList,
                position: { x: 15, y: 25 }
              },
              {
                number: 2,
                title: "Angażujemy zespół IT",
                description: "Nasi programiści szybko dostrzegają zalety Open Source – dzięki temu zmiana przebiega płynnie, a nowe rozwiązania trafiają w potrzeby biznesu.",
                icon: Users,
                position: { x: 50, y: 15 }
              },
              {
                number: 3,
                title: "Dbamy o bezpieczeństwo i zgodność",
                description: "Open Source nie oznacza chaosu. Zabezpieczamy procesy, spełniamy wymagania prawne i zapewniamy profesjonalne wsparcie.",
                icon: Shield,
                position: { x: 85, y: 25 }
              },
              {
                number: 4,
                title: "Wspieramy społeczność",
                description: "Nie tylko korzystamy z gotowych rozwiązań, ale też dzielimy się naszymi pomysłami. Współtworzymy technologie, które napędzają innowacje na całym świecie.",
                icon: Heart,
                position: { x: 50, y: 50 }
              }
            ]}
          />
        </div>

        {/* Cloud Section */}
        <div>
          <h2 className="text-2xl font-display font-semibold mb-6 text-gray-900 dark:text-white transition-colors">Chmura - szybko i bezpiecznie</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors">
            Migracja do chmury nie musi być skomplikowana. Dzięki podejściu typu lift-and-shift przenosimy aplikacje bez konieczności ich przebudowy. To najszybszy sposób, by skorzystać z zalet chmury – lepszej wydajności, większego bezpieczeństwa i niższych kosztów utrzymania.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors">
            Dzięki temu zyskujesz natychmiastowe korzyści infrastrukturalne, a Twoja firma zyskuje gotowość na dalsze usprawnienia i rozwój.
          </p>
          <InteractiveMap 
            title="Jak wygląda nasza droga do chmury?"
            steps={[
              {
                number: 1,
                title: "Analiza i przygotowanie",
                description: "inwentaryzujemy aplikacje, dane i powiązania między nimi, by wybrać te najlepiej nadające się do migracji.",
                icon: Search,
                position: { x: 15, y: 25 }
              },
              {
                number: 2,
                title: "Plan migracji",
                description: "tworzymy plan działania, który krok po kroku przenosi najważniejsze aplikacje tam, gdzie zyskają najwięcej – do chmury.",
                icon: FileText,
                position: { x: 50, y: 15 }
              },
              {
                number: 3,
                title: "Lift-and-shift",
                description: "przenosimy aplikacje w ich obecnej formie – bez zmian w kodzie, bez przestojów w działaniu.",
                icon: Upload,
                position: { x: 85, y: 25 }
              },
              {
                number: 4,
                title: "Optymalizacja po migracji",
                description: "z czasem dostosowujemy aplikacje, by jeszcze lepiej wykorzystywały możliwości chmury.",
                icon: Settings,
                position: { x: 50, y: 50 }
              }
            ]}
          />
        </div>

        {/* Automation Section */}
        <div>
          <h2 className="text-2xl font-display font-semibold mb-6 text-gray-900 dark:text-white transition-colors">Automatyzacje – od prac ręcznych do sztucznej inteligencji</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors">
            Każda firma zaczyna od ręcznych procesów – czasochłonnych, kosztownych i podatnych na błędy. Ale to się zmienia. Dzięki automatyzacji można zamienić powtarzalne zadania w płynne, inteligentne procesy, które działają szybciej, sprawniej i bez pomyłek.
          </p>
          <InteractiveMap 
            title="Jak wygląda nasza droga do automatyzacji?"
            steps={[
              {
                number: 1,
                title: "Ręczne procesy",
                description: "punkt wyjścia – większość zadań wykonywana jest ręcznie, przez ludzi.",
                icon: Hand,
                position: { x: 10, y: 30 }
              },
              {
                number: 2,
                title: "Własne skrypty",
                description: "pierwszy krok do automatyzacji – proste skrypty i narzędzia 'szyte na miarę'. Zasada: nigdy nie rób dwa razy tego samego.",
                icon: Code,
                position: { x: 30, y: 15 }
              },
              {
                number: 3,
                title: "Rozproszone narzędzia",
                description: "w poszczególnych działach pojawiają się różne narzędzia automatyzujące konkretne procesy – często bez wspólnej strategii.",
                icon: Puzzle,
                position: { x: 50, y: 30 }
              },
              {
                number: 4,
                title: "Zintegrowana automatyzacja w skali całej firmy",
                description: "wprowadzamy centralne platformy automatyzacji, które łączą systemy i działy, eliminując chaos i dublowanie pracy.",
                icon: Network,
                position: { x: 70, y: 15 }
              },
              {
                number: 5,
                title: "Automatyzacja wspierana AI",
                description: "wchodzimy na wyższy poziom – wdrażamy rozwiązania oparte na sztucznej inteligencji i dużych modelach językowych (LLM), które potrafią rozwiązywać złożone problemy, analizować dane, tworzyć treści czy odpowiadać na pytania klientów.",
                icon: Brain,
                position: { x: 90, y: 30 }
              }
            ]}
          />
        </div>

        {/* Digital Transformation Section */}
        <div>
          <h2 className="text-2xl font-display font-semibold mb-6 text-gray-900 dark:text-white transition-colors">Transformacja cyfrowa – technologia, która zmienia sposób działania firmy</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors">
            Cyfryzacja to nie tylko wdrożenie nowych narzędzi. To przemyślana zmiana modelu działania – od modernizacji danych, przez nowe procesy, aż po kulturę pracy opartą na technologii i danych. Dzięki niej firmy stają się bardziej elastyczne, nowoczesne i nastawione na potrzeby klienta – a to przekłada się na przewagę rynkową.
          </p>
          <DigitalTransformationJourney />
        </div>

        {/* Data Modernization Section */}
        <div>
          <h2 className="text-2xl font-display font-semibold mb-6 text-gray-900 dark:text-white transition-colors">Modernizacja danych – nowoczesne dane, lepsze decyzje</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors">
            W świecie, gdzie dane są jednym z najcenniejszych zasobów, nie wystarczy je tylko gromadzić. Trzeba nimi zarządzać mądrze i nowocześnie. Dlatego wdrażamy podejście Data Modernization – czyli kompleksową modernizację infrastruktury danych i sposobu ich wykorzystywania w biznesie. To nie tylko technologia – to zmiana podejścia, która daje realne efekty: szybsze analizy, lepsze decyzje, niższe koszty i większa jakość danych.
          </p>
          <InteractiveMap 
            title="Jak wygląda droga do nowoczesnych danych?"
            steps={[
              {
                number: 1,
                title: "Jasna wizja",
                description: "tworzymy uzasadnienie biznesowe dla modernizacji danych – z pełnym wsparciem zarządu.",
                icon: Eye,
                position: { x: 15, y: 25 }
              },
              {
                number: 2,
                title: "Priorytetyzacja efektów biznesowych",
                description: "skupiamy się na tych obszarach, gdzie dane mogą przynieść największą wartość i konkretne rezultaty.",
                icon: TrendingUp,
                position: { x: 50, y: 15 }
              },
              {
                number: 3,
                title: "Wdrożenie ładu danych",
                description: "budujemy ramy zarządzania danymi – dbając o ich jakość, zgodność z przepisami i bezpieczeństwo.",
                icon: Shield,
                position: { x: 85, y: 25 }
              },
              {
                number: 4,
                title: "Zaangażowanie liderów",
                description: "wspieramy wewnętrznych ambasadorów zmian – ludzi, którzy rozumieją wartość danych i potrafią ją wykorzystać w codziennych decyzjach.",
                icon: Users,
                position: { x: 50, y: 50 }
              }
            ]}
          />
        </div>
      </div>
    </section>
  )
}
