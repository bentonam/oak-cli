import {Command, flags} from '@oclif/command'

export default class IndexBuild extends Command {
  static description = 'Index Build Command'

  static examples = [
    `$ oak index:build`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name of index to build'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(IndexBuild)

    const name = flags.name || 'world'
    this.log(`analysis ${name} from ./src/commands/index/build.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
