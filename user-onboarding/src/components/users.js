import React from 'react';

export default function Users({info}){
    if(!info){
        return <h3>Obtaining User Information...</h3>
    }

    return (
        <div className="container">
            <h2>User:{info.name}</h2>
            <p>Email: {info.email}</p>
        </div>
    )
}