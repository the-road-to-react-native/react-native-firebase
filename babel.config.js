module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      'module:metro-react-native-babel-preset', // react-native-dotenv
      'module:react-native-dotenv', // react-native-dotenv
      'babel-preset-expo',
    ],
  };
};
