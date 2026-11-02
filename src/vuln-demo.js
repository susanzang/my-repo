/**
 * ⚠️ 演示专用：本文件【故意】包含一处命令注入漏洞，用于演示 CodeQL 告警
 * 与 Copilot Autofix 的修复能力。不要在生产代码中复用。
 *
 * 预期告警：js/code-injection —— 未校验的用户输入直接拼进 shell 命令。
 */
import { exec } from "node:child_process";

export function listFiles(userInput) {
  // DEMO: 用户输入未经清洗即拼入命令，存在命令注入风险
  return new Promise((resolve, reject) => {
    exec(`ls ${userInput}`, (err, stdout, stderr) => {
      if (err) reject(err);
      else resolve(stdout || stderr);
    });
  });
}
