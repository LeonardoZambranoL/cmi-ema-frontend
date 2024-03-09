import BigHeader from "@/components/Headers/BigHeader";
import MediumHeader from "@/components/Headers/MediumHeader";
import SchoolLeaderBoard from "@/components/LeaderBoard/SchoolLeaderBoard";
import StudentLeaderBoard from "@/components/LeaderBoard/StudentLeaderBoard";
import Logo from "@/components/Logo";

const SMTStudentResults = [
  {
    name: "Sheldon Gabriel López Zúñiga",
    school: "Colegio Intisana",
    award: "oro",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Wilhelm Ramón Gonce Quintana ",
    school:
      "Unidad Educativa Particular Bilingüe Principito & Marcel Laniado De Wind",
    award: "oro",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Keny Ezaú Carlosama Morales ",
    school: "Unidad Educativa Zarán",
    award: "oro",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Carlos Fabian Maldonado Mariño",
    school: "Saint Andrew's School",
    award: "oro",
    land: "Bolivia 🇧🇴",
  },
  {
    name: "Santiago Gabriel Marcial Teran",
    school: "Colegio Intisana",
    award: "plata",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Xavier Ernesto Olivares Ibañez",
    school: "Saint Andrew's School",
    award: "plata",
    land: "Bolivia 🇧🇴",
  },
  {
    name: "Ana Miguela Cubillos Villacreses",
    school: 'Unidad Educativa Bilingüe Delta"',
    award: "plata",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Emilio Alexander Zamora Wong",
    school: "Logos Academy",
    award: "plata",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Bruno Chica",
    school: "Unidad Educativa Javier",
    award: "plata",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Alejandro Santiago Sánchez Alvarado",
    school: "ISM Academy Quito",
    award: "plata",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Roberto José Adum Coronado",
    school: "Logos Academy",
    award: "plata",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "José Daniel Navarrete Blum",
    school: "Logos Academy",
    award: "bronce",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Paola Isabel Reyes Granados",
    school: "Unidad Educativa Matilde Amador Santistevan",
    award: "bronce",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Baquerizo Lucas Barbara Paulette",
    school: "Instituto Particular Abdón Calderón (IPAC)",
    award: "bronce",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Ilona Violeta Dunn Bertha",
    school: "Unidad Educativa Bilingüe Delta",
    award: "bronce",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Juan Pablo Garcia Sánchez",
    school: "Unidad Educativa Particular del Pacífico",
    award: "bronce",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Lucía Valentina Cuentas Esteban",
    school: "Saint Andrew's School",
    award: "bronce",
    land: "Bolivia 🇧🇴",
  },
  {
    name: "Mateo Stéfano Rivera De La Cueva",
    school: "Colegio Intisana",
    award: "bronce",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Pedro Ávila",
    school: "Unidad Educativa Javier",
    award: "bronce",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Valdiviezo Gomez Samantha Mia",
    school: "Instituto Particular Abdón Calderón (IPAC)",
    award: "bronce",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "María José Indacochea Rosado",
    school: "Logos Academy",
    award: "bronce",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Hanny Elizabeth Espinoza Flores",
    school: "Unidad Educativa Particular del Pacífico",
    award: "",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Lopez Bonifaz Jennifer Raquel",
    school: "Instituto Particular Abdón Calderón (IPAC)",
    award: "",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Julio César Sierra Moscoso",
    school: "Unidad Educativa Javier",
    award: "",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Lorena Antonella Ramos Franco",
    school: "Unidad Educativa Stella Maris ",
    award: "",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "María de Lourdes Ávila San Ándres",
    school: "Unidad Educativa Javier",
    award: "",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Gustavo Santiago Torrico López",
    school: "Colegio Alemán",
    award: "",
    land: "Bolivia 🇧🇴",
  },
  {
    name: "José Fernando Echeverría",
    school: "Unidad Educativa Bilingüe Torremar",
    award: "",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Michael David Ramos Ochoa",
    school: "Unidad Educativa De Fuerzas Armadas FAE Nro 3 TAURA",
    award: "",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Renato Mario Oxa Macías",
    school: "Saint Andrew's School",
    award: "",
    land: "Bolivia 🇧🇴",
  },
  {
    name: "Luis Eduardo Reyes Romero",
    school: "Logos Academy",
    award: "",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Sebastián Andrés Wan Moreno",
    school: "Logos Academy",
    award: "",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Esteban Andres Miranda Toro",
    school: "Colegio Intisana",
    award: "",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Andrey David Ortega Zurita",
    school: "Fundacion Colegio Americano De Quito",
    award: "",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "José Adrián Clavijo Sotomayor",
    school: "Centro De Estudios Espíritu Santo",
    award: "",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Juan Pablo Romero Freire",
    school: "Unidad Educativa Particular del Pacífico",
    award: "",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Ailyn Paulette Del Pezo Mena ",
    school: "Colegio Alemán Humboldt",
    award: "",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Christian Alejandro Fiallos Constante",
    school: "Logos Academy",
    award: "",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Danny Ariel Gualotuña Poveda",
    school: "ISM Academy Quito",
    award: "",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Herbas Briones Fernanda Isabella",
    school: "Instituto Particular Abdón Calderón (IPAC)",
    award: "",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Otero Espinoza Luciana Valeria",
    school: "Instituto Particular Abdón Calderón (IPAC)",
    award: "",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Matias Augusto Rubio Carchi",
    school: "Centro Educativo Naciones Unidas - CENU",
    award: "",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Mía Leonor Dunn Bertha",
    school: "Unidad Educativa Bilingüe Delta",
    award: "",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Mathias Sebastián Garay Pazmiño",
    school: "Logos Academy",
    award: "",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Aileen Shirel Paguay Salazar",
    school: "Unidad Educativa Franciscana San Antonio De Milagro",
    award: "",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "David Nicolás Valarezo Árevalo",
    school: "Unidad Educativa Particular del Pacífico",
    award: "",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Debora Judith Sanabria García",
    school: "Unidad Educativa Particular José Domingo de Santistevan",
    award: "",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Maria Jose Gonzalez Luna",
    school: "Centro Educativo Naciones Unidas - CENU",
    award: "",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Mario Ricardo Quezada Bermudez",
    school: "Unidad Educativa Particular del Pacífico",
    award: "",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "María Emilia Sánchez Aguilar",
    school: "Unidad Educativa Particular del Pacífico",
    award: "",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Zoe Zabala Romay",
    school: "Saint Andrew's School",
    award: "",
    land: "	Bolivia 🇧🇴",
  },
  {
    name: "Amy Valentina Izquierdo Petroche",
    school: "Logos Academy",
    award: "",
    land: "Ecuador 🇪🇨",
  },
];

const SMTSchoolResults = [
  {
    name: "Colegio Intisana",
    award: "Oro",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Saint Andrew's School",
    award: "plata",
    land: "Bolivia 🇧🇴",
  },
  {
    name: "Logos Academy",
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
    name: "Mauricio Andrés Cevallos Robles",
    school: "Unidad Educativa Particular del Pacífico",
    award: "oro",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Zhiron Cristina Wu Yuan",
    school: "Instituto Particular Abdón Calderón (IPAC)",
    award: "oro",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Julio Enrique Viche Castillo",
    school: "Unidad Educativa Particular del Pacífico",
    award: "plata",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Arody Nahat Carlosama Morales ",
    school: "Unidad Educativa Zarán",
    award: "plata",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Adrian Emilio Torres Ronquillo",
    school: "Colegio Americano de Guayaquil",
    award: "plata",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Mateo Nicolas Vivanco Apolo",
    school: "Unidad Educativa Particular del Pacífico",
    award: "plata",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Lucio Ricardo Alarcon Adrian",
    school: "Unidad Educativa Mariscal Sucre",
    award: "bronce",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Mantilla Ruales Mauricio Adrian",
    school: "Instituto Particular Abdón Calderón (IPAC)",
    award: "bronce",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Natasha Fernanda Valarezo Oyola",
    school: "Logos Academy",
    award: "bronce",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "José Marcial Valero Pazos",
    school: "Unidad Educativa John F Kennedy",
    award: "bronce",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "María Emilia Luna Quintero",
    school: "Unidad Educativa Bilingüe Delta",
    award: "bronce",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Alejandro Selva Laguna",
    school: "Centro Educativo Naciones Unidas - CENU",
    award: "bronce",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Adrián Camilo Cerda Morocho",
    school: "Unidad Educativa Combatientes De Tapi",
    award: "",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Arteaga Velez Dana Cristina",
    school: "Instituto Particular Abdón Calderón (IPAC)",
    award: "",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Eduardo Vela",
    school: "Fundacion Colegio Americano De Quito",
    award: "",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Ricardo Tobar Andrés Vergara",
    school: "Unidad Educativa Particular Bilingue Ecomundo",
    award: "",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "German Gabriel Gonzalez Lazarde",
    school: "Unidad Educativa Santa MarÍa Eufrasia",
    award: "",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Pablo Adrián Miranda Toro",
    school: "Colegio Intisana",
    award: "",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Steward Alvarado Márquez",
    school: "Unidad Educativa Franciscana San Antonio De Milagro",
    award: "",
    land: "Ecuador 🇪🇨",
  },
];

const HVYSchoolResults = [
  {
    name: "American School",
    award: "oro",
    land: "Bolivia 🇧🇴",
  },
  {
    name: "Unidad Educativa Particular del Pacífico",
    award: "plata",
    land: "Ecuador 🇪🇨",
  },
  {
    name: "Unidad Educativa Zarán",
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
      </div>
    </>
  );
}
