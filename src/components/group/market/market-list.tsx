import {
  VStack,
  Text,
  StackDivider,
  HStack,
  Spacer,
  IconButton,
} from "@chakra-ui/react";
import { BsTrash } from "react-icons/bs";

import TodoAddForm from "../../utility/TodoAddForm";

function Marketlist() {
  const todos = [
    {
      id: "t",
      name: "Shir",
      creation_date: Date.now(),
      state: "pending",
      group: "market",
    },
    {
      id: "y",
      name: "Notebook",
      creation_date: Date.now(),
      state: "pending",
      group: "market",
    },
    {
      id: "u",
      name: "",
      creation_date: Date.now(),
      state: "pending",
      group: "market",
    },
  ];

  return (
    <>
      <VStack
        divider={<StackDivider />}
        borderColor="gray.100"
        borderWidth="2px"
        p="4"
        borderRadius="lg"
        w="100%"
        maxW={{ base: "90vw", sm: "80vw", lg: "60wv", xl: "40vw" }}
        alignItems="stretch"
      >
        <TodoAddForm />
        {todos.map((todo) => (
          <HStack key={todo.id}>
            <Text>{todo.name}</Text>
            <Spacer />
            <IconButton
              icon={<BsTrash />}
              onClick={() => console.log(todo.id)}
              aria-label="aria"
            />
          </HStack>
        ))}
      </VStack>
    </>
  );
}
export default Marketlist;
