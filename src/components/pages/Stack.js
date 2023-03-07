import React from "react";

export default function Stack() {
  return (
    <div className=" mt-10 pl-20 leading-10">
      <div>
        Here's my Resume, <a href="https://www.linkedin.com/in/lantao-zhang">link</a>.
      </div>
      <div>
        <h2 className="text-xl italic">Front-end</h2>
        <ul className=" ml-8">
          <li>1.HTML</li>
          <li>2.CSS</li>
          <li>3.Jquery</li>
          <li>4.React.js</li>
          <li>5.responsive design</li>
          <li>Bootstrap/Tailwind</li>
        </ul>
        <h2 className="text-xl italic">Back-end</h2>
        <ul className=" ml-8">
          <li>1.Node.js</li>
          <li>2.SQL: MySQL sequelize</li>
          <li>3.NoSQL: MONGODB mongoose</li>
          <li>4.RESTful API</li>
          <li>5.Express</li>
          <li>6.GraphQL</li>
        </ul>
      </div>
    </div>
  );
}
