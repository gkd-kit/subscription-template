# subscription-template

GKD 订阅模板, 此仓库方便您直接构建自己订阅, 点击右上角 [Use this template](https://github.com/new?template_name=subscription-template&template_owner=gkd-kit) 即可使用

## 配置环境

请安装最新版 nodejs 和 pnpm 运行, 以及使用 vscode 打开项目

> [!IMPORTANT]
> 选择器需要使用 nodejs@22 的 WasmGc 来校验 Java/Kotlin 正则表达式, 确保使用 nodejs>=22

- nodejs>=**22** <https://nodejs.org/en/download>
- pnpm>=9 <https://pnpm.io/zh/installation>
- vscode <https://code.visualstudio.com>

安装好后使用模板, 假设您刚刚使用 `Use this template` 创建的仓库是 `https://github.com/username/subscription`

接下来下载并初始化环境

```shell
git clone https://github.com/username/subscription
cd subscription
pnpm install
```

如果因为网络问题安装失败, 将上面的 `pnpm install` 换成下面命令使用 阿里镜像源 重新安装即可

```sh
pnpm install --registry=https://registry.npmmirror.com
```

![image](https://e.gkd.li/33bb6379-2fae-4139-abc3-6250a287ad84)

至此环境已在 `subscription` 目录下初始化完毕, 使用 vscode 打开目录即可开始开发

接下来下面所有的示例链接都基于 `username/subscription`, 请自行替换后打开

`pnpm install` 用于安装依赖, 如果您的 [./package.json](./package.json) 发生变化, 则需要再次运行 `pnpm install`

---

如果您无法初始化 nodejs 环境, 那可以直接使用 github 网页编辑文件后在线提交, 点击下面链接即可在线编辑

<https://github.com/username/subscription/edit/main/src/subscription.ts>

![image](https://e.gkd.li/bb539a50-cbdb-4fec-8a93-4a9c5d067de0)

## 目录结构

- 订阅详情 [./src/subscription.ts](./src/subscription.ts)
- 全局规则 [./src/globalGroups.ts](./src/globalGroups.ts)
- 规则分类 [./src/categories.ts](./src/categories.ts)
- 应用规则 [./src/apps](./src/apps/)

在 vscode 内使用鼠标悬浮在任意字段上即可查看注释说明, 也可在 <https://gkd.li/api> 搜索查看

![image](https://e.gkd.li/3b3c8b14-f7f4-46ee-90dc-b69b9233f993)

现在您可编辑 [./src](./src/) 下的文件来自定义您的订阅, 构建后的订阅文件处于 [./dist](./dist/) 目录下

另外您必须修改 订阅详情 [./src/subscription.ts](./src/subscription.ts) 下的 id 字段, 否则可能会和其它订阅冲突, 填一个较大的随机数字即可

可以在 github 查找下方代码块 ([快捷链接](https://github.com/search?q=export+default+defineGkdSubscription%28%7B+++id%3A+&type=code)), 查看您的订阅id是否跟已有项目重复

```ts
export default defineGkdSubscription({
  id:
```

## 格式修复

我们使用 [prettier](https://github.com/prettier/prettier) 来格式化代码 和 [eslint](https://github.com/eslint/eslint) 来检测并修复代码错误

同时使用 [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks) 在您提交代码时运行格式化和代码检测修复脚本

当您的代码存在错误时, 它会阻止您提交代码并输出具体错误以供您手动修复后再次提交

当提交代码到仓库时, 我们也需要使用 github actions 来帮助自动格式化并修复代码, 因此您需要开启仓库的此项权限

打开 <https://github.com/username/subscription/settings/actions>

然后找到 Workflow permissions 点击 Read and write permissions 然后点击下方的 Save 即可

![image](https://e.gkd.li/89dd8c22-f3f0-4331-a3d1-03d466dcc3d6)

## 构建订阅

我们需要将 [./src](./src/) 分散的文件合并为一个 gkd.json5 的最终订阅文件并输出到 [./dist](./dist/) 目录下

推荐使用 github actions 进行构建, 在 [./.github/workflows](./.github/workflows) 下有 3 个工作流

我们使用其中的 `build_release.yml` 构建并发布

打开 <https://github.com/username/subscription/actions/workflows/build_release.yml>

然后点击右侧的 `Run workflow` 即可运行并发布

![image](https://e.gkd.li/ab202786-d56d-4dba-a5ee-03190aafb6e6)

构建后订阅将输出到 dist 目录下, gkd.json 的文件订阅地址如下, 复制后到 GKD 添加即可

```txt
https://raw.githubusercontent.com/username/subscription/main/dist/gkd.json5
```

## 镜像加速

raw.githubusercontent.com 在大陆的访问常常无法访问

您可以换成 <https://fastly.jsdelivr.net/gh/username/subscription@main/dist/gkd.json5> 加速访问

如果无法访问 raw.githubusercontent.com 和 fastly.jsdelivr.net

您可以将本仓库的构建产物发布到 cloudflare Pages 上, 然后通过 cloudflare 加速访问

您需要先使用 github 登录 <https://dash.cloudflare.com>, 然后在左边菜单栏依次选择 **Build** --> **Compute** --> **Workers & Pages** , 接着点击页面右上角 **Create application**

![1](https://e.gkd.li/6d11b8ef-bef3-4582-8aa7-0c1b1535e2f5)

接着选择创建 Pages

![2](https://e.gkd.li/47ab6768-d363-49c2-98a2-e5eb82e58391)

导入一个现有的Git仓库

![3](https://e.gkd.li/376bbbf5-4e85-4f04-9e5c-c4a5a51ff469)

选择您的GKD订阅仓库, 如果仓库未显示, 点击跳转到github授权访问您的gkd订阅仓库。保存授权后会跳转回cloudflare, 重新走一遍前面的流程。

![4](https://e.gkd.li/c16fc2a3-fd14-4ec8-866b-77d36c58692d)

![5](https://e.gkd.li/9566ea89-0772-4332-ad7c-17ad5d55ef08)

前面选好仓库后, 下一步接着填您的项目名和订阅文件路径

项目名可以改成 `gkd-subscription-xxxx` 其中 `xxxx` 是订阅的 id 或者随机字母数字, 总之不冲突就行

![6](https://e.gkd.li/b59fa5f2-e7bb-40d8-8855-b1a847fdc397)

填完后保存并部署, 等待部署完回到 **Workers & Pages** 页

![7](https://e.gkd.li/64d0d6de-e11d-433d-8f87-3e6849f755be)

这时您会得到一个网址 `gkd-subscription-233.pages.dev`, 加上前缀后缀就得到的镜像加速链接如下 (链接仅供参考)

```txt
https://gkd-subscription-233.pages.dev/gkd.json5
```

## 自定义配置文件

注意: **大多数情况下, 你不需要自定义, 使用默认配置时, 下面此节教程无需了解**

你可以在 [./package.json](./package.json) 下添加 gkd 属性配置自定义构建选项

```json
{
  "gkd": {
    "outDir": "dist",
    "file": "gkd.json5",
    "versionFile": "gkd.version.json5",
    "changelog": "CHANGELOG.md",
    "README.md": "README.md"
  }
}
```

这个 gkd 属性的类型如下

```ts
/**
 * @default package.json.gkd
 */
type GkdConfig = {
  /**
   * @default 'dist'
   */
  outDir?: string;
  /**
   * @default 'gkd.json5'
   */
  file?: string;
  /**
   * @default 'gkd.version.json5'
   */
  versionFile?: string;
  /**
   * @default 'CHANGELOG.md'
   */
  changelog?: string;
  /**
   * @default 'README.md'
   */
  readme?: string;
};
```

如果不想写配置文件, 也可以将这个参数直接传递给 `@gkd-kit/tools` 的 `updateDist` 函数

手动传递参数的时候, 你必须显式将路径(非文件名)参数传递给 [./.github/workflows/build_release.yml](./.github/workflows/build_release.yml) 下的 `updatePkgVersion` 和 `stdoutGkdVersion` 函数
