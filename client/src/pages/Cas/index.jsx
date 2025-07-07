import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "../../assets/pozadi.jpg";

const oteviraciDoby = {
  pobocka1: {
    nazev: "Staroměstské náměstí",
    dny: {
      Pondělí: ["06:00", "22:00"],
      Úterý: ["06:00", "22:00"],
      Středa: ["06:00", "22:00"],
      Čtvrtek: ["06:00", "22:00"],
      Pátek: ["06:00", "22:00"],
      Sobota: ["06:00", "22:00"],
      Neděle: ["06:00", "22:00"],
    },
  },
  pobocka2: {
    nazev: "U Stadionu",
    dny: {
      Pondělí: ["06:00", "22:00"],
      Úterý: ["06:00", "22:00"],
      Středa: ["06:00", "22:00"],
      Čtvrtek: ["06:00", "22:00"],
      Pátek: ["06:00", "22:00"],
      Sobota: ["06:00", "22:00"],
      Neděle: ["06:00", "22:00"],
    },
  },
};

const Dny = [
  "Pondělí",
  "Úterý",
  "Středa",
  "Čtvrtek",
  "Pátek",
  "Sobota",
  "Neděle",
];

function jeOtevreno(dny) {
  const ted = new Date();
  const dnyArr = [
    "Neděle",
    "Pondělí",
    "Úterý",
    "Středa",
    "Čtvrtek",
    "Pátek",
    "Sobota",
  ];
  const den = dnyArr[ted.getDay()];
  const dnesniCas = dny[den];
  if (!dnesniCas) return false;

  const [otevrenoOd, otevrenoDo] = dnesniCas;
  const aktualniHodina = ted.getHours() + ted.getMinutes() / 60;
  const [odHod, odMin] = otevrenoOd.split(":").map(Number);
  const [doHod, doMin] = otevrenoDo.split(":").map(Number);

  const odCas = odHod + odMin / 60;
  const doCas = doHod + doMin / 60;

  return aktualniHodina >= odCas && aktualniHodina <= doCas;
}

const OteviraciDoba = () => {
  return (
    <>
      <Header />
      <div
        className="flex flex-col justify-center items-center bg-cover bg-center min-h-[calc(100vh-160px)] px-4 py-8"
        style={{ backgroundImage: `url(${Image})` }}
      >
        <div className="bg-black p-6 rounded-2xl border-2 border-yellow-400 shadow-md w-full max-w-5xl text-yellow-400">
          <h1 className="text-3xl font-bold text-center mb-8">
            Otevírací doba
          </h1>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(oteviraciDoby).map(([klic, { nazev, dny }]) => (
              <div
                key={klic}
                className="bg-gray-900 p-6 rounded-xl border border-yellow-400"
              >
                <h2 className="text-xl font-semibold text-center mb-4 text-yellow-300">
                  {nazev}
                </h2>
                <p
                  className={`text-center font-medium mb-4 ${
                    jeOtevreno(dny) ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {jeOtevreno(dny) ? "Právě otevřeno" : "Právě zavřeno"}
                </p>
                <div className="space-y-2">
                  {Dny.map((den) => (
                    <div
                      key={den}
                      className="flex justify-between text-yellow-200 border-b border-yellow-600 pb-1"
                    >
                      <span className="font-medium">{den}</span>
                      <span className="italic">
                        {dny[den]
                          ? `${dny[den][0]} – ${dny[den][1]}`
                          : "Zavřeno"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OteviraciDoba;
