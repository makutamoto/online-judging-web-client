import { connect } from 'react-redux';

import { StateType } from '../reducers';
import { DispatchType } from '../';
import { setCodeLang, setCode, Submission, submitResult } from '../actions';
import { LangInfo } from '../components/LangSelector';
import SubmissionForm from '../components/SubmissionForm';

const langs: LangInfo[] = [
    { id: "gcc", name: "C (GCC)" },
    { id: "golang", name: "Go" },
];

const editorLangs: { [index: string]: string } = {
    "gcc": "text/x-csrc",
    "golang": "text/x-go",
};

const mapStateToProps = (state: StateType) => ({
    langs: langs,
    lang: state.code.lang,
    editorLang: editorLangs[state.code.lang],
    code: state.code.code,
    isSubmitting: state.code.isSubmitting,
});

const mapDispatchToProps = (dispatch: DispatchType) => ({
    onLangChange: (lang: string) => dispatch(setCodeLang(lang)),
    onCodeChange: (code: string) => dispatch(setCode(code)),
    onSubmit: (submission: Submission) => dispatch(submitResult(submission) as any),
});

export default connect(mapStateToProps, mapDispatchToProps)(SubmissionForm);
