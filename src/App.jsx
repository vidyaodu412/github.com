import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./modules/Navigation";
import Profile from "./modules/Profile";
import Hero from "./modules/Hero";
import Section from "./modules/Section";

const App = () => {
  const contentArray = [
    [
      { name: "Ravi", title: "Student", profilepic: "./css1.jpg" },
      { name: "Puja", title: "Student", profilepic: "./css2.jpg" },
      { name: "Ashok", title: "Student", profilepic: "./css3.jpg" },
    ],
    [
      { name: "Sunil", title: "Student", profilepic: "./css4.jpg" },
      { name: "Swati", title: "Student", profilepic: "./css5.jpg" },
      { name: "Chaitra", title: "Student", profilepic: "./css6.jpg" },
    ],
    [
      { name: "John", title: "Student", profilepic: "./css7.jpg" },
      { name: "Sachin", title: "Student", profilepic: "./css8.jpg" },
      { name: "Rohit", title: "Student", profilepic: "./css9.jpg" },
    ],
  ];
  return (
    <>
      <div className="container-fluid">
        <Navigation></Navigation>
      </div>
      <Hero></Hero>
      <h1 className="my-4">Classroom</h1>
      <Section content={contentArray}></Section>
    </>
  );
};

export default App;
