import React from 'react';
import { TextField, Button, TextareaAutosize } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import emailjs from 'emailjs-com';

export default function ContactForm() {
    const contactFormStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontFamily: 'Jost',
        fontWeight: '400',
        letterSpacing: '2px'
    }

    const textFieldStyles = {
        marginTop: '20px',
        width: '200px',
        fontFamily: 'Jost',
        fontWeight: '400',
        letterSpacing: '2px'
    }

    const textAreaStyles = {
        marginTop: '40px',
        width: '200px',
        height: '50px',
        fontFamily: 'Jost',
        fontWeight: '400',
        letterSpacing: '2px'
    }

    function handleSubmit() {
        const serviceId = 'default_service';
        const templateId = 'template_IU7fqaP9';
        const formId = '#form-inquiry';
        const userId = 'user_S8JutkJLTA6hcrpgvQx2e';
        sendMessage(serviceId, templateId, formId, userId);
    }

    function sendMessage(serviceId, templateId, formId, userId) {
        emailjs.sendForm(serviceId, templateId, formId, userId)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);    
                displaySuccessMessage();    
            }, function(error) {
                console.log('FAILED...', error);
            });
    }

    function displaySuccessMessage() {
        return (
            <div id='sucess-message'>
                <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                This is a success alert — <strong>check it out!</strong>
                </Alert>
            </div>   
        )
    }

    return (
        <div id='contact-form'>
            <form style={contactFormStyles} id='form-inquiry'>
            <TextField id="contact-name" name='from_name' label="Name" style={textFieldStyles} />
            <TextField id="contact-email" name='contact_email' label="Email" style={textFieldStyles} />
            <TextField id="contact-phone" name='contact_phone' label="Phone Number" style={textFieldStyles} />
            <TextareaAutosize id="contact-message" name='contact_message' defaultValue="..." style={textAreaStyles} />
            <Button style={{width: '200px', marginTop: '40px', fontFamily: 'Jost', fontWeight: '400', letterSpacing: '2px'}} onClick={handleSubmit}>Submit</Button>
            </form>
        </div>
    );
}