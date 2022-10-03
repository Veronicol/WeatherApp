import { useSelector } from "react-redux";

export const Detail = ({ detailInfo: { icon, description, ...restOfProps } }) => {
    const otherOptions = Object.entries(restOfProps);
    const { messages } = useSelector(state => state.lang);

    return (
        <div className="detail-container">
            <img src={icon} alt={messages.altIcon}/>
            <div>{description}</div>
            {otherOptions.map(currentOption => {
                const [optionName, optionValue] = currentOption;
                return <div key={optionName}>{messages[optionName]}: <span>{optionValue}</span></div>
            })}
        </div>
    )
}