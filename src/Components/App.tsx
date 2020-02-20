import React from 'react';
import List from "./List";
import Header from './Header'


export class App extends React.Component {
 render() {
  return (
    <div style= {appStyle}>
      <Header/>
      <List/>
     
    </div>
  );
 }
  
}
const appStyle: React.CSSProperties = {
  height: '100vh',
  width: '100vw',
  backgroundColor: '#2f4454',

}
  
export default App;
