---
sidebar_position: 3
slug: /getting-started/create-node
id: "nodes-getting_started-create_node"
title: Create Node
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create Node

이 문서에서는 Node에 대한 개발 방법에 대해 서술합니다.

:::info
Nodes 개발환경을 구축하지 않았다면 [Make Project](./make_project.md) 문서를 따른 후 진행해 주시기 바랍니다.
:::

## Path & Name Pattern

모든 Node의 소스코드 파일은 `src/nodes` 하위에 들어갑니다.<br/>
해당 디렉토리의 하위 깊이와는 상관없이 파일명 앞 `+`가 붙는 `js`파일은 모두 [Fabrica](/design)에서 접근 가능합니다.

```bash title="Example Pattern"
src/nodes/+mynode.js
src/nodes/depth1/+deepNode.js
src/nodes/depth1/depth2/../depthN/+deeeepNode.js
```

:::note
`src/nodes` 하위 파일은 패턴과 상관없이 해당 Nodes 프로젝트에서 `import` / `export`가 가능합니다.<br/>
다만 `+`가 붙은 파일에사 export한 Node만 [Fabrica](/design)에서 사용자가 접근을 할 수 없습니다.
:::

## Extend Class Type

Node의 확장 Class Type은 총 3가지가 있습니다.

- `Pure`
  - 순수 함수의 Node입니다.
  - Input Slot에서 받는 값이 이전과 동일하다면 Output 또한 동일합니다.
  - Fbrc Graph가 실행될때 딱 한번 실행됩니다.
  - 사용자가 `ImPure`로 전환할 수도 있습니다.
- `ImPure`
  - 비순수 함수의 Node입니다.
  - Input Slot에서 받는 값과 상관없이 외부 변수에 의해 Output이 변할 수 있습니다.
  - Node 내부에서 이벤트가 발생하거나 Event를 전달 받을때 마다 노드가 실행됩니다.
- `Raw`
  - 위 2가지가 아닌 Custom Node입니다.
  - 어떠한 클래스도 상속 받지 않기 때문에 자유롭게 만들 수 있습니다.
  - 내부적으로는 `ImPure`와 동일하게 취급합니다.

:::info
더 상세한 내용은 [Class Type](../category/types) 을 참고해주시기 바랍니다.
:::

## Create Pure Node

```js title="src/nodes/+Node.js"
import { Pure } from "@design-express/fabrica";

export class yourNode extends Pure {
  static path = "myNodes";
  static title = "myFirstNode";
  static description = "This is my first node!";

  constructor() {
    super();
    this.addInput("input", "number");
    this.addOutput("output", "number");
  }

  onExecute() {
    const _input = this.getInputData(1);
    this.setOutputData(1, _input + 1);
  }
}
```

## Create ImPure Node

```js title="src/nodes/+ImPureNode.js"
import { ImPure } from "@design-express/fabrica";

export class yourNode extends ImPure {
  static path = "myNodes";
  static title = "myImPureNode";
  static description = "This is my ImPure node!";

  constructor() {
    super({ in: true, out: true });
    this.addInput("input", "number");
    this.addOutput("output", "number");
    this.increaseValue = 0;
  }

  onExecute() {
    const _input = this.getInputData(1);
    this.setOutputData(1, _input + this.increaseValue);
    this.triggerSlot(0);

    this.increaseValue++;
  }
}
```
