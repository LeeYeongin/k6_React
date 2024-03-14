import logo from "../logo.svg"
import "./HelloCss.css"
import HelloWhite from "./HelloWhite"
import HelloYellow from "./HelloYellow"
import { BsPersonRaisedHand } from "react-icons/bs";

export default function HelloCss() {
  const apikey = process.env.REACT_APP_MV_API; // api 키값 가져오기
  console.log(apikey)
  return (
    <div className="hellomain">
      <p>
        {/* <img className="imgLogo" src={logo} alt="logo"/> */}
        <BsPersonRaisedHand className="text-white text-9xl
                                        m-10"/>
      </p>
      <HelloWhite/>
      <HelloYellow/>
    </div>
  )
}


// rfc : 기본 함수, rafc: 화살표 함수