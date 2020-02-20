import React from "react"

 class Header extends React.Component {
  render() {
   return (
     <div style= {headerStyle}>
       <h1 style= {headerText}>TO DO - You got work to do!</h1>
     </div>
   )
  }
}

const headerStyle: React.CSSProperties = {
  height: '10%',
  display: 'flex',
  backgroundColor: 'grey',
  justifyContent: 'center'
}

const headerText: React.CSSProperties = {
  color: 'white'
}
export default Header