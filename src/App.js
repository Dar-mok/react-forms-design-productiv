import React from "react";
import TodoApp from "./TodoApp";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Counter } from "./helpers";

/** Site application.
 *
 * App -> TodoApp
 **/

function App() {
  let idCounter = new Counter();

  return (
      <main className="App">
        <header className="container-fluid pt-4 pb-1">
          <div className="container">
            <h1>Prøductïv</h1>
            <p className="lead">The best name in todo list management.</p>
          </div>
        </header>

        <section className="container mt-4">
          <TodoApp initialTodos={[
            {
              id: idCounter.next(),
              title: "Code!",
              description: "Write some code",
              priority: 2,
              showEdit:false
            },
            {
              id: idCounter.next(),
              title: "Make dinner",
              description: "Cook something healthy",
              priority: 1,
              showEdit:false
            },
            {
              id: idCounter.next(),
              title: "Go to bed",
              description: "In bed by 11:15",
              priority: 3,
              showEdit:false
            },
          ]}
          idCounter={idCounter}
           />

          <Footer />
        </section>
      </main>
  );
}

export default App;
