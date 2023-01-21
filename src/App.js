import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './Other.css'
import { Home } from './components/Home'
import Food from './components/Food'
import Fitness from './components/Fitness'
import Hollywood from './components/Hollywood'
import Technology from './components/Technology'
import Bollywood from './components/Bollywood'
import ImageInfo from './components/ImageInfo'
import {HomeImageOne,HomeImageTwo,HomeThree,ImageFour} from './components/ImgDataPage/HomeImgTwo'
import {BollyImgFirst,BollyImgTwo,BollyImgThree,BollyImgFour,BollyImgFive} from './components/ImgDataPage/BollyImgInfo'
import {TechnoImgFive,TechnoImgFour,TechnoImgThree,TechnoImgTwo,TechnoImgFirst} from './components/ImgDataPage/TechnoImg'
import {HollyImgFirst,HollyImgTwo,HollyImgThree,HollyImgFour} from './components/ImgDataPage/HollywooImg'
import {FitImgFive,FitImgFour,FitImgThree,FitImgTwo,FitImgFirst} from './components/ImgDataPage/FitnessImg'
import {FoodImgFirst,FoodImgTwo,FoodImgThree} from './components/ImgDataPage/FoodImg'
import { Heading } from './components/Heading'
import { contextData } from './components/ContextApi'
import { useContext } from 'react';


function App() {
  const data = useContext(contextData);
  return (
    <div className="App">
      <contextData.Provider value={data}>
        <div><Heading /></div>
        <Router>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path="/Bollywood" element={<Bollywood />}></Route>
            <Route path='/Technology' element={<Technology />}></Route>
            <Route path='/Hollywood' element={<Hollywood />}></Route>
            <Route path='/Fitness' element={<Fitness />}></Route>
            <Route path='/Food' element={<Food />}></Route>
            <Route path='/ImageInfo' element={<ImageInfo/>}></Route>
            <Route path='/HomeImageOne' element={<HomeImageOne/>}></Route>
            <Route path='/HomeImageTwo' element={<HomeImageTwo/>}></Route>
            <Route path='/HomeThree' element={<HomeThree/>}></Route>
            <Route path='/ImageFour' element={<ImageFour/>}></Route>
            <Route path='/BollyImgFirst' element={<BollyImgFirst/>}></Route>
            <Route path='/BollyImgTwo' element={<BollyImgTwo/>}></Route>
            <Route path='/BollyImgThree' element={<BollyImgThree/>}></Route>
            <Route path='/BollyImgFour' element={<BollyImgFour/>}></Route>
            <Route path='/BollyImgFive' element={<BollyImgFive/>}></Route>
            <Route path='/TechnoImgFirst' element={<TechnoImgFirst/>}></Route>
            <Route path='/TechnoImgTwo' element={<TechnoImgTwo/>}></Route>
            <Route path='/TechnoImgThree' element={<TechnoImgThree/>}></Route>
            <Route path='/TechnoImgFour' element={<TechnoImgFour/>}></Route>
            <Route path='/TechnoImgFive' element={<TechnoImgFive/>}></Route>
            <Route path='/HollyImgFirst' element={<HollyImgFirst/>}></Route>
            <Route path='/HollyImgTwo' element={<HollyImgTwo/>}></Route>
            <Route path='/HollyImgThree' element={<HollyImgThree/>}></Route>
            <Route path='/HollyImgFour' element={<HollyImgFour/>}></Route>
            <Route path='/FitImgFirst' element={<FitImgFirst/>}></Route>
            <Route path='/FitImgTwo' element={<FitImgTwo/>}></Route>
            <Route path='/FitImgThree' element={<FitImgThree/>}></Route>
            <Route path='/FitImgFour' element={<FitImgFour/>}></Route>
            <Route path='/FitImgFive' element={<FitImgFive/>}></Route>
            <Route path='/FoodImgFirst' element={<FoodImgFirst/>}></Route>
            <Route path='/FoodImgTwo' element={<FoodImgTwo/>}></Route>
            <Route path='/FoodImgThree' element={<FoodImgThree/>}></Route>
          </Routes>
        </Router>
        </contextData.Provider>
    </div >
  );
}

export default App;
