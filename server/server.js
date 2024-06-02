const express = require('express');
const app = express();
const { exec } = require('child_process');


// Ruta para iniciar la emulación con parámetros
app.get('/emulate/:arch', (req, res) => {
    const arch = req.params.arch;
    let command;

    switch(arch) {
        case 'x86_64':
            command = 'qemu-system-x86_64 -m 2G -smp 2 --enable-kvm -boot d -cdrom Iso/android-x86_64-9.0-r2.iso';
            break;
        case 'LOC_OS':
                command = 'qemu-system-x86_64 -m 2G -smp 2 --enable-kvm -boot d -cdrom Iso/Loc-OS-23-LXDE-x86_64.iso';
                break;
        // Añadir más casos para otras arquitecturas
        default:
            res.status(400).send('Arquitectura no soportada');
            return;
    }

    console.log(`Iniciando emulación para ${arch}...`);
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error al ejecutar QEMU para ${arch}:`, error);
            res.status(500).send(`Error al iniciar la emulación para ${arch}`);
            return;
        }
        console.log(`Emulación iniciada para ${arch}:`, stdout);
        res.send(`Emulación iniciada para ${arch}`);
    });
});

// Ruta para detener la emulación
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

app.listen(5000, () => {
    console.log("Server started on http://localhost:5000");
});
