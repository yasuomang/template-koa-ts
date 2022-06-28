import { Context } from 'koa';
import { Controller, Get } from 'koa-router-ts';
import response from '@/utils/response';
import UserDetailsService from '../Service/UserDetails';

@Controller('/user')
export class UserDetails {
  @Get('/')
  async testFindAll(ctx: Context) {
    await UserDetailsService.getUserDetails(ctx)
      .then((data) => {
        return response.succeed(ctx, data);
      })
      .catch(() => {
        return response.failed(ctx);
      });
  }
}
