import { FC } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { SiOpenai } from "react-icons/si";

const Footer: FC = (): JSX.Element => {
  return (
    <Box marginTop={50}>
      <Flex justifyContent="center" alignItems="center">
        <Box marginRight={1}>
          <SiOpenai size={24} />
        </Box>
        <Text>Powered by OpenAI</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
