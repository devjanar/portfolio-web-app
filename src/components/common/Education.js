import React from 'react';

const Education = ({...props }) => {
    return (
        <React.Fragment>
            <div className="contain_wrapper">
                <h2 className='common_title'>
                    <span>Education</span>
                </h2>
                <div className="text_content">
                    <div className="content">
                        <h3>Masters in social Science</h3>
                        <h5>Full Stack Developer (JavaScript)
                            <br/>
                            Expert in Front-End Engineering
                        </h5>
                        <div className="education-dropdown">
                            <h5>Technologies Covered:</h5>
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>JavaScript</li>
                                <li>jQuery</li>
                                <li>AngularJS 1.x</li>
                                <li>ReactJS</li>
                                <li>NextJS</li>
                                <li>NodeJS</li>
                                <li>ExpressJS</li>
                                <li>SailsJS</li>
                                <li>MongoDB</li>
                                <li>Mongoose</li>
                                <li>Git</li>
                                <li>Webpack</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Education