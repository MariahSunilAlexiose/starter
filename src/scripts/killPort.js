const { exec } = require("child_process");

// eslint-disable-next-line no-unused-vars
exec("netstat -ano | findstr :4000", (err, stdout, stderr) => {
  if (stdout.length > 0) {
    const parts = stdout.split(/\s+/);
    const pid = parts[parts.length - 1];

    exec(`taskkill /PID ${pid} /F`, () => {
      console.log(`Port 4000 is now free!`);
    });
  } else {
    console.log("Port 4000 is available.");
  }
});
