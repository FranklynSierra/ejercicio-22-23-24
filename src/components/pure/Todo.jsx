import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onClick, completed, text, id }) => {
    return (
        //el onClick es el componente, no la accion por asi decirlo
        <li onClick={onClick} 
        style={
            {
                //son los estados si alguno de cumple o no
                //si da positivo principalmente
                //se va cambiando dependiendo si esta "completado" o no
                textDecoration: completed ? 'line-through': 'none',
                textDecorationColor: completed ? 'red' : 'none',
                color: completed ? 'red' : 'white'  
            } 
        }>
            {id} - {text}
        </li>
    );
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}

export default Todo;
