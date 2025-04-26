import "@gravity-ui/uikit/styles/fonts.css";
import "@gravity-ui/uikit/styles/styles.css";

import "./styles/reset.css";
import "./styles/index.css";

import { Providers } from "./providers";
import { AppRouter } from "./routers";

function App() {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
}

export default App;
