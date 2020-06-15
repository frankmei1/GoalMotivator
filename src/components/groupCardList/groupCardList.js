import React from 'react';
import PropTypes from 'prop-types';

import GroupCard from '../groupCard.js';
import './groupCardList.css'
import CreateGroup from '../dialogs/createNewGroup.js';
import { makeStyles } from '@material-ui/core/styles';
import useStickyState from '../useStickyState.js'

const GroupCardList = ({data}) => {
    const [items, setItems] = useStickyState(data, "NEWTEST");
    const useStyles = makeStyles((theme) => ({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 160,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
        dialog: {
            color: 'red'
        }
    }));

    const onSubmit = (item) =>{
        item.id = items.length
        setItems(items.concat(item))
    }

  return (
    <div>
    <CreateGroup parentCall = {{something: onSubmit}}/>
   <div className='flex-container'>
     {items.map(group => (
       <div key={group.id} className='flex-container-element'>
         <GroupCard group={group}/>
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
