export default function Store(state) {
  state._subscribers = new Set();
  state.subscribe = (callback) => state._subscribers.add(callback);

  Object.keys(state).forEach((key) => {
    let _value = state[key];

    Object.defineProperty(state, key, {
      get() {
        return _value;
      },

      set(value) {
        if (_value === value) return;
        if (JSON.stringify(_value) === JSON.stringify(value)) return;

        _value = value;
        // 구독한 메소드를 모두 실행시킨다.
        state._subscribers.forEach((fn) => fn());
      },
    });
  });

  return state;
}
