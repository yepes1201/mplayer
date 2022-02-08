import React from "react";
import { icons } from "../../../icons/icons";

export const About = () => {
  return (
    <div className="container center">
      <p className="mb-4">
        Icons provided by{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://fontawesome.com/"
          className="color-primary bold"
        >
          Font Awesome Icons
        </a>
      </p>
      <p className="mb-2">
        This app was designed and built by{" "}
        <span className="color-primary bold">Daniel Yepes</span> using{" "}
        <span className="color-primary bold">ReactJS</span>,{" "}
        <span className="color-primary bold">React-Router</span>,{" "}
        <span className="color-primary bold">MongoDB</span>,{" "}
        <span className="color-primary bold">NodeJS</span> with{" "}
        <span className="color-primary bold">Express</span>. More details on{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/yepes1201/mplayer"
          className="color-primary bold"
        >
          Github repository
        </a>
        .
      </p>
      <div className="about__icons flex mt-4">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/yepes1201/"
        >
          {icons.githubIcon}
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/yepes1201/"
        >
          {icons.linkedinIcon}
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/yepes1201/"
        >
          {icons.twitterIcon}
        </a>
      </div>
      <p className="about__caption mt-4">
        * I do not take any responsability of the songs uploaded in the app.
        Credits to their respective owners.
      </p>
      <p className="about__caption mt-2">
        © Daniel Yepes {new Date().getFullYear()}
      </p>
    </div>
  );
};
