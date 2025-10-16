<template>
  <div>
    <!-- First Page Banner -->
    <section class="banner"></section>
    
    <!-- Profile Card -->
    <ProfileCard />
    
    <!-- Education Section -->
    <EducationSection />
    
    <!-- Activities Section -->
    <ActivitiesSection />
    
    <!-- Services Section -->
    <ServicesSection />
    
    <!-- Projects Section -->
    <ProjectsSection />
    
    <!-- Page End Marker -->
    <section id="page_end"></section>
  </div>
</template>

<script>
import ProfileCard from '../components/ProfileCard.vue'
import EducationSection from '../components/EducationSection.vue'
import ActivitiesSection from '../components/ActivitiesSection.vue'
import ServicesSection from '../components/ServicesSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'

export default {
  name: 'Home',
  components: {
    ProfileCard,
    EducationSection,
    ActivitiesSection,
    ServicesSection,
    ProjectsSection,
  }
}
</script>
