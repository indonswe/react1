import React, { useEffect, useState } from 'react';

export default function TryForm(props) {
	
 //console.log('tryform props:', props.list);
 const [todoItem, setTodoItem] = useState({
    item: '',
    isLoading: true,
});

useEffect(() => {
    async function fetchData() {
        //let theItem = await todoService.getById(props.id);

        //let theItem = await todoServiceRecipe.getRecipe(props.id);
        //console.log('component TodoDetails mounted', todoItem);
        //let propsLN = await props.list.propsLength;
        //console.log(propsLN);
        //{propsLN ?
        //:}
        //console.log(props.list.propsLength);
        
        let theItemId ='';
        let theItem = await props.list;
        console.log('tryform props:', props.list);
        if (theItem != '' ) {
            theItemId = theItem[1].id;
          } else {
            theItemId = '';
          }
        

        setTodoItem({ item: theItemId, isLoading: false });
        console.log({ theItem });
        console.log('todoItem:', todoItem);
        
        //console.log('component TodoDetails mounted', todoItem); // ...
    }
    fetchData();
}, [props.item]);
return(
<React.Fragment>
{todoItem.isLoading ? <h1>Loading data</h1> : <h3>Title:{todoItem.item}</h3>}
			
		</React.Fragment>
	);
}


/*
    return (
		<div>
			<h3>Id:{props.id}</h3>
      <form>
      <div>
			<h4>Input new Tryform</h4>
      <form>
    
</form>
		</div>  
    
</form>
		</div>
	);

}*/

