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

function Cleanlist() {
  const todos = [
    {
      id: "a",
      name: "saloon",
      creation_date: Date.now(),
      state: "pending",
      group: "clean",
    },
    {
      id: "b",
      name: "otagh",
      creation_date: Date.now(),
      state: "pending",
      group: "clean",
    },
    {
      id: "c",
      name: "wc",
      creation_date: Date.now(),
      state: "pending",
      group: "clean",
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
export default Cleanlist;
