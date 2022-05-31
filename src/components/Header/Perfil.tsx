import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface PerfilProps {
  showPerfilData?: boolean;
}

export function Perfil({ showPerfilData = true }: PerfilProps) {
  return (
    <Flex align="center">
      {showPerfilData && (
        <Box mr="4" textAlign="right">
          <Text>Eric Macedo</Text>
          <Text color="gray.500" fontSize="small">
            ericthr@gmail.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="Eric Macedo" />
    </Flex>
  );
}
