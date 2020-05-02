oak-cli
=======

test

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oak-cli.svg)](https://npmjs.org/package/oak-cli)
[![Downloads/week](https://img.shields.io/npm/dw/oak-cli.svg)](https://npmjs.org/package/oak-cli)
[![License](https://img.shields.io/npm/l/oak-cli.svg)](https://github.com/bentonam/oak-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g oak-cli
$ oak COMMAND
running command...
$ oak (-v|--version|version)
oak-cli/0.0.0 darwin-x64 node-v13.13.0
$ oak --help [COMMAND]
USAGE
  $ oak COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`oak hello [FILE]`](#oak-hello-file)
* [`oak help [COMMAND]`](#oak-help-command)
* [`oak index:analysis [FILE]`](#oak-indexanalysis-file)
* [`oak index:build [FILE]`](#oak-indexbuild-file)
* [`oak plugins`](#oak-plugins)
* [`oak plugins:install PLUGIN...`](#oak-pluginsinstall-plugin)
* [`oak plugins:link PLUGIN`](#oak-pluginslink-plugin)
* [`oak plugins:uninstall PLUGIN...`](#oak-pluginsuninstall-plugin)
* [`oak plugins:update`](#oak-pluginsupdate)
* [`oak query:analysis [FILE]`](#oak-queryanalysis-file)
* [`oak update [CHANNEL]`](#oak-update-channel)

## `oak hello [FILE]`

describe the command here

```
USAGE
  $ oak hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ oak hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/bentonam/oak-cli/blob/v0.0.0/src/commands/hello.ts)_

## `oak help [COMMAND]`

display help for oak

```
USAGE
  $ oak help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_

## `oak index:analysis [FILE]`

Index Analysis Command

```
USAGE
  $ oak index:analysis [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name of index to analyze

EXAMPLE
  $ oak index:analysis
```

_See code: [src/commands/index/analysis.ts](https://github.com/bentonam/oak-cli/blob/v0.0.0/src/commands/index/analysis.ts)_

## `oak index:build [FILE]`

Index Build Command

```
USAGE
  $ oak index:build [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name of index to build

EXAMPLE
  $ oak index:build
```

_See code: [src/commands/index/build.ts](https://github.com/bentonam/oak-cli/blob/v0.0.0/src/commands/index/build.ts)_

## `oak plugins`

list installed plugins

```
USAGE
  $ oak plugins

OPTIONS
  --core  show core plugins

EXAMPLE
  $ oak plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.7.9/src/commands/plugins/index.ts)_

## `oak plugins:install PLUGIN...`

installs a plugin into the CLI

```
USAGE
  $ oak plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  plugin to install

OPTIONS
  -f, --force    yarn install with force flag
  -h, --help     show CLI help
  -v, --verbose

DESCRIPTION
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command 
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in 
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ oak plugins:add

EXAMPLES
  $ oak plugins:install myplugin 
  $ oak plugins:install https://github.com/someuser/someplugin
  $ oak plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.7.9/src/commands/plugins/install.ts)_

## `oak plugins:link PLUGIN`

links a plugin into the CLI for development

```
USAGE
  $ oak plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

OPTIONS
  -h, --help     show CLI help
  -v, --verbose

DESCRIPTION
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello' 
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLE
  $ oak plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.7.9/src/commands/plugins/link.ts)_

## `oak plugins:uninstall PLUGIN...`

removes a plugin from the CLI

```
USAGE
  $ oak plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

OPTIONS
  -h, --help     show CLI help
  -v, --verbose

ALIASES
  $ oak plugins:unlink
  $ oak plugins:remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.7.9/src/commands/plugins/uninstall.ts)_

## `oak plugins:update`

update installed plugins

```
USAGE
  $ oak plugins:update

OPTIONS
  -h, --help     show CLI help
  -v, --verbose
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.7.9/src/commands/plugins/update.ts)_

## `oak query:analysis [FILE]`

Query Analysis Command

```
USAGE
  $ oak query:analysis [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name of query to analyze

EXAMPLE
  $ oak query:analysis
```

_See code: [src/commands/query/analysis.ts](https://github.com/bentonam/oak-cli/blob/v0.0.0/src/commands/query/analysis.ts)_

## `oak update [CHANNEL]`

update the oak CLI

```
USAGE
  $ oak update [CHANNEL]
```

_See code: [@oclif/plugin-update](https://github.com/oclif/plugin-update/blob/v1.3.9/src/commands/update.ts)_
<!-- commandsstop -->
