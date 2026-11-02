/**
 * ⚠️ 演示专用：本文件【故意】包含一处命令注入漏洞，用于演示 CodeQL 告警
 * 与 Copilot Autofix 的修复能力。不要在生产代码中复用。
 *
 * 预期告警：js/code-injection
 * 数据流：HTTP 请求路径 req.url → 字符串拼接 → child_process.exec
 */
import { exec } from "node:child_process";
import http from "node:http";

export function handle(req, res) {
  // DEMO: req.url 是外部可控输入，未做校验即拼入 shell 命令
  exec(`ls ${req.url}`, (err, stdout, stderr) => {
    res.statusCode = err ? 500 : 200;
    res.end(stdout || stderr || (err ? String(err) : ""));
  });
}

// 该服务不会在测试中启动，仅用于让静态分析识别出真实数据流
export function startDemoServer(port = 8099) {
  return http.createServer(handle).listen(port);
}
