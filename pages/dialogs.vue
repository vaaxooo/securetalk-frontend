<template>
    <main id="content" role="main" class="chat-ui-wrapper">
        <div class="chat-ui d-flex align-items-stretch" id="chatcontent">
            <!-- Left Panel -->
            <div id="listUserSearch" class="navbar-expand-lg">
  <div class="chat-ui-offcanvas offcanvas offcanvas-start d-flex flex-column h-100" tabindex="-1" :id="offcanvasId" :aria-labelledby="offcanvasLabelId" :style="offcanvasStyle" :aria-modal="isModal ? 'true' : 'false'" :role="isModal ? 'dialog' : ''">
                    <!-- Header (Left) -->
                    <div class="chat-ui-header d-flex align-items-center flex-shrink-0 p-3">
                         <a href="/start" class="link-dark" title="Return to Start"><i class="bi bi-house-door"></i></a>&nbsp;|&nbsp;  
                        <span class="fs-6">
                            
                            <a href="#" class="d-flex align-items-center link-dark fw-medium" title="View Profile" @click="modal = 'profile'">{{ $store.state.user.address.substring(0, 8) }}...{{ $store.state.user.address.substring($store.state.user.address.length - 6) }}</a>
                        </span>
                        <div class="d-flex align-items-center gap-1 ms-auto" id="usermenudiv">
                            

                            <button class="btn btn-sm btn-light rounded-circle" title="Chat with a new user" type="button" data-bs-toggle="modal" data-bs-target="#addUserOrGroupModal" id="btnchatwithnewuser" @click="modal = 'add_user_modal'">
                                <i class="bi bi-plus-lg"></i>
                            </button>
                            <div class="dropdown">
                                <button class="btn btn-sm btn-light rounded-circle" title="Options Menu" type="button" id="dropdownMenuOwnerOptions" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="0,10">
                                    <i class="bi bi-three-dots-vertical"></i>
                                </button>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuOwnerOptions">
                                    
                                    <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#userSettingsModal" onclick="getsettings()"><i class="bi bi-gear me-1"></i>Settings</a></li>
                                    <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#blockedUsersModalNew" onclick="getblockedusers()"><i class="bi bi-slash-circle me-1"></i>Blocked Users</a></li>
                                    <li>
                                        <hr class="dropdown-divider">
                                    </li>
                                    <li><a class="dropdown-item" href="/faq" target="_blank"><i class="bi bi-question-circle me-1"></i>FAQs</a></li>
                                    <li>
                                        <hr class="dropdown-divider">
                                    </li>
                                    
                                    <li><a class="dropdown-item text-danger" href="#" data-bs-toggle="modal" data-bs-target="#logOutModal" @click="logout"><i class="bi bi-box-arrow-left me-1"></i>Log out</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- End Header (Left) -->

                    <!-- Search -->
                    <div class="pt-2 px-3 pb-3">
                        <div class="position-relative">
                            <span class="d-flex align-items-center position-absolute top-0 bottom-0" title="Search" style="left: 0.75rem;">
                                <i class="bi bi-search text-muted"></i>
                            </span>
                            <input class="form-control rounded-pill search" type="search" placeholder="Search..." aria-label="Search..." style="padding-left: 2.2rem;" id="chatlistsearchinput">
                        </div>
                    </div>
                    <!-- End Search -->

                    <!-- Search Not Found -->
                    <div class="list-not-found text-center overflow-y-auto px-3 py-5" style="display: none">
                        <div class="d-flex justify-content-center align-items-center bg-primary-100 text-primary rounded-circle fs-4 mx-auto mb-3" style="width: 3.5rem; height: 3.5rem;">
                            <i class="bi bi-envelope-x"></i>
                        </div>
                        <p class="fs-5 fw-medium mb-1">No matches found!</p>
                        <p>The address list only shows existing chat rooms or conversations.</p>
                        <button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#addUserOrGroupModal">
                            <i class="bi bi-plus-lg me-1"></i>Start new conversations
                        </button>
                    </div>
                    <!-- End Search Not Found -->

                    <!-- Empty Content -->
                    
                    <!-- End Empty Content -->

                    <!-- Chat List -->
                    <center>
                        
                        
                    </center>
                    <div class="list list-group list-group-full-flush overflow-y-auto" role="tablist" aria-orientation="vertical" id="myList" style="display: block;" v-if="Object.entries(dialogs).length > 0">
                        <a href="#divstart" style="display: none" class="list-group-item list-group-item-action p-0" aria-current="true" id="list-divstart-list" data-isblocked="0" data-bs-toggle="pill" role="tab" aria-controls="v-pills-home" aria-selected="true" data-bs-target="#divstart">
                            <div class="d-flex align-items-center p-3"></div>
                        </a>
                        <Contact v-for="(dialog, index) in dialogs" :key="index" :dialog="dialog" @hideContacts="hideContacts" />
                    </div>

                    <div class="list list-group list-group-full-flush overflow-y-auto" role="tablist" aria-orientation="vertical" id="myList" style="display: block;" v-else>
                        <a href="#divstart" style="display: none" class="list-group-item list-group-item-action p-0" aria-current="true" id="list-divstart-list" data-isblocked="0" data-bs-toggle="pill" role="tab" aria-controls="v-pills-home" aria-selected="true" data-bs-target="#divstart">
                            <div class="d-flex align-items-center p-3"></div>
                        </a>
                        <!-- Message not found dialogs  -->
                        <div class="list-not-found text-center overflow-y-auto px-3 py-5" style="display: block;">
                        <div class="d-flex justify-content-center align-items-center bg-primary-100 text-primary rounded-circle fs-4 mx-auto mb-3" style="width: 3.5rem; height: 3.5rem;">
                            <i class="bi bi-envelope-x"></i>
                        </div>
                        <p class="fs-5 fw-medium mb-1">No matches found!</p>
                        <p>Maybe we can help you find the right contact for you</p>
                        <button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#addUserOrGroupModal" @click="modal = 'add_user_modal'">
                            <i class="bi bi-plus-lg me-1"></i>Start new conversations
                        </button>
                    </div>

                    </div>
                    <!-- End Chat List -->
                </div>
            </div>
            <!-- End Left Panel -->

            <!-- Right Panel -->
            <div class="tab-content d-flex flex-grow-1 border-lg-start" id="nav-tabContent" >

                <div id="divstart" class="js-chat-content tab-pane w-100 fade active show" role="tabpanel" aria-labelledby="v-pills-profile-tab" v-if="!chatIsOpen">
                    <div class="d-flex flex-column overflow-y-auto bg-light h-100 p-4 px-sm-5">
                        <div class="d-block d-lg-none text-center mb-3 mt-2">
                            <button class="btn p-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg">
                                <i class="bi bi-arrow-left-circle"></i>Show chat window
                            </button>
                        </div>
                        <div class="row justify-content-center my-auto">
                            <div class="col-md-8">
                                <img class="d-block mx-auto my-4" width="120" src="/assets/img/message.svg" alt="Message">
                                <div class="card shadow p-4 mb-2">
                                    <h1 class="h4 mb-3">Welcome to
                                        SecureTalk <sup><span class="badge bg-secondary ml-1">Beta</span></sup></h1>
                                    <p class="text-muted">Built for Etherscan users, SecureTalk is a messaging platform for users to simply and instantly message each other, wallet-to-wallet.</p>
                                    <p class="text-muted mb-0">Check out our <a class="link-muted text-decoration-underline" href="/faq" target="_blank">FAQs</a> for more details.</p>
                                </div>

                                <div class="card shadow p-4 mb-4">
                                    <div class="fw-medium mb-2"><font color="red"><i class="bi bi-exclamation-circle me-1"></i></font>Important!</div>
                                    <p class="text-muted mb-0">Never share your confidential information, passwords, private keys or seed phrases with ANYONE! Be extra careful when receiving any external links or online forms. Always keep an eye out for malicious parties in the Dark Forest 👀</p>
                                </div>

                                <div class="text-center">
                                    <button class="btn btn-lg btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#addUserOrGroupModal" @click="modal = 'add_user_modal'">
                                        <i class="bi bi-plus-lg me-1"></i>Start new conversation
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                

                 <Chat :chatId="chatId" v-else />
            </div>




            <!-- End Right Panel -->
        </div>

        <Modals-AddUserModal v-if="modal === 'add_user_modal'" @close-modal="handleModalClose" />
        <Modals-Profile v-if="modal === 'profile'"  @close-modal="handleModalClose" />

    </main>
</template>

<script>
export default {
    auth: false,
    layout: 'dialogs',
    data() {
        return {
            dialogs: [],

            chatId: null,
            chatIsOpen: false,
            dropdownMore: false,
            modal: '',

            offcanvasId: 'navbarOffcanvasLg',
            offcanvasLabelId: 'navbarOffcanvasLgLabel',
            offcanvasStyle: { visibility: 'visible' },
            originalOffcanvasStyle: { visibility: 'visible' },
            isModal: true // Замените на false, если это не модальное окно
        }
    },
    created() {
        this.unsubscribeEvents()
        this.subscribeEvents()
        this.fetchDialogs()
        this.checkChatIdQueryParam()
        this.subscribeToMessages()

        setInterval(() => {
            this.fetchDialogs()
        }, 10000)
    },
    mounted() {
        this.originalOffcanvasStyle = { ...this.offcanvasStyle };
    },
    computed: {
        user() {
            return this.$store.state.user;
        },
        queryParams() {
            return this.$route.query;
        }
    },
    watch: {
        '$route.query.chatId': {
            handler(val, oldVal) {
                this.chatIsOpen = true;
                this.chatId = val;
            },
            deep: true
        }
    },
    methods: {
        hideContacts() {
            this.offcanvasStyle = this.originalOffcanvasStyle;
        },

        handleModalClose() {
            this.modal = '';
        },

        async fetchDialogs() {
            try {
                this.$socket.emit('dialogs:getDialogs', this.$encryptHash({
                    address: this.user.address
                }));
                this.$socket.on('dialogs:getDialogs', (response) => {
                    const decryptedResponse = this.$decryptHash(response);
                    this.dialogs = decryptedResponse.success ? decryptedResponse.data : [];
                });
            } catch (e) {
                console.error(e);
            }
        },
        subscribeToMessages() {
            
            this.$socket.on('dialogs:newMessage', (response) => {
                const decryptedResponse = this.$decryptHash(response);
                if (decryptedResponse.success) {
                    const newMessage = decryptedResponse.data;
                    for(let i = 0; i < this.dialogs.length; i++) {
                        if (+this.dialogs[i].id === +newMessage.dialogId) {
                            this.dialogs[i].lastMessage = decryptedResponse.data;
                            if(+newMessage.sender !== +this.user.id) {
                                this.$playNotificationSound();
                                document.title = 'New Message!';
                            }
                            break;
                        }
                    }
                }
            });
        },
        unsubscribeEvents() {
            this.$nuxt.$off('close-dropdown-more', this.closeDropdownMore);
            this.$nuxt.$off('close-modal', this.closeModal);
        },
        subscribeEvents() {
            this.$nuxt.$on('close-dropdown-more', this.closeDropdownMore);
            this.$nuxt.$on('close-modal', this.closeModal);
        },
        closeDropdownMore() {
            this.dropdownMore = false;
        },
        closeModal() {
            this.modal = '';
        },
        checkChatIdQueryParam() {
            if (this.queryParams.chatId) {
                this.chatIsOpen = true;
                this.chatId = this.queryParams.chatId;
            }
        },
        openChat() {
            this.chatIsOpen = true;
        },
        closeChat() {
            this.chatIsOpen = false;
        },
        openModal() {
            this.modalOpened = true;
        },
        closeModal() {
            this.modalOpened = false;
        },
        logout() {
            localStorage.removeItem('user');
            this.$store.commit('setUser', null);
            this.$router.push('/');
        }
    }
}
</script>