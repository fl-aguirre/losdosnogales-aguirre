import React from 'react';
import './styles.css';
import Component2 from '../component2/index';

function Component1(){
    return(
        <div>
            <div>Componente Padre</div>
            <Component2/>
        </div>
    )
}

export default Component1;