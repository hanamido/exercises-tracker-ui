import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';

function Exercise({ exercise, onEdit, onDelete }) {
    
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date}</td>
            <td><FaEdit onClick={ () => onEdit(exercise) }/></td>
            <td><AiFillDelete onClick={ () => onDelete(exercise._id) }/></td>
        </tr>
    );
}

export default Exercise;