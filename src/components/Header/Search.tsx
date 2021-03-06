import { Flex, Icon, Input as ChakraInput } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export function Search() {
  return (
    <Flex
      as="label"
      flex="1"
      align="center"
      py="4"
      px="8"
      ml="6"
      maxW={400}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius="full"
    >
      <ChakraInput
        color="gray.50"
        variant="unstyled"
        px="4"
        mr="4"
        placeholder="Buscar na plataforma"
        _placeholder={{ color: "gray.400" }}
      />
      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  );
}
