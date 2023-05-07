import React, { Suspense } from "react";
import "./Skill.css"
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";

const Skill = () => {
  return (
    <section class="skill" id="skill">
      <div className="box-geometry">
    <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />
              <OrbitControls enableZoom={true} autoRotate />
            </Suspense>
          </Canvas>
    </div>
    <div className="skill-content">
  <h3>Skills</h3>
  <div className="skill-list">
    <ul>
      <li>Python (Pandas, NumPy, Matplotlib, Scikit-learn)</li>
      <li>MERN stack (MongoDB, ExpressJS, ReactJS, Node.js)</li>
      <li>.NET framework (C#, CRUD, RestAPI)</li>
      <li>ReactJS (Three, MVC, GraphQL, RESTful API)</li>
      <li>PowerBI, Azure (Data lakes, Data Factory, Azure SQL Database, Cosmos DB)</li>
      <li>AWS (EC2, S3, Lambda, DynamoDB, API Gateway)</li>
      <li>SQL proficiency, database management, SQL queries</li>
    </ul>
    <ul>
      <li>Git, GitHub (cloning, merging, collaboration, Git actions)</li>
      <li>Web scraping and API integration with Python</li>
      <li>Data cleaning, wrangling, and visualization</li>
      <li>Machine learning (analysis, prediction)</li>
      <li>Docker (containerization, build image, deployment)</li>
      <li>Communication, presentation, and time management</li>
      <li>Microsoft Excel (Macros, V-Lookup, Power Query)</li>
    </ul>
  </div>
  <p>You can resize or move this cube by right clicking and dragging it with your mouse cursor</p>
</div>
    
    </section>
  )
}

export default Skill