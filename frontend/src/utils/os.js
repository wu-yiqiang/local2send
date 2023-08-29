import os from 'os'
export function getOsType() {
  if (os.type() === "Darwin") return "Darwin";
  if (os.type() === "Windows_NT") return "Windows_NT";
  if (os.type() === "Linux") return "Linux";
  return null;
}

export function getDownloadDir() { }