import React from 'react'

//MUI
import Grid from '@material-ui/core/Grid'
//

const HeroSlide = (props) => {
    const {classes} = props.styles
    
    //the function distinguishes the data (photo or video) , and renders it properly
    const media = (item) => {

        if(item.type === 'video'){
            return(
                <video className={classes.videoPlayer} loop autoPlay>
                    <source src={item.url} type='video/mp4'></source>
                </video>
            )
        }
        if (item.type === 'image') {
            return(
                <div className='imgContainer'>
                <div className={classes.heroImage} 
                style={{background:item.url,
                backgroundPosition: 'center top',backgroundSize:'auto'}}/>
                <div className='overlay'></div>
                </div>
            )
        } else {
            alert('else')
        }
    
        
    }

    return(
        <div className={classes.HeroRoot}>
            <Grid container className={classes.heroContainer}>
                <Grid item xl xs>
                    {media(props.data)}
                </Grid>
            </Grid>
        </div>
    )
}



export default HeroSlide
