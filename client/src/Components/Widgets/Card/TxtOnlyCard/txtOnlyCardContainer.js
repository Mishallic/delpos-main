//displays text only card

import React, { Component } from 'react'
import TxtOnlyCard from './txtOnlyCard'

class TxtOnlyCardContainer extends Component{
    
    render(){
        return(
            <div>
                <TxtOnlyCard data={this.props.data} styles={this.props.styles}></TxtOnlyCard>
            </div>
        )
    }
}

export default TxtOnlyCardContainer