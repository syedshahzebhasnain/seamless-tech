import { useConnect } from 'wagmi'

export function ConnectWallet() {
  const { connectors, connect, status, error } = useConnect()

  const isConnecting = status === 'pending'

  return (
    <div>
      <h2>Select a Wallet to Connect</h2>

      {connectors.map((connector) => (
        <button
          key={connector.id}
          onClick={() => connect({ connector })}
          disabled={isConnecting}
        >
          {isConnecting ? `Connecting to ${connector.name}...` : `Connect with ${connector.name}`}
        </button>
      ))}

      {error && <div>{error.message}</div>}
    </div>
  )
}
