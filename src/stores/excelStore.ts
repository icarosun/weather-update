import { defineStore } from 'pinia';

export const useExcelStore = defineStore("excel", {
  state: () => ({
    form: {
      infoDate: { startDate: "", endDate: "", columnDate: "" },
      elevation: { column: "", firstLine: null, lastLine: null },
      std: { columnMinElevation: "", columnMaxElevaiton: "" },
    },
  }),
  actions: {
    setForm(newForm: any) {
      this.form = newForm;
    },
  },
});
