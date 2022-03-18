import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Héber Silva</Text>
          <Text color="gray.300" fontSize="small">
            heberlimasilva@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Héber Silva"
        src="https://avatars.githubusercontent.com/u/79921821?v=4"
      />
    </Flex>
  );
}
