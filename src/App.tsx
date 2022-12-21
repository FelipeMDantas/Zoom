import { EuiProvider } from "@elastic/eui";
import "@elastic/eui/dist/eui_theme_light.css";

const App = () => {
  return (
    <EuiProvider>
      <div>App</div>
    </EuiProvider>
  );
};

export default App;
