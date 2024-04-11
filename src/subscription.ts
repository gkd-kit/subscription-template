import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 233,
  name: 'Subscription',
  version: 0,
  author: 'author',
  updateUrl: 'https://gkd.li/',
  checkUpdateUrl: 'https://gkd.li/',
  supportUri: 'https://gkd.li/',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
