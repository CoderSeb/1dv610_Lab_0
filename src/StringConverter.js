class StringConverter {
  #theName

  constructor() {
    this.#theName = ''
  }

  setName(theName) {
    this.#theName = theName
  }

  getName() {
    return this.#theName
  }

  getHex() {
    let hexArray = []
    for (let i = 0; i < this.#theName.length; i++) {
      const byteValue = Number(this.#theName.charCodeAt(i))
      hexArray.push(byteValue.toString(16))
    }
    return hexArray.join('')
  }

  getBinary() {
    const letters = this.#theName.split('')
    const binaryArray = []
    letters.map(character => {
      binaryArray.push(character.charCodeAt(0).toString(2))
    })
    return binaryArray.join(' ')
  }
}

export default StringConverter