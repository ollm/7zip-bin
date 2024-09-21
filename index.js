"use strict"

const path = require("path")

function getPath() {
  if (process.env.USE_SYSTEM_7Z === "true") {
    return "7zz"
  }

  if (process.platform === "darwin") {
    return path.join(__dirname, "mac", process.arch, "7zz")
  }
  else if (process.platform === "win32") {
    return path.join(__dirname, "win", process.arch, "7zr.exe")
  }
  else {
    return path.join(__dirname, "linux", process.arch, "7zz")
  }
}

exports.path7z = getPath()
exports.path7x = path.join(__dirname, "7x.sh")