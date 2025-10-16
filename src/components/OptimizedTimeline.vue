<template>
  <div class="timeline-container">
    <VirtualScroll
      :items="timelineItems"
      :item-height="120"
      :container-height="600"
      :overscan="3"
    >
      <template #default="{ item, index }">
        <div 
          class="timeline-item"
          :class="item.type"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <span class="line" :class="item.type"></span>
          <div class="timeline-content">
            <h4>{{ item.title }}</h4>
            <h5>{{ item.date }}</h5>
            <h5 v-if="item.status" :class="item.statusClass">{{ item.status }}</h5>
            <p v-if="item.description">{{ item.description }}</p>
            <a v-if="item.link" :href="item.link">link</a>
          </div>
        </div>
      </template>
    </VirtualScroll>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import VirtualScroll from './VirtualScroll.vue'

export default {
  name: 'OptimizedTimeline',
  components: {
    VirtualScroll
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const timelineItems = computed(() => 
      props.items.map(item => ({
        ...item,
        statusClass: getStatusClass(item.status)
      }))
    )

    const getStatusClass = (status) => {
      if (!status) return ''
      const statusMap = {
        'Outstanding Team': 'merit',
        'Finalist': 'finalist',
        'Silver Prize': 'silver',
        'Secretary': 'secretary',
        'N3': 'silver'
      }
      return statusMap[status] || ''
    }

    return {
      timelineItems
    }
  }
}
</script>

<style scoped>
.timeline-container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.timeline-item {
  position: relative;
  padding: 20px;
  margin-bottom: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.timeline-item.competition {
  border-left: 4px solid #e74c3c;
}

.timeline-item.assignment {
  border-left: 4px solid #3498db;
}

.timeline-item.certificate {
  border-left: 4px solid #f39c12;
}

.timeline-item.activity {
  border-left: 4px solid #2ecc71;
}

.timeline-item.project {
  border-left: 4px solid #9b59b6;
}

.timeline-item.emsd {
  border-left: 4px solid #34495e;
}

.line {
  position: absolute;
  left: -8px;
  top: 20px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #3498db;
}

.line.competition { background: #e74c3c; }
.line.assignment { background: #3498db; }
.line.certificate { background: #f39c12; }
.line.activity { background: #2ecc71; }
.line.project { background: #9b59b6; }
.line.emsd { background: #34495e; }

.timeline-content h4 {
  margin: 0 0 8px 0;
  color: #2c3e50;
  font-size: 1.1em;
}

.timeline-content h5 {
  margin: 4px 0;
  color: #7f8c8d;
  font-size: 0.9em;
}

.timeline-content p {
  margin: 8px 0;
  color: #34495e;
  line-height: 1.5;
}

.timeline-content a {
  color: #3498db;
  text-decoration: none;
}

.timeline-content a:hover {
  text-decoration: underline;
}

.merit { color: #e74c3c; font-weight: bold; }
.finalist { color: #f39c12; font-weight: bold; }
.silver { color: #95a5a6; font-weight: bold; }
.secretary { color: #2ecc71; font-weight: bold; }
</style>
