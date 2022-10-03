import { useDispatch } from "react-redux";
import { selectLanguage } from "../redux/actions/lang";

export const LanguageButton = ({ language, children }) => {
    const dispatch = useDispatch();

    const changeLanguage = () => {
        dispatch(selectLanguage(language));
    }

    return <button onClick={() => changeLanguage()}>{children}</button>
}