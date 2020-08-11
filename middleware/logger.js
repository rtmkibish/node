const fs = require('fs');

function logger(req, res, next) {
  const {
    url,
    method
  } = req;
  const time = new Date;
  const logString = `${method} - ${url} - ${time}\n`;
  const reqLogFile = `logs/req-log_${time.getUTCDate()}-${time.getUTCMonth()}.txt`;
  fs.appendFile(reqLogFile, logString, err => {
    if (err) throw err;
  });
  next();
}

module.exports = logger;