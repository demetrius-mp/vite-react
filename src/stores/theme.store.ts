import { Theme } from "@/lib/theme";
import create from "zustand";

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const useThemeStore = create<ThemeState>()((set) => ({
  theme: "dark",
  setTheme: (theme) => set(() => ({ theme })),
}));

export default useThemeStore;
