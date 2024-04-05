// import './App.css';
import { FaHome } from "react-icons/fa";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom"
// import Hello from "./01/Hello";
import MyClock from "./08/MyClock";
import Lotto from "./06/Lotto";
import BoxOffice from "./05/BoxOffice";
import FoodMain from "./07/FoodMain";
import GalleryMain from "./11/GalleryMain";
import Festival from "./12/Festival";
import Frcst from "./14/Frcst";
import UltraSrtFcst from "./14/UltraSrtFcst";
import VilageFcst from "./14/VilageFcst";
import FrcstList from "./14/FrcstList";
import TrafficMain from "./09/TrafficMain";
// import Recoil1 from "./15/Recoil1";
import RecoilMain from "./15/RecoilMain";

// import RouteMain from "./13/RouteMain";

function App() {
  return (
    <BrowserRouter>
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
          <div className="flex justify-end items-center mx-2">
            <div className="mr-4 p-2 rounded-sm
                            hover:bg-slate-700 hover:text-white">
              <Link to='/r1'>Recoil</Link>
            </div>
            <div className="mr-4 p-2 rounded-sm
                            hover:bg-slate-700 hover:text-white">
              <Link to='/frcst'>예보</Link>
            </div>
            <div className="mr-4 p-2 rounded-sm
                            hover:bg-slate-700 hover:text-white">
              <Link to='/festival'>축제</Link>
            </div>
            <div className="mr-4 p-2 rounded-sm
                            hover:bg-slate-700 hover:text-white">
              <Link to='/gallery'>사진</Link>
            </div>
            <div className="mr-4 p-2 rounded-sm
                            hover:bg-slate-700 hover:text-white">
              <Link to='/food'>푸드마켓</Link>
            </div>
            <div className="mr-4 p-2 rounded-sm
                            hover:bg-slate-700 hover:text-white">
              <Link to='/traffic'>교통</Link>
            </div>
            <div className="mr-4 p-2 rounded-sm
                            hover:bg-slate-700 hover:text-white">
              <Link to='/boxoffice'>박스오피스</Link>
            </div>
            <div className="mr-4 p-2 rounded-sm
                            hover:bg-slate-700 hover:text-white">
              <Link to='/lotto'>로또</Link>
            </div>

            <div>
              <Link to='/'>
                <FaHome className='p-2 text-3xl rounded-sm h-11 w-11
                hover:bg-slate-700 hover:text-white' />
              </Link>
            </div>
          </div>
        </header>
        <main className='grow flex flex-col justify-center items-center
                       overscroll-y-auto'>
          <Routes>
            <Route path='/' element={<MyClock />} />
            <Route path='/lotto' element={<Lotto />} />
            <Route path='/boxoffice' element={<BoxOffice />} />
            <Route path='/food' element={<FoodMain />} />
            <Route path='/traffic' element={<TrafficMain />} />
            <Route path='/gallery' element={<GalleryMain />} />
            <Route path='/festival' element={<Festival />} />
            <Route path='/frcst' element={<Frcst />} />
            <Route path='/ultra/:dt/:area/:x/:y' element={<UltraSrtFcst />} />
            <Route path='/vilage/:dt/:area/:x/:y' element={<VilageFcst />} />
            <Route path='/flist' element={<FrcstList />} />
            <Route path='/r1' element={<RecoilMain />} />
          </Routes>
        </main>
        <footer className='flex justify-center items-center
                        min-h-20 bg-slate-700
                        text-white text-base'>
          @ 2024 LeeYeongIn. All right reserved.
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App; 