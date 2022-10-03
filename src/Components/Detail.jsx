import { useSelector } from "react-redux";

export const Detail = ({ detailInfo: { icon, description, maxTemp, minTemp, currentTemp } }) => {
    const { messages } = useSelector(state => state.lang);

    return (
        <div className="detail-container">
            <img src={icon} alt={messages.altIcon}/>
            <div>{description}</div>
            <div>{messages.currentTemp}: <span>{currentTemp}</span></div>
            <div>{messages.maxTemp}: <span>{maxTemp}</span></div>
            <div>{messages.minTemp}: <span>{minTemp}</span></div>
        </div>
    )
}