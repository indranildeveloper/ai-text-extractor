import { FC } from "react";
import { Heading, Box, Text } from "@chakra-ui/react";
import { FaLightbulb } from "react-icons/fa";

const Header: FC = (): JSX.Element => {
  return (
    <>
      <Box marginBottom="1rem">
        <FaLightbulb size={60} />
      </Box>

      <Heading color="white" marginBottom="1rem">
        AI Keyword Extractor
      </Heading>
      <Text fontSize={25} textAlign="center">
        Paste in your text below and we will extract the keyword for you
      </Text>
    </>
  );
};

export default Header;
