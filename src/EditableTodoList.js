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

//cycle through todos array, adding a "EditableTodo" component on each round.

 let editableTodo = todos.map(todo=> {
  return <EditableTodo todo={todo} remove={remove} update={update}/>
 })



  return (
      <div>
        {editableTodo}
      </div>
  );
}

export default EditableTodoList;
