import io from 'socket.io-client'

export default ({ app, store }, inject) => {
    // Connect to the server-side Socket.IO endpoint
    const socket = io('http://localhost:3000')

    socket.on('connect', (data) => {
        socket.emit('socket-connected', { user: store.state.user})
        setInterval(() => {
            socket.emit('socket-connected', { user: store.state.user})
        }, 5000);
    })

    socket.on('reconnect', () => {
      socket.emit('socket-connected', { user: store.state.user})
    });

    socket.on('typing', ({ userId }) => {
        store.commit('SET_TYPING_STATUS', userId)
      })
    
      socket.on('stopTyping', ({ userId }) => {
        store.commit('SET_STOP_TYPING_STATUS', userId)
      })
      
      store.subscribe((mutation) => {
        if (mutation.type === 'SET_TYPING_STATUS') {
          socket.emit('typing', { userId: mutation.payload })
        } else if (mutation.type === 'SET_STOP_TYPING_STATUS') {
          socket.emit('stopTyping', { userId: mutation.payload })
        }
      })
      

    // Inject the Socket.IO instance into the Vue components as $socket
    inject('socket', socket)
}