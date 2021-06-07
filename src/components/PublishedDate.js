import React from 'react';
const PublishedDate = (props) => {

    const datemap = props.datearr.map((date,index)=>(
        <p key={index.toString()}>{date}</p>
    ));

    return (
        <div>{datemap}</div>
    );

};
export default PublishedDate;