import React from "react";
import picturelizard from "../picturelizard.svg";
import twitter2 from "../twitter.png";
import linkedin from "../linkedin.png";
import github from "../github.svg";
import avatar from "../avatar.svg";
import "../styles/App.css";
import { H1, P, Footer, A, SubHeadings, Span } from "../styles/styles";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <H1> Erik Martin Estevez</H1>
        <img src={avatar} className="Main-Pic2" alt="avatar" />
      </header>

      <body>
        <SubHeadings>Bio</SubHeadings>
        <P>
          My name is Erik and I am an international student from Spain that is
          currently doing a Computer Science Bachelor at Murdoch University.
          <br />
          <br />
          Furthermore, I work in a Cafe in Fremantle as a waiter and also doing
          an internship at&nbsp;
          <A href="https://www.climateclever.org/">ClimateClever</A>
          &nbsp;during January and February of 2021.
        </P>
        <SubHeadings>Projects</SubHeadings>
        <table>
          <tr>
            <th>
              <img
                src={picturelizard}
                className="Main-Pic"
                alt="picturelizard"
              />
            </th>
            <th>
              <img
                src={picturelizard}
                className="Main-Pic"
                alt="picturelizard"
              />
            </th>
            <th>
              <img
                src={picturelizard}
                className="Main-Pic"
                alt="picturelizard"
              />
            </th>
          </tr>
        </table>
        <br />
        <Span>LET'S CHAT</Span>
        <form action="mailto:erik.martin007@gmail.com" method="post">
          <span>
            <b>NAME:</b>
          </span>
          <br />
          <input type="text" className="name" />
          <br />
          <span>
            <b>EMAIL:</b>
          </span>
          <br />
          <input type="text" className="email" />
          <br />
          <span>
            <b>TEXT:</b>
          </span>
          <br />
          <textarea className="message" />
          <br />
          <input
            type="submit"
            className="submitButton"
            value="Submit Query 😁"
          />
        </form>
      </body>

      <Footer>
        <a href="https://github.com/erikmartin333">
          <img src={github} className="SocialMedia" alt="github" />
        </a>
        <a href="https://twitter.com/erikmartin333">
          <img src={twitter2} className="SocialMedia" alt="twitter" />
        </a>
        <a href="https://www.linkedin.com/in/erik-martin-estevez-4006871bb">
          <img src={linkedin} className="SocialMedia" alt="linkedin" />
        </a>
      </Footer>
    </div>
  );
}

export default App;
