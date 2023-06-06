import Web3 from 'web3'

export default ({ app }, inject) => {
    // Check if MetaMask is installed
    if (typeof window.ethereum !== 'undefined') {
        // Inject Web3 instance into Vue components as $web3
        const web3 = new Web3(window.ethereum)
        inject('web3', web3)
    } else {
        console.error('MetaMask is not installed')
        const dummyWeb3 = new Web3()
        inject('web3', dummyWeb3)
    }
}