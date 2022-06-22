import React,{useEffect} from 'react'
import Events from "../events/events.json"
import { useLocation, useNavigate, Link } from "react-router-dom"
import { Card } from 'react-bootstrap'
export default function LocationView() {
  const location = useLocation()
  const locationHolder = location.pathname
  const getSelectedLocation = locationHolder.replaceAll("/lokasyon/","").replaceAll(" ","").toLowerCase()
    const getLocationData = () =>{
       const findEvent = Events.filter(event=>event.location.toLowerCase().replaceAll(" ","").replaceAll("ş","s").replaceAll("ç","c").replaceAll("ü","u").replaceAll("ö","o").replaceAll("ğ","g").replaceAll("ı","i").toLowerCase().includes(getSelectedLocation))
     return findEvent
    }
    
    
  return (
   <div className="mt-3">
    <h3 className="text-center">{getLocationData()[0].location}</h3>
      {
        getLocationData().map(event=>(
          <Link to={`/etkinlik/${event.name.toLowerCase().replaceAll(" ","").replaceAll("ş","s").replaceAll("ç","c").replaceAll("ü","u").replaceAll("ö","o").replaceAll("ğ","g").replaceAll("ı","i")}`}>
          <div className="d-flex justify-content-center text-dark">
          <Card style={{ width: '25rem' }} className="mb-3">
          <Card.Img variant="top" src={event.image} />
          <Card.Body>
              <Card.Title>{event.name}</Card.Title>
              <Card.Text>
                 {event.desc}
              </Card.Text>
          </Card.Body>
                <span className="text-center">
                  <strong>{event.category}</strong>
                  </span>
          <Card.Body>
          </Card.Body>
         </Card>
         </div>
         </Link>
        ))
      }
    </div>
  )
}
