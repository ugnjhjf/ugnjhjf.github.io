<template>
  <div 
    ref="container" 
    class="virtual-scroll-container"
    :style="{ height: containerHeight + 'px' }"
    @scroll="handleScroll"
  >
    <div 
      class="virtual-scroll-spacer"
      :style="{ height: totalHeight + 'px' }"
    >
      <div 
        class="virtual-scroll-content"
        :style="{ 
          transform: `translateY(${offsetY}px)`,
          height: visibleHeight + 'px'
        }"
      >
        <div
          v-for="(item, index) in visibleItems"
          :key="startIndex + index"
          class="virtual-scroll-item"
          :style="{ height: itemHeight + 'px' }"
        >
          <slot 
            :item="item" 
            :index="startIndex + index"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue'

export default {
  name: 'VirtualScroll',
  props: {
    items: {
      type: Array,
      required: true
    },
    itemHeight: {
      type: Number,
      default: 50
    },
    containerHeight: {
      type: Number,
      default: 400
    },
    overscan: {
      type: Number,
      default: 5
    }
  },
  setup(props) {
    const container = ref(null)
    const scrollTop = ref(0)

    const totalHeight = computed(() => props.items.length * props.itemHeight)
    
    const visibleCount = computed(() => 
      Math.ceil(props.containerHeight / props.itemHeight)
    )
    
    const startIndex = computed(() => 
      Math.max(0, Math.floor(scrollTop.value / props.itemHeight) - props.overscan)
    )
    
    const endIndex = computed(() => 
      Math.min(
        props.items.length - 1,
        startIndex.value + visibleCount.value + props.overscan * 2
      )
    )
    
    const visibleItems = computed(() => 
      props.items.slice(startIndex.value, endIndex.value + 1)
    )
    
    const offsetY = computed(() => startIndex.value * props.itemHeight)
    
    const visibleHeight = computed(() => 
      (endIndex.value - startIndex.value + 1) * props.itemHeight
    )

    const handleScroll = (event) => {
      scrollTop.value = event.target.scrollTop
    }

    return {
      container,
      scrollTop,
      totalHeight,
      startIndex,
      endIndex,
      visibleItems,
      offsetY,
      visibleHeight,
      handleScroll
    }
  }
}
</script>

<style scoped>
.virtual-scroll-container {
  overflow-y: auto;
  overflow-x: hidden;
}

.virtual-scroll-spacer {
  position: relative;
}

.virtual-scroll-content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.virtual-scroll-item {
  display: flex;
  align-items: center;
  padding: 0 16px;
  border-bottom: 1px solid #eee;
}
</style>
