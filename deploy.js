const Client = require('ssh2-sftp-client');
const path = require('path');
const sftp = new Client();

const config = {
  host: 'home148174042.1and1-data.host',
  port: 22,
  username: 'u39440144',
  password: 'Mtvk-92jpbs-05',
};

const localDir = path.join(__dirname, 'build');
const remoteDir = '/';

async function deploy() {
  try {
    await sftp.connect(config);
    console.log('Connected to SFTP server.');

    console.log(`Uploading ${localDir} to ${remoteDir}...`);
    await sftp.uploadDir(localDir, remoteDir);

    console.log('Deployment finished.');
  } catch (err) {
    console.error('Deployment error:', err.message);
  } finally {
    sftp.end();
  }
}

deploy();
