import React from 'react'
import { makeStyles } from '@material-ui/core/styles' 
import ImageCard from './ImageCard'
import places from '../static/places'

const useStyles = makeStyles((theme) => ({
    root: {
        MinHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '300px'
    }
}))

export default function PlaceToVisit () {
    const classes = useStyles();
    return (
        <div className={classes.root} id="place-to-visit">
            <ImageCard place={places[0]} />
            <ImageCard place={places[1]} />
        </div>
    )
}