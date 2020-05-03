import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Link, Typography } from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.down('xs')]: {
            marginLeft: theme.spacing(-2),
            marginRight: theme.spacing(-2),
        },
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(-3),
            marginRight: theme.spacing(-3),
        },
    },
    common: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
    },
    previous: {
        width: '50%',
        borderTop: 'solid 1px rgba(0, 0, 0, 0.12)',
        borderBottom: 'solid 1px rgba(0, 0, 0, 0.12)',
        borderRight: 'solid 1px rgba(0, 0, 0, 0.12)',
    },
    next: {
        width: '50%',
        borderTop: 'solid 1px rgba(0, 0, 0, 0.12)',
        borderBottom: 'solid 1px rgba(0, 0, 0, 0.12)',
        textAlign: 'right',
    },
    icon: {
        width: theme.spacing(5),
        textAlign: 'center',
    },
    width100: {
        width: '100%',
    },
}));
export interface Dest {
    title: string,
    link: string,
}
export interface NextPreviousProps {
    previous: Dest | null,
    next: Dest | null,
}
export default function(props: NextPreviousProps) {
    const classes = useStyles();
    return (
        <Box display="flex" className={classes.root}>
            <Box flexGrow={1} className={clsx(classes.common, classes.previous)}>
                {props.previous && <Link color="textSecondary" component={RouterLink} to={`${props.previous.link}`}>
                    <Box className={classes.width100} display="flex" alignItems="center">
                        <Box className={classes.icon}>
                            <KeyboardArrowLeft color="action" />
                        </Box>
                        <Box className={classes.width100} flexGrow={1}>
                            <Typography variant="h6" color="textSecondary" noWrap>
                                {props.previous.title}
                            </Typography>
                        </Box>
                    </Box>
                </Link>}
            </Box>
            <Box flexGrow={1} className={clsx(classes.common, classes.next)}>
                {props.next && <Link color="textSecondary" component={RouterLink} to={`${props.next.link}`}>
                    <Box className={classes.width100} display="flex" alignItems="center" flexDirection="row-reverse">
                        <Box className={classes.icon}>
                            <KeyboardArrowRight color="action" />
                        </Box>
                        <Box className={classes.width100} flexGrow={1}>
                            <Typography variant="h6" color="textSecondary" noWrap>
                                {props.next.title}
                            </Typography>
                        </Box>
                    </Box>
                </Link>}
            </Box>
        </Box>
    );
}
