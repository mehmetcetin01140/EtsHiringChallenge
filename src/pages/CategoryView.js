import React,{useEffect} from 'react'
import Events from "../events/events.json"
import { useLocation } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
export default function CategoryView() {
    const location = useLocation()
    const getPathName = location.pathname

    const checkCategory = () => {

       const filteredCategory = getPathName.replaceAll("/kategori/","")
       const categoryData = Events.filter(filteredEvent => 

         filteredEvent.category.toLowerCase().includes(filteredCategory)
         )
         return categoryData
    }

  return (
        <>
        {checkCategory().map(categoryItem => 
            <div className="d-flex justify-content-center mt-3">
            <Card style={{ width: '50rem' }}>
            <Card.Img variant="top" src={categoryItem.image} />
            <Card.Body>
                <Card.Title>{categoryItem.name}</Card.Title>
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
            
            )}
        </>
  )
}
