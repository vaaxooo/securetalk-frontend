<template>
  <div class="modal fade show" id="userprofileModal" tabindex="-1" aria-labelledby="userprofileModalLabel" aria-modal="true" role="dialog" style="display: block;">
    <div class="modal-overlay"></div>
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header modal-header-flush">
          <h5 class="modal-title" id="userprofileModalLabel">My Profile</h5>
          <span id="profilestatus"></span>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closeModal"></button>
        </div>

        <div class="modal-body">
          <div class="border rounded text-break p-2 my-2">
            <div class="text-muted">Address</div>
            <span id="profileAddress">
              <i class="bi bi-person-circle d-none d-sm-inline-block"></i>
              <a :href="'https://sepolia.etherscan.io/address/' + user.address" title="View in Etherscan" target="_blank">
                <span class="text-break">{{ user.address }}</span>
                <i class="bi bi-box-arrow-up-right ms-1"></i>
              </a>
            </span>
          </div>
          <input type="text" id="qrcodeprofile" style="display: none">
          <div class="d-flex gap-2 mb-2">
            <div class="w-100 border rounded p-2">
              <div class="text-muted">Balance</div>
              <span id="profileinfo_1">{{ parseFloat(user.balance).toFixed(8) }} Eth</span>
            </div>
            <div class="w-100 border rounded p-2">
              <div class="text-muted">Txns Sent</div>
              <span id="profileinfo_2">{{ user.transactions }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserProfileModal',
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    closeModal() {
      this.$nuxt.$emit('close-modal');
      this.$emit('close-modal')
    },
  },
};
</script>
