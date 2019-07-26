import React, {Component} from 'react';
import axios from 'axios';
import GifCard from './GifCard'

class SearchField extends Component {
    constructor(props){
      super(props);
      this.state={
          data : [],
          searching: "",
          searched: ""
      }
    }
    componentDidMount() {
      this.fetchTrending();
    }
    searchChange=(event)=>{
        this.setState({searching : event.target.value});
    }
    fetchTrending=()=>{
        axios.get(`http://api.giphy.com/v1/gifs/trending?api_key=OryF3O6rJEiY1Xxpq0sw1SLruxHwxZOs`)
        .then(res => {
          console.log(res.data)
          this.setState({
            data : res.data.data,
            searched: this.state.searching
          })
        })
        .catch(err => {
          console.log(err);
        })
    }
    searchUp=()=>{
        axios.get(`http://api.giphy.com/v1/gifs/search?q=${this.state.searching}&api_key=OryF3O6rJEiY1Xxpq0sw1SLruxHwxZOs`)
        .then(res => {
          console.log(res.data)
          this.setState({
            data : res.data.data,
            searched: this.state.searching
          })
        })
        .catch(err => {
          console.log(err);
        })
    }
    render(){
      let gifSearch = this.state.data.map((gifs)=>
      <GifCard data = {gifs}/>
     ) 
      return (
        <div>
            <form  className = "form">
                <label>
                    Search:
                    <input type="text" name="search" value={this.state.searching} onChange={this.searchChange}/>
                </label>
            </form>
            <button onClick={this.searchUp} className = "button">Submit</button>
            {this.state.searched}
            {gifSearch}
        </div>
      );
    }
  }


export default SearchField;