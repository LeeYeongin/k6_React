import logo from './logo.svg';
import './App.css';

// component명은 대문자로 작성(일반 html태그와 구분하기 위해서)
function App() {
  return ( // 부모태그 하나밖에 return 못함
    <>
      <div className="App"> {/* class는 claasName으로 작성*/}
        <header className="App-header">
          <p>
            k-digital 6기 이영인
          </p>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
      <div>402호</div> {/* 부모태그는 하나만 가능 -> fragment(<></>)로 묶어 사용*/}
    </>
  );
}

export default App;
