import React, {useMemo} from "react";
import {useFormik} from "formik";
import {TextField, Button, MenuItem, Select, InputLabel} from "@material-ui/core";
import {FieldTypes} from "./constants";
import {useDispatch} from "react-redux";
import {addMember} from "../../Redux/app-reducer";
import {v1} from "uuid";

import "./Popup.scss";


type PopupPropsType = {
    trigger: boolean;
    setTrigger: (boolean) => void;
};

const units = [
    {label: "Финансы", value: "1"},
    {label: "Кадры", value: "2"},
    {label: "Планирование", value: "3"},
    {label: "Дома", value: "4"},
];

export const Popup = (props: PopupPropsType) => {
    const dispatch = useDispatch();

    const initialValues = useMemo(() => {
        return FieldTypes.reduce(
            (accum, item) => ({
                ...accum,
                [item.id]: "",
            }),
            {}
        );
    }, []);

    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
            const id = v1();
            const checked = false;
            dispatch(addMember({checked, ...values, id}));
            props.setTrigger(false);
        },
    });

    return props.trigger ? (
        <div className="popup">
            <div className="popup__content">
                <form onSubmit={formik.handleSubmit}>
                    <div className="main">
                        {FieldTypes.map((field) => {
                            return (
                                <div key={field.id} className="field">
                                    {field.type === "text" ? (
                                        <TextField
                                            name={field.id}
                                            id={field.id}
                                            label={field.label}
                                            variant="outlined"
                                            onChange={formik.handleChange}
                                            value={formik.values[field.id]}
                                            required={field.required}
                                        />
                                    ) : (
                                        <>
                                            <InputLabel className="select__label">
                                                Выберите подразделение
                                            </InputLabel>
                                            <Select
                                                className="select"
                                                id={field.id}
                                                name={field.id}
                                                value={formik.values[field.id]}
                                                label="Подразделение"
                                                onChange={formik.handleChange}
                                            >
                                                <MenuItem key={""} value={""}>
                                                    Не выбранно
                                                </MenuItem>

                                                {units.map((option) => (
                                                    <MenuItem key={option.value} value={option.label}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                    <div className="btn-s">
                        <div className="close__btn">
                            <button onClick={() => props.setTrigger(false)}>
                                <svg
                                    width="25"
                                    height="25"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M13.6713 12.8072L24.0709 2.40765C24.437 2.04151 24.437 1.44789 24.0709 1.08179C23.7047 0.715702 23.1111 0.715655 22.745 1.08179L12.3454 11.4814L1.94592 1.08179C1.57978 0.715655 0.986157 0.715655 0.620064 1.08179C0.253971 1.44794 0.253924 2.04156 0.620064 2.40765L11.0196 12.8072L0.620064 23.2068C0.253924 23.5729 0.253924 24.1665 0.620064 24.5326C0.80311 24.7157 1.04306 24.8072 1.28302 24.8072C1.52297 24.8072 1.76287 24.7157 1.94597 24.5326L12.3454 14.1331L22.745 24.5326C22.928 24.7157 23.168 24.8072 23.4079 24.8072C23.6479 24.8072 23.8878 24.7157 24.0709 24.5326C24.437 24.1665 24.437 23.5729 24.0709 23.2068L13.6713 12.8072Z"
                                        fill="#135978"
                                        fill-opacity="0.5"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="add__btn">
                            <Button type="submit" variant="outlined">
                                Добавить
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    ) : null;
};
