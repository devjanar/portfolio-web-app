import React from 'react';
import javascript from '../../images/icons8-javascript.svg'
import nodejs from '../../images/icons8-nodejs.svg'
import express from '../../images/express.png'
import sails from '../../images/sails-js.png'
import mongodb from '../../images/icons8-mongodb.svg'
import react from '../../images/icons8-react.svg'
import nextjs from '../../images/nextjs.svg'
import angularjs from '../../images/icons8-angularjs.svg'
import jquery from '../../images/icons8-jquery.svg'
import bootstrap from '../../images/icons8-bootstrap.svg'
import html from '../../images/icons8-html-5.svg'
import css3 from '../../images/icons8-css3.svg'
import github from '../../images/icons8-github.svg'
import bitbucket from '../../images/icons8-bitbucket.svg'
import webpack from '../../images/icons8-webpack.svg'
import amazon from '../../images/icons8-amazon-web-services-96.png'
import linux from '../../images/icons8-linux-96.png'


const Skills = ({...props }) => {
    return (
        <React.Fragment>
            <div className="contain_wrapper">
                <h2 className='common_title'>
                    <span>Skills</span>
                </h2>
                <ul className="skills">
                    <li>
                        <img
                            src={javascript}
                            alt="javascript"
                            style={{maxWidth:'96px'}}
                        />
                    </li>
                    <li>
                        <img
                            src={nodejs}
                            alt="nodejs"
                            style={{maxWidth:'96px'}}
                        />
                    </li>
                    <li>
                        <img
                            src={express}
                            alt="express"
                            style={{maxWidth:'96px'}}
                        />
                    </li>
                    <li>
                        <img
                            src={sails}
                            alt="sails"
                            style={{maxWidth:'96px'}}
                        />
                    </li>
                    <li>
                        <img
                            src={mongodb}
                            alt="mongodb"
                            style={{maxWidth:'96px'}}
                        />
                    </li>
                    <li>
                        <img
                            src={react}
                            alt="react"
                            style={{maxWidth:'96px'}}
                        />
                    </li>
                    <li>
                        <img
                            src={nextjs}
                            alt="nextjs"
                            style={{maxWidth:'96px'}}
                        />
                    </li>
                    <li>
                        <img
                            src={angularjs}
                            alt="angularjs"
                            style={{maxWidth:'96px'}}
                        />
                    </li>
                    <li>
                        <img
                            src={jquery}
                            alt="jquery"
                            style={{maxWidth:'96px'}}
                        />
                    </li>
                    <li>
                        <img
                            src={bootstrap}
                            alt="bootstrap"
                            style={{maxWidth:'96px'}}
                        />
                    </li>
                    <li>
                        <img
                            src={html}
                            alt="html"
                            style={{maxWidth:'96px'}}
                        />
                    </li>
                    <li>
                        <img
                            src={css3}
                            alt="css3"
                            style={{maxWidth:'96px'}}
                        />
                    </li>
                    <li>
                        <img
                            src={github}
                            alt="github"
                            style={{maxWidth:'96px'}}
                        />
                    </li>
                    <li>
                        <img
                            src={bitbucket}
                            alt="bitbucket"
                            style={{maxWidth:'96px'}}
                        />
                    </li>
                    <li>
                        <img
                            src={webpack}
                            alt="webpack"
                            style={{maxWidth:'96px'}}
                        />
                    </li>
                    <li>
                        <img
                            src={amazon}
                            alt="amazon"
                            style={{maxWidth:'96px'}}
                        />
                    </li>
                    <li>
                        <img
                            src={linux}
                            alt="linux"
                            style={{maxWidth:'96px'}}
                        />
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
};

export default Skills