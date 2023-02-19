const axios = require('axios');

class SpeakersService {

  constructor({serviceRegistryURL, serviceVersionIdentifier}){
    this.serviceRegistryURL = serviceRegistryURL
    this.serviceVersionIdentifier = serviceVersionIdentifier
  }

  async getImages(path) {
    const { ip, port } = await this.getService('speakers-service')
    console.log(`http://${ip}:${port}/images/${path}`)
    return this.callService({
      method: 'get',
      responseType: 'stream ',
      url: `http://${ip}:${port}/images/${path}`
    })
  }

  async getNames() {
    return await this.speakersService('names')
  }

  async getListShort() {
    return await this.speakersService('list-short')
  }

  async getList() {
    return await this.speakersService('list')
  }

  async getAllArtwork() {
    return await this.speakersService('artwork')
  }

  async getSpeaker(shortname) {
    return await this.speakersService(`speaker/${shortname}`)
  }

  async getArtworkForSpeaker(shortname) {
    return await this.speakersService(`artwork/${shortname}`)
  }

  async callService(requestOptions){
    const response = await axios(requestOptions)

    return response.data
  }

  async getService(serviceName) {
    const response = await axios.get(`${this.serviceRegistryURL}/find/${serviceName}/${this.serviceVersionIdentifier}`)

    return response.data
  }

  async speakersService(routeName){
    const { ip, port } = await this.getService('speakers-service')

    return this.callService({
      method: 'get',
      url: `http://${ip}:${port}/${routeName}`
    })
  }
}

module.exports = SpeakersService;
