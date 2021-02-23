import React from "react";
import Picker from "components/Picker/Picker";
import { PickersName } from "constants/PickersName";

const RunPickers: React.FC = (): JSX.Element => {
  return <Picker options={PickersName} />;
};

export default RunPickers;
