import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Text,
  Box,
} from "@chakra-ui/react";

const Post = ({
  title = "Título Post it",
  description = "Descripción Post it",
}) => {
  return (
    <Card
     
    >
      <CardHeader>
        <Heading size="md"> {title} </Heading>
      </CardHeader>
      <CardBody>
        <Text> {description} </Text>
      </CardBody>
    </Card>
  );
};

export default Post;
