import LoadSpinner from './LoadSpinner';
import Brief from './Brief';


const Checkout = ({id, order, cleanCart}) => {

    return (
        <>  
            <h2 className="text-center">
            Su compra se está procesando! Haga click en confirmar.
            </h2>
            <h3 className="text-center m-5">
                {id !== ""?
                    <>ID de su compra: {id}</>
                    :
                    <LoadSpinner/>
                }
            </h3>
            <Brief
                order={order}
                cleanCart={cleanCart}
            />
        </>
    )
}

export default Checkout
