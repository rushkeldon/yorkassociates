const FtpDeploy = require('ftp-deploy');
const ftpDeploy = new FtpDeploy();

const config = {
    user: "u39440144",
    password: "Mtvk-92jpbs-05",
    host: "home148174042.1and1-data.host",
    localRoot: __dirname + "/build",
    remoteRoot: "/",
    include: ["*", "**/*"],
    exclude: ['.*'],
    deleteRemote: true,
    forcePasv: true
};

ftpDeploy.deploy(config)
    .then(res => console.log('Deployment finished:', res))
    .catch(err => console.log(err));