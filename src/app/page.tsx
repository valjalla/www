import { SPhere } from "./ui";

export default function App() {
  return (
    <div className="h-screen p-2">
      <div className="border border-gray-700 bg-black/70 h-full flex flex-col">
        <div className="flex flex-1 overflow-hidden">
          <SidePanel />
          <main className="flex-1 relative">
            <Planetoid />
          </main>
        </div>
      </div>
      <AlienChars />
    </div>
  );
}

function SidePanel() {
  return (
    <aside className="w-[30%] border-r border-gray-700 p-4 text-naranja overflow-y-auto">
      <h2 className="text-xl mb-4 font-semibold tracking-wider text-naranja">Mission Overview MAGI</h2>

      <div className="space-y-4">
        <p className="text-azul">NERV Planetoid Observer v1.03.5</p>

        <div className="border-t border-naranja pt-3">
          <h3 className="text-lg mb-2 text-naranja">Planetary Specifications</h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-azul">
            <li>
              Diameter: <span className="text-gris">12,742 km</span>
            </li>
            <li>
              Mass: <span className="text-gris">5.97 × 10^24 kg</span>
            </li>
            <li>
              Surface temperature: <span className="text-gris">-60°C to 45°C</span>
            </li>
            <li>
              Atmosphere: <span className="text-gris">Nitrogen, Oxygen, Argon</span>
            </li>
          </ul>
        </div>

        <div className="border-t border-naranja pt-3">
          <h3 className="text-lg mb-2 text-naranja">Anomaly Detection</h3>
          <p className="text-sm text-azul">
            Current scan reveals unusual patterns in the planetary core. Further investigation required.
          </p>
          <div className="mt-2 flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-xs text-gris">Active monitoring</span>
          </div>
        </div>

        <div className="border-t border-naranja pt-3">
          <h3 className="text-lg mb-2 text-naranja">Access Level</h3>
          <p className="text-sm text-azul">CLASSIFIED - NERV Personnel Only</p>
          <p className="text-xs mt-2 text-naranja/80">WARNING: Unauthorized access will be prosecuted</p>
        </div>
      </div>
    </aside>
  );
}

function Planetoid() {
  return (
    <div className="relative flex justify-center items-center w-full h-full">
      <SPhere />
      <div
        className="absolute inset-0 flex justify-center items-center pointer-events-none z-10"
        id="planetary-core-crosshair"
      >
        <div className="relative w-64 h-64">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-naranja/70 transform -translate-y-1/2" />
          <div className="absolute top-0 left-1/2 w-0.5 h-full bg-naranja/70 transform -translate-x-1/2" />
          <div className="absolute inset-0 border-2 border-naranja/40 rounded-full" />
          <div className="absolute top-[10%] left-[10%] w-[80%] h-[80%] border border-naranja/30 rounded-full" />
          <div className="absolute top-[20%] left-[20%] w-[60%] h-[60%] border border-naranja/20 rounded-full" />
        </div>
      </div>
    </div>
  );
}

function AlienChars() {
  const hebrewChars = "אבגדהוזחטיכלמנסעפצקרשת";
  const greekChars = "αβγδεζηθλμνξπρφχψω";
  const cyrillicChars = "бвгджзклпфцчьэюя";
  const alienChars = hebrewChars + greekChars + cyrillicChars;

  return (
    <div className="alien-chars absolute inset-0 pointer-events-none z-0">
      {Array.from({ length: 20 }, (_, i) => {
        const char = alienChars[Math.floor(Math.random() * alienChars.length)];
        const left = Math.random() * 90 + 5;
        const top = Math.random() * 90 + 5;
        const opacity = 0.5 + Math.random() * 0.5;
        return (
          <div
            key={i}
            className="absolute text-naranja/40 text-sm"
            style={{ left: `${left}%`, top: `${top}%`, opacity }}
          >
            {char}
          </div>
        );
      })}
    </div>
  );
}
