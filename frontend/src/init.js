import { States, pinia } from "@/store/index";
import {
  getFreePort,
  getVlanIp,
  getSaveDir,
  getHostName,
} from "./utils/network";
class Init {
  constructor() {
    this.initStore();
    this.initNetwork()
    this.initOs();
    this.initSocket()
  }
  async initStore() {
    const store = States(pinia);
    const port = await getFreePort();
    const ip = getVlanIp();
    const hostName = getHostName();
    const saveDir = getSaveDir();
    const deviceInfo = {
      hostName,
      port,
      saveDir,
      ip
    }
    store.$state.settings = deviceInfo;
  }
  initNetwork() { }
  initOs() { }
  initSocket() {}
}

export default new Init();
