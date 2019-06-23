import React from 'react'
import { NavLink } from 'react-router-dom'

//MUI
import {Grid, Typography, Button} from '@material-ui/core'
//

const TextOverLay = (props) => {
    const { classes} = props.styles
    const data = props.data
    
    //function manages to recieve three schemas of buttons display: primary (pri) or secondary(sec) or both(else statement)
    const buttonDisplay = (data) => {
        if(data.button.sec.text === ''){
            return(
                <span>
                    <NavLink to={data.button.pri.link}>
                    <Button  color='primary' variant='contained' size='large' className={classes.TOLbutton}>{data.button.pri.text}</Button>
                    </NavLink>
                </span>
            )
        }
        else if (data.button.pri.text === '' ) {
            return(
                <span>
                    <NavLink to={data.button.sec.link}>
                    <Button  color='secondary' variant='contained' size='large' className={classes.TOLbutton}>{data.button.sec.text}</Button>
                    </NavLink>
                </span>
            )
        } else {
            return(
            
                <span>
                <NavLink to={data.button.pri.link}>
                <Button 
                    
                    color='primary' 
                    variant='contained' 
                    size='large' 
                    className={classes.TOLbutton}
                >{data.button.pri.text}</Button>
                </NavLink>

                <NavLink to={data.button.sec.link}>
                <Button  
                    
                    variant='contained' 
                    color='secondary' 
                    size='large' 
                    className={classes.TOLbutton}
                >{data.button.sec.text}</Button>
                </NavLink>
                </span>
            )
        } 
    }
    
    
    return(
        
        <div style={{top:props.top}} className={classes.TOLtextRoot}>
            <div style={props.style}>
                <Grid 
                data-wow-offset="50" 
                data-wow-delay="0.1s"  
                spacing={24} 
                alignItems={data.align}  
                direction='column' 
                container
                >                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                

                    <Grid item  md={6} sm={12} xs={12}>
                    <Typography align={data.header.align} style={props.style} className={classes.TOLheader}>{data.header.text}</Typography>
                    </Grid>
                    
                    <Grid item md={6} sm={12} xs={12}>
                        <Grid  container justify={data.paragraph.justify} direction='row'>
                            <Grid item xl={8} md={8} lg={8} xs={8}>
                                <Typography style={props.style} className={classes.TOLparagraph} align={data.paragraph.align} >
                                {data.paragraph.text}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                
                    <Grid item md={6} sm={12} xs={12}>
                        <Grid container justify='flex-start' direction='row' alignItems='center'>
                        {buttonDisplay(data)}
                        </Grid>
                    </Grid>

                </Grid>
            </div>
        </div>
    )
}


export default TextOverLay