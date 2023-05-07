import EventEmitter from 'eventemitter3';

export default class MarkerDispatcher extends EventEmitter {
  constructor(gmapInstance) {
    super();
    this.gmapInstance = gmapInstance;
  }

  // getChildren() {
  //  return this.gmapInstance.props.children;
  // }
  getChildren() {
  if (
    this.gmapInstance &&
    this.gmapInstance.props &&
    this.gmapInstance.props.children
    )   {
      return this.gmapInstance.props.children;
    }

    return undefined;
  }

  getMousePosition() {
    return this.gmapInstance.mouse_;
  }

  getUpdateCounter() {
    return this.gmapInstance.updateCounter_;
  }

  dispose() {
    this.gmapInstance = null;
    this.removeAllListeners();
  }
}
