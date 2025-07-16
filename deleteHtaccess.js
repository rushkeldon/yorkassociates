const Client = require('ssh2-sftp-client');
const sftp = new Client();

const config = {
  host: 'home148174042.1and1-data.host',
  port: 22,
  username: 'u39440144',
  password: 'mypwd',
};

async function run() {
  try {
    await sftp.connect(config);
    console.log('Connected to SFTP.');

    const targetDir = '/logs';
    await sftp.rmdir(targetDir, true);
    console.log(`Deleted directory: ${targetDir}`);
  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    sftp.end();
  }
}

run();
