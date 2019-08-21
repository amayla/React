import React, {Component} from 'react' 
import SearchBar from './SearchBar'
import ImageList from './ImageList'
import axios from 'axios'

class App extends Component{
    state = {
            images:[]
    }

    
// function yang mengambil keyword dari Search bar,digunakan untuk untuk request gambar
    onSearchSubmit = (keyword) => {
        axios.get(
            'https://api.unsplash.com/search/photos', {
                headers: {
                    Authorization: `Client-ID f68eb09626c2ca753c50b1794c7ada0444dd7faa4d5ce9767a328bdcbcc80f19`
                },
                params: {
                    query : keyword
                }
            }
        ).then((res) => {
            // jika berhasil
            //update state untuk property images diisi dengan hasil search gambar
            this.setState({images:res.data.results})
            
            
        }).catch((err) => {
            // jika gagal
            console.log(err.message);
        })
        
    }


    render(){
        return (<div className="container">
            
            <SearchBar asd = {this.onSearchSubmit} />
            <ImageList data ={this.state.images}/> 
        </div>
        )
    }
}

export default App
/*JSX adalah syntax yang disediakan JS
Untuk memudahkan developer menyusun HTML di JS */