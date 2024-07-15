import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Text,
  Button,
  Box,
  GridItem,
} from "@chakra-ui/react";

const Post = ({ title, description, handleDeleteItem, id, startEditing }) => {
  return (
    <GridItem height={"auto"}>
      <Card  color={"gray.200"} bgColor={"blue.400"}>
        <CardHeader>
          <Heading size="md"> {title} </Heading>
        </CardHeader>
        <CardBody>
          <Text> {description} </Text>
          <Box marginTop={10}>
            <Button m={2} onClick={() => startEditing(id)}>
              Editar
            </Button>
            <Button
              m={2}
              colorScheme="red"
              onClick={() => handleDeleteItem(id)}
            >
              Eliminar
            </Button>
          </Box>
        </CardBody>
      </Card>
    </GridItem>
  );
};

export default Post;
