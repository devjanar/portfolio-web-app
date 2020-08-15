import React from 'react';
import {connect} from "react-redux";
import Header from './common/Header'
import Myself from './common/Myself'
import Education from './common/Education'
import Skills from './common/Skills'

const Home = ({...props }) => {
    return (
        <React.Fragment>
            <Header/>
            <section className="wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <Myself/>
                        </div>
                        <div className="col-sm-6">
                            <Education/>
                        </div>
                    </div>
                    <Skills/>
                </div>
            </section>
        </React.Fragment>
    );
};

function mapStateToProps(state){
    return {...state}
}

export default connect(mapStateToProps)(Home);