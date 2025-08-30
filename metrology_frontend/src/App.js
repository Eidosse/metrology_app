import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, Typography, Button, AppBar, Toolbar } from '@mui/material';
import Home from './components/Home'; // Создадим позже
import InstrumentsList from './components/InstrumentsList'; // Создадим позже
import EmployeeRegistration from './components/EmployeeRegistration'; // Создадим позже

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Метрологическое приложение
          </Typography>
          <Button color="inherit" component={Link} to="/">Главная</Button>
          <Button color="inherit" component={Link} to="/instruments">Список оборудования</Button>
          <Button color="inherit" component={Link} to="/register-employee">Регистрация сотрудника</Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/instruments" element={<InstrumentsList />} />
          <Route path="/register-employee" element={<EmployeeRegistration />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;