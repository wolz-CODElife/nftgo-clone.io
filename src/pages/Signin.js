import React from 'react';
import { SigninForm } from './styles/SigninStyle';

const Signin = () => {
  return (
      <SigninForm>
          <div className="title">
            <h1>Connect your wallet</h1>
            <p>Connect your wallet and know everything about NFT👉</p>
          </div>
          <div className="wallets">
              <button>
                  <img src="https://i.postimg.cc/C1v3V2Zp/image.png" alt="Meta Mask" />
                  <h2>MetaMask</h2>
              </button>
              <button>
                  <img src="https://i.postimg.cc/tChHs2wW/image.png" alt="Meta Mask" />
                  <h2>Wallet Connect</h2>
              </button>
              <button>
                  <img src="https://i.postimg.cc/PxBBxwMS/image.png" alt="Meta Mask" />
                  <h2>Coinbase Wallet</h2>
              </button>
              <a href="https://metamask.io/download" target="_blank" rel="noopener noreferrer">I don't have a wallet</a>
          </div>
      </SigninForm>
  );
};

export default Signin;
