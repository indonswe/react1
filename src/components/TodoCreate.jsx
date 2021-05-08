import React from 'react';



export default function TodoCreate() {
	
  //class TodoCreate extends React.Component {
    state = { companyName: '' };

<form>

  <label>
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


	//addData: function({}) {
  
  
	
	
	/*addRow: function() {
		// add new data from here    
		var newdata = {fname:"Tom",lname:"Moody",age:23}    
		//take the existing state and concat the new data and set the state again    
	  this.setState({ tablerows: this.state.tablerows.concat(newdata ) });    
	},*/

	return (
		<div>
			<h4>Input new data</h4>
      <form>
      <div>
			<h4>Input new Recipe</h4>
      <form>
    
</form>
		</div>  
    
</form>
		</div>
	);
}
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