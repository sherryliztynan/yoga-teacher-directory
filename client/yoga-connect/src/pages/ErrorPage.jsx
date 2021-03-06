import React from 'react'
import Error from '../components/Error/error'
import Title from '../components/Title/title'
import GoBack from '../components/GoBack/GoBack'
import '../Styles/Error.scss'


export default () => (
  <div className="error">
    <Title />
    <Error/>
    <GoBack />
  </div>
)