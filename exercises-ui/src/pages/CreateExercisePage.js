import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ExerciseRow from '../components/ExerciseRow';

export const CreateExercisePage = () => {
    const unitOptions = ["lbs", "kgs"];
    // initialize state variables to be passed down
    const [name, setName] = useState(''); 
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState(unitOptions[0]); 
    const [date, setDate] = useState('');
    
    const navigate = useNavigate();
    
    const addExercise = async () => {
        const newExercise = {name, reps, weight, unit, date}; 
        console.log(newExercise);
        const response = await fetch('/exercises', {
            method: 'POST', 
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            }, 
        });
        if (response.status === 201) {
            alert("Successfully added the Exercise!");
        } else {
            alert(`Failed to add exercise, status code = ${response.status}. Invalid Request.`);
        }
        navigate("/"); 
    }; 

    return (
        <div>
            <h1>Add an Exercise Below:</h1>
            <ExerciseRow />
            <td><input
                type="text"
                placeholder="Enter name of the exercise"
                value={name}
                onChange={e => setName(String(e.target.value))} /></td>
            <td><input
            type="number"
                value={reps}
                placeholder="Enter the amount of reps"
                onChange={e => setReps(parseInt(e.target.value))} /></td>
            <td><input
                type="number"
                value={weight}
                placeholder="Enter the weight"
                onChange={e => setWeight(parseInt(e.target.value))} /></td>
            <td><select name="units" type="text">
                <option value="lbs" onChange={e => setUnit(e.target.unitOptions[0])}>lbs</option>
                <option value="kgs" onChange={e => setUnit(e.target.unitOptions[1])}>kgs</option> 
            </select></td>
            <td><input 
                type="text"
                value={date}
                placeholder="Format MM-DD-YY"
                onChange={e => setDate(String(e.target.value))} /></td>
            <button onClick={addExercise} >Submit</button>
        </div>
    )
};

export default CreateExercisePage;