import { FC, useState } from "react";
import { Container, Box } from "@chakra-ui/react";

import TextInput from "./components/TextInput";
import KeywordsModal from "./components/KeywordsModal";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App: FC = (): JSX.Element => {
  const [keywords, setKeywords] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const extractKeywords: (text: string) => Promise<void> = async (
    text: string
  ): Promise<void> => {
    setLoading(true);
    setIsOpen(true);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt:
          "Extract keywords from this text. Make the first letter of each word uppercase and separate with commas\n\n" +
          text +
          "",
        temperature: 0.5,
        max_tokens: 60,
        frequency_penalty: 0.8,
      }),
    };

    const response = await fetch(import.meta.env.VITE_OPENAI_API_URL, options);
    const data = await response.json();

    const resKeywords: string = data.choices[0].text.trim();

    setKeywords(resKeywords);
    setLoading(false);
  };

  const closeModal: () => void = (): void => {
    setIsOpen(false);
  };

  return (
    <Box bg="blue.600" color="white" height="100vh" paddingTop={130}>
      <Container maxW="3xl" centerContent>
        <Header />
        <TextInput extractKeywords={extractKeywords} />
        <Footer />
      </Container>
      <KeywordsModal
        keywords={keywords}
        loading={loading}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </Box>
  );
};

export default App;
