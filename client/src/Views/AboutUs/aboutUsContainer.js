import React, { Component } from 'react'
import { withStyles} from '@material-ui/core/styles'
import AboutUs from './aboutUs'


const styles = (theme) => ({
    //main div
    root:{
        height:'100%'
    },
    //media bridge
    parallex:{
        minHeight:'300px',
        backgroundAttachment:'fixed',
        backgroundPosition:'fixed',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover'
    },
    //txtOnlyCardContainer
    TICcard: {
        display: 'flex',
        width:'80%',
        margin:'auto',
        marginTop:'40px',
        marginBottom:'70px',
        height:'100%'
      },
      TICdetails: {
        display: 'flex',
        flexDirection: 'column',
      },
      TICcontent: {
        flex: '1 0 auto',
      },
      TICcover: {
        height:'100%',
        width:'100%'
      },
      
      TICcontrols: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
      },
      TICParagraphText:{
          fontSize:'16px'
      },
      
})

class AboutUsContainer extends Component {

    state={
        data:{
            cardData:[
                {
                    direction:'right',
                    paragraph:{

                        text:"V-Tech’s primary mission is to provide high quality products and services in affordable costs to our customers along with professional after sales support through qualified team of engineers and technicians, and most importantly respecting their warranties, maintenance and sales agreement."
                    },
                    header:{
                        text:'Our Mission',
                        variant:'h4',
                            component:'h4'
                    },
                    img:{
                        static:'images/para-ds.jpg'
                    }
                },

                {   
                    direction:'left',
                    paragraph:{

                        text:"V-tech is our third company in the group, after PETRA ltd in Poland and AOS Software in Jordan. V-tech is specialized in two areas: Security and Networking systems, Software and hardware solutions for POS and warehousing systems in retail and hospitality. And it is also specialized in secure fiscal vat systems solutions with high cryptographic tools."
                    },
                    header:{
                        text:'Our History',
                        variant:'h4',
                            component:'h4'
                    },
                    img:{
                        static:'images/media-ds.jpg'
                    }
                },
            ],
            TOCdata:{
                header:{
                    text:'OverView'
                },
                paragraph:{
                    text:'We are a group of young people who were gathered in one company from different information technology companies (Security, Networking, Retail). Because of the vast experience of each person of our team we became one the fastest growing computer information companies in the region. This expanding is due to the experience, harmony , hardworking of our team. Our company is built on sharing and fair treatment for all employees and customers.'
                }
            }
        }
    }

    render(){
        return(
            <AboutUs data={this.state.data} styles={this.props}></AboutUs>
        )
    }
}



export default withStyles(styles)(AboutUsContainer)