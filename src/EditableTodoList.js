import React from "react";
import EditableTodo from "./EditableTodo";

/** Show list of editable todos.
 *
 * Props:
 * - todos: array of [ todo, ... ]
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * TodoApp -> EditableTodoList -> [ EditableTodo, ... ]
 */
//

function EditableTodoList({todos, remove, update}) {
  
 let editableTodos = todos.map(todo=> {
  return <EditableTodo todo={todo} remove={remove} update={update} key={todo.id}/>
 })

  return (
      <div>
        {editableTodos}
      </div>
  );
}

export default EditableTodoList;
