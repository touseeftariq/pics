import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';

class App extends React.Component{
    onFormSubmit = term => {
        console.log(term)
    }
    render(){
        return(
            <div className="ui container" style={{marginTop:"10px"}}>
            </div>
        );
    }
}

export default App;