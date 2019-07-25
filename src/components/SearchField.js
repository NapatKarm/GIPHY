import React, {Component} from 'react';
import axios from 'axios';

class SearchField extends Component {
    constructor(props){
      super(props);
      this.state={
          data : [],
          searching: "",
          searched: ""
      }
    }
    searchChange=(event)=>{
        this.setState({searching : event.target.value});
    }
    searchUp=()=>{
        axios.get(`http://api.giphy.com/v1/gifs/search?q=${this.state.searching}&api_key=OryF3O6rJEiY1Xxpq0sw1SLruxHwxZOs`)
        .then(res => {
          console.log(res.data)
          this.setState({
            data : res.data,
            searched: this.state.searching
          })
        })
        .catch(err => {
          console.log(err);
        })
    }
    render(){
      return (
        <div>
            <form  className = "form">
                <label>
                    Search:
                    <input type="text" name="search" value={this.state.searching} onChange={this.searchChange}/>
                </label>
            </form>
            <button onClick={this.searchUp} class = "button">Submit</button>
            {this.state.searched}
        </div>
      );
    }
  }


export default SearchField;