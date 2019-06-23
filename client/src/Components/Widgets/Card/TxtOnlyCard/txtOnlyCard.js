import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const TxtOnlyCard = (props) => {
    console.log(props);
    let data= props.data.TOCdata
    return(

        <Card style={{
            display: 'flex',
            width:'80%',
            margin:'auto',
            marginTop:'40px',
            background:'#0d356d'}}>
            <Grid container direction='column'>
            <CardContent>
                <Grid  item lg>
                    <Typography align='center' component="h5" variant="h5" style={{color:'white'}}>{data.header.text}</Typography>
                </Grid>
          
                <Grid item xs>
                    <Typography align='center' variant="subtitle1" style={{color:'white'}}>
                    {data.paragraph.text}
                    </Typography>
                </Grid>


                </CardContent>
            </Grid>
           
        </Card>
    )
}


export default TxtOnlyCard