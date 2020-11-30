/**
 * task 1 
 * import libraries  
 * 
 * reactnavigation
 * shows diff screen 
 * shows header on diff screen
 */
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import searchscreen from './src/searchscreen.js'
import restaurantdescscreen from './src/restaurantdescscreen'
/**
 *  task 2
 *  create a fxn that return jsx
 */
const nav = createStackNavigator(
  {
  Search:searchscreen,
  desc:restaurantdescscreen
  },
  {
    initialRouteName: 'Search',
    defaultNaviagtionOptions:{
      title:'Business Search'
    }
  }
  )

  /**
   * task 4
   * Well the App.Js is file inside of our project is a very special file
   * when our application first starts up anything that we export from 
   * this file is going to be taken by react native and automatically 
   * shown on the screen of the device.
   * 
   * So this create app container function essentially creates a default app 
   * component or really a react component I should say and displays whatever 
   * content the navigator is producing inside of that component.
   * In other words this create app container just make sure that 
   * we actually export a real component from this file.
   */
  export default createAppContainer(nav)