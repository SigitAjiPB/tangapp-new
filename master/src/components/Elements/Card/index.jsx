
import { Link } from 'react-router-dom';

import HeaderCard from './headerCard';
import BodyCard from './bodyCard';
import FooterCard from './footerCard';

const Card = (props) => {

    const { children, to, className} = props
    return (
        <div>
            <Link 
            to={to}  
            className={className}>
                {children}
                <HeaderCard></HeaderCard>
                <BodyCard></BodyCard>
                <FooterCard></FooterCard>
            </Link>
        </div>
    )
}

export default Card