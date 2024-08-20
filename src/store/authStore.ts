import { create } from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

interface User {
  id: string;
  username: string;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: async (username, password) => {
    set({ isAuthenticated: true, user: { id: "1", username } });
  },
  logout: () => set({ isAuthenticated: false, user: null }),
}));
