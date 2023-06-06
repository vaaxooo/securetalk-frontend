import moment from 'moment'


export default ({ app }, inject) => {

    function formatDate(value) {
        let interval = Math.floor((Date.now() - new Date(value)) / 1000);
        if (interval < 300) {
          return moment(value).fromNow();
        } else {
          return moment(value).format('LL HH:mm');
        }
    }

    inject('formatDate', formatDate);
}