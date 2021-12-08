import React from 'react'
import ReactDOM from 'react-dom'
import frontend_technologies from './frontend_technologies.png'

const welcome='Welcome to the 30 days of react'
const title='Getting started React'
const subtitle='Javascript Library'
const author={
  firstName:'Asabeneh',
  lastName:'Yetayeh',
}
const date='Oct 2, 2020'

const headerStyles = {
  backgroundColor: '#61DBFB',
  fontFamily: 'Helvetica Neue',
  padding: 25,
  lineHeight: 1.5,
}
const header=(
  <header style={headerStyles}>
    <div>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
)

const numOne=3
const numTwo=2

const result=(
  <p>
    {numOne} + {numTwo} = {numOne+numTwo}
  </p>
)

const yearBorn=1820
const currentYear=new Date().getFullYear()
const age=currentYear-yearBorn
const personAge=(
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)

const techs=['HTML','CSS','Javascript']
const techsFormatted=techs.map((tech)=><li>{tech}</li>)

const user=(
  <div >
    <img src={frontend_technologies} alt='asabeneh image' style={{width:'400px'}}></img>
  </div>
)

const mainStyles = {
  backgroundColor: '#F3F0F5',
}


const main=(
  <main style={mainStyles}> 
    <div>
      <p>
        Prerequisite to get started{' '}
        <strong>
          <em>react.js</em>
        </strong>
      </p>
      <ul>{techsFormatted}</ul>
      {result}
      {personAge}
      {user}
    </div>
  </main>
)
const copyRight='Copyright 2020'

const footerStyles = {
  backgroundColor: '#61DBFB',
}
const footer=(
  <footer style={footerStyles}>
    <div className='footer-wrapper'>
      <p>{copyRight}</p>
    </div>
  </footer>
)
const app=(
  <div className='app'>
    {header}
    {main}
    {footer}
  </div>
)
const rootElement = document.getElementById('root')
ReactDOM.render(app, rootElement)