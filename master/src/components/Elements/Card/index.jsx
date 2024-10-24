
import { Link } from 'react-router-dom';

import HeaderCard from './headerCard';
import BodyCard from './bodyCard';
import FooterCard from './footerCard';

const Card = (props, key) => {

    const { children, to, className, eventname, eventdate, eventcost, eventorganizer, eventbio } = props
    return (
        <div>
            <Link 
            eventname = {eventname}
            eventdate = {eventdate}
            eventcost = {eventcost}
            eventorganizer = {eventorganizer}
            eventbio = {eventbio}

            key={key}
            to={to}  
            className={className}>
                {children}
                <HeaderCard 
                eventname = {eventname}
                eventorganizer = {eventorganizer}
                ></HeaderCard>


                <BodyCard
                eventbio = {eventbio}
                ></BodyCard>


                <FooterCard
                eventdate = {eventdate}
                eventcost = {eventcost}
                ></FooterCard>
            </Link>
        </div>
    )
}

export default Card