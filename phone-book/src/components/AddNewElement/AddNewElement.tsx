import {Button} from "@material-ui/core";
import React, {useCallback, useState} from "react";
import {Popup} from "../SearchBar/Popup/Popup";
import {useDispatch} from "react-redux";
import {deleteMultiMembers} from "../Redux/app-reducer";

import './AddNewElement.scss'

export function AddNewElement() {
    const [addUnit, setAddUnit] = useState(false);
    const dispatch = useDispatch();

    const makeMultiDelete = useCallback(() => {
        dispatch(deleteMultiMembers())
    }, [])

    return (
        <>
            <div className="btn">
                <Button
                    className="add"
                    variant="outlined"
                    onClick={() => setAddUnit(true)}
                >
                    Добавить новую запись
                </Button>
                <Button className="delete" variant="outlined" onClick={makeMultiDelete}>
                    Удалить выбранные
                </Button>
            </div>
            {addUnit && <Popup trigger={addUnit} setTrigger={setAddUnit}/>}

        </>

    )
}