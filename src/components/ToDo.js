import React from "react";

class ToDo extends React.Component {
 constructor(props) {
     super(props);
     this.state = {
         id: "",
     }
 }
 
    deleteHandler = () => {
        this.props.setToDos(this.props.toDos.filter(
            (element) => element.id !== this.props.todo.id
        ))
    };

    completeHandler = (id) => {
        this.props.toggleComplete(id) ;
    }

  render() {
    return (
      
        <div className="todo">
          <li
            className={`todo-item ${this.props.todo.completed ? "completed" : ""}`}
          >
            {this.props.text}
          </li>
          <button onClick={() => this.completeHandler(this.props.todo.id)} className="complete-btn">
            <i className="fas fa-check"></i>
          </button>
          <button onClick={() => this.deleteHandler()} className="trash-btn">
            <i className="fas fa-trash"></i>
          </button>
        </div>
      
    );
  }
}

export default ToDo;
