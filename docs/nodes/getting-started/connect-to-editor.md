---
sidebar_position: 3
slug: /getting-started/connect-to-editor
id: "nodes-getting_started-connect_to_editor"
title: Connect to Editor
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import connectNodesVid from '../img/connect_nodes.mp4'

# Connect to Editor

이 문서에서는 Nodes Project를 직접 실행 시켜볼 수 있는 환경 구축 방법에 대해 서술합니다.

:::info
Nodes 개발환경을 구축하지 않았다면 [Make Project](./make_project.md) 문서를 따른 후 진행해 주시기 바랍니다.
:::

## In Nodes Projects

아래의 명령어를 통해 [Nodes Project](./make_project.md)와 [Fabrica Editor](/design)를 연동하기 위해서 localhost에서 정보를 받아올수 있도록 서버를 열어야 합니다.

```bash
npm start
```

:::note
서버의 기본 PORT는 `3000` 입니다.<br/>
만약 PORT를 바꾸고 싶다면 아래의 명령을 통해 지정된 PORT로 바꿀 수 있습니다.
<Tabs>
<TabItem value="win" label="Window">

```bash
set PORT=3001 && npm start
```

</TabItem>
<TabItem value="li" label="Linux/Mac">

```bash
PORT=3001 npm start
```

</TabItem>
</Tabs>
:::

## In Fabrica Editor

Nodes Server를 Fabrica Editor와 연동하는 절차입니다.<br/>
아래의 안내 영상에 따라 진행해주시기 바랍니다.

1. **[Design Express - Fabrica Editor](https://x.nexivil.com/editor/edit/untitled)**에 접속합니다.

1. 우측 상단 `nodes` 메뉴를 클릭합니다.

1. 위젯 상단 Nodes 드롭 다운 메뉴를 클릭 하고 `Develop` 메뉴를 클릭합니다.

1. Nodes Extension을 설치 합니다.

1. textbox에 `@user/<node_name>:3000`를 입력하고 엔터를 누릅니다.

<video controls>
  <source src={connectNodesVid}/>
</video>
