import {useDispatch, useSelector} from "react-redux";
import React, {useCallback} from "react";
import {changeAction, deleteMember} from "../Redux/app-reducer";
import {EditableSpan} from "../EditableSpan/EditableSpan";
import {Checkbox, IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";
import {FieldTypes} from "../SearchBar/Popup/constants";

import './Element.scss'

export function Element() {
    const members = useSelector<any, any[]>((state) => state.members);
    const searchValue = useSelector<any, string>((state) => state.searchValue);
    const selectedDepartment = useSelector<any, string>((state) => state.selectedDepartment);

    const dispatch = useDispatch();

    const makeDeleteMember = useCallback((id: string) => {
        return () => dispatch(deleteMember(id));
    }, []);
    const makeOnChangeSpanValue = useCallback((id: string, key: string) => {
        return (value) => {
            dispatch(changeAction(id, key, value));
        }
    }, []);

    return (
        <main className="main">
            <div className="names">
                <div className="names__content">
                    {FieldTypes.map(field => {
                        return <span key={field.id} className='name'>{field.label}</span>
                    })}
                </div>

            </div>

            <div className="wrapper">
                {members
                    .filter((member) => {
                        return member.secondName.toLowerCase().includes(searchValue) && member.department.includes(selectedDepartment);
                    })
                    .map((member) => {
                        console.log(member);
                        return (
                            <div key={member.id} className="element">
                                <div className="element__content">

                                    {Object.entries(member).map(([key, value]) => {
                                            if (key === 'checked') {
                                                return <div key={'checked'} className="checkbox">
                                                    <Checkbox
                                                        color='primary'
                                                        onChange={() => {
                                                            dispatch(changeAction(member.id, key, !member.checked))
                                                        }}
                                                        checked={member.checked}
                                                        className="checkbox"
                                                    />
                                                </div>
                                            }
                                            return key !== "id" ?
                                                (<EditableSpan key={key} onChange={makeOnChangeSpanValue(member.id, key)}
                                                               value={value as string}/>
                                                ) : null
                                        }
                                    )}

                                    <IconButton onClick={makeDeleteMember(member.id)}>
                                        <Delete/>
                                    </IconButton>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </main>
    )
}