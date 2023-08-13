import React from 'react';
import  ReactDOM  from 'react-dom';

const head = React.createElement("h1" , {} , 'heading1')
const head2 = React.createElement("h1" , {} , 'heading2')

const container = React.createElement("div" , {} , [head ,head2])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(container)
