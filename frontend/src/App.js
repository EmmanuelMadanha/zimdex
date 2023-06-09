import { NavLink, Route, Routes, HashRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import './css/APP.css';

import Swap from "./pages/Swap/Swap.js";
import Pool from "./pages/Pool/Pool.js";
import Portfolio from "./pages/Portfolio/Portfolio.js";
import Bills from "./pages/Bills/Bills.js";
import Orders from "./pages/Orders/Orders.js";
import HeaderConnectWallet from "./components/HeaderConnectWallet.js";
import {getTokens} from "./components/Ethereum.js"

function App() {
  const [provider, setProvider] = useState(undefined);
  const [signer, setSigner] = useState(undefined);
  const [signerAddr, setSignerAddr] = useState(undefined);
  const [tokens, setTokens] = useState([{name:"ETH", address:undefined}]);

  useEffect(() => {
    const onLoad = async () => {
      const provider = await new ethers.providers.Web3Provider(window.ethereum);
      setProvider(provider);
      const tokens = getTokens();
      setTokens(tokens);
    }
    onLoad();
  }, []);

  const getSigner = async provider =>{
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    setSigner(signer);
    signer.getAddress()
      .then(address => {
        setSignerAddr(address);
      });
  }

  const isConnected = () => signer !== undefined;

  return (
    <HashRouter>
      <nav className="navbar navbar-expand-md bg-dark text-white">
        <div className="container-fluid">
          <span className="navbar-brand text-white" style={{margin:"0 12px"}} >
            <img alt={`Superswap logo`} src={[require(`./images/zim.jpg`)]}  style={{margin: "0 12px", width: "40px"}} />
          </span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item"><NavLink className="menu-link" to=""  >Exchange</NavLink></li>
              <li className="nav-item"><NavLink className="menu-link" to="pool">Pool</NavLink></li>
              <li className="nav-item"><NavLink className="menu-link" to="portfolio">Assets</NavLink></li>
              <li className="nav-item"><NavLink className="menu-link" to="bills">Bills</NavLink></li>
              <li className="nav-item"><NavLink className="menu-link" to="orders">Orders</NavLink></li>
            </ul>
          </div>

          <HeaderConnectWallet 
            isConnected={isConnected} 
            signerAddr={signerAddr}
            getSigner={getSigner}
            provider={provider} />
  
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Swap tokens={tokens} isConnected={isConnected} signerAddr={signerAddr} signer={signer} getSigner={getSigner} provider={provider}/>} />
        <Route path="/pool" element={<Pool tokens={tokens} isConnected={isConnected} signerAddr={signerAddr} signer={signer} getSigner={getSigner} provider={provider} />} />
        <Route path="/portfolio" element={<Portfolio tokens={tokens} isConnected={isConnected} signerAddr={signerAddr} signer={signer} getSigner={getSigner} provider={provider} />} />
        <Route path="/bills" element={<Bills tokens={tokens} isConnected={isConnected} signerAddr={signerAddr} signer={signer} getSigner={getSigner} provider={provider} />} />
        <Route path="/orders" element={<Orders tokens={tokens} isConnected={isConnected} signerAddr={signerAddr} signer={signer} getSigner={getSigner} provider={provider} />} />
        <Route path="*" element={<Swap tokens={tokens} isConnected={isConnected} signerAddr={signerAddr} signer={signer} getSigner={getSigner} provider={provider}/>} />
      </Routes>

    </HashRouter>
  );
}

export default App;
