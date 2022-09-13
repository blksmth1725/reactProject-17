import { atom } from "jotai";
import { SPEAKERS_DATA } from "../utils/SpeakerData";

export const speakerAtom = atom(SPEAKERS_DATA);
