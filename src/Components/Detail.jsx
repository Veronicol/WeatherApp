import { useSelector } from "react-redux";

export const Detail = ({ detailInfo: { icon, description, maxTemp, minTemp, currentTemp } }) => {
    const { messages } = useSelector(state => state.lang);

    return (
        <div>
            <img src={icon} alt={messages.altIcon}/>
            <div>{description}</div>
            <div>{currentTemp}</div>
            <div>{maxTemp}</div>
            <div>{minTemp}</div>
        </div>
    )
}