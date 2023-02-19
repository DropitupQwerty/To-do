import { atom } from "jotai";
import React, { useState } from "react";

export const toggleDisplay = atom("hidden");

function UpdateSelectedModal() {
  return <div className={`display-${toggleDisplay}`}></div>;
}

export default UpdateSelectedModal;
