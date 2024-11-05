<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-300">
    <div class="w-full sm:w-1/2 lg:w-1/4 max-w-xs rounded-lg animate__animated animate__flipInX">
      <div class="text-left">
        <div class="px-6 py-2">
          <h2 class="font-bold text-2xl mb-4 mt-2 transition-colors text-center text-green-800">My Space</h2>
          <form @submit.prevent="handleSubmit">
            <div class="flex items-center mb-4">
              <input 
                class="text-sm flex-1 p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-offset-0 focus:ring-sky-500 bg-gray-100 text-black border-gray-600" 
                id="username" 
                v-model="form.username"
                placeholder="账号"
                @keydown="handleKeyDown"
              />
            </div>

            <div class="flex items-center mb-4">
              <input 
                class="text-sm flex-1 p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-offset-0 focus:ring-sky-500 bg-gray-100 text-black border-gray-600" 
                id="password" 
                type="password" 
                v-model="form.password"
                placeholder="密码"
                @keydown="handleKeyDown"
              />
            </div>
          </form>
        </div>
        <div class="px-6 text-center">
          <button 
            class="inline-flex items-center justify-center w-full h-10 px-4 py-2 text-white font-bold border-b-4 rounded focus:outline-none focus:ring-1 focus:ring-offset-0 focus:ring-green-500 bg-green-700 hover:bg-green-600 border-green-900 hover:border-green-700"
            id="submit_button"
            @click="handleSubmit"
          >
            登&nbsp;录
          </button>
        </div>
      </div>
    </div>
  </div>
  <InfoModal 
    :isOpen="isModalOpen" 
    :title="modalTitle" 
    :content="modalContent" 
    @close="handleCloseModal"
  />
</template>

<script>
import InfoModal from '@/components/InfoModal.vue';

export default {
  name: "LandingPage",
  components: {
    InfoModal, // 注册 InfoModal 组件
  },
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
      isModalOpen: false,
    };
  },
  mounted() {
  },
  methods: {
    handleKeyDown(event) {
      if (event.key === 'Enter') {
        this.handleSubmit();  // 按下回车键时触发提交逻辑
      }
    },
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    async handleSubmit() {
      var button_element = document.getElementById("submit_button");
      button_element.disabled = true;
      button_element.innerHTML = `
        <span>
          登录中
          <i aria-hidden="true" role="status" class="inline-block rounded-full animate-spin icon--loading align-middle" />
        </span>`;
      
      // 延迟 1 秒
      await this.sleep(1000);

      this.showInfo('登录失败', "用户名或密码错误");
      button_element.disabled = false;
      button_element.innerHTML = '登&nbsp;录';
    },
    showInfo(title, content) {
      this.modalTitle=title;
      this.modalContent=content;
      this.openModal();
    },
    openModal() {
      this.isModalOpen = true;
    },
    handleCloseModal() {
      this.isModalOpen = false;
    },
  }
};
</script>

<style scoped>

</style>
