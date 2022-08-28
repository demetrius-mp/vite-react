import create from 'zustand';

import { Theme } from '@/lib/theme';

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const useThemeStore = create<ThemeState>()((set) => ({
  theme: 'dark',
  setTheme: (theme) => set(() => ({ theme })),
}));

export default useThemeStore;
