import React from 'react';
import { AppBar, Container, Divider, Grid, Paper, Toolbar, Typography } from '@material-ui/core';

import Section from '../components/Section';
import SubmissionFormContainer from './SubmissionFormContainer';
import ResultListContainer from './ResultListContainer';

export default function() {
    return (
        <Container maxWidth="md" component={Paper}>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6">MyCoder</Typography>
                </Toolbar>
            </AppBar>
            <Toolbar />
            <Grid container direction="column" spacing={2}>
                <Grid item>
                    <Section title="問題分">
                        AAA
                    </Section>
                </Grid>
                <Grid item>
                    <Section title="制約">
                        AAA
                    </Section>
                </Grid>
                <Grid item>
                    <Divider />
                    <Section title="入力">
                        AAA
                    </Section>
                    <Section title="出力">
                        AAA
                    </Section>
                </Grid>
            </Grid>
            <Divider />
            <Container maxWidth="sm">
                <SubmissionFormContainer />
                <ResultListContainer />
            </Container>
        </Container>
    );
}
