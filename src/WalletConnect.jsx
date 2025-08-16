import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

const WalletConnect = ({ onConnect }) => {
  const [walletAddress, setWalletAddress] = useState(null);

  useEffect(() => {
    // On reload, forget any connection state
    setWalletAddress(null);
  }, []);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        setWalletAddress(address);
        onConnect(address);
      } catch (error) {
        console.error("User rejected connection", error);
      }
    } else {
      alert("MetaMask not found. Please install MetaMask.");
    }
  };

  const disconnectWallet = () => {
    setWalletAddress(null);
    onConnect(null);
  };

  return (
    <div className="text-center">
      {!walletAddress ? (
        <button
          onClick={connectWallet}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Connect Wallet
        </button>
      ) : (
        <div>
          <p className="text-gray-600 mb-2">Connected: {walletAddress}</p>
          <button
            onClick={disconnectWallet}
            className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            Disconnect Wallet
          </button>
        </div>
      )}
    </div>
  );
};

export default WalletConnect;
