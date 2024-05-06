import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { createSettingSlice } from './settingSlice';

export const useRagStore = create(
  persist(
    devtools((...a) => ({
      ...createSettingSlice(...a),
    })),
    {
      name: 'rag-store',
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(([key]) => key),
        ),
    },
  ),
);
