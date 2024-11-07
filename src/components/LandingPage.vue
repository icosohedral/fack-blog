<template>
  <div class="flex flex-col min-h-screen bg-gray-50">
    <!-- Main Content Section -->
    <div class="flex-grow flex flex-col items-center justify-center">
      <h2 
        class="font-bold text-4xl mb-6 transition-colors text-center text-blue-600"
        id = "title"
        >
      </h2>
      <div class="w-full sm:w-1/2 lg:w-1/4 max-w-xs rounded-lg pt-6 pb-5 bg-white border shadow-lg animate__animated animate__flipInX">
        <div class="text-left">
          <div class="px-6 py-2">
            <form @submit.prevent="handleSubmit">
              <div class="flex items-center mb-4">
                <input 
                  class="text-sm flex-1 p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-offset-0 focus:ring-sky-500 bg-gray-100 text-black" 
                  id="username" 
                  v-model="form.username"
                  placeholder="Account"
                  @keydown="handleKeyDown"
                />
              </div>

              <div class="flex items-center mb-4">
                <input 
                  class="text-sm flex-1 p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-offset-0 focus:ring-sky-500 bg-gray-100 text-black" 
                  id="password" 
                  type="password" 
                  v-model="form.password"
                  placeholder="Password"
                  @keydown="handleKeyDown"
                />
              </div>
            </form>
          </div>
          <div class="px-6 text-center">
            <button 
              class="inline-flex items-center justify-center w-full h-10 px-4 py-2 text-white font-bold rounded-lg focus:outline-none focus:ring-1 focus:ring-offset-0 focus:ring-blue-500 bg-blue-600 hover:bg-blue-700"
              id="submit_button"
              @click="handleSubmit"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Section -->
    <footer class="w-full text-center py-4 text-gray-600 text-xs">
      <p id="footer-note"></p>
    </footer>
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
          Login...
          <i aria-hidden="true" role="status" class="inline-block rounded-full animate-spin icon--loading align-middle" />
        </span>`;
      
      // 延迟 1 秒
      await this.sleep(1000);

      this.showInfo('Login failed', "Invalid account or password");
      button_element.disabled = false;
      button_element.innerHTML = 'Login';
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
  },
  mounted(){
    var hostname = window.location.hostname;
    // set page title
    document.title = hostname + " - Login";
    // set head title
    var title_element = document.getElementById("title");
    title_element.innerHTML = hostname
    // set footer
    var footer_note_element = document.getElementById("footer-note");
    var footer_note_content = "&copy; 2024 " + hostname + " All rights reserved.";
    footer_note_element.innerHTML = footer_note_content;
  }
};
</script>

<style scoped>

</style>
