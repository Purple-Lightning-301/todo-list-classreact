import React from "react";
import ToDo from "../components/ToDo";

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
    }

  render() {
    return (
      <div>
        <div className="todo-container">
          <ul className="todo-list">
            {this.props.filterToDos.map((todo) => (
              <ToDo
                key={todo.id}
                text={todo.text}
                toDos={this.props.toDos}
                setToDos={this.props.setToDos}
                todo={todo}
                toggleComplete = {this.props.toggleComplete}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ToDoList;