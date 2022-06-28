import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import router from './routes';
import cors from '@koa/cors';
import { logger } from './logger';
import { InitSequelize } from './ORM';
import { sequelizeOptions } from './config';

// 初始化 Koa 应用实例
const app = new Koa();

// 注册中间件
app.use(cors());
app.use(bodyParser());
app.use(logger());

// 响应用户请求
app.use(router.routes()).use(router.allowedMethods());

// 初始化 ORM
new InitSequelize(sequelizeOptions).register();

// 运行服务器
app.listen(3000);
