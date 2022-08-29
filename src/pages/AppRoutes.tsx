import { Route, Routes } from 'react-router-dom';

import App from '@/App';
import NotFound from '@/pages/NotFound';
import SignIn from '@/pages/SignIn';
import SignUp from '@/pages/SignUp';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<SignIn />} />
      <Route path="sign-in" element={<SignIn />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default AppRoutes;
