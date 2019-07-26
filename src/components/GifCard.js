import React, {Component} from 'react';

class GifCard extends Component {
    constructor(props){
      super(props);
    }
    render(){
      var embed = this.props.data.images.original.url;
      return (
        <div>
          <img src={embed} alt="Gif" />;
          <br></br>
        </div>
      );
    }
  }



export default GifCard;