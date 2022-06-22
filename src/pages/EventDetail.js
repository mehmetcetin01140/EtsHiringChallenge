import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"
import Events from '../events/events.json'
import BuyTicketModal from "../components/BuyTicketModal"
import Button from "react-bootstrap/Button"
import EventLocation from "../components/EventLocation"

export default function EventDetail() {
    const fullHref = window.location.href
    const location = useLocation()
    const locationHolder = location.pathname
    const findEventWithParam = Events.find(event => event.name.replaceAll(" ", "").toLowerCase() === locationHolder.replace("/etkinlik/", ""))
    const [selectedSeat, setSelectedSeat] = useState()
    
    const [modalShow, setModalShow] = useState(false);

    const handleModalClose = () =>   setModalShow(false);
    

    const [boughtSeats, setBoughtSeats] = useState([]); 

    const handleClick = (i) => {
            setSelectedSeat(i);
            !boughtSeats.includes(i) && setModalShow(true);
        }
    

    let rows = [];
    const test = () => {
        for (let i = 1; i <= 50; i++) {
            rows.push({
                seat:
                    <Col md={1} xs={4} className={`d-flex justify-content-center ${boughtSeats.includes(i) && 'bought-seat'}`} onClick={() => handleClick(i)}>
                        <span className=' mt-2 text-white seatNumber'>{i}</span>
                        <img src="/images/red-chair.jpeg" className="redChairs" alt=''></img>
                    </Col>
            })
        }

        return (
            <Row>
                {rows.map(item =>
                    item.seat
                )}
            </Row>
        )
    }
    const priceSet = () => {
        if (selectedSeat < 30) {
            return findEventWithParam.frontSeatsPrice
        }
        else return findEventWithParam.backSeatsPrice

    }

    return (
        <div className='mt-3'>
             <div className='socialMedia'>
           <a href={`https://twitter.com/intent/tweet?text=${fullHref}`}><i className="fa-brands fa-twitter twitterButton"></i></a>
           <a href={`https://web.whatsapp.com/send?text=${fullHref}`}><i className="fa-brands fa-whatsapp whatsappButton"></i></a>
           <a href={`https://www.facebook.com/sharer/sharer.php?u=${fullHref}`}><i className="fa-brands fa-facebook facebookButton"></i></a>
           </div>
            {
                [findEventWithParam].map(event => (
                    <>
                        <h1 className="text-center mb-3">{event.name}</h1>
                        <div className="eventDetail">
                            <img src={event.image} alt={event.name} />
                        </div>
                    </>
                ))
            }
            <Container className="mt-3">
                <div className="d-flex justify-content-center">

                    <EventLocation
                        lat={findEventWithParam.lat}
                        lng={findEventWithParam.lng}
                    />
                </div>
                <div className="mt-3">
                    {test()}
                </div>
                <>
                    <BuyTicketModal
                        show={modalShow}
                        selectedSeat={selectedSeat}
                        name={findEventWithParam.name}
                        category={findEventWithParam.category}
                        date={findEventWithParam.date}
                        city={findEventWithParam.city}
                        location={findEventWithParam.location}
                        price={priceSet}
                        isBuyed={test}
                        setBoughtSeats={setBoughtSeats}
                        onHide={() => setModalShow(false)}
                        handleModalClose={handleModalClose}
                    />
                </>
            </Container>
        </div>
    )
}
