import { HStack, Button } from "@chakra-ui/react";
import { setGroup } from "../../../features/group/groupSlicer";
import { useDispatch } from "react-redux";

function MarkettingButton() {
  return (
    <HStack pl="6" mt="4" mb="4">
      <Button
        colorScheme="blue"
        px="8"
        pl="10"
        pr="10"
        h="46"
        type="submit"
        w="190px"
      >
        Market
      </Button>
    </HStack>
  );
}
export default MarkettingButton;
