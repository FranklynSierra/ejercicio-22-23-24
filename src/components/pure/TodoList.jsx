import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({todos, onTodoClick}) => {
   //aqui es donde se maneja el todo, 
   //osea la creacion y tachacion de la lista

   
    return (
        <div>
            <h1>Your TODOs</h1>
            <ul>
            {/*esta parte se agrega la lista el todo(lo que completaste)*/}
                {todos.map((todo, index) => 
                    
                    (
                        
                        <Todo 

                        //son las props del todo, sin eso la aplicacion estaria incompleta
                            key={index}
                           //pasa toda la informacion que tiene el todo, TODOS
                            {...todo} // id, text, completed
                            //aqui se crea el todo
                            onClick = {
                                () => onTodoClick(todo.id)
                            }
                        />
                    )
                )}

            </ul>
            
        </div>
    );
}
//aqui se pasa la logica o los requerimientos para que esto funcione
//osea que cada parte del todo este selleciona a un tipo de dato especifico
//todo dentro del arrayOf
//por ejemplo el id que debe ser un numero obligatoriamente
TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape(
            {
                id: PropTypes.number.isRequired,
                text: PropTypes.string.isRequired,
                completed: PropTypes.bool.isRequired
            }
        ).isRequired
    ).isRequired,
    //es una funcion obligatoria
    onTodoClick: PropTypes.func.isRequired       
}

export default TodoList;
