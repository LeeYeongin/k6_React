// import './App.css';
import { FaHome } from "react-icons/fa";
import MyListMain from "./04/MyListMain";

function App() {
  return ( 
    <div className='flex flex-col 
                    w-full max-w-screen-xl
                    h-screen 
                    mx-auto
                    overscroll-y-auto'>
      <header className='flex justify-between items-center
                         h-20
                         p-10
                         text-xl font-bold text-slate-200
                         bg-slate-400'>
        <div className='flex justify-center items-center'>
          리액트실습
        </div>
        <div><FaHome className='text-3xl'/></div>
      </header>
      <main className='grow flex flex-col justify-center items-center
                       overscroll-y-auto'>
        <MyListMain />
      </main>
      <footer className='flex justify-center items-center
                        h-20 bg-slate-700
                        text-white text-base'>
        @ 2024 LeeYeongIn. All right reserved.
      </footer>
    </div>
  );
}

export default App; 