import React from "react";
import picturelizard from "../picturelizard.svg";
import "../styles/App.css";
import { H1, P, Footer, Ul, A } from "../styles/styles";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <H1> Erik Martin Estevez</H1>
        <img src={picturelizard} className="Main-Pic" alt="picturelizard" />
      </header>

      <body>
        <P>
          My name is Erik and I am an international student from Spain that is
          currently doing a Computer Science Bachelor at Murdoch University.
          <br />
          <br />
          Furthermore, I work in a Cafe in Fremantle as a waiter and also doing
          an internship at&nbsp;
          <A href="https://www.climateclever.org/">ClimateClever</A>
          &nbsp;during January and February.
        </P>
      </body>

      <Footer>
        <Ul>
          <li>
            <A href="https://github.com/erikmartin333">GitHub</A>
          </li>
          <li>
            <A href="https://www.linkedin.com/in/erik-martin-estevez-4006871bb">
              Linkedin
            </A>
          </li>
          <li>
            <A href="https://twitter.com/erikmartin333">Twitter</A>
          </li>
        </Ul>
      </Footer>
    </div>
  );
}

export default App;
