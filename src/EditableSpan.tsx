import React, {ChangeEvent, useState} from "react";

type EditableSpanPropsType = {
    value: string
    onChange: (newTitle: string) => void
}
export const EditableSpan: React.FC<EditableSpanPropsType> = (props) => {

    const [title, setTitle] = useState(props.value)
    const [editMode, setEditMode] = useState(false)
    const activateEditMode = () => {
        setEditMode(true)
    }
    const activateViewMode = () => {
        setEditMode(false)
        props.onChange(title)
    }
    const onChangeHandler = (ev: ChangeEvent<HTMLInputElement>) => {

        setTitle(ev.currentTarget.value)
    }
    return (<>
            {
                editMode
                    ? <input value={title} autoFocus onBlur={activateViewMode} onChange={onChangeHandler}/>
                    : <span onDoubleClick={activateEditMode}>{title}</span>
            }
        </>
    )
}