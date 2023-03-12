import { StackDivider, Text, VStack } from "@chakra-ui/react";
//import IGroup from "../../interface/IGroup";
import CleaningButton from "../group/cleaning/cleaning-button";
import MarkettingButton from "../group/market/marketing-button";
import UrgentButton from "../group/urgent/urgent-button";
import { useSelector, useDispatch } from "react-redux";
import { useAppSelector } from "../../app/hooks";
//import IGroup from "../../interface/IGroup";
function Sidebar() {
  const title: any = useAppSelector((state) => {
    state.group.title;
  });

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
        <Text mb={4}>{title}</Text>
        <CleaningButton />
        <MarkettingButton />
        <UrgentButton />
      </VStack>
    </>
  );
}
export default Sidebar;
