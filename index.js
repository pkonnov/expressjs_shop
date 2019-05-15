const app = require('./app')
// might set the port in the terminal
const port = process.env.PORT || 3000

app.listen(port, () =>  console.log(`Server has been stared on ${port}`))
