import React from 'react';
import { Breadcrumbs, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(3),
    }
}));
export default function() {
    const classes = useStyles();
    return (
        <Breadcrumbs className={classes.root}>
            <Link color="inherit">コンテスト一覧</Link>
            <Link color="inherit">Beginner Contest 1</Link>
            <Typography color="textPrimary">う　し　た　ぷ　に　き　あ　く　ん　笑</Typography>
        </Breadcrumbs>
    );
}
