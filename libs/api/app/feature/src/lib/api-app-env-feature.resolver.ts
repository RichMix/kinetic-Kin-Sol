import { AppEnv } from '@kin-kinetic/api/app/data-access'
import { ApiCoreDataAccessService } from '@kin-kinetic/api/core/data-access'
import { Wallet } from '@kin-kinetic/api/wallet/data-access'
import { Args, Mutation, Parent, ResolveField, Resolver } from '@nestjs/graphql'

@Resolver(() => AppEnv)
export class ApiAppEnvFeatureResolver {
  constructor(private readonly service: ApiCoreDataAccessService) {}

  @ResolveField(() => String, { nullable: true })
  key(@Parent() appEnv: AppEnv) {
    return this.service.getAppKey(appEnv?.name, appEnv?.app?.index)
  }
  @ResolveField(() => [Wallet], { nullable: true })
  wallets(@Parent() appEnv: AppEnv) {
    return appEnv.wallets
  }

  @Mutation(() => AppEnv, { nullable: true })
  userAppEnvAddAllowedIp(@Args('appEnvId') appEnvId: string, @Args('ip') ip: string) {
    return this.service.userAppEnvAddAllowedIp(appEnvId, ip)
  }

  @Mutation(() => AppEnv, { nullable: true })
  userAppEnvRemoveAllowedIp(@Args('appEnvId') appEnvId: string, @Args('ip') ip: string) {
    return this.service.userAppEnvRemoveAllowedIp(appEnvId, ip)
  }

  @Mutation(() => AppEnv, { nullable: true })
  userAppEnvAddBlockedIp(@Args('appEnvId') appEnvId: string, @Args('ip') ip: string) {
    return this.service.userAppEnvAddBlockedIp(appEnvId, ip)
  }

  @Mutation(() => AppEnv, { nullable: true })
  userAppEnvRemoveBlockedIp(@Args('appEnvId') appEnvId: string, @Args('ip') ip: string) {
    return this.service.userAppEnvRemoveBlockedIp(appEnvId, ip)
  }

  @Mutation(() => AppEnv, { nullable: true })
  userAppEnvAddAllowedUa(@Args('appEnvId') appEnvId: string, @Args('ua') ua: string) {
    return this.service.userAppEnvAddAllowedUa(appEnvId, ua)
  }

  @Mutation(() => AppEnv, { nullable: true })
  userAppEnvRemoveAllowedUa(@Args('appEnvId') appEnvId: string, @Args('ua') ua: string) {
    return this.service.userAppEnvRemoveAllowedUa(appEnvId, ua)
  }

  @Mutation(() => AppEnv, { nullable: true })
  userAppEnvAddBlockedUa(@Args('appEnvId') appEnvId: string, @Args('ua') ua: string) {
    return this.service.userAppEnvAddBlockedUa(appEnvId, ua)
  }

  @Mutation(() => AppEnv, { nullable: true })
  userAppEnvRemoveBlockedUa(@Args('appEnvId') appEnvId: string, @Args('ua') ua: string) {
    return this.service.userAppEnvRemoveBlockedUa(appEnvId, ua)
  }
}
