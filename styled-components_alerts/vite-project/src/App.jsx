import ProductsTable from "./components/ProductsTable";

import UsersTable from "./components/UserTable";

import MyComponent from "./components/Alert/MyComponent";

import Accordion from "./components/Acordion/Acordion";

function App() {
  return (
    <div
      style={{
        maxWidth: "700px",
        display: "flex",
        flexDirection: "column",
        gap: "5em",
        margin: "1em",
      }}
    >
      <div>
        <h1>Accordion Example</h1>
        <Accordion />
      </div>
      <MyComponent />
      <UsersTable />
      <ProductsTable />
    </div>
  );
}

export default App;
