import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Adder from "./Adder";

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Adder />
    </ChakraProvider>
  );
};

export default App;
