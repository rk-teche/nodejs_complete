const semver = require('semver'); // The semantic versioner for npm

class ServiceRegistry {
    constructor(log){
        this.log = log
        this.services = {} // this object will have all the services
        this.timeout = 30 // it will expire services that haven't been seen for more than 30 seconds
    }

    register(name, version, ip, port){
        this.cleanup()
        const key = `${name}${version}${ip}${port}`

        if(!this.services[key]){
            this.services[key] = {};
            this.services[key].timestamp = Math.floor(new Date() / 1000) // this give us a unique time stamp
            this.services[key].ip = ip
            this.services[key].port = port
            this.services[key].name = name
            this.services[key].version = version

            this.log.debug(`Added services ${name}, version ${version} at ${ip}:${port}`)
            
            return key;
        }
        this.services[key].timestamp = Math.floor(new Date() / 1000) // updated time stamp
        this.log.debug(`Updated services ${name}, version ${version} at ${ip}:${port}`)
    }

    get(name, version){
        this.cleanup()
        const candidates = Object.values(this.services).filter(service => service.name === name && semver.satisfies(service.version, version))

        return candidates[Math.floor(Math.random()* candidates.length)] // return randam index
    }

    getAll(){
        return this.services
    }

    unregister(name, version, ip, port){
        const key = `${name}${version}${ip}${port}`
        delete this.services[key]
        this.log.debug(`Unregister services ${name}, version ${version} at ${ip}:${port}`)

        return key
    }

    cleanup(){
        const now = Math.floor(new Date() / 1000)
        Object.keys(this.services).forEach(key => {
            if(this.services[key].timestamp + this.timeout < now){
                delete this.services[key]
                this.log.debug(`Removed services ${key}`)
            }
        })
    }
}

module.exports = ServiceRegistry