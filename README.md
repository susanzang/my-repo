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

## 可继续扩展的自动化能力

| 能力 | 接入方式 |
|---|---|
| 依赖漏洞自动修复 | 启用 Dependabot（`.github/dependabot.yml`） |
| 代码安全扫描 + AI 修复建议 | 启用 CodeQL 默认配置，配合 Copilot Autofix |
| PR 自动评审 | 启用 Copilot code review |
| Issue 自动改代码 | 将 Issue 分派给 Copilot coding agent |
| 覆盖率门禁 | 增加 `c8` / `node --experimental-test-coverage` 并设阈值 |
