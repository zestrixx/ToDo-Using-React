import React from 'react';
import './App.css';
import Task from './Task';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      task: ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
  }


  handleChange(e) {
    this.setState({
      task: e.target.value
    })
  }

  handleAdd = (e) => {
    if (this.state.task !== "") {
      const newItems = [...this.state.items, this.state.task]
      this.setState({
        items: newItems,
        task: ""
      })
    }
  }

  handleDelete = (id) => {
    const oldItems = [...this.state.items]
    const newItems = oldItems.filter((task, i) => {
      return i !== id
    })

    this.setState({
      items: newItems
    })
  }

  handleUpdate = (idx) => {
    const updatedTask = prompt("Update task")
    const list = this.state.items
    if (updatedTask !== null && updatedTask !== "") {
      list[idx] = updatedTask
    }
    this.setState(state => ({
      items: list,
      task: ""
    }))
  }


  render() {

    return (
      <div className="container shadow-lg my-4">
        <h3 className='p-3 text-center'>Plan Your Day <span><i className="fa fa-heart" aria-hidden="true"></i></span></h3>

        <div className="row p-5">
          <div className="col-12 col-sm-10 col-md-11">
            <input type="text" className="form-control" name="taskField" id="taskField" aria-describedby="helpId" placeholder="Enter your task" value={this.state.task} onChange={this.handleChange} />
          </div>
          <div className="col-12 col-sm-2 col-md-1 addBtn">
            <input name="addButton" id="addButton" className="btn btn-warning px-4" type="button" value="+" onClick={this.handleAdd} />
          </div>
        </div>

        <div className="my-2 mx-5" id='taskList'>
          <ul className="list-unstyled row">
            {this.state.items.map((task, i) => {
              return <Task value={task} key={i} id={i} delete={this.handleDelete} update={this.handleUpdate} />
            })}
          </ul>
        </div>


      </div>

    )
  }

}

export default App;
