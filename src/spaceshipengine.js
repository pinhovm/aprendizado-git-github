export default class {
  constructor(spaceship){
    this.spaceship = spaceship
  }

  turnOn(){
    this.checkCurrentCharge().then(currentCharge=> {
      console.log(`${this.spaceship.name} is good to go, current charge is ${currentCharge}%`)
    }).catch(currentCharge => {
      console.log(`${this.spaceship.name} is not good to go, current charge is ${currentCharge}%`)
    })
  }

  checkCurrentCharge(){
    return new Promise((resolve, reject) => {
      let currentCharge = this.spaceship.currentPercentageCharge();
      if(currentCharge>=30){
        resolve(currentCharge)
      }else{
        reject(currentCharge)
      }
    })
  }
}