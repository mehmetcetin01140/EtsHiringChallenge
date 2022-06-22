import React from 'react';
import Card from 'react-bootstrap/Card'

const CardComponent = ({event}) => {

    const renderCard = () => {

        return(
            <div className="d-flex justify-content-center">
            <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src={event.image} />
            <Card.Body>
                <Card.Title>{event.name}</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quaerat consequuntur eum, nisi numquam quasi necessitatibus veritatis ullam voluptas eaque deserunt ea itaque, totam illo cupiditate sit nobis ducimus porro?
                </Card.Text>
            </Card.Body>
            {/* <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup> */}
            <Card.Body>
                {/* <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link> */}
            </Card.Body>
           </Card>
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
