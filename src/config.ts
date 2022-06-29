// sequelize配置
export const sequelizeOptions = {
  host: 'localhost',
  user: 'root',
  password: '123456',
  port: 3306,
  database: 'test',
  models: [`${__dirname}/modules/**/Model/*{.ts,.js}`], // 数据库模板存放地址
};
