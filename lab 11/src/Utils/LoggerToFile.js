// src/Utils/LoggerToFile.js
const { createLogger, transports, format } = require('winston');

const loggerToFile = createLogger({
  level: 'info', // Уровень логирования
  format: format.combine(
    format.timestamp(), // Добавление временной метки к сообщениям
    format.printf(info => `[${info.timestamp}] ${info.message}`) // Форматирование сообщений
  ),
  transports: [
    new transports.File({ filename: 'test.log' }) // Запись логов в файл
  ]
});

module.exports = loggerToFile;
