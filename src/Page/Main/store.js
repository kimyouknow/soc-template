import Store from '../../core/Store.js';
import { fetchData } from '../../utils/fetchData.js';

Store.prototype.requestDataToServer = async function () {
  const { mockObj, mockArr } = await fetchData('/Mock/mockServer.json');
  this.setState({ ...this.state, ...mockObj, mockArr });
};

const mainState = {
  clientState: '클라이언트에서만 쓰는 state',
  mockArr: [],
};

const mainStore = new Store(mainState);

await mainStore.init();

export default mainStore;
