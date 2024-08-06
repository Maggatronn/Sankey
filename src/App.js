// src/App.js

import React from 'react';
import SankeyDiagram from './SankeyDiagram';

const data = {
  nodes: [
    { name: 'A', id: 0 },
    { name: 'B', id: 1 },
    { name: 'C', id: 2 },
    { name: 'D', id: 3 },
    { name: 'E', id: 4 },
  ],
  links: [
    { source: 0, target: 1, value: 10, color: 'red' },
    { source: 1, target: 2, value: 20, color: 'green' },
    { source: 2, target: 3, value: 10, color: 'blue' },
    { source: 2, target: 4, value: 10, color: 'purple' },
  ]
};

const App = () => (
  <div>
    <h1>Sankey Diagram</h1>
    <SankeyDiagram data={data} />
  </div>
);

export default App;
