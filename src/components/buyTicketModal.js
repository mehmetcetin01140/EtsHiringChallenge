import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from "react-bootstrap/Button"
const BuyTicketModal = (props) => {

    const handlePurchase = () => {
        props.setBoughtSeats(boughtSeats => [...boughtSeats, props.selectedSeat]);
        props.handleModalClose();
    }

    const eventDate = new Date(Number(props.date)).toLocaleDateString();

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Bilet Al
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>Etkinlik Adı : {props.name}</h5>
                <h5>Tarih : {eventDate} </h5>
                <h5>Türü : {props.category} </h5>
                <h5>Bilet Numarası : {props.selectedSeat} numaralı bilet.</h5>
                <h5>Şehir : {props.city} </h5>
                <h5>Yer : {props.location} </h5>
                <h5>Fiyat : {props.price()} Türk Lirası</h5>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handlePurchase}>Satın Al</Button>
            </Modal.Footer>
        </Modal>

    );
}

export default BuyTicketModal;
