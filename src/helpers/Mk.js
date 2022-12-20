const { Client } = require('ssh2');
const rb = {
    host: '20.0.0.1',
    port: 22,
    username: 'admin',
    password: ''
}
const conn = new Client();

export function getAllIp() {
    conn.on('ready', () => {
        conn.exec("ip address print", (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream :: close :: code: ' + code + ', signal: ' + signal);
                conn.end();
            }).on('data', (data) => {
                console.log('OUTPUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            })
        })
    }).connect(rb);
}
export function addIpAddress(ip, inter, comment = '') {
    conn.on('ready', () => {
        conn.exec(`ip address add address=${ip} interface=${inter} comment=${comment}`, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, stream) => {
                if (code) console.log(code)
                if (stream) console.log(stream)

            })
            conn.end()
        })


    }).connect(rb);
}
