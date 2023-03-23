import React from 'react'
import ReactDOM from 'react-dom'
import './popup.css'
import { DatePicker } from 'antd';

const App: React.FC<{}> = () => {
  return (
    <div>
      <img src="icon.png" />
      <DatePicker />
    </div>
  )
}

const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.render(<App />, root)
