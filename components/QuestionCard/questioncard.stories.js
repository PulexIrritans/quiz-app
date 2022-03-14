import "./questioncard.css";
import carddefault from "./questioncard-default.html"
import cardbookmarked from "./questioncard-bookmarked.html";
import cardanswerhidden from "./questioncard-answerhidden.html";


export default {
  title: "Components/Questioncard",
};

export const CardDefault = () => carddefault
export const CardBookmarked = () => cardbookmarked
export const CardAnswerHidden = () => cardanswerhidden