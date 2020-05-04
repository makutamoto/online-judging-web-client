import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link, ListItem, ListItemText, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(2),
    },
}));
export interface ContestListItemProps {
    id: string,
    title: string,
}
export default function(props: ContestListItemProps) {
    const classes = useStyles();
    return (
        <ListItem className={classes.root} component={Paper} variant="outlined">
            <ListItemText primary={<Link color="textPrimary" component={RouterLink} to={`./contests/${props.id}`}>{props.title}</Link>} />
        </ListItem>
    );
}
