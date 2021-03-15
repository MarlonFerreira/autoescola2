import { BrowserRouter as Router } from "react-router-dom";

import GlobalStyle from "styles/globalStyle/GlobalStyle";
import ThemeProvider from "styles/themeProvider/ThemeProvider";
import Routes from "routes";

function App() {

  
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
