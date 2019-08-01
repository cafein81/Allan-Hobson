import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import List from '@material-ui/core/List';

const useStyles = makeStyles(theme => ({

    AppBar: {
        boxShadow: 'none',
    },
    ToolBar: {
        height: 70,
        background: '#ffffff',
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: '#00363d',
    },
    menuIcon: {
        fontSize: 30,
    },

    fullList: {
        width: 250,
        marginTop: 60,
    },

    title: {
        fontFamily: 'Source Serif Pro, serif',
        fontSize: 22,
        flexGrow: 1,
        color: '#00363d',
        fontWeight: 600,
        display: 'none',
        textAlign: 'left',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },

    listIcons: {
        color: '#00363d',
        fontSize: 20,
    },

}));

export default function Navbar() {
    const classes = useStyles();


    const [state, setState] = React.useState({
        right: false,

    });

    const toggleDrawer = (side, open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const fullList = side => (
        <div
            className={classes.fullList}
            role="presentation"
            onClick={toggleDrawer('right', false)}
            onKeyDown={toggleDrawer(side, false)}
        >

            <List component="nav" className={classes.listIcons}>
                <NavLink to="/" style={{
                    textDecoration: 'none',
                    color: '#00363d'

                }}>
                    <ListItem button>
                        <ListItemIcon className={classes.listIcons}>
                            <Icon>home</Icon>
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                </NavLink>
                <NavLink to="/biography"
                    style={{
                        textDecoration: 'none',
                        color: '#00363d'

                    }}>
                    <ListItem button>
                        <ListItemIcon className={classes.listIcons}>
                            <Icon>account_circle</Icon>
                        </ListItemIcon>
                        <ListItemText primary="Biography" />
                    </ListItem>
                </NavLink>
                <NavLink to="/science" style={{
                    textDecoration: 'none',
                    color: '#00363d'

                }}>
                    <ListItem button>
                        <ListItemIcon className={classes.listIcons}>
                            <Icon>star</Icon>
                        </ListItemIcon>
                        <ListItemText primary="Science" />
                    </ListItem>
                </NavLink>
                <NavLink to="/books" style={{
                    textDecoration: 'none',
                    color: '#00363d'

                }}>
                    <ListItem button>
                        <ListItemIcon className={classes.listIcons}>
                            <Icon>book</Icon>
                        </ListItemIcon>
                        <ListItemText primary="Books" />
                    </ListItem>
                </NavLink>
                <NavLink to="/forsale" style={{
                    textDecoration: 'none',
                    color: '#00363d'

                }}>
                    <ListItem button>
                        <ListItemIcon className={classes.listIcons}>
                            <Icon>shopping_cart</Icon>
                        </ListItemIcon>
                        <ListItemText primary="For Sale" />
                    </ListItem>
                </NavLink>
                <NavLink to="/realestate" style={{
                    textDecoration: 'none',
                    color: '#00363d'

                }}>
                    <ListItem button>
                        <ListItemIcon className={classes.listIcons}>
                            <Icon>business</Icon>
                        </ListItemIcon>
                        <ListItemText primary="Real Estate" />
                    </ListItem>
                </NavLink>
                <NavLink to="/museum" style={{
                    textDecoration: 'none',
                    color: '#00363d'

                }}>
                    <ListItem button>
                        <ListItemIcon className={classes.listIcons}>
                            <Icon>account_balance</Icon>
                        </ListItemIcon>
                        <ListItemText primary="Museum" />
                    </ListItem>
                </NavLink>
            </List>

        </div>
    );


    return (
        <div className={classes.root} >
            <AppBar position="fixed" color="#ffffff" className={classes.AppBar}>
                <Toolbar className={classes.ToolBar} >
                    <Typography className={classes.title} noWrap>
                        J. Allan Hobson
                     </Typography>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={toggleDrawer('right', true)}
                    >
                        <MenuIcon className={classes.menuIcon} />
                    </IconButton>
                </Toolbar>
                <Divider />
            </AppBar>


            <SwipeableDrawer
                anchor="right"
                open={state.right}
                onClose={toggleDrawer('right', false)}
                onOpen={toggleDrawer('right', true)}
            >
                {fullList('right')}
            </SwipeableDrawer>
        </div>

    );
}




