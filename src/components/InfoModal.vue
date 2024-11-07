<template>
  <transition
    name="modal-fade"
    @leave="leave"
  >
    <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20" @click="closeModal">
      <!-- Modal Content -->
      <div id="modal_window" class="pt-4 p-6 rounded-lg shadow-lg w-3/4 lg:w-1/6 md:w-1/3 animate__animated animate__fadeInUp bg-white relative" @click.stop>
        <!-- Close Icon -->
        <button @click="closeModal" class="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 rounded-lg focus:outline-none ">
          <span class="material-symbols--close-small-rounded ">close</span>
        </button>

        <h2 class="text-lg mb-4 font-bold text-left text-slate-800">
          <i class="material-symbols--note text-md" style="vertical-align: middle; line-height: 1;" />
          {{ title }}
        </h2>
        <div class="mb-4 text-left text-slate-800">
          <slot>
            {{ content }}
          </slot>
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
