import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import './createNewGroup.css';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';


export default function CreateGroup({parentCall}) {
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

    const createNewItem = () =>{
        const item = {id: 0, challenge: challenge, timeperiod: timeperiod, frequency: frequency, enrollment: enrollment, groupcreator: "someone", img: {src: "src/media/leetcode1.png", alt : "leetcode"}}
        parentCall.something(item);
    }

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Create A New Group
      </Button>
            <Dialog className={classes.dialog} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add a new group</DialogTitle>
                <DialogContent >
                    <DialogContentText>
                        To create a group for challenge to this website, please enter the information here.
          </DialogContentText>
                    <FormControl variant="outlined" className={classes.formControl}>
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
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleClose, createNewItem} color="primary">
                        Create
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}