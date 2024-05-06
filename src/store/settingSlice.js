const initialSettingData = {};

export const createSettingSlice = (set) => ({
  ...initialSettingData,
  resetSettingData: () =>
    set({ ...initialSettingData }, false, "resetSettingData"),
});
