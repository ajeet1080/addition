import React, { useState } from "react";
import {
  Box,
  Input,
  Button,
  Text,
  VStack,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

const Adder: React.FC = () => {
  const [num1, setNum1] = useState<number | null>(null);
  const [num2, setNum2] = useState<number | null>(null);
  const [result, setResult] = useState<number | null>(null);

  const handleAdd = () => {
    if (num1 !== null && num2 !== null) {
      setResult(num1 + num2);
    }
  };

  return (
    <Box p={4} maxW="400px" mx="auto" borderWidth="1px" borderRadius="lg">
      <VStack spacing={4}>
        <FormControl>
          <FormLabel>Number 1</FormLabel>
          <Input
            type="number"
            value={num1 ?? ""}
            onChange={(e) => setNum1(parseFloat(e.target.value))}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Number 2</FormLabel>
          <Input
            type="number"
            value={num2 ?? ""}
            onChange={(e) => setNum2(parseFloat(e.target.value))}
          />
        </FormControl>
        <Button colorScheme="blue" onClick={handleAdd}>
          Add
        </Button>
        {result !== null && <Text>Result: {result}</Text>}
      </VStack>
    </Box>
  );
};

export default Adder;
