import { defineStore } from 'pinia'
import * as Pinia from "pinia";
export const pinia = Pinia.createPinia();
export const States = defineStore("States", {
  state: () => {
    return {
      settings: {
        saveDir: "/download",
        hostName: "hostname",
        ip: "192.168.0.124",
        port: 12,
      },
    };
  },
  getters: {},
  actions: {
    updateSettings(value) {
      this.settings = value
    }
  },
});