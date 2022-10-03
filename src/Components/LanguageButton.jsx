import { useDispatch } from "react-redux";
import { selectLanguage } from "../redux/actions/lang";

export const LanguageButton = ({ language, buttonClass, children }) => {
    const dispatch = useDispatch();

    const changeLanguage = () => {
        dispatch(selectLanguage(language));
    }

    return <button className={buttonClass} onClick={() => changeLanguage()}>{children}</button>
}