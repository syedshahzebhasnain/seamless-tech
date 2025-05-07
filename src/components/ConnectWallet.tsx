import { useConnect } from 'wagmi'

export function ConnectWallet() {
  const { connectors, connect, status, error } = useConnect()

  return (
    <div>
      <h2>Connect</h2>
      {connectors.map((connector) => (
        <button
          key={connector.uid}
          onClick={() => connect({ connector })}
        >
          {connector.name}
        </button>
      ))}
      <div>{status}</div>
      <div>{error?.message}</div>
    </div>
  )
}