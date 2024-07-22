import {create} from 'zustand';

const useJobsStore = create(set => ({
  favoriteJobs: [],
  addFavoriteJob: job =>
    set(state => ({favoriteJobs: [...state.favoriteJobs, job]})),
  removeFavoriteJob: job =>
    set(state => {
      const newList = state.favoriteJobs.filter(item => item.id !== job);
      return {favoriteJobs: newList};
    }),
}));

export default useJobsStore;
