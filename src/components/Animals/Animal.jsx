import React from 'react';
import "./Animal.css"

const Animal = () => {
    return (
        <div className='animal'>
            <h2>Animal</h2>
            <p><b>Identificacion:  </b><input type='number'/></p>
            <p><b>Tipo de Animal:  </b><input type="text" /></p>
            <p><b>Estado:          </b><input type="text" /></p>
            <p><b>Edad  </b><input type="text" /></p>
            <p><b>Identificacion:  </b><input type="text" /></p>
            <p><b>Identificacion:  </b><input type="text" /></p>
            
            <button>Registrar</button>
        </div>
    );
};

export default Animal;