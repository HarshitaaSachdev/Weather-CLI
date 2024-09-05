import minimist from 'minimist';
import error from './utils/error.js';
export default async () => {
  const args = minimist(process.argv.slice(2));

  let cmd = args._[0] || 'help';

  if (args.version || args.v) {
    cmd = 'version';
  }

  if (args.help || args.h) {
    cmd = 'help';
  }

  switch (cmd) {
    case 'today':
      const today = await import('./cmds/today.js');
      today.default(args); // Assuming each module exports a default function
      break;

    case 'version':
      const version = await import('./cmds/version.js');
      version.default(args);
      break;

    case 'help':
      const help = await import('./cmds/help.js');
      help.default(args);
      break;

    case 'forecast':
      const forecast = await import('./cmds/forecast.js');
      forecast.default(args);
      break;

    default:
      error(`"${cmd}" is not a valid command!`);
      break;
  }
};
