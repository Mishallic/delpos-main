import React from 'react'

//MUI
import Paper from '@material-ui/core/Paper'
//

const ContainerCard = (props) => {

    const {classes} = props.styles

    return(
        <div className={classes.ContainerCardPaperRoot}>
            <Paper className={classes.ContainerCardPaper}>
                {props.element}
            </Paper>
        </div>
    )

}



export default ContainerCard