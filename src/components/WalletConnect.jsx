// client/src/components/WalletConnect.jsx

import React, { useState, useEffect } from 'react'
import { ethers } from 'ethers'

const WalletConnect = ({ onConnect }) => {
  const [account, setAccount] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Reconnect if already authorized
    const checkConnection = async () => {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' })
        if (accounts.length > 0) {
          setAccount(accounts[0])
          onConnect(accounts[0])
        }
      }
    }
    checkConnection()
  }, [onConnect])

  const connectWallet = async () => {
    if (!window.ethereum) {
      setError('MetaMask not found. Install it and reload.')
      return
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum)
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
      const address = accounts[0]

      // Sign a message to prove ownership
      const signer = await provider.getSigner()
      const message = `Login to Alexandria Review at ${new Date().toISOString()}`
      await signer.signMessage(message)

      setAccount(address)
      onConnect(address)
    } catch (err) {
      console.error(err)
      setError('Connection failed or user rejected request.')
    }
  }

  return (
    <div className="mt-4">
      {account ? (
        <p className="text-green-700">✅ Connected: {account.slice(0, 6)}...{account.slice(-4)}</p>
      ) : (
        <button
          onClick={connectWallet}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-xl shadow"
        >
          Connect Wallet
        </button>
      )}
      {error && <p className="text-red-600 mt-2">{error}</p>}
    </div>
  )
}

export default WalletConnect
