---
sidebar_position: 2
slug: /getting-started/cowork_design
id: "design-getting_started-cowork_design"
title: Cowork Design
---

import gituiVid from '../img/design_git_ui.mp4'

# Cowork Design

대부분의 개발자들은 같은 코드 베이스에서 다른 개발자들과 협업을 할 때 [Git](https://git-scm.com/)을 통해 코드 관리를 해서 발생할 수 있는 충돌을 방지하고 협업을 용의하게 합니다. <br />

`Design`도 `Git`과 같은 협업툴을 제공합니다. 먼저 `Branch`의 개념을 설명하겠습니다.

`Branch`는 기본 `Design`의 복사본이며 독립적인 작업공간의 명칭입니다. 이를 사용하면 여러명이서 같은 `Design`을 작업할 수 있으며, 작업이 완료된 `Branch`들을 병합해서 하나의 `Branch`로 만들 수 있습니다. 

:::note
`Design`을 처음 생성하면 기본적으로 `master`라는 `Branch`가 생깁니다.
:::


<video controls>
  <source src={gituiVid}/>
</video>

## Current Branch

위 영상을 보면 `Current Branch`는 `Commit`, `History`로 구성되어 있습니다.

### Commit

`Commit`은 `Design`의 변경 이력을 저장하는 작업입니다. 각각의 `Commit`은 고유한 hash와 메세지, 변경 내용, 시간, 작업자 등 정보들이 로컬 저장소에 저장되며, 이렇게 저장된 `Commit`들은 변경 이력을 추적하고, 이전 상태로 되돌리거나 다른 `Branch`들과 병합할 때 활용할 수 있습니다. 

그리고 하얀 박스 UI를 통해 원격 저장소랑 로컬 저장소의 변경 이력 차이를 알 수 있고 동기화 할 수 있습니다.


### History

`History`는 현재 `Branch`의 `Commit` 내역들을 보여줍니다.

## Branch List

이 공간은 현재 `Design`이 가지고 있는 `Branch`와 각 `Branch`의 원격 저장소 유무 그리고 `Branch` 생성과 삭제를 할 수 있습니다.


