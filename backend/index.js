const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const User = require('./models/User');
const userRoutes = require('./routes/userRoutes');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api', userRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Servidor funcionando!');
});

// Sincronizar con la base de datos e iniciar el servidor
const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida con éxito.');
    await sequelize.sync({ force: false }); // Cambié a false para no perder datos en cada reinicio
    console.log('Modelos sincronizados con la base de datos.');

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`); // Usando template literals
    });
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error);
  }
};

startServer();