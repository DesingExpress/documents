---
sidebar_position: 2
slug: /getting-started/make-project
id: "nodes-getting_started-make_project"
title: Make Project
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Make Project

이 문서에서는 `자동` / `수동`으로 Nodes 개발환경을 구축하는 방법에 대해 서술합니다.

:::tip
**[Quick Started](../default.md#quick-started)**를 통해 빠르게 테스트 해볼 수 있습니다.
:::

## Requirements

- [Node.js](https://nodejs.org/) version 14 또는 그 이상 (터미널에서 `node -v` 명령을 통해 확인)

## Use Automatic Script

Nodes의 개발환경을 구축하는 가장 쉬운 방법은 자동화 스크립트를 사용하는 것입니다.

프로젝트를 생성하고 싶은 폴더에서 아래의 명령을 실행시킵니다.

```bash
npx @design-express/create-node <project-name>
```

그럼 개발환경이 눈깜짝할 사이에 구축이 됩니다.

## Own your self

이미 Nodes프로젝트를 만들었거나 수동으로 구축하고 싶은 경우 아래의 진행을 따라가세요.

### 1. `package.json` 생성

프로젝트 Root 폴더에 `pakcage.json`이 없다면 아래의 명령을 실행하세요.<br/>
만약 파일이 존재한다면 건너뛰셔도 좋습니다.

```bash
npm init
```

:::caution
`packageName`은 반드시 `@<user_slug>/<nodes_name>`로 구성되어야 합니다.<br/>
`packageName`은 추후에 변경가능합니다.
:::

### 2. `pakcage.json` 구성

아래의 항목을 `package.json`에 추가 해주세요.

```json
{ ...
  "files": ["build"],
  "scripts": {
    "start": "node-scripts start",
    "build": "node-scripts build",
    "pack": "node-scripts pack",
    "publish": "node-scripts publish",
    "docs": "node-scripts docs",
    "setuser": "node-scripts setUser"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  ...
}
```

### 3. Install Dependecies

Nodes를 개발하기 위한 의존성 Packages를 설치 합니다.

#### Required

```bash
npm install @design-express/node-scripts @design-express/fabrica
```

#### Optional (Development UI Component Nodes)

```bash
npm install @mui/material@5.11 @mui/icons-material@5.11 @types/react@18
```

### 4. webpack.config.js 생성

프로젝트의 Root 폴더에 `webpack.config.js`을 생성하고 아래의 코드를 작성합니다.
<Tabs>
<TabItem value="win" label="Window">

```bash
type nul > .\webpack.config.js
```

</TabItem>
<TabItem value="li" label="Linux/Mac">

```bash
touch ./webpack.config.js
```

</TabItem>
</Tabs>

```js title="/<nodes_name>/webpack.config.js"
module.exports = (config, env) => {
  return config;
};
```

### 5. Source 폴더 생성

프로젝트의 Root폴더에 src/nodes 폴더와 src/shared폴더를 생성합니다.
<Tabs>
<TabItem value="win" label="Window">

```bash
mkdir -p .\src\nodes
mkdir -p .\src\shared
```

</TabItem>
<TabItem value="li" label="Linux/Mac">

```bash
mkdir -p ./src/nodes
mkdir -p ./src/shared
```

</TabItem>
</Tabs>

### 6. Node source file 생성

src/nodes 폴더에 첫 Node 파일을 생성합니다.
<Tabs>
<TabItem value="win" label="Window">

```bash
type nul > .\src\nodes\+Node.js
```

</TabItem>
<TabItem value="li" label="Linux/Mac">

```bash
touch ./src/nodes/+Node.js
```

</TabItem>
</Tabs>

:::caution
[Design Express Fabrica](/design)가 Node에 접근하기 위해서는 파일명이 `+<file_name>.js`의 패턴으로 작성되어야 합니다.<br/>
자세한 내용은 [Create Node](./create_node.md#filename-pattern) 문서를 확인해주시기 바랍니다.
:::

### Project Structure

최종 폴더 구조입니다.

```
my-nodes
├── src
│   ├── nodes
│   │   └── +Node.js
│   └── shared <optional>
│       └── index.js
├── webpack.config.js
├── package.json
├── README.md <optional>
└── package-lock.json
```

<!-- * `files` : Nodes를 배포할때 포함할 files의 경로
* `scripts` : Nodes를 실행 또는 배포 등을 하기 위한 스크립트 실행 명령 정의
  * `start` -->
