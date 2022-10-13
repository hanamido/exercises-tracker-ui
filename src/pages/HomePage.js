import React from 'react';
import ExerciseList from '../components/ExerciseList';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage({setExerciseToEdit}) {
    const [exercises, setExercises] = useState([]);
    const navigate = useNavigate();

    const onEdit = exercise => {
        setExerciseToEdit(exercise);
        navigate("/edit-exercise");
    };

    const onDelete = async (_id) => {
        const response = await fetch(`/exercises/${_id}`, {method: 'DELETE'});
        console.log(response.status)
        // successfuly fetch the exercise with specified ID
        if (response.status === 204) {
            const getResponse = await fetch('/exercises');
            const exercises = await getResponse.json();
            setExercises(exercises);
        } else {
            console.error(`Failed to delete Exercise with _id = ${_id}, status code = ${response.status}`);
        } 
    }; 

    const loadExercises = async () => {
        const response = await fetch('/exercises');
        const data = await response.json();
        setExercises(data);
    };

    useEffect( () => {
        loadExercises();
    }, []);

    return (
        <>
            <ExerciseList exercises={exercises} onEdit={onEdit} onDelete={onDelete}></ExerciseList>
        </>
    );
};

export default HomePage;
