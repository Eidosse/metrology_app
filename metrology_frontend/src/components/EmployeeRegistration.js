import React from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';

function EmployeeRegistration() {
  const [formData, setFormData] = React.useState({
    lastName: '',
    firstName: '',
    middleName: '',
    position: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Регистрация:', formData); // Заменим на API-запрос позже
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Регистрация сотрудника
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mt: 2 }}>
        <TextField
          fullWidth
          margin="normal"
          name="lastName"
          label="Фамилия"
          value={formData.lastName}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          name="firstName"
          label="Имя"
          value={formData.firstName}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          name="middleName"
          label="Отчество"
          value={formData.middleName}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          name="position"
          label="Должность"
          value={formData.position}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          name="email"
          label="Почта"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <Button variant="contained" type="submit" sx={{ mt: 2 }}>
          Зарегистрировать
        </Button>
      </Box>
      <Typography variant="h6" sx={{ mt: 4 }}>
        Список сотрудников (заглушка)
      </Typography>
      {/* Здесь будет таблица сотрудников */}
    </div>
  );
}

export default EmployeeRegistration;