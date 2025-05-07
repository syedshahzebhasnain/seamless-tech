import { useAccount } from 'wagmi'
import { AccountInfo } from './components/AccountInfo'
import { ConnectWallet } from './components/ConnectWallet'

function App() {

  const { address, isConnected } = useAccount()

    return (
      <>
        <AccountInfo />
        <ConnectWallet />
      </>
    )
}

export default App
