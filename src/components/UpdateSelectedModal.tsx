import { atom } from "jotai";

export const toggleDisplay = atom("hidden");

function UpdateSelectedModal() {
  return <div className={`display-${toggleDisplay}`}></div>;
}

export default UpdateSelectedModal;
