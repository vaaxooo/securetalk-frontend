<template>
    <Nuxt v-if="!loading" />
</template>
<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      accounts: [],
      loading: true
    }
  },
  async mounted() {
    if(!localStorage.getItem('user')) {
      this.$router.push('/')
      return
    }

    const user = JSON.parse(this.$decryptHash(localStorage.getItem('user')))

    if (!user) {
      this.$router.push('/')
      return
    }

    try {
      const accounts = await this.$web3.eth.getAccounts()

      if (accounts.length < 1 || user.address !== accounts[0]) {
        localStorage.removeItem('user')
        this.$router.push('/')
        return
      }

      const balance = await this.$web3.eth.getBalance(user.address)
      user.balance = this.$web3.utils.fromWei(balance, 'ether')

        const transactions = await this.$web3.eth.getTransactionCount(user.address)
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
  methods: {
    ...mapActions(['setUser']),
  }
}
</script>