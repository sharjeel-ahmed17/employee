import AddEmployee from "./components/form/AddEmployee"
import EmployeeTable from "./components/form/EmployeeTable"
import TreeGraph from "./components/form/TreeGraph"


function App() {


  return (
    <>
      <div className=" w-100 container mx-auto">
        <h1 className="text-capitalize mt-3">add employee form   </h1>

        <AddEmployee />
        <EmployeeTable />
        <TreeGraph />
      </div>

    </>
  )
}

export default App
