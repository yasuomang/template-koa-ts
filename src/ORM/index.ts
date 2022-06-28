import { Sequelize } from 'sequelize-typescript';

interface InitSequelizeOption {
  host: string;
  user: string;
  password: string;
  port: number;
  database: string;
  models: string[];
}

export class InitSequelize {
  public sequelize: Sequelize;
  constructor(options: InitSequelizeOption) {
    const { database, user, password, host, port, models } = options;
    this.sequelize = new Sequelize(database, user, password, {
      host,
      port,
      dialect: 'mysql',
      pool: {
        max: 5, // 连接池最大链接数量
        min: 0, // 最小连接数量
        idle: 10000, // 如果一个线程10秒内没有被使用的话，就释放连接池
      },
      define: {
        underscored: true, // 字段以下划线（_）来分割（默认是驼峰命名风格）
        charset: 'utf8mb4', // 字符集
      },
      models,
    });
  }
  public async register() {
    // 由model自动创建table
    await this.sequelize.sync({ force: false });
    await this.sequelize
      .authenticate()
      .then(() => {
        console.log('sequelize链接成功');
      })
      .catch(() => {
        console.log('sequelize链接失败');
      });
  }
}
