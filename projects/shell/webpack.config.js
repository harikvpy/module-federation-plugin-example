const {
  share,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  remotes: {
    // mfe1: "http://localhost:4201/remoteEntry.js",
  },

  // Explicitly share packages:
  shared: share({
    "@angular/core": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    },
    "@angular/common": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    },
    "@angular/common/http": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    },
    "@angular/router": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    },
    "@angular/material/core": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    },
    "@angular/material/button": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    },
    "@angular/material/slide-toggle": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    },
    '@angular/material/card': {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    },
    '@angular/material/icon': {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }
  }),

  // Explicitly share mono-repo libs:
  sharedMappings: ["auth-lib"],
});
