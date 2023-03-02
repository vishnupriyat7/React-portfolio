import React from "react";
import { GitHub, Email, LinkedIn } from "@mui/icons-material";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Vishnu Priya T</h2>
        <div className="prompt">
          <p>
            A Software Developer specialised in frontend and backend development
            for complex scalable web apps.{" "}
          </p>
          <GitHub />
          <Email />
          <LinkedIn />
        </div>
      </div>
      <div className="skills">
        <ol className="list">
            <li className="item">
                <h2>Front-End</h2>
                <span>HTML, CSS, React JS, Angular, Redux, Tailwind CSS,Bootstrap, Flutter </span>
            </li>
            <li className="item">
                <h2>Back-End</h2>
                <span>Node JS, Python, Express, Django, MySql, PostgreSql, AWS, S3</span>
            </li>
            <li className="item">
                <h2>Languages</h2>
                <span>PHP,JavaScript,C,C++</span>
            </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
