import React,{useEffect,useState} from 'react'
import { useLocation , useNavigate} from "react-router-dom"
import {Container,Row,Col} from "react-bootstrap"
import Events from '../events/events.json'
import BuyTicketModal from "./buyTicketModal"
import Button from "react-bootstrap/Button"
import EventLocation from "./eventLocation"
export default function EventDetail() {
      const location=useLocation()
      const locationHolder=location.pathname
      const findEventWithParam = Events.find(event=>event.name.replaceAll(" ","").toLowerCase() === locationHolder.replace("/etkinlik/",""))
      const [selectedSeat,setSelectedSeat] = useState()
      const [modalShow, setModalShow] = useState(false);
      

      let rows = [];
        const test = () => {
            for (let i=0;i<50;i++) {
               rows.push({seat:
                  <Col md={1} xs={4} className="d-flex justify-content-center" onClick={()=>{
                    setSelectedSeat(i);
                    setModalShow(true)
                  }}>
               <span className=' mt-2 text-white seatNumber'>{i}</span>
               <img src="https://media.istockphoto.com/photos/red-theater-seat-picture-id615615944?k=20&m=615615944&s=612x612&w=0&h=f8pbxTt-5uMWlKGmbaQ5IQYxR1y-VGt5jTgETjgWkyU=" className="redChairs"></img>
                  </Col>
             } )
            }
                   
            return(
              <Row>
                {rows.map(item=>
                  item.seat
                  )}
              </Row>
            )
        }
        const priceSet = () => {
          if(selectedSeat<30){
            return findEventWithParam.frontSeatsPrice
          }    
            else return findEventWithParam.backSeatsPrice
          
          }
        
  return (
    <div className='mt-3'>
        {
            [findEventWithParam].map(event=>(
                <>
                <h1 className="text-center mb-3">{event.name}</h1>
                <div className="eventDetail">
                <img src={event.image}/>
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
        price={priceSet()}
        isBuyed={test}
        onHide={() => setModalShow(false)}
      />
    </>
        </Container>
    </div>
  )
}
