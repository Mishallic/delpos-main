import React, { Component } from 'react'
import SendMsgForm from './sendMsgForm'
import axios from 'axios'

//MUI
import {Room, Email} from '@material-ui/icons'
//


class SendMsgFormContainer extends Component {
    
    state={
        sent:false,
        loading:false,
        formData:{
            name:{
                config:{
                    label:'Name',
                    value:'',
                    name:'standard-name',
                    placeholder:'Enter your name',
                    margin:'normal'
                },
                validation:{
                    required:true,
                    minLen:5
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            lastname:{
                config:{
                    label:'Last Name',
                    value:'',
                    name:'standard-lastname',
                    placeholder:'Enter your Last Name',
                    margin:'normal'
                },
                validation:{
                    required:true,
                    minLen:5
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            email:{
                config:{
                    label:'Email',
                    value:'',
                    name:'standard-email',
                    placeholder:'Enter your Email',
                    margin:'normal'
                },
                validation:{
                    required:true,
                    minLen:5
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            message:{
                config:{
                    label:'Message',
                    value:'',
                    name:'message-input',
                    placeholder:'Your Message',
                    margin:'normal',
                    multiline:true ,
                    rows:"4"
                },
                validation:{
                    required:false,
                },
                valid: false,
                touched: false,
                validationMessage: ''
            }
        },
        info:[
            {
                header:'Canada',
                address:{
                    a:'Quebec',
                    b:'',
                    c:''
                },
                icon:<Room color='primary'></Room>
            },
            {
                header:'Email Us',
                address:{
                    a:'delpos@delpos.com',
                    b:'',
                    c:'.'
                },
                icon:<Email color='primary'></Email>
            }    
        ]
    }

    updateForm=(newState)=>{
        this.setState({
            formData : newState
        })
     }
     
    //if the form is valid it will store it the important fields to a new variable
    //and post it to api
    submitForm = (e) =>{
        e.preventDefault();
        let dataSubmission = {};
        let formIsValid = true;
 
        for (let key in this.state.formData ){
            dataSubmission[key] = this.state.formData[key].config.value
        }
        for(let key in this.state.formData){
            formIsValid = this.state.formData[key].valid && formIsValid
        }
         
        if (formIsValid){
            axios.post('/api/mail' , dataSubmission)
            .then( (response,error) => {window.location='/'})
            this.setState({loading:true})
            .catch(err=>{console.log(err)
            })
        }
    }

    resetForm = () => {
        this.setState({
            ...this.state.formData
        })
    }
 
    render(){
        console.log(this.props);
        
        return(
            <SendMsgForm 
            submitForm={this.submitForm}
            data={this.state} 
            formData={this.state.formData}
            change={(newState)=> this.updateForm(newState)}
            onBlur={(newState)=> this.updateForm(newState)}
            styles={this.props.styles}>
            </SendMsgForm>
        )
    }
}



export default SendMsgFormContainer