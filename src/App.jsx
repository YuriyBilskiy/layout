import "./index.css";
import { Tabs } from "./components/Tabs/Tabs";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Columns } from "./components/Columns/Columns";
// const arrayOfSidebars = ['Analytics', 'Task List', 'My board', 'Notifications']

const App = () => {

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
     <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">My Board</h2>
        </div>
        {/* Tabs */}
     <Tabs />

        {/* Columns */}
       <Columns />
      </main>
    </div>
  );
};



export default App;
