import { SPhere } from "./ui";

export default function App() {
  return (
    <div className="h-screen p-2">
      <div className="border border-gray-700 bg-black/70 h-full">
        <header className="text-center text-orange-500 text-2xl p-4">
          NERV Planetoid
        </header>
        <Planetoid />
      </div>
      <AlienChars />
    </div>
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
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-orange-500/70 transform -translate-y-1/2"></div>
          <div className="absolute top-0 left-1/2 w-0.5 h-full bg-orange-500/70 transform -translate-x-1/2"></div>
          <div className="absolute inset-0 border-2 border-orange-500/40 rounded-full"></div>
          <div className="absolute top-[10%] left-[10%] w-[80%] h-[80%] border border-orange-500/30 rounded-full"></div>
          <div className="absolute top-[20%] left-[20%] w-[60%] h-[60%] border border-orange-500/20 rounded-full"></div>
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
            className="absolute text-orange-500/40 text-sm"
            style={{ left: `${left}%`, top: `${top}%`, opacity }}
          >
            {char}
          </div>
        );
      })}
    </div>
  );
}
