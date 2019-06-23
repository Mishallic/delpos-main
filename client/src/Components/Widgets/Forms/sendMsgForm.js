import React from 'react'
//MUI
import {Grid, Typography, TextField, Button} from '@material-ui/core/'
//

const SendMsgForm = (props) => {
    //gathers data and stores it properly in an array
    const renderFields = () =>{
        const formArray=[];
        for(let keyname in props.formData){
            formArray.push({
                id:keyname,
                settings:props.formData[keyname]
            })
        }
        //distributes each form field over to the templating function
        return  formArray.map((item, i)=>{
            return(
                <div key={i} className='form-element'>
                    {renderTemplate(item)}
                </div>
            )
        })
    }
    //listens for a change in the field
    const changeHandler = (event, id, blur) =>{
        const newState= props.formData;
        newState[id].config.value = event.target.value

        if (blur){
        let validData = validate(newState[id])
        newState[id].valid = validData[0]
        newState[id].validationMessage = validData[1]
        }
        newState[id].touched = blur;
        props.change(newState)
    }

    //confirms that the given form iput is valid within a certain configuration
    const validate = (element) =>{
       
        let error = [true, '']

        if (element.validation.minLen){
            let valid = element.config.value.length >= element.validation.minLen
            let message = 'Must be 5 characters or more..'
            error = !valid ? [valid, message] : [true,'']
        }
        
        if (element.validation.required){
            let valid= element.config.value.trim() !== '';
            let message = 'This Field is Required'
            error = !valid ? [valid, message] : error
        }
        return error
    }

    //displays the validation message
    const showValidation = (items) =>{
        let errorMessage = null;
        if (items.validation && !items.valid){
            errorMessage = (
                <div className='label_error'>
                    {items.validationMessage}
                </div>
            )
        }
        return errorMessage
    }

    const renderTemplate = (item) =>{
        let values = item.settings
        return(
            <Grid item sm={12} xs={12} md={8}>
                <TextField
                    className={classes.textField}
                    {...values.config}
                    value={values.config.value}
                    onBlur={(event)=>changeHandler(event, item.id, true)}
                    onChange={(event)=>changeHandler(event, item.id, false)}
                />
                {showValidation(values)}
            </Grid>
        )
    }

    //contact information and location
    const displayForm = (props) => {
        return props.data.info.map( (item,i) => (
            <Grid key={i} item xs>
                <Grid container>
                    <Grid item xs={2}>
                        {item.icon}
                    </Grid>
                    <Grid item xs={10}>
                        <Typography className={classes.locationHeader}>{item.header}</Typography>
                        <Typography component='div' className={classes.locationParagraph}>
                        <p>{item.address.a}</p>
                        <p>{item.address.b}</p>
                        <p>{item.address.c}</p>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        ))
    }
    const displaySubmitButton = () => (
        props.data.loading?
        'sending...'
        :
        <Button component='button' type='submit' color='primary' variant='contained'>submit</Button>
    )
    const { classes} = props.styles  
    return (
        <div className={classes.msgFormRoot}>
            <form onSubmit={e=>props.submitForm(e)}>
                <Grid container direction='row' justify='center' spacing={40}>

                    <Grid item lg={5} xs={12} className={classes.Inputs}>
                        <Grid container direction='column'  justify='center' spacing={8}>
                            <Grid item sm={12}>
                                <Typography className={classes.msgFormHeader}>Send Us a Message</Typography>
                                <Typography className={classes.msgFormParagraph}>Fill the form and we get back to you soon</Typography>
                            </Grid>
                            {renderFields()}
                            <Grid item xs>
                                {displaySubmitButton()}
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item lg={5} xs={12}>
                        <Grid container direction='column'  justify='center'>
                        {displayForm(props)}
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}



export default SendMsgForm