import React from 'react';

const Project = ({image,name,url}) => {
    return (
        <React.Fragment>
            <div className="categorybox _padding_bottom">
                <div className="category_item">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <img className="img-fluid" src={image} alt={name} />
                    </a>
                </div>
                <div className="category_content">
                    <h1 style={{textTransform:"capitalize"}}><strong>{name}</strong></h1>
                    <p className="_hidden">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                </div>
            </div>
        </React.Fragment>
    );
};


export default Project;