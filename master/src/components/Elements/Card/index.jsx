
import { Link } from 'react-router-dom';

import HeaderCard from './headerCard';
import BodyCard from './bodyCard';
import FooterCard from './footerCard';

const Card = (props, data, key) => {

    const { children, to, className } = props
    return (
        <div>
            <Link 
            key={key}
            to={to}  
            className={className}>
                {children}
                <HeaderCard></HeaderCard>
                <BodyCard>{data}</BodyCard>
                <FooterCard></FooterCard>
            </Link>
        </div>
    )
}

export default Card