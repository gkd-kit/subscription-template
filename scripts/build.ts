import { updateDist } from '@gkd-kit/tools';
import process from 'node:process';
import subscription from './check';

const distDir = process.cwd() + '/dist';
await updateDist(subscription, distDir);
