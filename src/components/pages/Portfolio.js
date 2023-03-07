import React from "react";
import Project from "./Project";
import pic1 from "../../webdev1.png";
import pic2 from "../../webdev2.png";
import pic3 from "../../webdev3.png";
import pic4 from "../../webdev4.png";
import pic5 from "../../webdev5.png";
import pic6 from "../../webdev6.png";


let projects = [
  {
    id: 1,
    project: "Grocery Shopping List",
    link: "https://github.com/pppzlt/bc-project2",
    pic: pic1,
  },
  {
    id: 2,
    project: "Stock Market Visualizer",
    link: "https://github.com/jason-lieb/Stock-Market-Visualizer",
    pic: pic2,
  },
  {
    id: 3,
    project: "Weather Forecaster",
    link: "https://github.com/pppzlt/bc-weather",
    pic: pic3,
  },
  {
    id: 4,
    project: "Employee Tracker",
    link: "https://github.com/pppzlt/bc-employee-tracker",
    pic: pic4,
  },
  {
    id: 5,
    project: "Portfolio Summary",
    link: "https://github.com/pppzlt/portfolio-summary",
    pic: pic5,
  },
  {
    id: 6,
    project: "Mongoose Backend app",
    link: "https://github.com/pppzlt/bc-mongoose-backend",
    pic: pic6,
  },
];


export default function Portfolio() {
  return (
    <div className="">
      
      <Project project={ projects } />
    </div>
  );
}
