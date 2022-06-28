import { Table, Column, DataType, Model } from 'sequelize-typescript';

@Table({
  tableName: 'user_details', // 表名称
  underscored: true, // 使用下划线
  timestamps: true, // 是否自动生成创建以及更新时间字段
  indexes: [
    // 索引
    {
      unique: false, // 是否唯一
      fields: ['name'],
    },
  ],
})
export default class UserDetails extends Model<UserDetails> {
  @Column({
    type: DataType.UUID, // 类型
    defaultValue: DataType.UUIDV4, // 默认值
    primaryKey: true, // 是否主键
  })
  id!: string; // id 字段

  @Column({
    type: DataType.STRING(255),
    comment: '名称', // 描述
  })
  name!: string;

  @Column({
    type: DataType.STRING(20),
    comment: '性别',
  })
  gender!: string;

  @Column({
    type: DataType.INTEGER,
    comment: '年龄',
  })
  age: number;

  @Column({
    comment: '出身年月',
  })
  birth_date: Date;

  @Column({
    type: DataType.STRING(255),
    comment: '家庭地址',
  })
  address!: string;

  @Column({
    type: DataType.INTEGER,
    comment: '手机号码',
  })
  phone_number: number;

  @Column({
    type: DataType.STRING(50),
    comment: '邮箱',
  })
  email!: string;

  @Column({
    type: DataType.STRING(125),
    comment: '职业',
  })
  occupation!: string;

  @Column({
    type: DataType.STRING(255),
    comment: '公司',
  })
  company!: string;

  @Column({
    type: DataType.STRING(1024),
    comment: '爱好',
  })
  hobby!: string;
}
