import {Command, flags} from '@oclif/command'

export default class QueryAnalysis extends Command {
  static description = 'Query Analysis Command'

  static examples = [
    `$ oak query:analysis`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name of query to analyze'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(QueryAnalysis)

    const name = flags.name || 'world'
    this.log(`analysis ${name} from ./src/commands/query/analysis.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
