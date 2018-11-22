import { ThemeProvider } from "styled-components";
import React from "react";
import theme from "./theme";
import Feed from "./Feed";
import { Box } from "reflexbox";
import Header from "./Header";

const App = props => (
  <ThemeProvider theme={theme}>
    <Box>
      <Header />
      <Feed />
    </Box>
  </ThemeProvider>
);

export default App;
