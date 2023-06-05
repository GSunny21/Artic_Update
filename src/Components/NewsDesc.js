import React from 'react';

const NewsDesc = ({ description }) => {
    return (
        <>
            <p>
                <strong><p>Overview</p></strong>
                <p style={{color:'#ECF9FF'}}>{description}</p>
            </p>
        </>
    )
};

export default NewsDesc;
