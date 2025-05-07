import { useAccount, useDisconnect } from 'wagmi'

export function AccountInfo() {
  const account = useAccount()
  const { disconnect } = useDisconnect()


  return (
    <div>
      <h2>Account</h2>
      <div>
        status: {account.status}
        <br />
        addresses: {JSON.stringify(account.addresses)}
        <br />
        chainId: {account.chainId}
      </div>

      {account.status === 'connected' && (
        <button onClick={() => disconnect()}>Disconnect</button>
      )}
    </div>
  )
}