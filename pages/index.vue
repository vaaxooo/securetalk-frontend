<template>
    <main id="content" role="main" class="flex-shrink-0 pt-6 pb-7">
      <div class="container">
          <!-- Info Cards -->
          <div class="row justify-content-center">
              <div class="col-md-9 col-lg-6 col-xl-5">
                  <div class="text-center mb-4">
                      <h1 class="h3 fw-bold">Login to SecureTalk</h1>
                      <p class="fs-5">Connect with your web3 based wallet and sign-in</p>
                  </div>
                  <div class="text-center mb-3">
                      <span id="maintitlemessage"></span>
                      <br>
                  </div>
                  <div id="defaultstart">

                    <ul>
                        <li v-for="account in accounts" :key="account">Connected {{ account }}</li>
                    </ul>


                      <!-- MetaMask -->
                      <button class="d-flex text-dark shadow border rounded-xl bg-white bg-light--hover transition-all p-3 mb-2" href="#" @click="authenticateMetaMask">
                          <div class="me-3">
                              <span class="d-flex align-items-center justify-content-center bg-light shadow rounded-circle p-1" style="width: 4rem; height: 4rem;">
                                  <img width="40" src="/assets/img/metamask.svg" alt="MetaMask Logo">
                              </span>
                          </div>
                          <div>
                              <div class="d-flex">
                                  <h2 class="h5 fw-bold">MetaMask </h2>
                                  <div class="ms-2" id="connectwalletlabel" style="display: block;">
                                      <span class="badge border shadow text-primary fw-medium">Connect Wallet</span>
                                  </div>
                              </div>
                              <p class="text-muted mb-0">Connect using a browser plugin or mobile app. Best supported on Chrome or Firefox.</p>
                          </div>
                      </button>
                      <!-- End MetaMask -->

                      <br>
                      <div class="text-center px-4 px-sm-5">
                          <p class="text-muted small">By connecting your wallet and signing a message, you agree to Blockscan's <a class="link-muted text-decoration-underline" href="https://blockscan.com/terms">Term’s &amp; Conditions</a> and <a class="link-muted text-decoration-underline" href="https://blockscan.com/privacyPolicy">Privacy Policy</a></p>
                      </div>
                  </div>
              </div>
          </div>
          <!-- End Info Cards -->


      </div>
    </main>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  auth: 'guest',
  data() {
    return {
      accounts: []
    }
  },
  mounted() {
    this.getAccounts()
    if (localStorage.getItem('user')) {
      this.$router.push('/dialogs')
    }
  },
  computed: {
    ...mapState(['user']),
  },
  methods: {
    ...mapActions(['setUser']),
async authenticateMetaMask() {
  try {
    // Check if MetaMask is installed
    if (!window.ethereum) {
      console.error('MetaMask is not installed or not enabled')
      return
    }

    // Request authorization from the user
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })

    // Get the authorized account address
    const address = accounts[0]

    // Perform additional actions after successful authorization
    console.log('Successfully authenticated with MetaMask')

    this.$socket.emit('account:login', this.$encryptHash({ address: address }))
    this.$socket.on('account:login', (data) => {
      let response = this.$decryptHash(data)
      if (response.success) {
        this.$socket.emit('account:setOnline', this.$encryptHash({ address: address }))
        response.user.is_online = true
        this.setUser(response.user)

        localStorage.setItem('user', this.$encryptHash(JSON.stringify(response.user)))
        this.$router.push('/dialogs')
      } else {
        this.$toast.error(response.message)
      }
    })
    return
  } catch (error) {
    alert("You need to connect your wallet to continue.")
    console.error('Failed to authenticate with MetaMask')
  }
},

    async getAccounts() {
      try {
        const accounts = await this.$web3.eth.getAccounts()
        this.accounts = accounts
      } catch (error) {
        console.error('Failed to get accounts:', error)
      }
    }
  }
}
</script>


