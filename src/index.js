const app = require('./app');
const port = 3500;

app.listen(process.env.PORT || 3500, function () {
    console.log(`Expres escuchando en el puerto http://localhost:${port}`, this.address().port, app.settings.env);
})