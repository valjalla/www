import { SPhere } from "./ui";

export default function App() {
  return (
    <div className="h-screen p-4">
      <div className="bg-black/70 h-full flex flex-col space-y-4">
        <div className="flex flex-1 overflow-hidden space-x-4">
          <SidePanel />
          <main className="flex-1 relative">
            <Planetoid />
            <div className="grid-lines absolute inset-0 pointer-events-none z-0">
              {Array.from({ length: 10 }, (_, i) => (
                <>
                  <div
                    key={`h${i}`}
                    className="absolute w-full h-px bg-gray-500/10"
                    style={{ top: `${(i + 1) * 10}%` }}
                  ></div>
                  <div
                    key={`v${i}`}
                    className="absolute w-px h-full bg-gray-500/10"
                    style={{ left: `${(i + 1) * 10}%` }}
                  ></div>
                </>
              ))}
            </div>
          </main>
        </div>
      </div>
      <AlienChars />
    </div>
  );
}

function SidePanel() {
  return (
    <aside className="w-[30%] border border-steel p-4 text-naranja overflow-y-auto">
      <h2 className="text-xl mb-4 font-semibold tracking-wider text-naranja">Mission Overview MAGI</h2>
      <div className="space-y-4">
        <p className="label">NERV Planetoid Observer v1.03.5</p>
        <div className="border-t border-naranja pt-3">
          <h3 className="text-lg mb-2 text-naranja">Planetary Specifications</h3>
          <ul className="list-inside space-y-1 text-sm">
            <li>
              <span className="text-label">Diameter:</span> <span className="text-value">12,742 km</span>
            </li>
            <li>
              <span className="text-label">Mass:</span> <span className="text-value">5.97 × 10^24 kg</span>
            </li>
            <li>
              <span className="text-label">Surface temperature:</span> <span className="text-value">-60°C to 45°C</span>
            </li>
            <li>
              <span className="text-label">Atmosphere:</span> <span className="text-value">Nitrogen, Oxygen, Argon</span>
            </li>
          </ul>
        </div>

        <div className="border-t border-naranja pt-3">
          <h3 className="text-lg mb-2 text-naranja warning">Anomaly Detection</h3>
          <p className="text-sm text-value">
            Current scan reveals unusual patterns in the planetary core. Further investigation required.
          </p>
          <div className="mt-2 flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-xs text-azul">Active monitoring</span>
          </div>
        </div>

        <div className="border-t border-naranja pt-3">
          <h3 className="text-lg mb-2 text-naranja">Access Level</h3>
          <p className="text-sm text-gris">CLASSIFIED - NERV Personnel Only</p>
          <p className="text-xs mt-2 text-naranja/80 warning">WARNING: Unauthorized access will be prosecuted</p>
        </div>
      </div>
    </aside>
  );
}

function Planetoid() {
  return (
    <div className="relative flex justify-center items-center w-full h-full border border-steel">
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
