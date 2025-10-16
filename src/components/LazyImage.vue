<template>
  <img
    v-if="isLoaded"
    :src="src"
    :alt="alt"
    :class="className"
    @load="onLoad"
    @error="onError"
  />
  <div
    v-else
    :class="['lazy-placeholder', className]"
    :style="{ width: width, height: height }"
  >
    <div class="loading-spinner"></div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'LazyImage',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ''
    },
    className: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '200px'
    },
    threshold: {
      type: Number,
      default: 0.1
    }
  },
  setup(props) {
    const isLoaded = ref(false)
    const observer = ref(null)

    const onLoad = () => {
      isLoaded.value = true
    }

    const onError = () => {
      console.error('Image loading failed:', props.src)
    }

    onMounted(() => {
      // Use Intersection Observer for lazy loading
      observer.value = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              isLoaded.value = true
              observer.value.unobserve(entry.target)
            }
          })
        },
        {
          threshold: props.threshold
        }
      )

      // Observe placeholder element
      const placeholder = document.querySelector('.lazy-placeholder')
      if (placeholder) {
        observer.value.observe(placeholder)
      }
    })

    onUnmounted(() => {
      if (observer.value) {
        observer.value.disconnect()
      }
    })

    return {
      isLoaded,
      onLoad,
      onError
    }
  }
}
</script>

<style scoped>
.lazy-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  border-radius: 8px;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
