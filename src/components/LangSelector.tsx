import React from 'react';
import { MenuItem, TextField } from '@material-ui/core';

export interface LangInfo {
    id: string,
    name: string,
}
export interface LangSelectorProps {
    lang: string,
    langs: LangInfo[],
    onLangChange: (val: string) => void,
}
export default function(props: LangSelectorProps) {
    return (
        <TextField label="Language" value={props.lang} onChange={(e) => props.onLangChange(e.target.value)} select>
            {props.langs.map((lang) => (
                <MenuItem key={lang.id} value={lang.id}>{lang.name}</MenuItem>
            ))}
        </TextField>
    );
}
