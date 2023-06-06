<template>
    <div class="list-group-item list-group-item-action p-0" :class="{'active': +chatId === +dialog.id}" aria-current="true" @click="openChat(dialog.id)">
        <div class="d-flex align-items-center p-3" :class="{'not_read_bg': +chatId !== +dialog.id && dialog.lastMessage.sender !== user.id}" data-bs-dismiss="offcanvas" aria-label="close">
            <div class="position-relative me-2">
                <img class="rounded-circle" width="35" src="data:image/png;base64, /9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCABAAEADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDuKK8/org/tX+5+P8AwDzPqf8AePQK8/r0CvP6M1+x8/0DB/aCvQK8/r0CjKvt/L9Qxn2Qorz+ij+1f7n4/wDAD6n/AHgor0CvP648Vhfq9tb3NqNb2l9LWCvQK8/rjK9PJKPtPaa2tb9R1aPtba2se515/XGV2dGd0fZ+z1ve/wCgUqPsr63uFFFegV5mFwv1i+trCrVvZ20vc8/orjK7Ot8xy/6ny+9e9+ltreb7m7QVxle50V6+XU/qfNre9vLa/r3ONYz+7+J4ZXZ16BRRmNP65y62tfz3t6dgeM/u/ief0UVxleRl2X/XOb3rWt0vvfzXY7Ej3OvP69Arz+tc1+x8/wBDiwf2j0CvP69ArwyvSqZf9ct71reV9/muw8Gvi+R2degV4ZXudFPL/qd/evfytt833DGL4fmef16BXn9egV5uVfb+X6ixn2T/2Q==" alt="Address" loading="lazy">
            </div>
            <div class="flex-grow-1 text-truncate">
                <div class="d-flex align-items-center justify-content-between">
                    <span class="js-address-name js-fulladdress fw-medium">{{ dialog.recipientUser.address.substring(0, 8) + '...' + dialog.recipientUser.address.substring(this.dialog.recipientUser.address.length - 6) }}</span>
                    <div class="chatlistid d-none">
                        
                    </div>
                    <span class="small text-muted text-nowrap" v-if="dialog.lastMessage">
                        {{ $formatDate(dialog.lastMessage.createdAt) }}
                    </span>
                </div>
                <div class="d-flex justify-content-between">
                    <span class="small text-truncate me-2" v-if="dialog.lastMessage && dialog.lastMessage.content">
						{{ dialog.lastMessage.sender === user.id ? 'You: ' : '' }} {{ dialog.lastMessage.content }}
                    </span>
                    <span class="badge rounded-pill bg-primary"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	props: {
		dialog: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
			chatId: null
		};
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
				this.chatId = val;
			},
			deep: true
		}
	},
	created() {
		this.updateChatId();
	},
	methods: {
		async openChat(dialogId) {
			this.$router.push({ path: '/dialogs', query: { chatId: dialogId } });
			this.$emit('hideContacts');
		},
		updateChatId() {
			this.chatId = this.queryParams.chatId || null;
		}
	}
};
</script>
