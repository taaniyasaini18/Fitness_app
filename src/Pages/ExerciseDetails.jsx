import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { Exerciseoptions, fetchData, youtubeOptions } from '../Utils/Fetchdata';
import Details from '../components/Details';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';





const ExerciseDetails = () => {
    const [Exercisedetails, setExercisedetails] = useState({});
    const [Simyoutubevid, setSimyoutubevid]= useState([]);
    const [Simtargetexercise, setSimillartargetExercise] = useState([]);
    const [SimEquipmentExercise, setSimEquipmentExercise] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchdetails = async () => {
            
                const exercisecallapi = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, Exerciseoptions);
                setExercisedetails(exercisecallapi);
                const exerciseVideosData = await fetchData(`https://youtube-search-and-download.p.rapidapi.com/search?query=${exercisecallapi.name}`, youtubeOptions);
                setSimyoutubevid(exerciseVideosData.contents)
                const simillarTargetExercises = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/target/${exercisecallapi.target}`, Exerciseoptions);
                setSimillartargetExercise(simillarTargetExercises);
                const simillarEquimentExercise = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/equipment/${exercisecallapi.equipment}`, Exerciseoptions);
                setSimEquipmentExercise(simillarEquimentExercise);
                
           
        };

        fetchdetails();
    }, [id]);



return (
    <>
        
        
         <Details Exercisedetails={Exercisedetails} Simyoutubevid={Simyoutubevid} />
        <ExerciseVideos Simyoutubevid={Simyoutubevid} name={Exercisedetails.name} /> 
        <SimilarExercises Simtargetexercise={Simtargetexercise} SimEquimentExercise={SimEquipmentExercise}/>
    </>
);

}

export default ExerciseDetails;