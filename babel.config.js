module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@helpers': './src/helpers',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@services': './src/services',
          '@stores': './src/stores',
          '@utils': './src/utils',
          '@types': './src/types',
        },
      },
    ],
  ],
};
