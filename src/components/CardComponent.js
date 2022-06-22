import React from 'react';
import Card from 'react-bootstrap/Card'
import {Link} from "react-router-dom"
const CardComponent = ({event}) => {
    const url = event.name.toLowerCase().replaceAll(" ","").replaceAll("ş","s").replaceAll("ç","c").replaceAll("ü","u").replaceAll("ö","o").replaceAll("ğ","g").replaceAll("ı","i")
    const renderCard = () => {

        return(
            <div className="d-flex justify-content-center mb-3">
                <Link to={`etkinlik/${url}`} className="text-dark">
            <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src={event.image} />
            <Card.Body>
                <Card.Title>{event.name}</Card.Title>
                <Card.Text>
                   {event.desc}
                </Card.Text>
            </Card.Body>
                  <span className="text-center">
                    <strong >{event.category}</strong>
                    </span>
            <Card.Body>
            </Card.Body>
           </Card>
           </Link>
           </div>
        )
    }

    const cardView = renderCard();

    return (
        <>
            {cardView}   
        </>
    );
}

export default CardComponent;
