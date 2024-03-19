import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class UserResolver {
  @Query(() => String)
  getUserInfo() {
    return '사용자 정보입니다.';
  }
}
