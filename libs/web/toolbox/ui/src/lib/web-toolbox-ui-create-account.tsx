import { useToast } from '@chakra-ui/react'
import { Keypair } from '@kin-kinetic/keypair'
import { KineticSdk, Transaction } from '@kin-kinetic/sdk'
import { Button, ButtonGroup } from '@saas-ui/react'
import { useState } from 'react'
import { WebToolboxUiCard } from './web-toolbox-ui-card'

export function WebToolboxUiCreateAccount({
  finished,
  keypair,
  sdk,
}: {
  finished: () => void
  keypair: Keypair
  sdk: KineticSdk
}) {
  const toast = useToast()
  const [error, setError] = useState<unknown | undefined>()
  const [loading, setLoading] = useState<boolean>(false)
  const [response, setResponse] = useState<Transaction | undefined>()

  function createAccount() {
    setResponse(undefined)
    setError(undefined)
    setLoading(true)

    sdk
      .createAccount({ owner: keypair, referenceType: 'Toolbox Create' })
      .then((res) => {
        setResponse(res)
        if (res.errors?.length) {
          setError(res.errors)
        }
        setLoading(false)
      })
      .catch((err) => {
        setError(err)
        setLoading(false)
        toast({
          title: 'Error',
          description: err.message,
          status: 'error',
        })
      })
  }

  return (
    <WebToolboxUiCard
      response={response}
      error={error}
      finished={finished}
      sdk={sdk}
      signature={response?.signature ? response?.signature : undefined}
    >
      <ButtonGroup>
        <Button variant="primary" isLoading={loading} size="lg" onClick={createAccount}>
          Create Token Account
        </Button>
        {response?.status && (
          <Button size="lg" disabled={true}>
            {response?.status}
          </Button>
        )}
      </ButtonGroup>
    </WebToolboxUiCard>
  )
}
