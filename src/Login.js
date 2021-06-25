import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signInWithGoogle } from './redux/actions/actions'
import { signUp } from './redux/actions/actions'
import Typography from '@material-ui/core/Typography';
import { Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink, useHistory } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3),
    },
    paper: {
        width: "95%",
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
        height: "90vh"
    },
    paper2: {
        width: "45%",
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
        height: "85vh"
    },
    wrap: {
        width: "88%",
        marginTop: "2%"
    },
    centerGrid: {
        paddingTop: "24%"
    },
    buttons: {
        marginTop: "8%",
        fontSize: "16px",
        marginRight: "25px"

    },
    buttons_students: {
        marginTop: "8%",
        fontSize: "16px",


    },
    absolute: {
        position: "absolute",
        top: "8%",
        fontSize: "11px"
    }
}));
function Login() {
    const dispatch = useDispatch()
    const signIn = () => {
        dispatch(signInWithGoogle())
    }

    const classes = useStyles();
    let history = useHistory()
    const [open, setOpen] = React.useState(false);
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const onUsernameChange = (event) => {
        console.log(event.target.value)
        setUsername(event.target.value + "@gmail.com")

    }
    const onPasswordChange = (event) => {
        console.log(event.target.value)
        setPassword(event.target.value)


    }
    const signUpwithUsernamePassword = () => {
        dispatch(signUp(username, password))
        setOpen(false);
    }


    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Flipr Hackathon 9.0
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Username"
                        type="username"
                        onChange={onUsernameChange}
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Password"
                        type="password"
                        onChange={onPasswordChange}

                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={signUpwithUsernamePassword} color="primary">
                        Sign Up
                    </Button>
                </DialogActions>
            </Dialog>
            <Box display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh">

                <Paper className={classes.paper}>


                    <Grid container display="flex"
                        justifyContent="center"
                        alignItems="center">

                        <Grid className={classes.paper2}>
                            <Grid className={classes.centerGrid} container alignItems="center" >

                                <Grid className={classes.absolute}><Typography variant="h5">Flipr Hackathon 9.0</Typography></Grid>
                                <Typography variant="h3">MailChimp</Typography>
                                <Typography className={classes.wrap} variant="h4">Build your brand, sell online! All with MailChimp</Typography>
                                <Typography className={classes.wrap} variant="h5">Our marketing and commerce tools work together to help
                                    you run your business so you can take on whatever's next!</Typography>
                                <Button onClick={signIn} color="secondary" className={classes.buttons} size="large" variant="outlined">Sign In with Google</Button>
                                <Button onClick={handleClickOpen} color="secondary" className={classes.buttons} size="large" variant="outlined">Sign Up</Button>

                            </Grid>

                        </Grid>
                        <div className="horizontal"></div>
                        <Grid className={classes.paper2}>




                        </Grid>
                    </Grid>

                </Paper>
            </Box>

        </div>
    )
}

export default Login
