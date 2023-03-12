import { Button, HStack, Input } from "@chakra-ui/react";

function TodoAddForm() {
  return (
    <form onSubmit={() => console.log("SUBMITTED")}>
      <HStack p="30px">
        <Input
          variant="filled"
          placeholder="Enter your task here"
          //value={"New Task"}
          onChange={(e) => console.log(e.target.value)}
        />
        <Button colorScheme={"pink"} px="28px" type="submit">
          New Task
        </Button>
      </HStack>
    </form>
  );
}
export default TodoAddForm;
