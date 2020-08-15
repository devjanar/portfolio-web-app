import React from 'react';
import {connect} from "react-redux";
import Header from './common/Header'
import CommonProject from './common/Project'
import khaasfood from '../images/khaasfood.jpg'
import naharboutique from '../images/naharboutique.jpg'
import southbreeze from '../images/southbreeze.jpg'
import paragon from '../images/paragon.jpg'


const Project = ({...props }) => {
    return (
        <React.Fragment>
            <Header/>
            <section className="wrapper">
                <div className="container">
                    <h2 className='h2_title center'>Portfolio</h2>
                    <div className="row">
                        <div className="col-sm-6">
                            <CommonProject
                                image={khaasfood}
                                name="khaasfood"
                                url="//khaasfood.com"
                            />
                        </div>
                        <div className="col-sm-6">
                            <CommonProject
                                image={naharboutique}
                                name="naharboutique"
                                url="//naharboutique.com"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <CommonProject
                                image={southbreeze}
                                name="southbreeze"
                                url="//southbreezebd.com"
                            />
                        </div>
                        <div className="col-sm-6">
                            <CommonProject
                                image={paragon}
                                name="paragon"
                                url="//paragon.com.bd"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

function mapStateToProps(state){
    return {state:state}
}

export default connect(mapStateToProps)(Project);