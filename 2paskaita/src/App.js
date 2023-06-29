import Car from "./components/Car";
import FuncCar from "./components/FuncCar";
import FuncBestCar from "./components/FuncBestCar";
import Counter from "./components/Counter";
import "./App.css";
import FuncCounter from "./components/FuncCounter";
import ClassCounter from "./components/ClassCounter";
import Hero from "./components/Hero";
import Button from "./components/Button";
import MoodChecker from "./components/MoodChecker";

const App = () => {
  return (
    <div>
      <h2>Class</h2>
      <Car />
      <br />
      <br />
      <br />
      <h2>Function with one state</h2>
      <FuncCar />
      <br />
      <br />
      <br />
      <h2>Function with separate states</h2>
      <FuncBestCar />
      <br />
      <br />
      <br />
      <Counter />
      <br />
      <br />
      <FuncCounter />
      <br />
      <br />
      <ClassCounter />
      <br />
      <br />
      <br />
      <div>
        <Hero
          title="Užeik, užeik, svečias būsi."
          subtitle="Jei alaus 'pastatysi'- šeiminiku tapsi."
        />
      </div>
      <br />
      <br />
      <div>
        <Button title="TEXT" variant="text" />
        <Button title="CONTAINED" variant="contained" />
        <Button title="OUTLINED" variant="outlined" />
      </div>
      <br />
      <br />
      <div>
        <MoodChecker />
      </div>
    </div>
  );
};

export default App;
