import {create} from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useAuthStore = create(set => ({
  username: "",
  singinUser: null,
  authLoading: true,
  setUsername: username => set({username: username}),
  singin: user => set({singinUser: user}),
  logout: () => {
    AsyncStorage.removeItem('@user');
    set({singinUser: null, username:""})
  }, 
  setLoading: loading => set({authLoading: loading})
}));

export default useAuthStore;