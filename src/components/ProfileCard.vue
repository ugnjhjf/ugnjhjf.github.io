<template>
  <div class="card">
    <div class="imgBx">
      <img src="@assets/images/Rokidna.png" alt="Rokidna" />
    </div>
    <div class="content">
      <div class="details">
        <h2>
          Rokidna G<br />
          <span>Unreal Developer</span><br />
          <span>Backend Developer</span>
        </h2>
        <div class="data">
          <h3 class="animate__animated animate__bounce inf">Click here!!</h3>
        </div>
        <div class="actionBtn">
          <button @click="sendEmail">Send Message to me!</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileCard',
  methods: {
    sendEmail() {
      window.location.href = "mailto:rokidna@outlook.com"
    }
  }
}
</script>
