const app = require('./server/express')
require('./server/bot')

app.listen(app.get('port'), () => {
  console.log('Pagina prendido')
})
