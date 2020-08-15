import React from 'react';

const ContactInfo = ({...props }) => {
    return (
        <React.Fragment>
            <div className="text_content">
                <h5 className='common_title'>Address :</h5>
                <address>
                    Road No- 2,
                    <br/>
                    House No -15 (Grand Villa , Flat no -i5)
                    <br/>
                    Shyamoli, Dhaka 1207, Bangladesh.
                </address>
                <h5>Phone :</h5>
                <p>(+88) 01919199100</p>
                <h5>Email :</h5>
                <a href="mailto:dev.janar@gmail.com"
                   style={{display:'block', marginBottom: '1rem'}}>
                    dev.janar@gmail.com
                </a>
                <h5>Skype :</h5>
                <p>dev.janar</p>
            </div>
        </React.Fragment>
    );
};

export default ContactInfo