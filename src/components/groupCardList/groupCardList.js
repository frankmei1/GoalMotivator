import React from 'react';
import PropTypes from 'prop-types';

import GroupCard from '../groupCard.js';
import './groupCardList.css'
import CreateGroup from '../dialogs/createNewGroup.js';

const GroupCardList = ({data}) => {
  return (
    <div>
    <CreateGroup />
   <div className='flex-container'>
     {data.map(group => (
       <div key={group.id} className='flex-container-element'>
         <GroupCard group={group} />
       </div>
     ))}
   </div>
   </div>
 );
}

GroupCardList.propTypes = {
    data: PropTypes.array.isRequired,
};


export default GroupCardList;
