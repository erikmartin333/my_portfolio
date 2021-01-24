import React from "react";
//IMPORT PICS
import picturelizard from "../picturelizard.svg";
import twitter2 from "../twitter.png";
import linkedin from "../linkedin.png";
import github from "../github.svg";
import avatar from "../avatar.svg";
import birds from "../birds.gif";
import cat from "../cat.gif";

import html from "../skills/HTML.png";
import c from "../skills/C.webp";
import css from "../skills/CSS.png";
import java from "../skills/Java.webp";
import javaScript from "../skills/JavaScript.png";
import mysql from "../skills/mySQL.png";
import react from "../skills/React.png";

import "../styles/App.css";
import {
  Website,
  H1,
  P,
  Footer,
  A,
  SubHeadings,
  Span,
  Table,
  Column,
  Form,
} from "../styles/styles";

function App() {
  return (
    <Website>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <header className="App-header">
        <div className="FlyingBirds">
          <img src={birds} alt="birds" />
        </div>
        <H1> Erik Martin Estevez</H1>

        <img src={avatar} className="Main-Pic2" alt="avatar" />
      </header>

      <body>
        <SubHeadings>Bio</SubHeadings>
        <img src={picturelizard} className="Tiny-Pic" alt="picturelizard" />
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
        <Table>
          <Column>
            <img src={cat} className="Cat-Pic" alt="cat" />
          </Column>
          <Column>
            <img src={cat} className="Cat-Pic" alt="cat" />
          </Column>
          <Column>
            <img src={cat} className="Cat-Pic" alt="cat" />
          </Column>
        </Table>
        <SubHeadings>Skills</SubHeadings>
        <img src={html} className="icons" alt="icons" />
        <img src={css} className="icons" alt="icons" />
        <img src={javaScript} className="icons" alt="icons" />
        <br />
        <img src={c} className="icons" alt="icons" />
        <img src={java} className="icons" alt="icons" />
        <img src={mysql} className="icons" alt="icons" />
        <img src={react} className="icons" alt="icons" />
        <br />
        <br />
        <br />
        <Span>LET'S CHAT</Span>
        <Form action="mailto:erik.martin007@gmail.com" method="post">
          <div>
            <label htmlFor="name-input">Name:</label>
            <input id="name-input" type="text" className="name" required />
          </div>
          <div>
            <label>Email:</label>
            <input id="email-input" type="text" className="email" required />
          </div>
          <br />
          <div>
            <textarea id="message-input" className="message" required />
          </div>
          <br />
          <input
            type="submit"
            className="submitButton"
            value="Submit Query 😁"
          />
        </Form>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
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
    </Website>
  );
}

export default App;
