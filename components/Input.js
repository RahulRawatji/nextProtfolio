import React, { useRef } from 'react';
import { startCase } from 'lodash';

const Input = ({title, placeholder="", required, columnCount, type='text',value, onChange}) => {
   
    return (
        <div className='input_field' style={{gridColumn:columnCount}}>
            <label htmlFor={title}>{startCase(title)}<span style={{color:'#a4133c'}}>{required ? '*' :''}</span></label>
            <input name={title} type={type} placeholder={placeholder} value={value} onChange={onChange} required/>
        </div>
    )
}

export default Input