import React from 'react';



export default function TodoCreate() {
	
	
	
	
	/*addRow: function() {
		// add new data from here    
		var newdata = {fname:"Tom",lname:"Moody",age:23}    
		//take the existing state and concat the new data and set the state again    
	  this.setState({ tablerows: this.state.tablerows.concat(newdata ) });    
	},*/

	return (
		<div>
			<h4>This is a create form</h4>
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