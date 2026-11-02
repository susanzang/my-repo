# my-repo

青竹课堂 · 《大模型与智能体》示例仓库（由 CodeBuddy 通过 GitHub MCP 创建）。

![CI](https://github.com/susanzang/my-repo/actions/workflows/ci.yml/badge.svg)

## 说明

- 用于演示 GitHub MCP 的仓库 / Issue / PR 能力
- 用于演示 **GitHub Actions 自动测试 + 缺陷修复闭环**
- 默认分支：`main`

## 项目结构

```
.
├── .github/workflows/ci.yml   # GitHub Actions：push / PR 自动跑单测
├── src/sum.js                 # 被测函数
├── test/sum.test.js           # 单元测试（node:test，零依赖）
├── docs/course-intro.md       # 课程简介（见 PR #3）
└── package.json
```

## 自动测试闭环演示

| 运行 | 提交 | 内容 | 结果 |
|---|---|---|---|
| [#1](https://github.com/susanzang/my-repo/actions/runs/41407656802) | `63dbf65` | `sum()` 误写成 `a - b` | ❌ 失败（3 个用例全红） |
| [#2](https://github.com/susanzang/my-repo/actions/runs/41407711027) | `77a6c96` | 修正为 `a + b` | ✅ 通过（3 passed） |

链路：`push → Actions 触发 → npm test 失败 → 定位缺陷 → 提交修复 → Actions 重跑通过`。

## 本地运行

```bash
npm test
```

无需安装依赖，使用 Node.js 内置测试运行器（Node ≥ 18）。

## 自动化能力清单

| 能力 | 配置 | 状态 |
|---|---|---|
| 单元测试 | `.github/workflows/ci.yml` | ✅ 已启用 |
| 依赖自动升级 | `.github/dependabot.yml`（npm + GitHub Actions，每周一） | ✅ 已启用 |
| 代码安全扫描 | `.github/workflows/codeql.yml`（security-and-quality，push/PR/每周） | ✅ 已启用 |
| AI 自动修复 PR | Copilot Autofix / coding agent | ⬜ 需订阅后开启 |
| PR 自动评审 | Copilot code review | ⬜ 需订阅后开启 |
| 覆盖率门禁 | `c8` 或 `node --experimental-test-coverage` | ⬜ 待接入 |

### 安全扫描演示

`src/vuln-demo.js` **故意**包含一处命令注入漏洞（用户输入直接拼进 `exec`），
用于演示 CodeQL 在 Security 页生成告警、以及 Copilot Autofix 一键给出修复补丁的流程。
该文件未被任何代码引用，不影响测试；正式使用时请删除。
