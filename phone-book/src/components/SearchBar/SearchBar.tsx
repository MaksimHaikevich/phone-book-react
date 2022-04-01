import React, {useCallback} from "react";
import {IconButton, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";
import {SearchOutlined} from "@material-ui/icons";
import {AddNewElement} from "../AddNewElement/AddNewElement";
import {useDispatch} from "react-redux";
import {searchDepartment, searchMember} from "../Redux/app-reducer";
import {FieldTypes} from "./Popup/constants";

import './SearchBar.scss'


const units = [
    {label: "Финансы", value: "1"},
    {label: "Кадры", value: "2"},
    {label: "Планирование", value: "3"},
    {label: "Дома", value: "4"},
];

export function SearchBar() {

    const [department, setDepartment] = React.useState('');
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setDepartment(event.target.value as string);
    };
    const findDepartment = useCallback((label) => {
        return () => dispatch(searchDepartment(label));
    }, []);

    const findMember = useCallback((e) => {
        dispatch(searchMember(e.target.value));
    }, []);

    return (
        <>
            <div className='header'>
                <div className="wrapper">
                    <div className="search">
                        <TextField
                            className="search__bar"
                            label="Поиск"
                            onChange={findMember}
                            variant="outlined"
                            size="medium"
                            InputProps={{
                                endAdornment: (
                                    <IconButton disabled>
                                        <SearchOutlined/>
                                    </IconButton>
                                ),
                            }}
                        />
                        <div className='departments'>
                            <InputLabel margin='dense' className='departments__label'>Выберите
                                подразделение</InputLabel>
                            {
                                FieldTypes.map(field => {
                                    return (
                                        field.type === 'select' ?
                                            <Select
                                                className="departments__select"
                                                label="Подразделение"
                                                onChange={handleChange}
                                            >
                                                <MenuItem key={""} value={""} onClick={findDepartment('')}>
                                                    Все
                                                </MenuItem>
                                                {units.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}
                                                              onClick={findDepartment(option.label)}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </Select> : null
                                    )
                                })
                            }
                        </div>
                    </div>
                    <AddNewElement/>
                </div>

            </div>
        </>
    )
}