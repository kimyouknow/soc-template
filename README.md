# 관심사를 분리하자! Seprate of Concerns

### 아키텍처의 핵심

관심사항을 분리하는 것이 좋다. `Separation of concerns` = SOC software

어떤 그룹을 지을지, 어떻게 묶을지

코드는 testable해야하는데 모델과 뷰를 구분해야 테스트하기가 용이함.

## 목표

패턴을 맹신하지말아라. 디자인 패턴이 분명 도움이 되지만, 맹목적으로 따라갈 필요 없이 나만의 디자인 패턴을 고민하는 과정이 더 중요하다.

## MVC에 대한 이야기들

### 좋은 방법

- 뷰가 변경된다면?
- 데이터가 변경된다면?

### M

- 데이터의 상태를 저장하고 변경
- 전달만하는 역할은 아님.
- 중간 저장소? 같은 걸 만들어서, 중간 저장소에 잠깐 데이터를 보관했다가 중간 저장소를 먼저 찾아보고 없으면 컨트롤로에서 서버로 데이터 요청하는 방법도 있다.

### V

- 렌더링
- 어떤 이벤트가 있는지

### C

- 이벤트 핸들러
- m과 v의 연결고리! 딱 거기까지 , 세부적인 기능이나 함수들은 분리해도 됨.

## utils

다른 서비스에서도 사용할 수 있는 것들을 모아두기

## 객체 (class, prototype)

모범적으로는 여러 개를 만들 때가 유용함.

상속을 써서 컴포넌트 구조를 만들면

### 믹스인

함수형 프로그래밍의 기법

# 고민

1. 뷰를 기준으로 컴포넌트를 나눔

- 하나의 컴포넌트 안에서 state, template, eventhandler를 모두 관리
- 가능은 한데, 컴포넌트 안에 계층적 구조(자식 컴포넌트가 있을 때) 너무 커짐.

2. 이벤트 리스너 분리

- 단순히 파일만 나누는 흐름이 되어버림
- 여전히 내부 로직은 복잡함

3. 상태관리 로직을 변경

- 컴포넌트마다 store를 둬서 관리하기

4. 서버에서 오는 상태는 어떻게 처리할거니

5. 전역 상태는 어떻게 처리할거니

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
