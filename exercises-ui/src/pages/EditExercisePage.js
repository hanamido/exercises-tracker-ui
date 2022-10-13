import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ExerciseRow from '../components/ExerciseRow';

export const EditExercisePage = ({exerciseToEdit}) => {
    const unitOptions = ["lbs", "kgs"];
    // Initialize state variables to be passed down 
    const [name, setName] = useState(exerciseToEdit.name);
    const [reps, setReps] = useState(exerciseToEdit.reps);
    const [weight, setWeight] = useState(exerciseToEdit.weight);
    const [unit, setUnit] = useState(exerciseToEdit.unit); 
    const [date, setDate] = useState(exerciseToEdit.date);

    const navigate = useNavigate();

    const editExercise = async () => {
        const editedExercise = {name, reps, weight, unit, date};
        const response = await fetch(`/exercises/${exerciseToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify(editedExercise),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (response.status === 200) {
            alert("Successfully edited the exercise details!"); 
        } else {
            alert(`Failed to edit exercise, please check your entry. Status Code: ${response.status}`); 
        };
        navigate("/"); 
    }; 

    return (
        <div id="edit">
            <h2>Edit an Exercise</h2>
            <ExerciseRow />
            <td><input 
                type = "text"
                value = {name}
                onChange = {e => setName(String(e.target.value))} /></td>
            <td><input 
                type = "number"
                value = {reps}
                onChange = {e => setReps(parseInt(e.target.value))} /></td>
            <td><input 
                type = "number"
                value = {weight}
                onChange = {e => setWeight(parseInt(e.target.value))} /></td>
            <td><select name="units" id="units" type="text">
                <option value="lbs" onChange={e => setUnit(e.target.unitOptions[0])}>lbs</option>
                <option value="kgs" onChange={e => setUnit(e.target.unitOptions[1])}>kgs</option> 
            </select></td>
            <td><input 
                type = "string"
                value = {date}
                onChange = {e => setDate(String(e.target.value))} /></td>
            <button onClick = {editExercise} >Save</button>
        </div>
    );
}

export default EditExercisePage;