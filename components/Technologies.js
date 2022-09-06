import React from "react";
import { useAtom } from "jotai";

import TechCard from "./TechCard";

import { technologiesAtom } from "../state/atom";

function Technologies() {
  const [technologies, setTechnologies] = useAtom(technologiesAtom);
  console.log(technologies);
  return technologies.map((technology) => {
    return <TechCard name={technology.name} />;
  });
}

export default Technologies;
