import React from 'react';
import PropTypes from 'prop-types';

import GroupCard from '../groupCard.js';
import './groupCardList.css'
import CreateGroup from '../dialogs/createNewGroup.js';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const GroupCardList = ({data}) => {
    const [items, setItems] = React.useState(data);

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

    const onSubmit = () =>{
        const item = {id: items.length, challenge: challenge, timeperiod: timeperiod, frequency: frequency, enrollment: enrollment, groupcreator: "someone"}
        setItems(items.concat(item))
    }

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [openToOthers, setOpenToOthers] = React.useState('');
    const [challenge, setChallenge] = React.useState('')
    const [timeperiod, setTimePeriod] = React.useState('')
    const [frequency, setFrequency] = React.useState('')
    const [enrollment, setEnrollment] = React.useState('')


    const handleChange = (event) => {
        setOpenToOthers(event.target.value);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

  return (
    <div>
    <CreateGroup />
    <div> <FormControl variant="outlined" className={classes.formControl}>
                        <TextField
                            value={challenge}
                            onChange={(e) => setChallenge(e.target.value)}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Title"
                            variant="outlined"
                            fullWidth
                        />
                    </FormControl>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <TextField
                            value={timeperiod}
                            onChange={(e) => setTimePeriod(e.target.value)}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Time Period"
                            variant="outlined"
                            fullWidth
                        />
                    </FormControl>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <TextField
                            value={frequency}
                            onChange={(e) => setFrequency(e.target.value)}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Frequency"
                            variant="outlined"
                            fullWidth
                        />
                    </FormControl>

                    <FormControl variant="outlined" className={classes.formControl}>
                        <TextField
                            value={enrollment}
                            onChange={(e) => setEnrollment(e.target.value)}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Enrollment"
                            variant="outlined"
                            fullWidth
                        />        </FormControl>

                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-required-label">Open to Others</InputLabel>
                        <Select
                            labelId="demo-simple-select-required-label"
                            id="demo-simple-select-filled"
                            value={openToOthers}
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={false}>Private</MenuItem>
                            <MenuItem value={true}>Public</MenuItem>
                        </Select>
                    </FormControl>
                    <Button onClick={onSubmit} color="primary">
                        Create
          </Button>
                    </div>

   <div className='flex-container'>
     {items.map(group => (
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
