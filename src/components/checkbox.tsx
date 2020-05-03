import React from "react";

interface CheckboxProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export const CheckBox: React.FC<CheckboxProps> = ({ checked, onChange }) => {
    const checkClass = checked ? "fa-dot-circle" : "fa-circle";
    return <i
        className={`far ${checkClass}`}
        style={{ color: "#DADADA" }}
        onClick={() => onChange(!checked)}/>;
}
