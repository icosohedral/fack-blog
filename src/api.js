import axios from 'axios';

const api = axios.create({
baseURL: 'http://localhost:18000',
  timeout: 10000, // 请求超时设定
});

export default {
  login(data) {
    return api.post('/api/login', data);
  },
  generateLink(data) {
    return api.post('/api/generate_subscription', data);
  },
  showSubscriptionUsage(data) {
    return api.post('/api/subscription_usage', data);
  },
  deleteSubscription(data) {
    return api.post('/api/delete_subscription', data);
  },
  getSettings(data) {
    return api.post('/api/get_settings', data);
  },
  saveSettings(data) {
    return api.post('/api/save_settings', data);
  },
  updateSubscription(data) {
    return api.post('/api/update_subscription', data);
  },
};
