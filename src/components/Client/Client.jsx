import React from 'react';

const Client = () => {
    return (
        <div className='client'>
            <h2>Cliente</h2>
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

export default Client;