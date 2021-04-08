import React from "react";

class Form extends React.Component {


    inputTextHandler = (event) => {
    
        this.props.setInputText(event.target.value);
    }
    submitToDoHandler = (event) => {
        event.preventDefault();
        this.props.setToDos(
             [...this.props.toDos, {text: this.props.inputText, completed: false, id: Math.random() *100}]
        );
        // this.props.setToDos(
        //      {text: this.props.inputText, completed: false, id: Math.random() *100}
        // );
        this.props.setInputText("");
    }
    statusHandler = (event) => {
      this.props.setStatus(event.target.value)
    }  
  render() {
    return (
      <div>
        <div className="content">
          <form>
            <input
              value={this.props.inputText}
              onChange={(event) => this.inputTextHandler(event)}
              type="text"
              className="todo-input"
            />
            <button onClick={(event) => this.submitToDoHandler(event)} type="submit">
              <i className="fas fa-plus-square" />
            </button>
          </form>
          <div className="select">
            <select
              onChange={(event) => this.statusHandler(event)}
              name="todos"
              className="filter-todo"
            >
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
