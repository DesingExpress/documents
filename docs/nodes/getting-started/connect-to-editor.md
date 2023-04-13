---
sidebar_position: 3
slug: /getting-started/connect-to-editor
id: "nodes-getting_started-connect_to_editor"
title: Connect to Editor
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Connect to Editor

이 문서에서는 Nodes Project를 직접 실행 시켜볼 수 있는 환경 구축 방법에 대해 서술합니다.

:::info
Nodes 개발환경을 구축하지 않았다면 [Make Project](./make_project.md) 문서를 따른 후 진행해 주시기 바랍니다.
:::

## In Nodes Projects

아래의 명령어를 통해 Nodes Project와 Fabrica Editor를 연동하기위해서 localhost에서 정보를 받아올수 있도록 서버를 열어야 합니다.

```bash
npm start
```

:::info
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
