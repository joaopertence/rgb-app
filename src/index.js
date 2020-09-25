import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; 

ReactDOM.render(
  //Renderiza o componente App dentro da div com o "id=root"
  //Componente no React: Função javascript que retorna um html
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

