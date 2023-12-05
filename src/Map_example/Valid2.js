import React from 'react';

import ItemList from './ItemList2';
const App = () =>{
   const items=['item1','item2','item3'];
   return(
        <div>
        <h1>ITEMS</h1>
        <ItemList list={items}/>
        </div>
   );
}

export default App;
