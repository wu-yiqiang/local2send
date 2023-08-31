const os = require("os");
const net = require("net");
export function getVlanIp() {
  var interfaces = os.networkInterfaces();
  var netip = "";
  for (var devName in interfaces) {
    var iface = interfaces[devName];
    for (var i = 0; i < iface.length; i++) {
      var alias = iface[i];
      if (
        alias.family === "IPv4" &&
        alias.address !== "127.0.0.1" &&
        !alias.internal
      ) {
        netip = alias.address;
      } else {
        netip = '127.0.0.1'
      }
    }
  }
  return netip
}

export function getFreePort() {
  return new Promise(res => {
    const srv = net.createServer();
    srv.listen(0, () => {
      const port = srv.address().port;
      srv.close(() => res(port));
    });
  });
}

export function getHostName() {
  return os.hostname()
}

export function getSaveDir() {
  let dir = ''
  dir = os.homedir()+'/Download';
  return dir
}