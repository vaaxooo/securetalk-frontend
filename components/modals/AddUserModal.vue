<template>
    <div class="modal fade show" id="addUserOrGroupModal" tabindex="-1" aria-labelledby="addUserOrGroupModalLabel" aria-modal="true" role="dialog" style="display: block;">
        <div class="modal-overlay"></div>
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header modal-header-flush">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closeModal"></button>
                </div>
                <div class="modal-body">
                    <div class="text-center">
                        <h5 class="modal-title" id="addUserOrGroupModalLabel">Start New Chat</h5>
                        <p>Enter an address (or .eth name) below to start a new chat</p>
                        <span id="newchatstatus" v-if="Object.entries(foundUser).length > 0">
                            <i class="bi bi-arrow-right"></i> Click to Chat with <a href="#" :title="foundUser.address">{{ foundUser.address }}</a><br>
                        </span>
                        <span id="newchatstatus" v-else></span>
                        <span id="newchatstatus" class="mb-1 text-danger" v-if="foundError">
                            <i class="bi bi-arrow-right"></i> No user found with this address
                        </span>
                        <br>
                    </div>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control form-control-lg" id="newAddressToStartChat" placeholder="e.g. 0x... or yourname.eth" v-model="recipient">
                        <button class="btn border" type="button" id="button-addon2 ">
                            <i class="bi bi-qr-code-scan" onclick="opencamera()"></i>
                        </button>
                    </div>
                    <button type="button" class="btn btn-lg btn-primary w-100" @click="searchUser">
                        <i class="bi bi-chat-text me-1"></i>Start Chatting
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AddUserModal',
    data() {
        return {
            foundUser: [],
            foundError: false,
            recipient: '',
        }
    },
    computed: {
        user() {
            return this.$store.state.user
        }
    },
    methods: {

        searchUser() {
            try {
                this.foundError = false
                this.$socket.emit('dialogs:addUser', this.$encryptHash({
                    address: this.user.address,
                    recipient: this.recipient
                }))
                this.$socket.on('dialogs:addUser', (response) => {
                    response = this.$decryptHash(response)
                    if (response.success) {
                        this.foundUser = response.data
                        this.foundUser.address = this.recipient
                    } else {
                        this.foundError = true
                    }
                    this.recipient = ''
                })
            } catch (error) {
                console.log(error)
            }
        },

        closeModal() {
            this.$nuxt.$emit('close-modal')
            this.$emit('close-modal');
        }

    }
}
</script>