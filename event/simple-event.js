class SimpleEvent {
  constructor() {
    /**
     * @type {{[key:string]: function[]}}
     */
    this.events = {};
  }

  /**
   * @param {string} type
   * @param {function} fn
   */
  on(type, fn) {
    if (Array.isArray(this.events[type])) {
      this.events[type].push(fn);
    } else {
      this.events[type] = [fn];
    }
  }

  /**
   * @param {string} type
   * @param {function} fn
   */
  off(type, fn) {
    if (!this.events[type]) {
      return;
    }
    if (fn) {
      const index = this.events[type].indexOf(fn);
      if (index === -1) {
        return;
      }
      this.events[type].splice(index, 1);
    } else {
      delete this.events[type];
    }
  }

  /**
   * @param {string} type
   * @param {any} data
   */
  trigger(type, data) {
    if (Array.isArray(this.events[type])) {
      this.events[type].forEach(fn => fn(data));
    }
  }

  reset() {
    this.events = {};
  }
}

module.exports = SimpleEvent;
