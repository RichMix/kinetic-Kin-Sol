import { ApiAppDataAccessModule } from '@kin-kinetic/api/app/data-access'
import { ApiCoreDataAccessModule } from '@kin-kinetic/api/core/data-access'
import { ApiTransactionDataAccessModule } from '@kin-kinetic/api/transaction/data-access'
import { Test } from '@nestjs/testing'
import { ApiAccountDataAccessService } from './api-account-data-access.service'

describe('ApiAccountDataAccessService', () => {
  let service: ApiAccountDataAccessService

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [ApiAppDataAccessModule, ApiCoreDataAccessModule, ApiTransactionDataAccessModule],
      providers: [ApiAccountDataAccessService],
    }).compile()

    service = module.get(ApiAccountDataAccessService)
  })

  it('should be defined', () => {
    expect(service).toBeTruthy()
  })
})
