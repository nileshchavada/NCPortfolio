import "./Intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
 
export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ['Software Developer', 'Web Developer', 'App Developer'],
    });
  }, []);

  return (
    <div className="Intro" id="Intro">
      <div className="left">
        <div className="imgContainer">
          <img src={process.env.PUBLIC_URL + '/image/persone.png'} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Nilesh Chavada</h1>
          <h3> <span ref={textRef}></span>
          </h3>
        </div>
      </div>
    </div>
  );
}
