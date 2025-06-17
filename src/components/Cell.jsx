import React from 'react'
import '../App.css'

const Cell = ({filled, onClick, isDisabled}) => {
  return (
    <button type='button' onClick={onClick} disabled={isDisabled} className={filled? 'cell cellfilled' : 'cell'}/>
  )
}

export default Cell
