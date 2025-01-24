import './App.css';
import Routing from './routes/Routing';
import "@fontsource/rubik"; // Defaults to weight 400
import "@fontsource/rubik/400.css"; // Specify weight
import "@fontsource/rubik/400-italic.css"; // Specify weight and style
import "@fontsource/montserrat"; // Defaults to weight 400
import "@fontsource/montserrat/400.css"; // Specify weight
import "@fontsource/montserrat/400-italic.css"; // Specify weight and style
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Routing />
    </LanguageProvider>

  );
}
export default App;