import React, {useState} from 'react';
import {connect} from "react-redux";
import Header from './common/Header'
import Form from './common/Form'
import ContactText from './common/ContactText'
import ContactInfo from './common/ContactInfo'
import {emailValidation} from '../utils/validators'
import {sendHandler} from '../actions/contactAction'


const Contact = ({...props }) => {
    const [state, setState]=useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        isValidate:false
    });
    const [submitted, setSubmitted] = useState(false);
    //
    const onChangeHandle = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        if(name==='email'){
            let isValid= emailValidation(e.target.value);
            setState({...state,[name]: value,isValidate:isValid});
        }else{
            setState({...state,[name]: value});
        }
    };
    //
    const submitHandler = (e) => {
        e.preventDefault();
        setSubmitted(true);
        if(state && state.name && state.email && state.phone && state.message && state.isValidate){
            const {isValidate,...data}=state;
            props.sendHandler(data).then(success=>{
                alert("You have successfully submitted !!!")
            },error=>{
                alert("Server Error !!!")
            })
        }

    };

    return (
        <React.Fragment>
            <Header/>
            <div className="wrapper">
                <div className="container">
                    <h2 className='common_title'>
                        <span>Contact</span>
                    </h2>
                    <div className="row">
                        <div className="col-sm-6">
                            <ContactText/>
                            <ContactInfo/>
                        </div>
                        <div className="col-sm-6">
                            <Form
                                state={state}
                                submitted={submitted}
                                onChangeHandle={onChangeHandle}
                                onSubmit={submitHandler}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

function mapStateToProps(state){
    return {state:state}
}

const mapDispatchToProps = dispatch => ({
    sendHandler(data) {
        return dispatch(sendHandler(data))
    },
});

export default connect(mapStateToProps,mapDispatchToProps)(Contact);