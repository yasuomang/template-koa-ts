import path from 'path';
import { loadControllers } from 'koa-router-ts';

const router = loadControllers(path.resolve(__dirname, '../modules'), {
  recurse: true,
});

router.prefix('/api/v1');

export default router;
