# React Native

React Native is based on React components. We can modularize our project into separate modules. Here all components are separate modules with JS, CSS and HTML everything embedded in single component.

React native converts JavaScript (React) code into Native code.
- bridges native and JS development
- expose native modules to JS
- cross platform
- brings some of the good parts of the web to mobile


Install `npm install react-native-cli -g`

Create project using `react-native init <ProjectName>`

start the project using `react-native run-android` OR `react-native run-ios`

`react-native init --version="0.46.0" HelloRN`

`react-native run-android`

Press Ctrl+M to enable Live Reload on Android virtual device. To reload press `R` twice. We can also use Debug JS remotely to see all errors and console messages in browser. For iOS application testing, just open xcodeproj in XCode. For enabling Live reload, use Cmd+S

If you run into weird problems, use `npm start -- --reset-cache`

React Native has standard approach to styling. Only subset can be used. It uses Flexbox for styling. It uses Javascript object for styling. We can provide multiple styles in the form of `style={[styles.color, styles.background]}