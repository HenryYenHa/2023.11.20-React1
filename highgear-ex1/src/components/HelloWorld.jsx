import React from 'react'

const HelloWorld = (props) => {
  const title = props.title;
  return (
    <div> <h1>{title} world</h1></div>
  )
}

export default HelloWorld