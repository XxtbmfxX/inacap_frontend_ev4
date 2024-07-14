import React, { useRef, useState } from "react";
import { Box, Button, Input, Stack, Text, Alert, AlertIcon } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import Post from "./components/Post";

const App = () => {
  const [postIts, setPostIts] = useState([
    {
      id: uuidv4(),
      title: "Comprar arroz",
      description: " dos de agua por una de arroz ",
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
        post.id === editingId
          ? { ...post, title, description }
          : post
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
      p={4}
      w="100%"
      h="100vh"
      bgGradient="linear(to-b, gray.500, blue.600)"
    >
      <Box p={4}>
        <label>Titulo</label>
        <Input name="title" ref={titleRef} />
        <label>Descripción</label>
        <Input name="description" ref={descriptionRef} />
        {error && (
          <Alert status="error" my={4}>
            <AlertIcon />
            {error}
          </Alert>
        )}
        <Button my={10} onClick={editingId ? handleUpdateItem : handleAddItem}>
          {editingId ? "Actualizar Post It" : "Agregar Post It"}
        </Button>
      </Box>

      <Stack spacing={4}>
        {postIts.map((item) => (
          <Post
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            handleDeleteItem={handleDeleteItem}
            startEditing={startEditing}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default App;
