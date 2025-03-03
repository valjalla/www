import { HexaGrid, SPhere, FocusSpray } from "./ui";
import { version } from "../../package.json";

export default function App() {
  return (
    <div className="h-screen p-4 flex flex-col items-center">
      <div className="w-full max-w-[1600px] flex-1 flex flex-col">
        <Header />
        <div className="bg-black/70 flex-1 flex flex-col space-y-4 my-4">
          <div className="flex flex-1 overflow-hidden space-x-4">
            <main className="flex-1 relative">
              <Planetoid />
              <AlienChars />
              <TheGrid />
              <FocusSpray />
            </main>
            <Infopan />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="w-full border border-steel h-16 flex justify-between items-center px-4">
      <h1 className="text-2xl font-semibold tracking-wider text-naranja animate-warning">λ</h1>
      <HexaGrid />
    </header>
  );
}

function Footer() {
  return (
    <footer
      className="flex space-x-4 justify-between items-center w-full border border-steel h-12 px-4"
      data-targetting="no-crosshair"
    >
      <div>
        <span className="text-xs text-gris">{">" + " "}</span>
        <span className="text-xs text-naranja animate-warning">v{version}</span>
      </div>
      <div className="space-x-4 text-naranja font-semibold animate-warning">
        <a href="https://github.com/valjalla">github</a>
        <a href="https://www.linkedin.com/in/alexander-swanson">linkedin</a>
        <a href="mailto:alexanderjswanson@icloud.com">email</a>
      </div>
      <div />
    </footer>
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

function Planetoid() {
  return (
    <div className="relative flex justify-center items-center w-full h-full border border-steel">
      <SPhere />
      <div
        className="absolute inset-0 flex justify-center items-center pointer-events-none z-10"
        id="planetary-core-crosshair"
      >
        <div className="relative w-48 h-48">
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

function TheGrid() {
  return (
    <div className="grid-lines absolute inset-0 pointer-events-none z-0">
      {Array.from({ length: 10 }, (_, i) => (
        <div key={`container${i}`}>
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
        </div>
      ))}
    </div>
  );
}

function Infopan() {
  return (
    <aside className="w-[35%] border border-steel p-4 text-naranja overflow-y-auto">
      <h2 className="text-2xl font-semibold tracking-wider text-naranja">alexander</h2>
      <p className="label mb-4 text-azul">engi</p>
      <div className="space-y-4">
        <div className="space-y-4 text-sm text-gris">
          <p>programmer @ usa. industry ~ 2020. c, go, js, ts, py, swift. messing with raylib and game dev.</p>
          <p>
            currently reading through{" "}
            <a
              className="text-azul"
              href="http://neuralnetworksanddeeplearning.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              neilsen's book
            </a>{" "}
            on neural networks and deep learning.
          </p>
          <p>you can learn anything in two weeks.</p>
        </div>
        <div>
          <h3 className="text-lg mb-2 text-naranja border-b border-naranja">LITERATURE</h3>
          <p className="text-sm text-gris uppercase mb-4">reading/read recently</p>
          <ul className="text-sm text-gris space-y-6">
            <li>
              <a
                className="text-azul uppercase"
                href="http://neuralnetworksanddeeplearning.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                # neural networks and deep learning / nielsen
              </a>
              <p>
                excellent intro to neural nets. great first principles approach to the math and theory. lots of good formula
                derivations.
              </p>
            </li>

            <li>
              <a
                className="text-azul uppercase"
                href="https://en.wikipedia.org/wiki/The_Three-Body_Problem_(novel)"
                target="_blank"
                rel="noopener noreferrer"
              >
                # the three body problem / liu
              </a>
              <p>
                excellent hard sci-fi. great world building, interesting characters. very unique take on the first contact
                trope.
              </p>
            </li>

            <li>
              <a
                className="text-azul uppercase"
                href="https://en.wikipedia.org/wiki/Contact_(novel)"
                target="_blank"
                rel="noopener noreferrer"
              >
                # contact / sagan
              </a>
              <p>classic.</p>
            </li>

            <li>
              <a
                className="text-azul uppercase"
                href="https://en.wikipedia.org/wiki/A_Dance_with_Dragons"
                target="_blank"
                rel="noopener noreferrer"
              >
                # a dance with dragons / g.r.r.m.
              </a>
              <p>the last good book in the series.</p>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}
