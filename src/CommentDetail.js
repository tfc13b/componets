import React from 'react';
import faker from 'faker';

const CommentDetail = props => {
    console.log(props);
    return (
        <div className="comments">
        <a href="/" className="avatar">
            <img alt="avatar" src={faker.image.avatar()}/>
            </a>
            <div className="content">
                <a className="author">
                   {props.author}
                    </a>
                    <div className="metadata">
                        <span className="date">Today at noon</span>
                        
                        <div className="text">
                            Nice Blog Post!
                        </div>
                        </div>
                        </div>
            </div>
    );
};

export default CommentDetail; 