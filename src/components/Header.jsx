import React from "react";
import quantum_logo from "../images/logo-quantum.png";
import { useState } from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { GoThreeBars, GoX } from "react-icons/go";
export const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const { width } = useWindowDimensions();

  return (
    <React.Fragment>
      {width > 700 ? (
        <>
          <header className="header">
            <ul className="logo">
              <figure className="quantum-logo">
                <img
                  className="quantum-logo-image"
                  src={quantum_logo}
                  alt="quatum logo"
                />
              </figure>
            </ul>

            <ul className="sections">
              <Link to="/">HOME</Link>
              <Link to="/sobremi">SOBRE MÍ</Link>
              <Link to="/proyectos">PROYECTOS</Link>
              <Link to="/contacto">CONTACTO</Link>
            </ul>

            <ul className="icons">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/QuantumCode2000"
              >
                <figure className="github">
                  <svg
                    height="32"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    version="1.1"
                    data-view-component="true"
                    className="octicon octicon-mark-github v-align-middle"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                    ></path>
                  </svg>
                </figure>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/JorgeLuisTanca1"
              >
                <figure className="twitter">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="octicon r-jwli3a r-4qtqp9 r-yyyyoo r-16y2uox r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp"
                  >
                    <g>
                      <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                    </g>
                  </svg>
                </figure>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/jorge-luis-tancara-nina-2700421b2/"
              >
                <figure className="linkedin">
                  <svg
                    className="octicon"
                    width="24"
                    height="24"
                    viewBox="0 0 1000 1000"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M 336 332C 336 332 336 789 336 789C 336 789 211 789 211 789C 211 789 211 332 211 332C 211 332 336 332 336 332M 346 206C 346 206 346 206 346 206C 346 247 313 280 273 280C 233 280 201 247 201 206C 201 166 233 133 273 133C 313 133 346 166 346 206M 834 508C 834 508 834 789 834 789C 834 789 709 789 709 789C 709 789 709 556 709 556C 709 416 543 427 543 556C 543 556 543 789 543 789C 543 789 419 789 419 789C 419 789 419 332 419 332C 419 332 543 332 543 332C 543 332 543 406 543 406C 601 298 834 290 834 508" />
                  </svg>
                </figure>
              </a>
            </ul>
          </header>
        </>
      ) : (
        <header className="header active">
          <ul className="logo">
            <figure className="quantum-logo">
              <img
                className="quantum-logo-image"
                src={quantum_logo}
                alt="quatum logo"
              />
            </figure>
          </ul>
          <ul className="icons">
            <h1 style={{ color: "white" }} onClick={handleClick}>
              {click ? <GoX /> : <GoThreeBars />}
              {/* click   */}
            </h1>
          </ul>
        </header>
      )}
    </React.Fragment>
  );
};

export default Header;
