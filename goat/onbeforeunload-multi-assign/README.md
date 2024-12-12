# 测试页面内有onbeforeunload赋值的情况

| 用例                    | 是否测试通过 | 备注                   |
| ----------------------- | ------------ | ---------------------- |
| window.onbeforeunload   | ✅            | 直接赋值的形式         |
| window.addEventListener | ✅            | 以添加事件监听器的形式 |

