
export type Kategoria =
  | "kézműves"
  | "fotózás"
  | "digitális"
  | "gasztronómia";

/* kell egy interface */
export type ProgramTipus = {
  id: number;
  nev: string;
  kategoria: Kategoria;
  datum: string;
  helyszin: string;
  ferohely: number;
  jelentkezettek: number
}

export const PROGRAMOK:ProgramTipus[]=[
  {
    id: 1,
    nev: "Kerámiaműhely",
    kategoria: "kézműves",
    datum: "2026-11-12",
    helyszin: "Alkotóterem",
    ferohely: 12,
    jelentkezettek: 7
  },
  {
    id: 2,
    nev: "Városi fotóséta",
    kategoria: "fotózás",
    datum: "2026-11-15",
    helyszin: "Fő tér",
    ferohely: 10,
    jelentkezettek: 10
  },
  {
    id: 3,
    nev: "Webdesign alapok",
    kategoria: "digitális",
    datum: "2026-11-18",
    helyszin: "Digitális labor",
    ferohely: 16,
    jelentkezettek: 9
  },
  {
    id: 4,
    nev: "Házi tészták",
    kategoria: "gasztronómia",
    datum: "2026-11-20",
    helyszin: "Tankonyha",
    ferohely: 8,
    jelentkezettek: 5
  },
  {
    id: 5,
    nev: "Portréfotózás",
    kategoria: "fotózás",
    datum: "2026-11-22",
    helyszin: "Fotóstúdió",
    ferohely: 6,
    jelentkezettek: 3
  },
  {
    id: 6,
    nev: "Ékszerkészítés",
    kategoria: "kézműves",
    datum: "2026-11-25",
    helyszin: "Alkotóterem",
    ferohely: 10,
    jelentkezettek: 10
  }
];
