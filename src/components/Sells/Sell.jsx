import React from 'react';

const Sell = () => {
    return (
        <div className='sell'>
        <h2>Ventas</h2>
        <p><b>Identificacion de Cliente:  </b><input type='number'/></p>
        <p><b>Tipo de Animal:  </b><input type="text" /></p>
        <p><b>Cantidad:          </b><input type="text" /></p>
        <p><b>Precio  </b><input type="text" /></p>
        <p><b>Identificacion:  </b><input type="text" /></p>
        <p><b>Identificacion:  </b><input type="text" /></p>
        
        <button>Registrar</button>
    </div>
    );
};

export default Sell;