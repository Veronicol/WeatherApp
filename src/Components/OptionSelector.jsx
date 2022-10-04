import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

export const OptionSelector = ({ options, handleSelectOption}) => {
    const currentOption = useRef();
    const { id: currentLang,messages } = useSelector(state => state.lang);

    useEffect(() => {
        currentOption.current && handleSelectOption(currentOption.current);
    }, [currentLang])

    const handleChange = event => {
        handleSelectOption(event.target.value);
        currentOption.current = event.target.value;
    }

    return (
        <select defaultValue="none" onChange={event => handleChange(event)}>
            <option value="none" disabled hidden>{messages.citiesSelectInputText}</option>
            {options.map(currentOption => {
                const { id, label, value } = currentOption;
                return (<option key={id} value={value}>{label}</option>)
            })}
        </select>
    )
};