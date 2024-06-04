# Remote Laboratory for OS Course

## Installing Required tools

Before starting the applicatttion we need the following software installed in our machine:

### QEMU

1. Install QEMU using a terminal with the following command:

```bash
$ sudo apt install qemu-system
```
2. Ensure that it was installed correctly using the following command:

```bash
$ qemu-
```

### Node.js

1. The back-end of the project was built using Node.js so you need it installed, use the following commands:

```bash
# installs nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
# download and install Node.js
nvm install 20
```

2. Verify that Node and NPM are installed:

```bash
# installs nvm (Node Version Manager)
# verifies the right Node.js version is in the environment
node -v # should print `v20.14.0`
# verifies the right NPM version is in the environment
npm -v # should print `10.7.0`
```

## Verify that your cpu is able to us the virtualization:

1. Use the following command:

```bash
$ egrep -c vmx /proc/cpuinfo
```
The command should return a number, if it is greater than 0 it indicates the number of cores that are available to use in the virtualization, however if the number is 0, it means that we can’t create a virtual machine, so we have to go to the Bios configuration and enable the virtualization. 

## After downloading or using Git to copy this project:

1. Install the necessary dependencies in the project by the following command:


```bash
$ npm install
```
   
2. Put the ISO that you want to emulate into the ISO folder in the server-side folder of the project as seen in the following picture:

![alt text](https://github.com/mariohramirez/Proyecto-Final-SO/blob/main/Captura%20de%20pantalla%20de%202024-06-03%2022-38-04.png?w]raw=true)

3. Now start the app using the following command in the server side:

```bash
$ npm start
```

4. And use the following command in the client side:

```bash
$ npm start dev
```

5. Now you will be able to use the laboratory environment.
