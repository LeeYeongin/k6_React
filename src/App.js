import './App.css';
import MainHeader from './01/MainHeader';
import Hello from './01/Hello';

// component명은 대문자로 작성(일반 html태그와 구분하기 위해서), 함수형으로 작성
// component는 반드시 return을 가져야함
function App() {
  return ( // 부모태그 하나밖에 return 못함 -> 추가하고 싶을때, fragment(<></>)로 묶어 사용
    <>
      <div className="App"> {/* class는 claasName으로 작성(JSX 문법)*/}
        <MainHeader/>
        <Hello/>
        <Hello/>
        <Hello/>
        <Hello/>
        <Hello/>
      </div>
    </>
  );
}

// 화살표 함수로 작성가능
// const App = () => {
//   return ();
// }

// 모듈형 함수이기 때문에
// 이 모듈을 외부에서 사용하기 위해 export 해줘야함
// 중괄호 쓰지 않고 사용가능
export default App; 
