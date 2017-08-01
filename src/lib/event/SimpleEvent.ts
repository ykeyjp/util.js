export type EventFunctionType = (e: any) => void;

export interface IFunctionMap {
  [key: string]: EventFunctionType[];
}

export default class SimpleEvent {
  public events: IFunctionMap = {};

  public on(type: string, fn: EventFunctionType): void {
    if (Array.isArray(this.events[type])) {
      this.events[type].push(fn);
    } else {
      this.events[type] = [fn];
    }
  }

  public off(type: string, fn: null | EventFunctionType = null): void {
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

  public trigger(type: string, data: any = null): void {
    if (Array.isArray(this.events[type])) {
      this.events[type].forEach(fn => fn(data));
    }
  }

  public reset(): void {
    this.events = {};
  }
}
