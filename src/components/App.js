import React from 'react';
import unsplash from '../api/unsplash';

import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component{
    state = { images: [] };

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

    onFormSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term },
            
        })

        this.setState({images: response.data.results});
    }

    render(){
        return(
            <div className="ui container" style={{marginTop:"10px"}}>
                <SearchBar onSubmit={this.onFormSubmit} />
                {/* found: {this.state.images.length} images */}
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;