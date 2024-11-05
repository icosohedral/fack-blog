<template>
  <transition
    name="modal-fade"
    @leave="leave"
  >
  <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20" @click="closeModal">
      <!-- 你的模态框内容 -->
      <div id="modal_window" class="p-6 rounded-lg shadow-lg w-3/4 lg:w-1/6 md:w-1/3 animate__animated animate__fadeInUp bg-gray-300" @click.stop>
        <h2 class="text-lg mb-4 font-bold text-left text-slate-800">
          <i class="material-symbols--note text-md" style="vertical-align: middle; line-height: 1;" />
          {{ title }}
        </h2>
        <div class="mb-4 text-left text-slate-800">
          <slot>
            {{ content }}
          </slot>
        </div>
        <div class="flex justify-end space-x-2">
          <button 
            @click="closeModal" 
            class="px-4 py-1.5 rounded bg-opacity-90 hover:text-gray-50 bg-gray-600 hover:bg-gray-600 text-gray-100"
          >
            确定
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import 'animate.css';

export default {
  name: 'InfoModal',
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      default: 'null',
    },
    content: {
      type: String,
      default: 'null',
    }
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    leave(el) {
      const modal_element = el.querySelector('#modal_window'); // 声明并获取 modal_element
      if (modal_element) {
        modal_element.classList.remove('animate__fadeInUp');
        modal_element.classList.add('animate__fadeOutDown');
      }
    },
  }
};
</script>


<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s;
}
.modal-fade-enter, .modal-fade-leave-to /* .modal-fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

.fixed {
  z-index: 9999; /* 确保背景在模态框下 */
}
</style>
