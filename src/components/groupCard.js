import React from 'react';
import PropTypes from 'prop-types';
import subGroupCard from './subGroupCard';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Button from '@material-ui/core/Button';

const GroupCard = ({ group }) => {
  return (
    <div className='card'>
      <img src={group.img.src} className='card-img-top' alt={group.img.alt} />
      <div className='card-body'>
        <h2 className='card-title'>{`#${group.challenge}`}</h2>
      </div>
      <ul className='list-group list-group-flush' >
        <li className='list-group-item'>{`Enrollment: ${group.enrollment}`}</li>
      </ul>
      <Link
            to = {
              {
              pathname: '/learn more',
              aboutProps: {
                group: group
              }
            }
          } 
          style={{ textDecoration: 'none' }}         
          >     <Button variant="outlined" color="primary" type="button">

            learn more
            </Button>

      </Link>
    </div>
  );
};

GroupCard.propTypes = {
  group: PropTypes.object.isRequired
}

export default GroupCard;
