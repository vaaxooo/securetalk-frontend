<template>
  <Nuxt v-if="!loading" />
</template>

<script>
import { mapActions } from 'vuex'
import Web3 from 'web3'

export default {
  data() {
    return {
      accounts: [],
      loading: true
    }
  },

  created() {
    this.loadData()
  },

  methods: {
    ...mapActions(['setUser']),

    async loadData() {
      const user = JSON.parse(this.$decryptHash(localStorage.getItem('user')))

      if (!user) {
        this.redirectToHome()
        return
      }

      try {
        let web3Provider

        if (typeof window.ethereum !== 'undefined') {
          // Web3 провайдер доступен
          web3Provider = window.ethereum
          // Запрашиваем разрешение на доступ к аккаунтам пользователя
          await window.ethereum.enable()
        } else {
          // Web3 провайдер не доступен
          // Обработка ситуации, когда Web3 не поддерживается на мобильных устройствах
          // Предоставьте альтернативные способы взаимодействия с Ethereum-сетью на мобильных устройствах
        }

        const web3 = new Web3(web3Provider)
        const accounts = await web3.eth.getAccounts()

        if (accounts.length < 1 || user.address !== accounts[0]) {
          localStorage.removeItem('user')
          this.redirectToHome()
          return
        }

        const balance = await web3.eth.getBalance(user.address)
        const transactions = await web3.eth.getTransactionCount(user.address)

        user.balance = web3.utils.fromWei(balance, 'ether')
        user.transactions = transactions

        this.setUser(user)
        this.accounts = accounts
      } catch (error) {
        console.error('Failed to load accounts or balance:', error)
        // Handle the error appropriately
      } finally {
        this.loading = false
      }
    },

    redirectToHome() {
      this.$router.push('/')
    }
  }
}
</script>
