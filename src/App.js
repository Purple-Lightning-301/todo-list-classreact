import React from "react";
import "./App.css";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      toDos: [],
      status: "all",
      filterToDos: [],
    };
    this.setStatus = this.setStatus.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this) ;
  }
  // setToDos(newToDos) {
  //   console.log(newToDos)
  //   let arr = [...this.state.toDos, newToDos]
  //   this.setState({toDos: arr})
  //   console.log(this.state.toDos);
  // }
  componentDidMount() {
    this.getLocal();
  }
  componentDidUpdate(prevProps, prevStates) {
   
    if (this.state.status !== prevStates.status || this.state.toDos.length !== prevStates.toDos.length) {
      this.filterHandler();
      this.saveLocalToDos();
    }
  }
  
  setToDos(arr) {
    this.setState({ toDos: arr });
  }
  setInputText(newInputText) {
    this.setState({ inputText: newInputText });
  }
  setStatus(newStatus) {
    this.setState({ status: newStatus });
  }
  setFilterToDos(newArr) {
    this.setState({ filterToDos: newArr });
  }

  filterHandler = () => {
    switch (this.state.status) {
      case "completed":
        this.setFilterToDos([
          // ...this.state.filterToDos, 
          ...this.state.toDos.filter((todo) => todo.completed === true),
        ]);
        break;
      case "uncompleted":
        this.setFilterToDos([
          // ...this.state.filterToDos, 
          ...this.state.toDos.filter((todo) => todo.completed === false),
        ]);
        break;
      default:
        this.setFilterToDos([
          // ...this.state.filterToDos, 
          ...this.state.toDos]);
        break;
    }
  };

  saveLocalToDos = () => {
    localStorage.setItem("toDos", JSON.stringify(this.state.toDos));
  };
  getLocal = () => {
    if (localStorage.getItem("toDos") === null) {
      localStorage.setItem("toDos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("toDos"));
      this.setToDos(todoLocal);
    }
  };
  toggleComplete(id){
    const index = this.state.toDos.findIndex(value=>{
      return value.id === id ;
    }) ;
    console.log(index) ;
    this.state.toDos[index].completed = !this.state.toDos[index].completed ;
    this.setState({
      toDos : this.state.toDos,
    })
  }
  render() {
    return (
      <div className="App">
        <div className="header">Todo-list</div>
        <Form
          toDos={this.state.toDos}
          setToDos={(newToDos) => this.setToDos(newToDos)}
          inputText={this.state.inputText}
          setInputText={(newInputText) => this.setInputText(newInputText)}
          setStatus={(newStatus) => this.setStatus(newStatus)}
        />
        <ToDoList
          toDos={this.state.toDos}
          setToDos={(newToDos) => this.setToDos(newToDos)}
          filterToDos={this.state.filterToDos}
          toggleComplete = {this.toggleComplete}
        />
      </div>
    );
  }
}

export default App;
