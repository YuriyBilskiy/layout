import { Route, Routes } from 'react-router-dom';
import { MyBoard } from '../../pages/MyBoard/MyBoard';
import { TaskList } from '../../pages/TaskList/TaskList';
import { Notifications } from '../../pages/Notifications/Notifications';
import { Analytics } from '../../pages/Analytics/Analytics';
import { Library } from '../Library/Library';
import { NotFoundPage } from '../../pages/NotFoundPage/NotFoundPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MyBoard />} />
      <Route path="/my-board" element={<MyBoard />} />
      <Route path="/task-list" element={<TaskList />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/library" element={<Library />} />
      <Route path="/not-found" element={<NotFoundPage />} />
    </Routes>
  );
};
