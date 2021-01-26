import './App.css';
import React from 'react';
import Form from './Form';

export default function TeamMate(props) {
    const { details } = props;

    return(
    <div className='friend'>
      <h2>{details.username}</h2>
      <p>Email: {details.email}</p>
      <p>Role: {details.role}</p>
    </div>
    )
 }