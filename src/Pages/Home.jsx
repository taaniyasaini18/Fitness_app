import React, { Component , useState} from 'react';

import Exercises from './../components/Exercises';
import HeroBanner from './../components/HeroBanner';
import SearchExercises from './../components/SearchExercises';


const Home = ()=>{
    
    const[exercises, setExercise]= useState([]);
    const[bodyPart, setbodyPart]= useState('all');

    return( <>
   

   <HeroBanner/>
   <SearchExercises bodyPart={bodyPart} setbodyPart={setbodyPart} setExercise={setExercise}/>
   <Exercises  bodyPart={bodyPart}  setExercise={setExercise} exercises={exercises}/>
 </>
    );
}

export default Home;