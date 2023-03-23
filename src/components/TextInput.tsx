import { FC, useState, ChangeEvent } from "react";
import { Textarea, Button, useToast } from "@chakra-ui/react";

interface TextInputProps {
  extractKeywords: (text: string) => Promise<void>;
}

const TextInput: FC<TextInputProps> = ({
  extractKeywords,
}: TextInputProps): JSX.Element => {
  const [text, setText] = useState<string>("");

  const toast = useToast();

  const handleSubmitText: () => void = (): void => {
    if (text === "") {
      toast({
        title: "Text field is empty!",
        description: "Please enter some text to extract keywords...",
        status: "error",
        duration: 5000,
        isClosable: false,
      });
    } else {
      extractKeywords(text);
    }
  };

  return (
    <>
      <Textarea
        bg="blue.400"
        color="white"
        padding={4}
        marginTop={6}
        height={200}
        value={text}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>): void =>
          setText(e.target.value)
        }
      />
      <Button
        bg="blue.500"
        color="white"
        marginTop={4}
        width="100%"
        _hover={{ bg: "blue.700" }}
        onClick={handleSubmitText}
      >
        Extract Keywords
      </Button>
    </>
  );
};

export default TextInput;
