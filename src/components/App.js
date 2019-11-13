import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';

class App extends React.Component{
    // onFormSubmit = term => {
    //     axios.get('https://api.unsplash.com/search/photos', {
    //         params: { query: term },
    //         headers: {
    //             Authorization: 'Client-ID 7bbc8e3e820da88ac38364c2e89399edc88749dec202187a063fa4d4081afc9a'
    //         }
    //     }).then(Response => {
    //         console.log(Response.data.results);
    //     })
    // }

    async onFormSubmit (term){
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID 7bbc8e3e820da88ac38364c2e89399edc88749dec202187a063fa4d4081afc9a'
            }
        })
    console.log(response.data.results);
    }

    render(){
        return(
            <div className="ui container" style={{marginTop:"10px"}}>
                <SearchBar onSubmit={this.onFormSubmit} />
            </div>
        );
    }
}

export default App;