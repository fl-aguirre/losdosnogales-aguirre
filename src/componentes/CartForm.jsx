import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const CartForm = ({handlerChange, handlerSubmit, buyer, show, handleClose}) => {

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Formulario de compra</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form
                id="myForm"
                onSubmit={handlerSubmit}
                >
                    <Form.Group controlId="formBasic">
                        <Form.Label>Nombre y Apellido</Form.Label>
                        <Form.Control type="texto" placeholder="Ingrese nombre y apellido" name="name" value={buyer.name} onChange={handlerChange} />
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control type="texto" placeholder="Ingrese su teléfono" name="phone" value={buyer.phone} onChange={handlerChange} />
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Ingrese su email" name="email" value={buyer.email.toLowerCase()} onChange={handlerChange}/>
                        <Form.Control type="email" placeholder="Confirme su email" name="validateEmail" value={buyer.validateEmail.toLowerCase()} onChange={handlerChange}/>
                        {buyer.email !== buyer.validateEmail ?
                            <Form.Text className="text-muted">
                                No hay coincidencia
                            </Form.Text>
                        :
                            <></>
                        }               
                    </Form.Group>
                    {buyer.email === buyer.validateEmail && buyer.email !== "" ?
                        <Button variant="primary" form="myForm" key="submit" onClick={handleClose} type="submit">
                            Comprar
                        </Button>
                        :
                        <></>
                        }  
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CartForm
