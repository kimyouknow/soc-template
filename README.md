# 관심사를 분리하자! Seprate of Concerns

### 아키텍처의 핵심

관심사항을 분리하는 것이 좋다. `Separation of concerns` = SOC software

어떤 그룹을 지을지, 어떻게 묶을지

코드는 testable해야하는데 모델과 뷰를 구분해야 테스트하기가 용이함.

## 목표

패턴을 맹신하지말아라. 디자인 패턴이 분명 도움이 되지만, 맹목적으로 따라갈 필요 없이 나만의 디자인 패턴을 고민하는 과정이 더 중요하다.

# 고민

1. 뷰를 기준으로 컴포넌트를 나눔

- 하나의 컴포넌트 안에서 state, template, eventhandler를 모두 관리
- 가능은 한데, 컴포넌트 안에 계층적 구조(자식 컴포넌트가 있을 때) 너무 커짐.

2. 이벤트 리스너 분리

- 단순히 파일만 나누는 흐름이 되어버림
- 여전히 내부 로직은 복잡함

3. 상태관리 로직을 변경

- 컴포넌트마다 store를 둬서 관리하기, store와 컴포넌트는 서로를 모르게만들기
- `getState()`: store의 전체 state나 필요한 state만 전달
- `setState()`: 상태가 바뀌면 state를 변경하고 연결되어 있는 $element.render()실행

4. 서버에서 오는 상태는 어떻게 처리할거니

- store에 `requestDataToServer()`로 store가 init하자마자 실행해서 템플릿이 렌더링되기 전에 초기 값 세팅
- 초기 렌더링이 아닌 이후 이벤트나 다른 함수에 의해 서버에 데이터를 요청할 경우 `setState()`를 실행

5. 전역 상태는 어떻게 처리할거니

- rootstore는 전역 상태의 store가 아님. 그냥 root와 같은 층에 있는 store요소일 뿐, 하위 요소에서 rootstore로 바로 접근할 수 없고, rootStore도 하위 요소로 상태를 바로 전달할 수 없다.

6. 배열 길이만큼 자식을 렌더링할 때, 배열의 바뀐 요소만 반영해서 전체자식이 아닌 상태가 바뀐 자식만 리렌더링하고 싶음.

# 원하는 흐름

![store](https://user-images.githubusercontent.com/71386219/160060277-f922ff85-81a2-47e4-9b37-973475d0647f.jpg)

# 템플릿 코드

```js
// core/Store.js
export function Store($element) {
  this.$element = $element;
  this.state = {};
  this.init();
}

Store.prototype.init = function () {
  this.requestDataToServer();
};

Store.prototype.requestDataToServer = function () {};

Store.prototype.getState = function (keys) {
  if (!keys) return this.state;
  return this.state;
  // this.state에 있는 요소 중 key에 해당하는 요소들
  // return {...요청한 state들};
};
Store.prototype.setState = function (newState) {
  this.state = { ...this.state, ...newState };
  console.log(newState);
  this.$element.render();
};

// core/HtmlElement.js
export function HtmlElement($element) {
  this.$element = $element;
  this.store;
  this.state;
}

HtmlElement.prototype.init = function (store) {
  this.store = store;
  this.render();
  this.setEvent();
};

HtmlElement.prototype.setTemplate = function () {
  return ``;
};

HtmlElement.prototype.renderChild = function () {};

HtmlElement.prototype.render = function () {
  const args = this.store.getState();
  this.state = {
    ...args,
  };
  this.$element.innerHTML = this.setTemplate();
  this.renderChild();
};

HtmlElement.prototype.setEvent = function () {};
```
