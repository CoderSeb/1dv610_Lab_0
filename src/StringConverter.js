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
}

export default StringConverter