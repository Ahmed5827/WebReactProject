import React, { useState } from "react";

import NavBar from "../commun/navbar/navBar";

import "./home.css";

import isimm1 from "../../assets/isimm1.jpg";

const vieEstudiantineSubmenu = [
  { name: "Clubs", path: "/clubs" },
  { name: "Emploi de Temps", path: "/EmploiDeTemps" },
];

const navBarItems = [
  { name: "Notre Université", path: "/home" },
  { name: "Administration", path: "/administration" },
  { name: "Entreprise", path: "/entreprise" },
  {
    name: "Vie estudiantine",
    path: "/vie-estudiantine",
    submenu: vieEstudiantineSubmenu,
  },
  { name: "A propos", path: "/about" },
];
const listGroupItems = [
  { name: "Etudiants", _id: "0" },
  { name: "Actualités", _id: "1" },
  { name: "Documents", _id: "2" },
  { name: "Lois", _id: "3" },
];

const Home = () => {
  return (
    <>
      <NavBar items={navBarItems} />
      <img src={isimm1} alt="Beautiful ISIMM" />
    </>
  );
};

export default Home;
