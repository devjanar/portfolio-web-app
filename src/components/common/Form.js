import React from 'react'
import InputForm from './InputForm'

const Form =({state,onChangeHandle,onSubmit,submitted})=> {

    return (
        <React.Fragment>
            <form className="_left">
                <div className="form-group">
                    <InputForm
                        label="Name"
                        name="name"
                        type="text"
                        placeholder="Name"
                        onChange={onChangeHandle}
                        className="form-control"
                        value={state.name}
                        submitted={submitted}
                    />
                </div>
                <div className="form-group">
                    <InputForm
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        onChange={onChangeHandle}
                        className="form-control"
                        value={state.email}
                        submitted={submitted}
                    />
                    {submitted
                        && state.email
                        && !state.isValidate
                        && <div className="warning-block">
                            Wrong Format</div>
                    }
                </div>
                <div className="form-group">
                    <InputForm
                        label="Phone"
                        name="phone"
                        type="text"
                        placeholder="Phone"
                        onChange={onChangeHandle}
                        className="form-control"
                        value={state.phone}
                        submitted={submitted}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        className="form-control"
                        rows="8"
                        name="message"
                        value={state.message}
                        onChange={onChangeHandle}>
                    </textarea>
                    {submitted
                    && !state.message
                    && <div className="warning-block">
                        Message is required</div>
                    }
                </div>
                <button
                    style={{width:'100%'}}
                    type="submit"
                    className="btn btn-info"
                    onClick={onSubmit}>
                    Submit
                </button>
            </form>
        </React.Fragment>
    )
};

export  default Form