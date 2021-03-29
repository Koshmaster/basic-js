const chainMaker = {
    arr: [],

    getLength() {
        return this.arr.length
  },

    addLink(value) {
        this.arr.push(`( ${value} )`)
        return this
  },

    removeLink(position) {
        if (position < 1 || this.getLength() < position || !Number.isInteger(position)) {
            this.arr = []
            throw Error();
        }
        this.arr.splice(position - 1, 1)
        return this
      
  },

    reverseChain() {
        this.arr.reverse()
        return this
  },

    finishChain() {
        let result = this.arr.join('~~')
        this.arr.splice(0, this.arr.length)
        return result
  }

};

module.exports = chainMaker;
