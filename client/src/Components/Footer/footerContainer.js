import React, { Component } from 'react'
import Footer from './footer'

//MUI
import { withStyles }  from '@material-ui/core/styles'
//


const styles = (theme) => ({
    root:{
        height:'9rem',
        [theme.breakpoints.down('sm')]:{
            height:'20rem'
        },
        width:'auto',
        color:'#fff',
        backgroundColor:'#465E9C',
        position:'absolute',
        marginTop:'200px'
    },
    container:{
        margin:'auto',
        width:'80%',
    },
    logo:{
        width:'62%',
    },
    logoContainer:{
        maxWidth:'40%',
          height:'auto',
          display:'block', 
          margin:'auto',
          textAlign:'center'
    },
    menuItems:{
        color:'rgba(255, 255, 255, .75)',
        fontWeight:'nomral',
        '&:hover': {
            color:'white'
        }
    }
})

class FooterContainer extends Component {
    
    render(){
        return(
            <Footer styles={this.props}></Footer>
        )
    }
}



export default withStyles(styles)(FooterContainer)