import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import ContactUs from './contactUs'


const styles = (theme) => ({
    //mediaBridge Container
    parallex: {
        minHeight: '500px',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },
    //HeroSlideContainer
    HeroRoot: {
        position: 'absolute',
        height: '100%',
        width: '98%',
        top: 0
    },
    heroContainer: {
        height: '100%',
        color: '#f1f1f1',
        top: 0,
        opacity: '1'
    },
    heroImage: {
        position: 'absolute',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        top: 0,
        width: '100%',
        height: '90vh',
        

    },
    videoPlayer: {
        width: '100%',
        top: 0
    },

    //textOnlyCard Container
    TOLheader: {
        color: '#DDDEE0',
        textShadow: '2px 2px rgba(0, 0, 0, .4)',
        webkitAnimation: 'fadeInDown 1s',
        animation: 'fadeInDown .4s',

    },
    TOLparagraph: {
        color: 'rgba(255,255,255,1)',
        webkitAnimation: 'fadeInLeft .5s',
        animation: 'fadeInLeft .4s',
    },
    TOLbutton: {
        webkitAnimation: 'fadeIn .5s',
        animation: 'fadeInRight .4s',
    },
    TOLtextRoot: {
        position: 'relative',
        zIndex: 1,
        height: '100%',
        width: '90%',
        margin: 'auto',
        marginTop: '20vh'
    },
    //ContainerCardContainer
    ContainerCardPaper: {
        padding: '1px 40px 40px 40px',
        width: '80%',
        margin: 'auto',

    },
    ContainerCardPaperRoot: {
        position: 'relative',
        marginTop: '-30px',
        marginBottom: '60px',
        [theme.breakpoints.down('xs')]: {
            marginTop: '200px'
        },
    },

    //SendMsgFormContainer
    msgFormHeader: {
        fontSize: '21px',
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, .7)'
    },
    msgFormParagraph: {
        fontSize: '16px',
        color: 'rgba(0, 0, 0, .7)'
    },
    msgFormRoot: {
        padding: '30px'
    },
    locationHeader: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, .7)'
    },
    locationParagraph: {
        fontSize: '13px',
        fontWeight: '400',
        color: 'rgba(0, 0, 0, .7)'
    }
})

class ContactUsContainer extends Component {

    state = {
        textOverlayData: {
            align: 'flex-start',
            justify: 'flext-start',
            header: {
                text: 'Your POS starts with us.',
                align: 'inherit',
                justify: 'flex-start',
                color: 'primary'

            },
            paragraph: {
                text: 'We have a very helpful team that works 18 hours aday. do not hesitate.',
                align: 'inherit',
                justify: 'flex-start'
            },
            button: {
                pri: { text: 'See Products', align: 'inherit', justify: 'flex-start', link: '/products' },
                sec: { text: '', align: 'inherit', justify: 'flex-start' }
            }
        },
        TOCdata: {
            header: {
                text: 'OverView'
            },
            paragraph: {
                text: 'We are a group of young people who were gathered in one company from different information technology companies (Security, Networking, Retail). Because of the vast experience of each person of our team we became one the fastest growing computer information companies in the region. This expanding is due to the experience, harmony , hardworking of our team. Our company is built on sharing and fair treatment for all employees and customers.'
            }
        }

    }

    render() {
        return (
            <ContactUs data={this.state} styles={this.props}></ContactUs>
        )
    }
}



export default withStyles(styles)(ContactUsContainer)