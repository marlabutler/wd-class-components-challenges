import React, { Component } from 'react';

class ToDoIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            myToDo: '',
            toDoArray: [{
                listItem: '',
            }],
        }
    }

onSubmit(e){
    e.preventDefault()
    let newToDoObj = {
        listItem: this.state.myToDo,
    }
    this.setState({
        currentToDo: "",
        toDoArray: [...this.state.toDoArray, newToDoObj]
    })
}

onchange(myToDo){
    let addToDo = myToDo.target.value;
    return this.setState({ currentToDo: addToDo})
}

checkboxChange(e){
    let todoItem = e.target.className
    let copyToDoArray = this.state.toDoArray
    let deleteToDo = []

copyToDoArray.forEach((obj) => {
    if(obj.listItem.includes(todoItem)) {
    console.log(obj)
} else {

    deleteToDo.push(obj)
}
})

    return this.setState({toDoArray: deleteToDo})
}

    render(){
    const flexStyles = {
        display: 'flex',
        width: '1w',
        alignItems: 'left'
    }

    return(
        <div>
            <form type='submit' onSubmit={(e) => this.onSubmit(e)}>
                <h1> My To Do List</h1>
                <input onChange={(e) => this.onChange(e)} />
                <br></br>
                <br></br>
                <button>Enter List Item</button>
            </form>

            <br></br>
            <br></br>
        <div>
        { this.state.toDoArray.map((myToDo) => {
            return myToDo.listItem === "" ? "" :
            <div id='checkbox' style={{width: '50vw'}}>
            <checkbox className={myToDo.listItem} onChange={(e) => this.checkboxChange(e)} style={flexStyles}/>
            <p className={myToDo.listItem} style={flexStyles, {marginTop: '-4vh',marginLeft: '4vw'}}>{myToDo.listItem}</p>
            </div>
        })
    }
    </div>
    </div>

        )
    }
}

export default ToDoIndex;