import { Store } from '../core/Store.js';
import { setInheritance } from '../utils/manuplateDom.js';

export default function RootStore($element) {
  Store.call(this, $element);
}
setInheritance({ parent: Store, child: RootStore });
