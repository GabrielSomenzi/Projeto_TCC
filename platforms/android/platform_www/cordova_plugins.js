cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "cordova-call.CordovaCall",
      "file": "plugins/cordova-call/www/CordovaCall.js",
      "pluginId": "cordova-call",
      "clobbers": [
        "cordova.plugins.CordovaCall"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-splashscreen": "5.0.3",
    "cordova-call": "1.1.6"
  };
});