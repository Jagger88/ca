import React from 'react';
import './card.styles.scss';

// Card with title and HTML in body

const Card = ({name, text}) => (
    <div className='card'>
        <div className='title'>{name} </div>
        <div className='text'  dangerouslySetInnerHTML={{__html: text}}></div>
    </div>
)

export default Card;