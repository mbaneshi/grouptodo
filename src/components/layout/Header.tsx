import { VStack, Text, IconButton, Heading } from "@chakra-ui/react";
import { BsSun, BsMoon } from "react-icons/bs";
import { useState, useEffect } from "react";
import { useColorMode } from "@chakra-ui/react";
function Header(currentGroup: any) {
  console.log(currentGroup);
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <VStack>
      <Text>
        Create a single page which shows all tasks in their corresponding group,
        a way to add new tasks and remove existing ones only if they are not
        marked as done.
      </Text>
      <IconButton
        icon={colorMode === "light" ? <BsSun /> : <BsMoon />}
        // isRound="true"
        size="lg"
        alignSelf="flex-end"
        onClick={toggleColorMode}
        aria-label="no"
        p={2}
        m={4}
      ></IconButton>
      <Heading
        pb="3"
        fontWeight="extrabold"
        size="xl"
        bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
        bgClip="text"
      >
        grouping orgnise better
      </Heading>
    </VStack>
  );
}
export default Header;
