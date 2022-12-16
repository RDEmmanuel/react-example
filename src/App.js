import "./App.css";

//components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

//Logo imagen
import img from "./assets/code.svg";

//Skills images
import codeigniter from "./assets/codeigniter.svg";
import css from "./assets/css.svg";
import js from "./assets/js.svg";
import c from "./assets/c.svg";
import bootstrap from "./assets/bootstrap.svg";
import java from "./assets/java.svg";
import react from "./assets/react.svg";
import mysql from "./assets/mysql.svg";
import sql_server from "./assets/sql-server.svg";
import git from "./assets/git.svg";
import php from "./assets/php.svg";
import html5 from './assets/html5.svg';

//contact images 
import gmail from './assets/gmail.svg';
import github from './assets/github.svg';
import linkedin from './assets/linkedin.svg';

function App() {

  const navbarLink = [
    {url: "#home", title: "Home"},
    {url: "#", title: "Works"},
    {url: "#contact", title: "Contact"},
  ];

  const skill = [
    {img: html5},
    {img: css},
    {img: js},
    {img: bootstrap},
    {img: react},
    {img: java},
    {img: c},
    {img: codeigniter},
    {img: php},
    {img: git},
    {img: mysql},
    {img: sql_server},
  ];

  const contacts = [
    {url:"https://mail.google.com/mail/?view=cm&fs=1&to=rdemmanuel19@gmail.com", img: gmail},
    {url:"https://github.com/RDEmmanuel", img: github},
    {url:"https://mail.google.com/mail/?view=cm&fs=1&to=rdemmanuel19@gmail.com", img: linkedin},
    {url:"https://mail.google.com/mail/?view=cm&fs=1&to=rdemmanuel19@gmail.com", img: css},
  ]

  return (
    <div className="App">
      <Navbar navbarLinks={navbarLink} />

      <Home
        hi={"Hola, mi nombre es"}
        name={"Emmanuel"}
        subtitle={"Desarrollador de Software"}
        description={
          "Tengo 26 años, soy estudiante de la carrera Licenciatura en Sistemas de Información en la Facultad de Ciencias Exactas de la Universidad Nacional del Nordeste (UNNE)"
        }
        image={img}
      />

      <Skills 
        title={"Skills"}
        skills={skill}
      />

      <Contact 
      title={"Contactate conmigo"}
      links={contacts}
      />
      <Footer
        description={"Todos los derechos reservados ® 2022 Emmanuel Ruiz Diaz"}
      />
    </div>
  );
}

export default App;
