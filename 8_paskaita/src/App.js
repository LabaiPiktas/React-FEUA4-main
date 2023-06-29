// importuojam useRef hooksa
import AgePlus from "./components/AgePlus";
import LetterToColor from "./components/LetterToColor";
import KgConverter from "./components/KgConverter";

const App = () => {
  return (
    <div>
      <h1>My App</h1>

      <AgePlus />
      <>
        <LetterToColor />
      </>
      <>
        <KgConverter />
      </>
    </div>
  );
};
export default App;
