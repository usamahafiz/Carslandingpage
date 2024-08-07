import React, { useEffect } from 'react';
import {useState} from 'react';
import Background from './components/Background/Background';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

const App =() => {
  const heroData = [
    {text1:"Dive into",text2:"What you love"},
    {text1:"Indulge",text2:"your passions"},
    {text1:"Give into",text2:"your passions"},
  ];
  const [heroCount, setHerocount] = useState(0);
  const [playStatus,setPlayStatus] = useState(false);


  useEffect(()=>{
    setInterval(()=>{
      setHerocount((count)=>{return count === 2 ?0: count+1})
    }, 5000);
  },[])


  return (
    <div>
      <Background playStatus={playStatus} heroCount ={heroCount} />
      <Navbar />
      <Hero
      setPlayStatus = {setPlayStatus}
      heroData = {heroData[heroCount]}
      heroCount = {heroCount}
      setHerocount = {setHerocount}
      playStatus = {playStatus}
      
      />
     
    </div>
  );
}

export default App;
