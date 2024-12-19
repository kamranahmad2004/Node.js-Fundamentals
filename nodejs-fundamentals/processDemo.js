console.log(process.version)    // Displays the Node.js version in use.
console.log(process.arch)
// argv - CLI
console.log(process.argv[3])

// process.env
console.log(process.env.USERNAME)

// pid - node.js process id
console.log(process.pid)

// cwd - current working directory
console.log(process.cwd())

// title - node.js process
console.log(process.title)


console.log(process.memoryUsage())
console.log(process.availableMemory())
console.log(process.uptime())   // uptime of process - time to run command of script executing..


// this event is triggered when process exits
process.on('exit', (code) => {
    console.log(`Process exited with code ${code}`)
})

process.exit(0)
console.log('hello')    // not log because we exit process 0 - success,  1- error