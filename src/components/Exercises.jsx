import React , {useState,useEffect} from 'react'
import {Box,Stack,Typography} from '@mui/material'
import ExerciseCard from './ExerciseCard';
import Pagination from '@mui/material/Pagination';
import {fetchData,Exerciseoptions} from './../Utils/Fetchdata'
//import { Exerciseoptions } from './../Utils/Fetchdata';


const Exercises = ({exercises , setExercise , bodyPart}) => {

  const[currentPage, setCurrentpage] = useState(1);
  const exercisePerPage= 9;

  const IndexofLastIndex = currentPage * exercisePerPage;
  const indexOfFirstindx = IndexofLastIndex - exercisePerPage;
  //const currentExercise = exercises.slice(indexOfFirstindx, IndexofLastIndex);
  

  useEffect(()=>{
   
    const Fetchdatafromcard=async()=>{
    
    let fetchExercisesfromcard= []

    if(bodyPart==='all')
    { fetchExercisesfromcard = await fetchData('https://exercisedb.p.rapidapi.com/exercises', Exerciseoptions);}
    else
    {fetchExercisesfromcard= await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, Exerciseoptions);}
    
    setExercise(fetchExercisesfromcard)
   
  }
  
  Fetchdatafromcard()
  
},[bodyPart])


  const paginate=(e, value)=>{
    setCurrentpage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  }
  return (
    
      <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
        <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">Showing Results</Typography>
        <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
          {exercises.map((exercise, idx) => (
            <ExerciseCard key={idx} exercise={exercise} />
          ))}
        </Stack>
        <Stack >
          {exercises.length > 9 && (<Pagination
        
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisePerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"/>)}
        </Stack>
        </Box>
);
}

export default Exercises