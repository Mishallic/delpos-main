//displays data in 3 * 3 grid 

import React, { Component } from 'react'
import ThreeTable from './threeTable'

class ThreeTableContainer extends Component{
    state={
        data:{
            
          } 
    }
    render(){
        return(
            <div>
              <ThreeTable layout={this.props.layout} data={this.props.data} styles={this.props.styles}></ThreeTable>
            </div>
        )
    }
}



export default ThreeTableContainer