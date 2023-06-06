<template>
    <div class="tab-content d-flex flex-grow-1 border-lg-start" id="nav-tabContent">

        <div id="divstart" class="js-chat-content tab-pane w-100 fade" role="tabpanel" aria-labelledby="v-pills-profile-tab">
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
                            <img width="28" src="/assets/img/blockscan-logo-symbol-dark.svg?v=0.1.2" alt="Blockscan Logo">
                                Blockscan Chat <sup><span class="badge bg-secondary ml-1">Beta</span></sup></h1>
                            <p class="text-muted">Built for Etherscan users, Blockscan Chat is a messaging platform for users to simply and instantly message each other, wallet-to-wallet.</p>
                            <p class="text-muted mb-0">Check out our <a class="link-muted text-decoration-underline" href="/faq" target="_blank">FAQs</a> for more details.</p>
                        </div>

                        <div class="card shadow p-4 mb-4">
                            <div class="fw-medium mb-2"><font color="red"><i class="bi bi-exclamation-circle me-1"></i></font>Important!</div>
                            <p class="text-muted mb-0">Never share your confidential information, passwords, private keys or seed phrases with ANYONE! Be extra careful when receiving any external links or online forms. Always keep an eye out for malicious parties in the Dark Forest 👀</p>
                        </div>

                        <div class="text-center">
                            <button class="btn btn-lg btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#addUserOrGroupModal" id="btnStartNewConversationMain">
                                <i class="bi bi-plus-lg me-1"></i>Start new conversation
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tab-pane w-100 fade active show" role="tabpanel" aria-labelledby="v-pills-profile-tab" id="v-pills-home-0x7e2f6e2f86089ae708425bca2e7bf43ad5ca486e">
            <div class="d-flex flex-column h-100">
                <div class="d-flex align-items-center justify-content-between flex-shrink-0 border-bottom p-3" style="height:3.75rem;">
                    <div class="d-block d-lg-none"><button class="btn p-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg"><i class="bi bi-arrow-left-circle"></i></button></div>
                    <a class="d-flex align-items-center link-dark fw-medium" href="#" title="View Profile" onclick="showprofileSender(&quot;0x7e2f6e2f86089ae708425bca2e7bf43ad5ca486e&quot;)">
                        <div class="position-relative me-1">
                        <img class="rounded-circle me-2" width="27" src="data:image/png;base64, /9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCABAAEADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDuKK8/org/tX+5+P8AwDzPqf8AePQK8/r0CvP6M1+x8/0DB/aCvQK8/r0CjKvt/L9Qxn2Qorz+ij+1f7n4/wDAD6n/AHgor0CvP648Vhfq9tb3NqNb2l9LWCvQK8/rjK9PJKPtPaa2tb9R1aPtba2se515/XGV2dGd0fZ+z1ve/wCgUqPsr63uFFFegV5mFwv1i+trCrVvZ20vc8/orjK7Ot8xy/6ny+9e9+ltreb7m7QVxle50V6+XU/qfNre9vLa/r3ONYz+7+J4ZXZ16BRRmNP65y62tfz3t6dgeM/u/ief0UVxleRl2X/XOb3rWt0vvfzXY7Ej3OvP69Arz+tc1+x8/wBDiwf2j0CvP69ArwyvSqZf9ct71reV9/muw8Gvi+R2degV4ZXudFPL/qd/evfytt833DGL4fmef16BXn9egV5uVfb+X6ixn2T/2Q==" alt="Address">
                        </div>
                        <span>
                        <span class="fs-6" data-isonline="0" data-ispin="0" data-typer="off" data-dguid="" v-if="dialog.recipientUser && dialog.recipientUser.address">{{ dialog.recipientUser.address.substring(0, 8) }}...{{ dialog.recipientUser.address.substring(dialog.recipientUser.address.length - 6) }}</span>
                        <div class="fs-80x fw-normal text-secondary mt-n1" id="online_0x7e2f6e2f86089ae708425bca2e7bf43ad5ca486e">
							
							<span class="text-secondary" v-if="dialog.recipientUser && !dialog.recipientUser.is_online">Offline</span>
							<span class="text-success" v-else>online</span>
						</div>
                        </span>
                    </a>
                    <div class="dropdown" id="dropdownMenuUserOptions_0x7e2f6e2f86089ae708425bca2e7bf43ad5ca486e">
                        <button class="btn btn-sm btn-light rounded-circle" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="0,10" id="buttondropdownMenuUserOptions_0x7e2f6e2f86089ae708425bca2e7bf43ad5ca486e"><i class="bi bi-three-dots-vertical"></i></button>
                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuUserOptions" style="">
                        <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#setUserNicknameModal"><i class="bi-tag me-1"></i> Set Nickname</a></li>
                        <li><a class="dropdown-item" href="#" onclick="pinchat('0x7e2f6e2f86089ae708425bca2e7bf43ad5ca486e','pin')" id="pin_0x7e2f6e2f86089ae708425bca2e7bf43ad5ca486e"><i class="bi bi-pin-angle-fill text-muted me-1"></i> Pin Chat</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#archiveUserModal"><i class="bi bi-door-closed me-1"></i> Archive Chat</a></li>
                        <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#blockUserModal" @click="blockUser" v-if="!dialog.blocked || +dialog.blocked.user_id !== +user.id"><i class="bi bi-slash-circle me-1"></i> Block User</a></li>
						<li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#blockUserModal" @click="unblockUser" v-if="dialog.blocked && +dialog.blocked.user_id === +user.id"><i class="bi bi-slash-circle me-1"></i> Unblock User</a></li>
                        </ul>
                    </div>
                </div>
                

				<div class="js-chat-content d-flex flex-column overflow-y-auto h-100 gap-3 p-3" id="chatpanel_0x7e2f6e2f86089ae708425bca2e7bf43ad5ca486e" ref="chatContainer" data-firstmessageid="4522290" data-lastmessageid="4524449" data-nooldmessages="1" data-nickname="xingqiu.eth">
					<span id="nomore_0x7e2f6e2f86089ae708425bca2e7bf43ad5ca486e">
						<center><span class="text-secondary">No more new messages to load</span></center>
					</span>
					<center></center>
					<Chat-Dialog v-for="(message, index) in dialog.messages" :key="index" :message="message" />

					<div class="typing-users">
						<div class="text-muted" v-for="user in filteredTypingUsers" :key="user.address">
							{{ user.address.substring(0, 8) }}...{{ user.address.substring(user.address.length - 6) }} is typing...
						</div>
					</div>




				</div>


                <div class="border-top messageTextInput" style="background-color: #FAFAFA;padding-left:1rem; padding-right:1rem;padding-bottom:1rem; padding-top:0.5rem" v-if="!dialog.blocked">
                    <div class="flex-grow-1 position-relative">
                        <div class="d-flex align-items-end position-absolute" style="left: 0.2rem; bottom: 0.2rem;">
                            <div>
                                 <button class="btn btn-icon btn-sm btn-light rounded-circle" type="button" title="Emoji" @click="toggleEmojiPicker()">
                                <i class="bi bi-emoji-smile"></i>
                                </button>
                                <VEmojiPicker ref="emojiPicker" @select="selectEmoji" v-show="toggleEmojiPickerValue" />
                            </div>
                        </div>


						<textarea
							ref="textarea"
							name="txtmsg"
							class="js-textarea-type-message js-count-characters form-control rounded-xl txtmsg"
							rows="1"
							v-model="message"
							aria-label="With textarea"
							placeholder="Your Message Goes in Here"
							style="overflow-y: hidden; resize: none; padding-left: 2.5rem; padding-right: 2.5rem; font-family: 'Roboto';"
							maxlength="500"
							data-replytoid="0"
							@keydown="handleKeydown"
							@input="handleTyping"
							@blur="handleBlur"
						></textarea>

                        <div class="d-flex align-items-end position-absolute" style="right: 0.2rem; bottom: 0.2rem;"><button class="btn btn-icon btn-sm btn-primary text-nowrap rounded-circle messageSendButton" title="Send Message" @click="sendMessage"><i class="bi bi-send-fill"></i></button></div>
                    </div>
                    <div class="d-flex justify-content-between fs-80x text-muted mt-2 mb-n2 px-2">
                      <span id="mycount_0x7e2f6e2f86089ae708425bca2e7bf43ad5ca486e"></span><span class="d-none d-md-inline-block" id="tent_0x7e2f6e2f86089ae708425bca2e7bf43ad5ca486e"><strong> Enter</strong> To send, <strong>Shift + Enter</strong> To add a New line</span></div>
                </div>

				<div class="" style="background-color: #FAFAFA;padding-left:1rem; padding-right:1rem;padding-bottom:1rem; padding-top:0.5rem" v-else>
					<div class="d-flex justify-content-between fs-80x text-muted mt-2 px-2" v-if="+dialog.blocked.user_id === +user.id">
						<span class="text-danger fw-bold">You have blocked this user. Unblock to send messages.</span>
					</div>
					<div class="d-flex justify-content-between fs-80x text-muted mt-2 px-2" v-else>
						<span class="text-danger fw-bold">You have been blocked by this user. You cannot send messages.</span>
					</div>
				</div>

            </div>
            </div>
    </div>
</template>


<script>
import VueScrollTo from 'vue-scrollto';
import { mapState, mapMutations } from 'vuex'
import { VEmojiPicker } from 'v-emoji-picker';

export default {
  name: 'Chat',
  props: ['chatId'],
  components: {
    VEmojiPicker
  },
  data() {
    return {
      dialog: [],
      toggleEmojiPickerValue: false,
      message: '',
    };
  },
  mounted() {
    this.scrollToBottom();
    document.addEventListener('click', this.handleClickOutside, true);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside, true);
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    queryParams() {
      return this.$route.query;
    },
    filteredTypingUsers() {
      return this.$store.state.typingUsers.filter(user => user.address !== this.user.address);
    }
  },
  async fetch() {
	await this.fetchChat();
  },
  watch: {
    '$route.query.chatId': {
      handler(val, oldVal) {
        this.chatId = val;
        this.fetchChat();
      },
      deep: true
    }
  },
  created() {
    this.$socket.on('dialogs:sendMessage', (response) => {
      response = this.$decryptHash(response);
      if (!response.success) return;
      this.message = '';
      this.dialog.messages.push(response.data);
    });
    this.$socket.on('dialogs:typingMessage', (response) => {
      response = this.$decryptHash(response);
      if (!response.success) return;
      if (response.data.typing) {
        this.SET_TYPING_STATUS(response.data);
      } else {
        this.SET_STOP_TYPING_STATUS(response.data);
      }
    });

    this.$socket.on('users:block', async (response) => {
      response = this.$decryptHash(response);
      if (!response.success) return;
      if (response.data.blocked) {
        await this.fetchChat();
      }
    });

    this.$socket.on('users:unblock', async (response) => {
      response = this.$decryptHash(response);
      if (!response.success) return;
      await this.fetchChat();
    });
  },
  methods: {
    handleKeydown(event) {
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        if (this.message.trim() !== '') {
          this.sendMessage();
        }
      } else if (event.key === 'Enter' && event.shiftKey) {
        event.preventDefault();
        this.message += '\n';
        this.adjustTextareaHeight();
      }
    },
    handleTyping() {
      const isTyping = this.message.trim() !== '';
      this.$socket.emit('dialogs:typingMessage', this.$encryptHash({
        address: this.user.address,
        chatId: this.queryParams.chatId,
        typing: isTyping
      }));
    },
    handleBlur() {
      this.$socket.emit('dialogs:typingMessage', this.$encryptHash({
        address: this.user.address,
        chatId: this.queryParams.chatId,
        typing: false
      }));
      this.SET_STOP_TYPING_STATUS({ address: this.user.address });
    },
    SET_TYPING_STATUS(data) {
      this.$store.commit('ADD_TYPING_USER', data);
      this.scrollToBottom();
    },
    SET_STOP_TYPING_STATUS(data) {
      this.$store.commit('REMOVE_TYPING_USER', data);
      this.scrollToBottom();
    },
    handleShiftEnterKey(event) {
      event.preventDefault();
      this.message += '\n';
      this.adjustTextareaHeight();
    },
    adjustTextareaHeight() {
      const textarea = this.$refs.textarea;
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    },
    async blockUser() {
      this.$socket.emit('users:block', this.$encryptHash({
        dialogId: this.dialog.id,
        sender: this.user.id,
        recipient: this.dialog.recipientUser.id
      }));
    },
    async unblockUser() {
      this.$socket.emit('users:unblock', this.$encryptHash({
        dialogId: this.dialog.id,
        sender: this.user.id,
        recipient: this.dialog.recipientUser.id,
      }));
    },
    async fetchChat() {
      if (!this.queryParams.chatId) return;
      this.$socket.emit('dialogs:getDialog', this.$encryptHash({
        address: this.user.address,
        chatId: this.queryParams.chatId
      }));
      this.$socket.on('dialogs:getDialog', (response) => {
        response = this.$decryptHash(response);
        if (!response.success) return;
        this.dialog = response.data;
        this.scrollToBottom();
      });
    },
    scrollToBottom() {
      this.$nextTick(() => {
        const chatContainer = this.$refs.chatContainer;
        if (chatContainer) {
          chatContainer.scrollTop = chatContainer.scrollHeight;
        }
      });
    },
    sendMessage() {
      if (!this.message) return;
      this.$socket.emit('dialogs:sendMessage', this.$encryptHash({
        address: this.user.address,
        chatId: this.queryParams.chatId,
        message: this.message
      }));
      setTimeout(() => {
        this.scrollToBottom();
      }, 100);
    },
    toggleEmojiPicker() {
      this.toggleEmojiPickerValue = !this.toggleEmojiPickerValue;
    },
    selectEmoji(emoji) {
      this.message += emoji.data;
    },
    handleClickOutside(event) {
      if (this.toggleEmojiPickerValue && !this.$refs.emojiPicker.$el.contains(event.target)) {
        this.toggleEmojiPickerValue = false;
      }
    }
  }
};

</script>


<style>
.emoji-picker {
    position: absolute;
    bottom: 60px;
    background: #fff!important;
}

div#EmojiPicker {
    background: #fff!important;
}

div#Categories {
    background: #fff!important;
}

span.emoji.border {
    border: 0!important;
}

.container-search {
    background: #fff!important;
}

input[type="text"] {
    background: #fff!important;
}

textarea {
  height: auto;
  min-height: 3rem;
  overflow-y: hidden;
  resize: none;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  font-family: 'Roboto';
}
</style>