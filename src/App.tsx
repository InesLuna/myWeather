import { NavBar, HeaderSection, Table } from "./components";

function App() {
  return (
    <div className="bg-red">
      <NavBar />
      <HeaderSection location= 'Barcelona' />
      <Table />
    </div>
  );
}

export default App;
