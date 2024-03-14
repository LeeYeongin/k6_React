import logo from "../logo.svg"
import "./HelloCss.css"
import HelloWhite from "./HelloWhite"
import HelloYellow from "./HelloYellow"

const HelloCss = () => {
  return (
    <div className="hellomain">
      <p>
        <img className="imgLogo" src={logo} alt="logo"/>
      </p>
      <HelloWhite/>
      <HelloYellow/>
    </div>
  )
}

export default HelloCss

// rfc : 기본 함수, rafc: 화살표 함수