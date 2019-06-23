import React from 'react'
import MediaBridgeContainer from '../../Components/Widgets/Bridge/Media Bridge/mediaBridgeContainer'
import CardContainer from '../../Components/Widgets/Card/Txt_ImgCards/cardContainer'
import TxtOnlyCardContainer from '../../Components/Widgets/Card/TxtOnlyCard/txtOnlyCardContainer'

const AboutUs = (props) => {
    const {classes} = props.styles
  
    return(

        <div className={classes.root}>
            <MediaBridgeContainer styles={props.styles}  bgi={{backgroundImage:'url(images/POSsystem.jpg)'}}></MediaBridgeContainer>
            <TxtOnlyCardContainer data={props.data}></TxtOnlyCardContainer>
            <CardContainer styles={props.styles} data={props.data}></CardContainer>
        </div>

    )
}



export default AboutUs