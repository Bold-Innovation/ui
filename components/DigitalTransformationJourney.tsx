"use client"

import { Target, Database, RefreshCw, Users } from "lucide-react"
import { InteractiveMap } from "@/components/InteractiveMap"

// Standard positions for 4-element maps
const fourElementPositions = [
  { x: 15, y: 25 },
  { x: 50, y: 15 },
  { x: 85, y: 25 },
  { x: 50, y: 50 }
]

const steps = [
  {
    number: 1,
    title: "Wyznaczenie kierunku",
    description: "zaczynamy od określenia celów cyfryzacji, które są spójne z ogólną strategią biznesową. Zdobywamy też poparcie zarządu – bo bez tego nic się nie zadzieje.",
    icon: Target,
    position: fourElementPositions[0]
  },
  {
    number: 2,
    title: "Modernizacja danych",
    description: "unowocześniamy infrastrukturę danych, systemy i sposób ich przetwarzania – tak, by można było skutecznie korzystać z nowoczesnych technologii.",
    icon: Database,
    position: fourElementPositions[1]
  },
  {
    number: 3,
    title: "Nowe spojrzenie na procesy",
    description: "przeprojektowujemy kluczowe procesy – eliminujemy przestarzałe rozwiązania i wykorzystujemy pełnię możliwości, jakie daje cyfrowy świat.",
    icon: RefreshCw,
    position: fourElementPositions[2]
  },
  {
    number: 4,
    title: "Transformacja kultury organizacyjnej",
    description: "wspieramy zmianę mentalności – budujemy kulturę cyfrową, w której decyzje podejmuje się w oparciu o dane, a zespół czuje się częścią zmiany.",
    icon: Users,
    position: fourElementPositions[3]
  }
]

export function DigitalTransformationJourney() {
  return <InteractiveMap title="" steps={steps} />
}
