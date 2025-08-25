import { readFileSync, existsSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

const CONFIG_DIR = join(__dirname, '../../');

const env = process.env.NODE_ENV || 'development';
const configPath = join(CONFIG_DIR, `${env}.yml`);

if (!existsSync(configPath)) {
  throw new Error(`Config file not found: ${configPath}`);
}

export default () => {
  const config = yaml.load(readFileSync(configPath, 'utf8')) as Record<
    string,
    any
  >;
  return config as EnvConfig;
};
