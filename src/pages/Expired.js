import React from 'react'
import Event from "../events/events.json"
import Card from 'react-bootstrap/Card'
import {Link} from "react-router-dom"
export default function Expired() {
    const filterExpired = () => {
       const filter = Event.filter(event => new Date() > event.date)
      return filter
    }

  return (
    <div className="text-center mt-3">
            <h3>Geçmiş Etkinlikler</h3>
            {
                filterExpired().map(expired=>(
                    <Link to={`/etkinlik/${expired.name.toLowerCase().replaceAll(" ","").replaceAll("ş","s").replaceAll("ç","c").replaceAll("ü","u").replaceAll("ö","o").replaceAll("ğ","g").replaceAll("ı","i")}`}>
                    <div className="d-flex justify-content-center text-dark mb-3">
            <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src={expired.image} />
            <Card.Body>
                <Card.Title>{expired.name}</Card.Title>
                <Card.Text>
                   {expired.desc}
                </Card.Text>
            </Card.Body>
                  <span className="text-center">
                    <strong>{expired.category}</strong>
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
