import { Context } from 'koa';
import UserDetailsModel from '../Model/UserDetails';

export default class UserDetailsService {
  public static async getUserDetails(ctx: Context) {
    return await UserDetailsModel.findAll();
  }
}
