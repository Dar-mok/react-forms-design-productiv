import React from "react";

import Todo from "./Todo";

/** Shows the top todo.
 *
 * Props:
 * - todos
 *
 * TodoApp -> TopTodo
 */

function TopTodo({todos}) {
  // lowest-priority # is the highest priority
  // let top = todos.reduce(
  //     (acc, cur) => cur.priority < acc.priority ? cur : acc, todos[0]);

  let topPriority = todos[0];
  for (let todo of todos){
    if (todo.priority < topPriority.priority){
        topPriority = todo;
    if(topPriority.priority === 1) break;
    }
  }

  return <Todo todo={topPriority} />;
}

export default TopTodo;