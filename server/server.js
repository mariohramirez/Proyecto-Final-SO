const express = require('express');
const app = express();
const { exec } = require('child_process');


// Ruta para iniciar la emulación
app.get('/emulate', (req, res) => {
    // Comando de ejemplo para emular un programa en arquitectura x86
    const command = 'qemu-system-x86_64 -m 2G -smp 2 --enable-kvm -boot d -cdrom Iso/Loc-OS-23-LXDE-x86_64.iso';
    console.log('Iniciando emulación...');
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error('Error al ejecutar QEMU:', error);
            res.status(500).send('Error al iniciar la emulación');
            return;
        }
        console.log('Emulación iniciada:', stdout);
        res.send('Emulación iniciada');
    });
});

app.get('/stop', (req, res) => {
    // Comando para detener la emulación
    const stopCommand = 'killall qemu-system-x86_64';

    exec(stopCommand, (error, stdout, stderr) => {
        if (error) {
            console.error('Error al detener la emulación:', error);
            res.status(500).send('Error al detener la emulación');
            return;
        }
        console.log('Emulación detenida:', stdout);
        res.send('Emulación detenida');
    });
});


app.listen(5000, () => {console.log("Server started on http://localhost:5000")})