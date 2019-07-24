import React, { Component } from 'react'

//components
import HeroSlideContainer from '../../Components/HeroSlide/heroSlideContainer'
import TextOverLayContainer from '../../Components/TextOverLay/textOverLayContainer'
import ThreeTableContainer from '../../Components/Widgets/Tables/ThreesTable/threeTableContainer'
import BridgeContainer from '../../Components/Widgets/Bridge/PaperBridge/bridgeContainer'
import MediaCardContainer from '../../Components/Widgets/Card/MediaCard/mediaCardContainer'
import MediaBridgeContainer from '../../Components/Widgets/Bridge/Media Bridge/mediaBridgeContainer'
import homeStyle from '../../assets/jss/homeStyle'
import ContainerCardContainer from '../../Components/Widgets/Card/ContainerCard/containerCardContainer'
//MUI
import { Typography, Divider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'
//

class Home extends Component {
    state = {
        data:{
            header:'Work directly with professionals!',
            paragraph:'We have over 10 years of experience in this field. We know what to do.',
            button:{
                pri:'Works',
                sec:'Our Team',
                link:'/contactus'
            }
        },
        mediaBridge:{
            background:'url(images/para-ds.jpg)'
        },
        textData1:{
            align:'flex-start',
            justify:'flex-start',
            header:{
                text:'Grow your business securley with delpos.',
                align:'left',
                justify:'flex-start'
            },
            paragraph:{
                text:'Top rated technology for you, Now in Jordan. Everything you need to start your business.',
                align:'left',
                justify:'flex-start',
            },
            button:{
                pri:{text:'See Products', align:'flex-start', justify:'flex-start', link:'/products'},
                sec:{text:'Visit Us', align:'flex-start', justify:'flex-start',  link:'/contactus'}
            }
        },
        textData2:{
            align:'center',
            justify:'center',
            header:{
                text:'It takes the best to recognize the best.',
                align:'center',
                justify:'center'
            },
            paragraph:{
                text:'We are leading the sector of the POS, with sharp technology.',
                align:'center',
                justify:'center',
            },
            button:{
                pri:{text:'', align:'center', justify:'center', link:'/contactus'},
                sec:{text:'Get connected', align:'center', justify:'center', link:'/contactus'}
            }
        },
        //
        //

        //
        //threesTable
        //
        solutions:{
        data:[
            {
              url:'images/retail-ds.jpg',
              title:'Retail Solutions',
              link:'/contactus'
            },
            {
              url:'images/supermarket-ds.jpg',
              title:'Manage Supermarket Inventory',
              link:'/contactus'
            },
            {
              url:'images/restaurant-ds.jpg',
              title:'Restaurant Solutions',
              link:'/contactus'
            }
        ]}
        //
        //

    }

    render(){
        const {classes} = this.props

        const mediaCardElement = (props) => {
            return(
                <span>
                <Typography style={{ fontSize:'26px',
        fontWeight:'bold'}} align='center'>Products</Typography>
                <MediaCardContainer styles={props.styles} data={props.data}></MediaCardContainer>
            </span>
            )
        }
        return(
            <div className={classes.container}>

                <div style={{height:'600px'}} className={classes.container}>
                    <TextOverLayContainer data={this.state.textData1} styles={this.props}></TextOverLayContainer>
                    <HeroSlideContainer data={{type:'image', url:'images/mbridge2-ds.jpg'}} styles={this.props}></HeroSlideContainer>
                </div>
                <div className={classes.container}>
                <ContainerCardContainer styles={this.props} element={mediaCardElement(this.props)}>
                </ContainerCardContainer>
                </div>
                <Divider className='wow fadeInLeft' variant='middle'></Divider>
                <MediaBridgeContainer styles={this.props} bgi={{backgroundImage:'url(images/para-ds.jpg)'}}></MediaBridgeContainer>
                <div style={{marginBottom:'60px',height:'340px'}} className={classes.container}>
                    <TextOverLayContainer
                    top={0}
                    data={this.state.textData2}
                    styles={this.props}
                    style={{color:'black', textShadow:'none'}}>
                    </TextOverLayContainer>
                </div>

                <div className={classes.container}>
                <BridgeContainer root={this.props.classes.root2} text={'Services:'}></BridgeContainer>
                </div>
                <ThreeTableContainer layout={12} data={this.state.solutions} styles={this.props}></ThreeTableContainer>
            </div>
        )
    }
}

export default withStyles(homeStyle)(Home)

