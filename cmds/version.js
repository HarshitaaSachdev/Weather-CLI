import packageJson from '../package.json' assert { type: 'json' };

export default (args) => {
  console.log(`v${packageJson.version}`);
};
