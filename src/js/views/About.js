import React, { Component } from 'react';
import ajax from 'superagent';

export default class About extends Component {
  constructor(props) {
      super(props);
      this.state = {
         data: null
      }

     // this.setNewNumber = this.setNewNumber.bind(this)
   }
  componentDidMount() {
    ajax.get('https://aonavenue.aon.net/api/en-us/peoplehub?id=aonnet_ah0156366&id=aonnet_ah0156166&id=aonnet_ah82492&id=aonnet_a0173186')
        .end((error, response) => {
            if (!error && response) {
                this.setState({ data: response.body });
                console.log('done');
            } else {
                console.log('There was an error fetching from api', error);
            }
        }
    );
  }
  render() {
    let content;
    if(this.state.data==null)
    {
       console.log('empty data');
      content='';
    }
    else
    {
       console.log('setting data');
    content = this.state.data.map(function(item, i) {
      return <h3 key={item.Name}>{item.Name}</h3>
    })
  }
    return (

      <div className='About'>
        {content}
      </div>
    );
  }
}
