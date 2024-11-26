import { Route, Routes } from "react-router-dom";
import { MyBoard } from "./pages/MyBoard/MyBoard";
import { TaskList } from "./pages/TaskList/TaskList";
import { Notifications } from "./pages/Notifications/Notifications";
import { Analytics } from "./pages/Analytics/Analytics";
import { Library } from "./components/Library/Library";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { Layout } from "./components/Layout/Layout";
import { Tutorials } from "./pages/Tutorials/Tutorials";
import { Settings } from "./pages/Settings/Settings";

const App = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route path="/my-board" element={<MyBoard />} />
          <Route path="/task-list" element={<TaskList />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/library" element={<Library />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
