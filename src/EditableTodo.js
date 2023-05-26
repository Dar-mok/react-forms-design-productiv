import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

/** Show editable todo item.
 *
 * Props
 * - todo w/ property "showEdit"

 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({ todo, remove, update }) {

    /** Toggle from todo to form if this is being edited */
    function toggleEdit() {
        todo.showEdit = true;
        update(todo);
    }

    /** Call remove fn passed to this. */
    function handleDelete() {
        remove(todo.id);
    }

    /** Edit form saved; toggle isEditing and update in ancestor. */
    function handleSave(formData) {
        update()
    }

    // const todosOrEdits = todo;


    return (
        <div className="EditableTodo">
            {todo.showEdit === true
                ? <TodoForm todo={todo, handleSave}/>
                : <div className="mb-3">
                    <div className="float-end text-sm-end">
                        <button
                            className="EditableTodo-toggle btn-link btn btn-sm"
                            onClick={toggleEdit}>
                            Edit
                        </button>
                        <button
                            className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
                            onClick={handleDelete}>
                            Del
                        </button>
                    </div>
                    <Todo />
                </div>
            }
        </div>
    );
}

export default EditableTodo;
