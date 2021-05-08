import React, {component} from 'react';

class TodoCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    //this.state = {data[]};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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