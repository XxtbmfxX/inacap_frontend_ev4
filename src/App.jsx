import React, { useRef, useState } from "react";
import { Box, Button, Input, Stack, Alert, SimpleGrid, Text } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import Post from "./components/Post";

import { Grid, GridItem } from "@chakra-ui/react";
import FormPostIt from "./components/FormPostIt";

const App = () => {
  const [postIts, setPostIts] = useState([
    {
      id: uuidv4(),
      title: "Comprar arroz",
      description: " dos de agua por una de arroz ",
    },
    {
      id: uuidv4(),
      title: "Tomar agua",
      description: "Es importante para procesar bien la comida",
    },
    {
      id: uuidv4(),
      title: "Hacer ejercicio",
      description: " - Sentadillas  - Abdominales  - Correr 100k ",
    },
    {
      id: uuidv4(),
      title: "Dormir",
      description: "de las 10pm hasta las 5 am",
    },
  ]);

  const [error, setError] = useState(null);
  const [editingId, setEditingId] = useState(null);

  const titleRef = useRef();
  const descriptionRef = useRef();

  const handleDeleteItem = (id) => {
    setPostIts(postIts.filter((post) => post.id !== id));
  };

  const handleAddItem = () => {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;

    if (!description.trim()) {
      setError("La descripción es obligatoria");
      return;
    }

    setError(null);

    const newPostIt = {
      id: uuidv4(),
      title: title,
      description: description,
    };

    setPostIts([...postIts, newPostIt]);

    titleRef.current.value = "";
    descriptionRef.current.value = "";
  };

  const handleUpdateItem = () => {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;

    if (!description.trim()) {
      setError("La descripción es obligatoria");
      return;
    }

    setError(null);

    setPostIts(
      postIts.map((post) =>
        post.id === editingId ? { ...post, title, description } : post
      )
    );

    titleRef.current.value = "";
    descriptionRef.current.value = "";
    setEditingId(null);
  };

  const startEditing = (id) => {
    const post = postIts.find((post) => post.id === id);
    titleRef.current.value = post.title;
    descriptionRef.current.value = post.description;
    setEditingId(id);
  };

  return (
    <Box
      display={"grid"}
      p={10}
      w="100%"
      color={"gray.200"}
      bgColor={"gray.800"}
      minH={"100vh"}
    >
      <FormPostIt
        descriptionRef={descriptionRef}
        editingId={editingId}
        error={error}
        handleAddItem={handleAddItem}
        handleUpdateItem={handleUpdateItem}
        titleRef={titleRef}
        key={"Formulario agregar actualizar"}
      />
      <SimpleGrid columns={[null, 1, 2]} spacing={20}>
        {
          postIts.length > 0 ?

        postIts.map((item) => (
          <Post
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            handleDeleteItem={handleDeleteItem}
            startEditing={startEditing}
          />
        ))
        :
        <Text>
          No hay post its (┬┬﹏┬┬)
        </Text>
      
      }
      </SimpleGrid>
    </Box>
  );
};

export default App;
