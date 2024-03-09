import BigHeader from "@/components/Headers/BigHeader";
import MediumHeader from "@/components/Headers/MediumHeader";
import SchoolLeaderBoard from "@/components/LeaderBoard/SchoolLeaderBoard";
import StudentLeaderBoard from "@/components/LeaderBoard/StudentLeaderBoard";
import Logo from "@/components/Logo";

const SMTStudentResults = [
  {
    name: "Keny Ezaú Carlosama Morales",
    school: "Unidad Educativa Zarán",
    award: "oro",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Gustavo Santiago Torrico López",
    school: "Colegio Alemán",
    award: "oro",
    land: "Bolivia 🇧🇴",
  },
  {
    name: "Heet Sohilkumar Chovatiya Chovatiya",
    school: "Unidad Educativa Bilingüe Particular Abdón Calderón",
    award: "plata",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Roberto José Adum Coronado",
    school: 'Unidad Educativa Particular Bilingüe "Logos"',
    award: "plata",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Favian Alessandro Vargas Quisbert",
    school: "Sagrado Corazon de Jesus",
    award: "plata",
    land: "Bolivia 🇧🇴",
  },
  {
    name: "Wilhelm Ramón Gonce Quintana",
    school: "Unein del Pacífico ",
    award: "plata",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Luis Eduardo Reyes Romero",
    school: 'Unidad Educativa Particular Bilingüe "Logos"',
    award: "bronce",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Michael David Ramos Ochoa",
    school: "Unidad Educativa de las Fuerzas Armadas FAE Nⁿ⁰ 3 taura",
    award: "bronce",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Herman Anias Calderon Solano",
    school:
      'Unidad Educativa de Fuerzas Armadas Colegio Militar Nº 3 "Héroes del 41"',
    award: "bronce",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Martín Sebastián Peñaherrera Freire",
    school: "Unidad Educativa Bilingüe Particular Abdón Calderón",
    award: "bronce",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Amir Antonio Vizcaíno Macancela",
    school: 'Unidad Educativa Particular Bilingüe "Logos"',
    award: "bronce",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Jhustin Alex Flores Rodriguez",
    school: "Colegio Aleman (Oruro)",
    award: "bronce",
    land: "Bolivia 🇧🇴",
  },
  {
    name: "Sheyla Carolina Cabrera Murillo",
    school: "Unidad Educativa San José La Salle",
    award: "bronce",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Ana Miguela Cubillos Villacreses",
    school: "Unidad Educativa Bilingue Delta",
    award: "",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Clara Ceneida Bolaños Zárate",
    school: "Colegio Alemán Humboldt Duale Schule",
    award: "",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Nicolás Alberto Macías Ortiz",
    school: "Unidad Educativa Bilingüe Particular Abdón Calderón",
    award: "",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Christian Alejandro Fiallos Constante",
    school: 'Unidad Educativa Particular Bilingüe "Logos"',
    award: "",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Marco Andrés Saenz Unda",
    school: "I.S.M. Quito",
    award: "",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Matías Nicolás López Chávez",
    school: "Unidad Educativa Bilingüe Particular Abdón Calderón",
    award: "",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Amy Valentina Izquierdo Petroche",
    school: 'Unidad Educativa Particular Bilingüe "Logos"',
    award: "",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Diego Alejandro Gónzalez Zavaleta",
    school: "Unidad Educativa Bilingüe Particular Abdón Calderón",
    award: "",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Fabiana Nicole Gallo Caicedo",
    school: "Unidad Educativa Bilingüe Particular Abdón Calderón",
    award: "",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Gabriel Isaac Cueva Jijón",
    school: "Colegio de bachillerato internacional Antonio Peña Celi",
    award: "",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Isabella Sofía Berrezueta Varas",
    school: "Unidad Educativa Bilingüe Particular Abdón Calderón",
    award: "",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "José Daniel Navarrete Blum",
    school: 'Unidad Educativa Particular Bilingüe "Logos"',
    award: "",
    land: "Ecuador 🇪🇨",
  },
];

const SMTSchoolResults = [
  {
    name: "Unidad Educativa Bilingüe Particular Abdón Calderón",
    award: "oro",
    land: "Ecuador 🇪🇨",
  },
  {
    name: 'Unidad Educativa Particular Bilingüe "Logos"',
    award: "oro",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Unidad Educativa Zarán",
    award: "plata",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Colegio Alemán Humboldt Duale Schule",
    award: "bronce",
    land: "Ecuador 🇪🇨",
  },
];

const HVYStudentResults = [
  {
    name: "Carlos Andrés Pozo Vargas",
    school: "American School",
    award: "oro",
    land: "Bolivia 🇧🇴",
  },
  {
    name: "José Iván Salazar Macías",
    school: "Unidad Educativa Particular Politécnico COPOL",
    award: "oro",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Carlos Fabian Maldonado Mariño",
    school: "Saint Andrew's School",
    award: "plata",
    land: "Bolivia 🇧🇴",
  },
  {
    name: "Martín Andrés Ojeda Monge",
    school: "Unidad Educativa Particular Borja",
    award: "plata",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Adrián Camilo Cerda Morocho",
    school: "Unidad Educativa Combatientes de Tapi",
    award: "plata",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Andrea Robles Nieto",
    school: "I.S.M Quito",
    award: "bronce",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Sebastián Andrés Wan Moreno",
    school: 'Unidad Educativa Particular Bilingüe "Logos"',
    award: "bronce",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Kevin Daniel Rojas Washco",
    school: "Unidad Educativa Particular Borja",
    award: "bronce",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Natasha Fernanda Valarezo Oyola",
    school: 'Unidad Educativa Particular Bilingüe "Logos"',
    award: "bronce",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Raúl Andrés Barriga Chávez",
    school: "Unidad Educativa Bilingüe Particular Abdón Calderón",
    award: "bronce",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Arianna Mishelle Villamar Quinde",
    school: 'Unidad Educativa Particular Bilingüe "Logos"',
    award: "",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "María José Indacochea Rosado",
    school: 'Unidad Educativa Particular Bilingüe "Logos"',
    award: "",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Mateo Stéfano Rivera De La Cueva",
    school: "Colegio Intisana",
    award: "",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Bárbara Paulette Baquerizo Lucas",
    school: "Unidad Educativa Bilingüe Particular Abdón Calderón",
    award: "",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Emilio Alexander Zamora Wong",
    school: 'Unidad Educativa Particular Bilingüe "Logos"',
    award: "",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "John David Chimbo Pintado",
    school: "Unidad Educativa Particular Borja",
    award: "",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Juan Pablo García Sámchez",
    school: "Unein del Pacifico",
    award: "",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "María Roberta Camacho Vaca",
    school: "Unidad educativa Zarán",
    award: "",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Nathalie Abbud Dunn",
    school: "Unidad Educativa Bilingüe Delta",
    award: "",
    land: "Ecuador 🇪🇨",
  },
];

const HVYSchoolResults = [
  {
    name: "Unidad Educativa Particular Borja",
    award: "oro",
    land: "Ecuador 🇪🇨",
  },
  {
    name: 'Unidad Educativa Particular Bilingüe "Logos"',
    award: "plata",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Unidad Educativa Bilingüe Particular Abdón Calderón",
    award: "bronce",
    land: "Ecuador 🇪🇨",
  },
];

export default function Page() {
  return (
    <>
      <div className="w-full mb-12">
        <div className="w-full flex flex-col gap-5">
          <div className="container flex flex-col items-center text-center w-full">
            <BigHeader>CATEGORIA SMT</BigHeader>
          </div>
          <div className="container">
            <div>
              <div className="p-5 flex flex-wrap gap-10 mt-4 justify-center">
                <div className="underline">
                  <MediumHeader>Mejores participantes</MediumHeader>
                </div>
                <StudentLeaderBoard
                  resultados={SMTStudentResults}
                ></StudentLeaderBoard>
              </div>
              <div className="p-5 flex flex-wrap gap-10 mt-4 justify-center">
                <div className="underline">
                  <MediumHeader>Colegios premiados</MediumHeader>
                </div>
                <SchoolLeaderBoard
                  resultados={SMTSchoolResults}
                ></SchoolLeaderBoard>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-5 mt-10">
          <div className="container">
            <div className="p-5 flex flex-wrap gap-10 mt-4 justify-center">
              <Logo dimension={150}></Logo>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-5 mt-16">
          <div className="container flex flex-col items-center text-center w-full">
            <BigHeader>CATEGORIA HVY</BigHeader>
          </div>
          <div className="container">
            <div>
              <div className="p-5 flex flex-wrap gap-10 mt-4 justify-center">
                <div className="underline">
                  <MediumHeader>Mejores participantes</MediumHeader>
                </div>
                <StudentLeaderBoard
                  resultados={HVYStudentResults}
                ></StudentLeaderBoard>
              </div>
              <div className="p-5 flex flex-wrap gap-10 mt-4 justify-center">
                <div className="underline">
                  <MediumHeader>Colegios premiados</MediumHeader>
                </div>
                <SchoolLeaderBoard
                  resultados={HVYSchoolResults}
                ></SchoolLeaderBoard>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-5 mt-10">
          <div className="container">
            <div className="p-5 flex flex-wrap gap-10 mt-4 justify-center">
              <div className="underline">
                <MediumHeader>Video de premiación</MediumHeader>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-5 mt-10">
          <div className="container">
            <div className="p-5 flex flex-wrap gap-10 mt-4 justify-center">
              <iframe
                src="https://www.youtube.com/embed/LD582SVTPDk"
                width={1600}
                height={900}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
