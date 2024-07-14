import React from "react";
import { Card, CardHeader, CardBody, Heading, Text, Button } from "@chakra-ui/react";

const Post = ({ title, description, handleDeleteItem, id, startEditing }) => {
  return (
    <Card>
      <CardHeader>
        <Heading size="md"> {title} </Heading>
      </CardHeader>
      <CardBody>
        <Text> {description} </Text>
        <Button mr={2} onClick={() => startEditing(id)}>
          Editar
        </Button>
        <Button colorScheme="red" onClick={() => handleDeleteItem(id)}>
          Eliminar
        </Button>
      </CardBody>
    </Card>
  );
};

export default Post;
