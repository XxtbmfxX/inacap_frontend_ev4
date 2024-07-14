import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";

const FormPostIt = ({ setItemName, titleRef, descriptionRef }) => {
  return (
    <div>
      <Input ref={itemName} />
      <Input ref={itemName} />
    </div>
  );
};

export default FormPostIt;
