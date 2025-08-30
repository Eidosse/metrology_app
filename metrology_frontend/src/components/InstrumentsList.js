import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, Table, TableBody, TableCell, TableHead, TableRow, Box, TextField, Button } from '@mui/material';

function InstrumentsList() {
  const [instruments, setInstruments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    serial_number: '',
    last_verification_date: '',
    next_verification_date: '',
    first_notification_date: '',
    second_notification_date: '',
    department: '',
    status: 'active',
  });

  useEffect(() => {
    const fetchInstruments = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/instruments/');
        setInstruments(response.data);
      } catch (err) {
        setError('Ошибка загрузки данных');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchInstruments();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/api/instruments/', formData);
      setFormData({
        name: '',
        type: '',
        serial_number: '',
        last_verification_date: '',
        next_verification_date: '',
        first_notification_date: '',
        second_notification_date: '',
        department: '',
        status: 'active',
      });
      // Обновляем список после добавления
      const response = await axios.get('http://127.0.0.1:8000/api/instruments/');
      setInstruments(response.data);
    } catch (err) {
      setError('Ошибка добавления прибора');
      console.error(err);
    }
  };

  if (loading) return <Typography>Загрузка...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Список оборудования
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600, mb: 4 }}>
        <TextField
          fullWidth
          margin="normal"
          name="name"
          label="Название прибора"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          name="type"
          label="Тип прибора"
          value={formData.type}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          name="serial_number"
          label="Серийный номер"
          value={formData.serial_number}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          name="last_verification_date"
          label="Дата последней поверки"
          type="date"
          value={formData.last_verification_date}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          name="next_verification_date"
          label="Дата следующей поверки"
          type="date"
          value={formData.next_verification_date}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          name="first_notification_date"
          label="Первая дата уведомления"
          type="date"
          value={formData.first_notification_date}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          name="second_notification_date"
          label="Вторая дата уведомления"
          type="date"
          value={formData.second_notification_date}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          name="department"
          label="Отдел"
          value={formData.department}
          onChange={handleChange}
          required
        />
        <Button variant="contained" type="submit" sx={{ mt: 2 }}>
          Добавить прибор
        </Button>
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Название</TableCell>
            <TableCell>Серийный номер</TableCell>
            <TableCell>Статус</TableCell>
            <TableCell>Следующая поверка</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {instruments.map((instrument) => (
            <TableRow key={instrument.id}>
              <TableCell>{instrument.name}</TableCell>
              <TableCell>{instrument.serial_number}</TableCell>
              <TableCell>{instrument.status}</TableCell>
              <TableCell>{instrument.next_verification_date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default InstrumentsList;