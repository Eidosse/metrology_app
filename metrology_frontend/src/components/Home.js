import React from 'react';
import { Typography, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

function Home() {
  // Заглушка для данных (заменим на данные из API позже)
  const taskLog = [
    { id: 1, fullName: 'Иван Иванов', position: 'Метролог', task: 'Удалил прибор', time: '2025-08-24 17:00' },
    { id: 2, fullName: 'Мария Петрова', position: 'Начальник', task: 'Изменил прибор', time: '2025-08-24 16:30' },
  ];

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Главная страница: Лог выполненных задач
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ФИО</TableCell>
            <TableCell>Должность</TableCell>
            <TableCell>Задача</TableCell>
            <TableCell>Время выполнения</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {taskLog.map((task) => (
            <TableRow key={task.id}>
              <TableCell>{task.fullName}</TableCell>
              <TableCell>{task.position}</TableCell>
              <TableCell>{task.task}</TableCell>
              <TableCell>{task.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Home;