import React from 'react'
import HeroSlideContainer from '../../Components/HeroSlide/heroSlideContainer'
import TextOverLayContainer from '../../Components/TextOverLay/textOverLayContainer'
import ContainerCardContainer from '../../Components/Widgets/Card/ContainerCard/containerCardContainer'
import SendMsgFormContainer from '../../Components/Widgets/Forms/sendMsgFormContainer'

const ContactUs = (props) => {

    const txtOnlyElement = (props) => {
        return (<SendMsgFormContainer styles={props.styles} data={props.data}></SendMsgFormContainer>)
    }
    const { classes } = props.styles
    return (
        <div>
            <div style={{ height: '500px', zIndex: 99999 }} className={classes.container}>
                <TextOverLayContainer data={props.data.textOverlayData} styles={props.styles}></TextOverLayContainer>
            </div>
            <HeroSlideContainer data={{ type: 'image', url: 'url(images/telephone-ds.jpg)' }} styles={props.styles}></HeroSlideContainer>
            <ContainerCardContainer styles={props.styles} element={txtOnlyElement(props)}></ContainerCardContainer>
        </div>
    )
}

export default ContactUs