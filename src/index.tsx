import { createServer, Model } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

createServer({

  seeds(server) {
    server.db.loadData({
      transactions: [
          {
            id: 1,
            title: 'Compras',
            type: 'withdraw',
            category: 'Despesas',
            amount: 600,
            createdAt: new Date('2021-02-12 09:00:00')
          },
          {
            id: 2,
            title: 'Aluguel',
            type: 'deposit',
            category: 'Pagamentos',
            amount: 2200,
            createdAt: new Date('2021-02-9 13:00:00')
          }
      ]
    })
  },

  models: {
    transaction: Model,
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })
  }
})



ReactDOM.render(
  <React.StrictMode>
    <App  />
  </React.StrictMode>,
  document.getElementById('root')
);

