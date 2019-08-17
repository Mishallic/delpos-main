//this component uses photos in parallex effect to connect between segments
//the styles are determinde in the parent view/component for better reusability in various locations

import React from 'react'


const MediaBridge = (props) => {
    const { classes } = props.styles
    return (
        <div className={classes.rootParallex}>
            <div style={props.bgi} className={classes.parallex}></div>
        </div>
    )
}


export default MediaBridge