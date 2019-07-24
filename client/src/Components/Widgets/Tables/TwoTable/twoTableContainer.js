import React, { Component } from 'react'
import { withStyles} from '@material-ui/core/styles'
import TwoTable from './twoTable'

const styles = () => ({
    root:{
        height:'auto',
        width:'100%'
    },
    container:{
        margin:'auto',
        width:'100%'
    },
    tableContainer:{
        marginTop:'70px',
        marginBottom:'170px'
    },
    textContainer:{
        paddingLeft:'100px',
        border:'1px red solid'
    },
    image:{
        paddingTop:'25px'
    },
    bullets:{
        border:'1px red solid',
        padding:'25px'
    },
    card: {
        maxWidth: 345,
      },
      media: {
        height: 140,
      },
})

class TwoTableContainer extends Component {

    state = {
        data:[
           {    orientation:'right',
                text:{
                    header:'I am the header',
                    paragraph:'This is a parahraph, treat it well and make it secondary. Thanks alot!',
                    styles:{
                        header:{
                            color:'black',
                            fontSize:'35px',
                            fontWeight:'bolder',
                            padding:'10px'
                        },
                        paragraph:{
                            color:'grey',
                            padding:'10px'
                        }
                    },
                    button:{
                        cta:'Know more',
                        link:'/',
                        color:'primary'
                    }    
       
                },
                image:{
                    url:'images/hero-ds.jpg',
                    alt:'main',
                    styles:{
                        height:'auto',
                        width:'100%',
                        paddingTop:'40px'
                    }
                }
            },
            {   orientation:'left',
                text:{
                    header:'I am  the right header',
                    paragraph:'This is a parahraph, treat it right and make it secondary. Thanks alot!',
                    styles:{
                        header:{
                            color:'black',
                            fontSize:'35px',
                            fontWeight:'bolder'
                        },
                        paragraph:{
                            color:'grey'
                        }
                    },
                    button:{
                        cta:'Know more',
                        link:'/',
                        color:'secondary'
                    }
                },
                image:{
                    url:'images/hero2-ds.png',
                    alt:'main',
                    styles:{
                        height:'auto',
                        width:'100%',
                    }
                }
            }
        ]
    }

    render(){
        return(
            <TwoTable data={this.state.data} styles={this.props}></TwoTable>
        )
    }
}

export default withStyles(styles)(TwoTableContainer)