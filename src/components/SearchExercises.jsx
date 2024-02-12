import React , {useState, useEffect} from 'react'

import { Box , Stack , Typography, TextField , Button} from '@mui/material';
import {fetchData , Exerciseoptions} from '.././Utils/Fetchdata';
import HorizontalScrollbar from './HorizontalScrollbar';




const SearchExercises = ({bodyPart , setbodyPart , setExercise}) => {
       
        const [search, setSearch] = useState('');
        const [bodyParts, setBodyParts] = useState([]);

       

        useEffect(()=> {
            const fetchExercisesData = async () => {
              const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', Exerciseoptions);
        
               setBodyParts(['all', ...bodyPartsData]);

            };
             console.log(bodyParts)
            fetchExercisesData();
          }, []);

         
    const handleClick= async()=>{
     
        if (search) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', Exerciseoptions);
            console.log(exercisesData)
      
            const Finaldata = exercisesData.filter((item) => {
              console.log('Item Name:', item.name);
              console.log('Item Target:', item.target);
              console.log('Item Equipment:', item.equipment);
              console.log('Item BodyPart:', item.bodyPart);
              return (
                item.name.toLowerCase().includes(search) ||
                item.target.toLowerCase().includes(search) ||
                item.equipment.toLowerCase().includes(search) ||
                item.bodyPart.toLowerCase().includes(search)
            )});
         
        console.log(Finaldata)   
        setSearch('');
        setExercise(Finaldata);
        

        

        }
    }
  return (
    

    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
         
          onChange = {(e)=> setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
         <Button className="search-btn" onClick={handleClick} sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} >
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
       
        </Box>
        <Box>
            <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setbodyPart={setbodyPart} setExercise={setExercise} /> 
    </Box>
</Stack>
  );
}

export default SearchExercises