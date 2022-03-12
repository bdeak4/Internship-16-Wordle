import WordInput from "../WordInput";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <WordInput handleAction={(e, word) => console.log(e, word)} />
    </div>
  );
};

export default App;
