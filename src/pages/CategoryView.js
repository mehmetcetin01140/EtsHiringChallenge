import React,{useEffect} from 'react'
import Events from "../events/events.json"
import { useLocation } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import {Link} from "react-router-dom"
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
        <h3 className="text-center">{checkCategory()[0].category}</h3>
        {checkCategory().map(categoryItem => 
          <Link to={`/etkinlik/${categoryItem.name.toLowerCase().replaceAll(" ","").replaceAll("ş","s").replaceAll("ç","c").replaceAll("ü","u").replaceAll("ö","o").replaceAll("ğ","g").replaceAll("ı","i")}`}>
            <div className="d-flex justify-content-center mt-3 text-dark">
            <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src={categoryItem.image} />
            <Card.Body>
                <Card.Title>{categoryItem.name}</Card.Title>
                <Card.Text>
                            {categoryItem.desc}
                </Card.Text>
                <Card.Text className="text-center fs-4">
                            <i>{categoryItem.location}</i>
                </Card.Text>
                <Card.Text className="text-center">
                {new Date((Number(categoryItem.date))).toLocaleDateString()}
                </Card.Text>
               
            </Card.Body>
            <Card.Body>
            </Card.Body>
           </Card>
           </div>
           </Link>
            
            )}
        </>
  )
}
