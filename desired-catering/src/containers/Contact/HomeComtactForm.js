import React, {useState} from 'react';
import Input from './../../components/UI/Input/Input';
import ContactFormComponent from '../../components/Home/Contact/Contact';

const HomeContactForm = (props) => {
    const [state, setState] = useState(
        {
            controls: {
                full_name: {
                    elementType: 'textfield',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Your Name'
                    },
                    value: '',
                    validation: {
                        required: true,
                    },
                    valid: false,
                    touched: false
                },
                phoneNumber: {
                    elementType: 'textfield',
                    elementConfig: {
                        type: 'text',
                        placeholder: "+1 (XXX) XXX-XXXX",
                    },
                    value: '',
                    validation: {
                        required: true,
                        minLength: 3,
                        maxLength: 15,
                    },
                    valid: false,
                    touched: false
                },
            }
        }
    );
    const checkValidity = (value, rules) => {
        let isValid = true;
        if (rules.required) {
            isValid = value.trim() !== '' && isValid; //remove white space then if value is not an empty string then isValis is true
        } 
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        } 
        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }
        return isValid;
    }
    // const [error, setError] = useState(false);
    // const [errorMsg, setErrorMsg] = useState('');
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const formData = {}
    //     console.log("FORM DATA FROM HANDLER", formData)
    //     for (let formElementIdentifier in state.controls) {
    //         formData[formElementIdentifier] = state.controls[formElementIdentifier].value
    //     }
    //     // signUpWithEmailPassword(formData);
       
    // };
    const inputChangeHandler = (event, controlName) => {
        const updatedControls = { //make copy of controls (email, password, etc)
            ...state.controls
        }
        const updatedFormElement = { // update individual element like email
            ...updatedControls[controlName]
        }
        updatedFormElement.value = event.target.value; // set form element to the value the user is inputting
        updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation) //pass in form element value and validation rules
        updatedFormElement.touched = true;
        console.log(updatedFormElement)
        updatedControls[controlName] = updatedFormElement // update the control to the user value
        setState({controls: updatedControls})
    };
    const formElementsArray = [];
    for (let key in state.controls) {
        formElementsArray.push({
            id: key,
            config: state.controls[key]
        })
    }
    let form = formElementsArray.map(formElement => (
        <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            // error={error}
            changed={ (event) => inputChangeHandler(event, formElement.id)}
        />
    ));
    return (
        
        <React.Fragment>
           
                <ContactFormComponent
                    className='primary'
                    text={'Sign up'}
                    size={'xl'}
                    form={form}
                />
        </React.Fragment>
    )
};
export default HomeContactForm;