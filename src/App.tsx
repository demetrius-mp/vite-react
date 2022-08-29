import Navbar from '@/components/Navbar';
import SignUp from '@/pages/SignUp';
import useThemeStore from '@/stores/theme.store';

const App: React.FC = () => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <div className="min-h-screen" data-theme={theme}>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <SignUp />
      </div>
    </div>
  );
};

export default App;
