import React, {component,useEffect,useState} from 'react';
//import React, { useEffect, useState } from 'react';
import Home from './Home';
import TodoList from './TodoList';

class TodoCreate extends React.Component {
  state = { data: [], isLoading: true, showDetails: false, selectItem: '', showCreate: false};
  constructor(props) {
    super(props);
    //this.state = {value: 'hej'};
    //this.state = {value: props.id}
    this.state = {props};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /*const [todoItem, setTodoItem] = useState({
		item: '',
		isLoading: true,
	});*/

	


  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    let inputData = [
      {
        id: this.state.value,
        name: 'Hamburgare',
        instructions: 'cook it',
        ingredients: [
          {
            id: 1,
            name: 'milk',
            measurement: 'LITER',
            amount: 1.0,
          },
          {
            id: 2,
            name: 'egg',
            measurement: 'PIECES',
            amount: 4.0,
          },
          {
            id: 3,
            name: 'wheat flour',
            measurement: 'DECILITER',
            amount: 4.0,
          },
        ],
        category: {
          id: 2,
          name: 'Brunsh',
        },
      },
      
    
      this.setState({ data: inputData, isLoading: false }),
      console.log(this.state.data),
      <TodoList list={this.state.data} itemClick={this.displayDetails} />
      
      
      
    ]

/*Home.setState({ data: theList.concat(inputData), isLoading: false });*/

    event.preventDefault();
  }

  render() {
    return (
      
      <form onSubmit={this.handleSubmit}>
        <label>
      <h1>Input form</h1>
      </label>
      <label>
      <h3>here I want to print recipe with highest id</h3>
      </label>
      <label>
      <h3>value={this.state.value}</h3>
      </label>
      <label>
          Id:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
    Instructions:
    <input type="text" value={this.state.value} onChange={this.handleChange} />
    </label>
    <label>
    Ingredients:
    <input type="text" value={this.state.value} onChange={this.handleChange} />
    </label>
    <label>
    Category:
    <input type="text" value={this.state.value} onChange={this.handleChange} />
    </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default TodoCreate


//import React, {component} from 'react';

/*class inputForm {
  
  handleSubmit = () => {

  }*/
//class TodoCreate extends Component {
//export default function TodoCreate() {
 // export default class TodoCreate extends Component{
	
   // handleSubmit = () => {

   // }

  
  //class TodoCreate extends React.Component {
   // state = { companyName: '' };




	//addData: function({}) {
  
  
	
	
	/*addRow: function() {
		// add new data from here    
		var newdata = {fname:"Tom",lname:"Moody",age:23}    
		//take the existing state and concat the new data and set the state again    
	  this.setState({ tablerows: this.state.tablerows.concat(newdata ) });    
	},*/
//render(){
/*	return (
	<div>
		//	<h4>Input new data</h4>
      <form onSubmit = {this.handleSubmit}>
      <label>
    Id:
    <input type="number" name="Name on recipe" />
    </label>
    <input type="submit" value="Submit" />
      </form>
      </div>
  )
  };*/


 /* <label>
    Id:
    <input type="number" name="Name on recipe" />
    </label>
  <label>
    Name:
    <input type="text" name="Name on recipe" />
    </label>
    <label>
    Instructions:
    <input type="text" name="Instructions" />
    </label>
    <label>
    Ingredients:
    <input type="text" name="Ingredients" />
    </label>
    <label>
    Ingredients:
    <input type="text" name="Ingredients" />
    </label>
    <label>
    Ingredients:
    <input type="text" name="Ingredients" />
    </label>
    <label>
    Category: 
    <input type="text" name="Category" />
  </label>
  <input type="submit" value="Submit" />
  </form>
	//	</div>
    
	);
  }*/

//export default TodoCreate
/*var RecordsComponent = React.createClass({

      getInitialState: function () {
        return {
          tablerows:[
           {fname:"Tom",lname:"Moody",age:23}
          ]
        };
      },    
  addRow: function() {
      // add new data from here    
      var newdata = {fname:"Tom",lname:"Moody",age:23}    
      //take the existing state and concat the new data and set the state again    
    this.setState({ tablerows: this.state.tablerows.concat(newdata ) });    
  },    
  rows:function(){
      return this.state.tablerows.map(function(row,i){
            return   (<tr key={i}>
                     <td>{row.fname}</td>
                     <td>{row.lname}</td> 
                     <td>{row.age}</td>
                     </tr>);
      });
  },

        render : function() {
            return (
                <div>
                    <table>
                        <tr>
                            <td> row 1 </td>
                        </tr>
                        <tr>
                            <td> row 2 </td>
                        </tr>*/