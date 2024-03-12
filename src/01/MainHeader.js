import logo from '../logo.svg';

// JSX(자바스크립트 확장)문법 사용 ex) className
function MainHeader() {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        </header>
    );
}

export default MainHeader;