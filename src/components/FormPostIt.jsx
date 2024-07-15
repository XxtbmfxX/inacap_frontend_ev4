import { Box, Input, Alert, Button } from "@chakra-ui/react";
import React from "react";

const FormPostIt = ({
  titleRef,
  descriptionRef,
  error,
  editingId,
  handleUpdateItem,
  handleAddItem,
}) => {
  return (
    <Box >
      <label>Titulo</label>
      <Input name="title" ref={titleRef} />
      <label>Descripción</label>
      <Input name="description" ref={descriptionRef} />
      {error && (
        <Alert bgColor={"red"} status="error" my={4}>
          {error}
        </Alert>
      )}
      <Button my={10} onClick={editingId ? handleUpdateItem : handleAddItem}>
        {editingId ? "Actualizar Post It" : "Agregar Post It"}
      </Button>
    </Box>
  );
};

export default FormPostIt;
