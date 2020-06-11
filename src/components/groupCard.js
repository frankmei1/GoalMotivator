import React from 'react';
import PropTypes from 'prop-types';
import subGroupCard from './subGroupCard';
import Link from '@material-ui/core/Link';

const GroupCard = ({ group }) => {
  return (
    <div className='card'>
      <div className='card-body'>
        <h2 className='card-title'>{`#${group.challenge}`}</h2>
      </div>
      <ul className='list-group list-group-flush' >
        <li className='list-group-item'>{`Enrollment: ${group.enrollment}`}</li>
      </ul>
      <Link
            color="inherit"
            noWrap
            variant="body2"
            href="/learn more"
          >
            "learn more"
      </Link>
    </div>
  );
};

GroupCard.propTypes = {
  group: PropTypes.object.isRequired
}

export default GroupCard;
