"use client"

import { Target, Database, RefreshCw, Users } from "lucide-react"
import { InteractiveMap } from "@/components/InteractiveMap"

const steps = [
  {
    number: 1,
    title: "Wyznaczenie kierunku",
    description: "zaczynamy od określenia celów cyfryzacji, które są spójne z ogólną strategią biznesową. Zdobywamy też poparcie zarządu – bo bez tego nic się nie zadzieje.",
    icon: Target,
    position: { x: 10, y: 20 }
  },
  {
    number: 2,
    title: "Modernizacja danych",
    description: "unowocześniamy infrastrukturę danych, systemy i sposób ich przetwarzania – tak, by można było skutecznie korzystać z nowoczesnych technologii.",
    icon: Database,
    position: { x: 50, y: 20 }
  },
  {
    number: 3,
    title: "Nowe spojrzenie na procesy",
    description: "przeprojektowujemy kluczowe procesy – eliminujemy przestarzałe rozwiązania i wykorzystujemy pełnię możliwości, jakie daje cyfrowy świat.",
    icon: RefreshCw,
    position: { x: 50, y: 60 }
  },
  {
    number: 4,
    title: "Transformacja kultury organizacyjnej",
    description: "wspieramy zmianę mentalności – budujemy kulturę cyfrową, w której decyzje podejmuje się w oparciu o dane, a zespół czuje się częścią zmiany.",
    icon: Users,
    position: { x: 10, y: 60 }
  }
]

export function DigitalTransformationJourney() {
  return <InteractiveMap title="Jak wygląda droga do cyfrowej transformacji?" steps={steps} />
}
