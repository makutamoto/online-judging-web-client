import React from 'react';

import SubmissionFormContainer from './SubmissionFormContainer';
import ResultListContainer from './ResultListContainer';

export default function() {
    return (
        <React.Fragment>
            <SubmissionFormContainer />
            <ResultListContainer />
        </React.Fragment>
    );
}
