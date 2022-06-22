import React, { useState, useEffect } from 'react';
import {Container,Row,Col} from "react-bootstrap"
import { DateRange } from 'react-date-range';
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'
import Events from '../events/events.json'
import CardComponent from './CardComponent';

const DatePicker = ({searchInput}) => {

    const [selectedDates, setSelectedDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const searchCondition = (eventName) => {
        const search = searchInput.toLowerCase();
        
        if(eventName.toLowerCase().includes(search)){
            return true;
        }
        else{
            return false;
        }
    }


    const renderEvents = () => {
        const startDate = selectedDates[0]?.startDate?.getTime();
        const endDate = selectedDates[0]?.endDate?.getTime();
        console.log(startDate, endDate);
        const activeEvents = Events.filter(event => {
            if (event.date >= startDate && event.date <= endDate) {
                return event;
            }
        })

        return(
            activeEvents.map(event => (
               searchCondition(event.name) && 
               <Col md={12}>
               <CardComponent event={event}/>
               </Col>
            )
         )
        )
    }

    const eventsView = renderEvents();

    return (
        <div>
            <div className="d-flex justify-content-center"> 
            <DateRange
                editableDateInputs={true}
                onChange={item => setSelectedDates([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={selectedDates}
            />
            </div>

           <div className="eventList">
            <Row>
           {eventsView}
            </Row>
           </div>

        </div>
    );
}

export default DatePicker;
