import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles' 
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        height: '100vh',
    },
    appbar: {
        background: 'none',
        boxShadow: 'none',
        fontFamily: 'Nunito'
    },
    appbarTittle: {
        
        display: 'inline'
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between'
    },
    icon: {
        color: '#fff',
        fontSize: "2rem"
    },
    colorText: {
        // color: '#5AFF3D'
        color: '#5AFF3D'
    },
    title: {
        color: '#fff',
        fontFamily: 'Nunito',
        fontSize: '4rem',
        letterSpacing: '.2rem'
    },
    goDown: {
        color: '#5AFF3D',
        fontSize: '4rem'
    }
}))

export default function Header () {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(true);
    },[])

    return (
        <div class={classes.root} id="header">
            <AppBar className={classes.appbar}>
                <Toolbar class={classes.appbarWrapper}>
                    <h1 className={classes.appbarTittle}>
                        Red <span className={classes.colorText}>Keep.</span>
                        </h1>
                    <IconButton>
                        <SortIcon className={classes.icon} />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Collapse
                in={checked}
                { ... (checked ? {timeout: 1000} : {})}
                collapseHeight={50}
            >
                <div>
                    <h1 className={classes.title}>
                        <span className={classes.colorText}> ردکیپ</span> کجاست؟
                    </h1>
                    <Scroll to="place-to-visit" smooth={true}>
                        <IconButton>
                            <ExpandMoreIcon className={classes.goDown} />
                        </IconButton>
                    </Scroll>
                </div>
            </Collapse>
        </div>
    )
}