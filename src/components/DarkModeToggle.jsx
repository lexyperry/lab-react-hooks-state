import React from 'react'

const DarkModeToggle = (props) => {
  const {darkMode, setDarkMode} = props 
  // TODO: Implement dark mode toggle logic

  return (
    <button  onClick={()=>{setDarkMode(!darkMode)}}>Toggle Dark Mode {/* TODO: Update this text dynamically */}</button>
  )
}

export default DarkModeToggle
