//import { HStamport { ITask, IBtnUpdate } from '../../interfaces/Task';
import { setGroup } from "../../../features/group/groupSlicer";
import { useDispatch } from "react-redux";
import { Button, HStack, useToast } from "@chakra-ui/react";

function CleaningButton() {
  //const title=useSelector((state)=>{state.title})

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
        Cleaning
      </Button>
    </HStack>
  );
}
export default CleaningButton;
