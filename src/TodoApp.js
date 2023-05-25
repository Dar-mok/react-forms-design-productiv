import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import TopTodo from "./TopTodo";
import EditableTodoList from "./EditableTodoList";
import TodoForm from "./TodoForm";

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp({initialTodos, idCounter}) {
  const [todos, setTodos] = useState(initialTodos);

  /** add a new todo to list */
  function create(newTodo) {
    setTodos([...todos, {...newTodo, id:idCounter.next()}]);
  }

  /** update a todo with updatedTodo */
  //add a key that is like "isEditing" thats true or false and determines i
  function update(updatedTodo) {
    let newTodos = todos.map(todo => {
      if (todo.id === updatedTodo.id) return updatedTodo;
      return todo;
    })
    setTodos(newTodos);
  }

  /** delete a todo by id */
  function remove(id) {
    let newTodos = todos.filter(todo =>todo.id !== id);
    setTodos(newTodos)
  }

  return (
      <main className="TodoApp">
        <div className="row">

          <div className="col-md-6">
            {todos.length > 0 ? <EditableTodoList todos={todos}/> : <span className="text-muted">You have no todos.</span>}
          </div>

          <div className="col-md-6">

            {todos.length > 0 ? <section className="mb-4">
              <h3>Top Todo</h3>
              <TopTodo />
            </section> : <section className="mb-4">No Todos</section>}

            <section>
              <h3 className="mb-3">Add Nü</h3>
              <TodoForm
              create={create}
              />
            </section>
          </div>

        </div>
      </main>
  );
}

export default TodoApp;