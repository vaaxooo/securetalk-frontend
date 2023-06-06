<template>
    <section>
        <div class="d-flex flex-column align-items-end gap-1" v-if="message.sender !== +user.id">
            <div class="chat-ui-bubble chat-ui-bubble">
                <div class="d-flex align-items-center">
                    <div class="small text-muted me-2">
                        <span>{{ $formatDate(message.createdAt) }}</span>
                    </div>
                    <div class="dropdown ms-auto">
                        <button class="btn btn-sm py-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-three-dots"></i>
                        </button>
                        <ul class="p-1 dropdown-menu shadow">
                            <li><a class="dropdown-item text-secondary" href="#" onclick="replytomessage(4522290,1)">Reply</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item text-danger" href="#" onclick="deletechatmessage(4522290,1)">Delete message</a></li>
                        </ul>
                    </div>
                </div>
                <span>{{ message.content }}</span>
            </div>
        </div>

        <div class="d-flex flex-column align-items-end gap-1" v-if="+message.sender === +user.id">
            <div class="chat-ui-bubble chat-ui-bubble-reverse">
                <div class="d-flex align-items-center">
                    <div class="small text-muted me-2">
                        <span>{{ $formatDate(message.createdAt) }}</span>
                    </div>
                    <div class="dropdown ms-auto">
                        <button class="btn btn-sm py-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-three-dots"></i>
                        </button>
                        <ul class="p-1 dropdown-menu shadow">
                            <li><a class="dropdown-item text-secondary" href="#" onclick="replytomessage(4524449,1)">Reply</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item text-danger" href="#" onclick="deletechatmessage(4524449,1)">Delete message</a></li>
                        </ul>
                    </div>
                </div>
                <span>{{ message.content.toString() }}</span>
                <div class="d-flex align-items-center">
                    <span v-if="!message.is_read" class="text-muted small me-1"><i class="bi bi-check2"></i> Delivered</span>
                    <span v-if="message.is_read" class="text-success small me-1"><i class="bi bi-check2-all"></i> Read</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: ['message'],
    computed: {
        user() {
            return this.$store.state.user;
        },
    },
    mounted() {
        const observer = new IntersectionObserver(this.handleIntersect, {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        });
        observer.observe(this.$el);

        this.$socket.on('messages:markAsRead', this.handleMarkAsRead);
    },
    methods: {
        handleIntersect(entries) {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    this.markMessageAsRead();
                }
            }
        },
        handleMarkAsRead(response) {
            response = this.$decryptHash(response);
            if (response.success && +response.data.messageId === +this.message.id) {
                this.message.is_read = true;
                document.title = 'SecureTalk'
            }
        },
        markMessageAsRead() {
            if (!this.message.is_read && this.message.sender !== +this.user.id) {
                this.$socket.emit('messages:markAsRead', this.$encryptHash({
                    chatId: this.message.dialogId,
                    messageId: this.message.id,
                    consumer: this.user.id
                }));
            }
        },
    }
}
</script>
