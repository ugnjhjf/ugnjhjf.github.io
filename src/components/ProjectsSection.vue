<template>
  <section id="project" class="project-timeline">
    <div class="sustainability-wrapper">
      <div class="container">
        <div class="text-center">
          <h2 class="main-head">Projects</h2>
        </div>
        <div class="main_step_join">
          <!-- Stable Diffusion Project -->
          <div class="custom_flex">
            <div class="step_join_box">
              <div class="step_join_content margin_right">
                <h1 class="project-tag project-art">Art</h1>
                <h2 class="head-text">AI Image Generate: </h2>
                <h2 class="head-text">Stable Diffusion</h2>
                <h3 class="">Since 2023</h3>
                <p class="mt_15">
                  Stable Diffusion is a generative artificial intelligence (AI) model that produces
                  unique photorealistic images from text
                  and image prompts. It operates based on diffusion technology and uses latent space. The model was
                  trained on
                  billions of images and was released in August 2022.
                </p>
                <p class="mt_20">
                  Click <a href="#">here</a> to view the works generate by stable diffusion under
                  personalize settings and prompts.
                </p>
              </div>
            </div>
            <div class="step_join_box">
              <img 
                data-aos-duration="1000" 
                data-aos="fade-up" 
                data-aos-anchor-placement="top-center"
                class="step_img mt_140 custom-left" 
                src="@assets/images/project/Project-StableDiffusion.jpg"
                alt="Stable diffusion UI"
              >
            </div>
          </div>

          <!-- Video Editing Project -->
          <div class="custom_flex custom_flex_two">
            <div class="step_join_box">
              <img 
                data-aos-duration="1000" 
                data-aos="fade-up" 
                data-aos-anchor-placement="top-center"
                class="step_img mt_140" 
                src="@assets/images/project/Project-EVA_harbin.jpg" 
                alt="EVA Harbin Video"
              >
            </div>
            <div class="step_join_box">
              <div 
                class="step_join_content mt_80" 
                data-aos-duration="1000" 
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
              >
                <h1 class="project-tag project-art">Art</h1>
                <h2 class="head-text">Video Editing: </h2>
                <h3 class="">Since 2018</h3>
                <p class="mt_15"></p>
                <p class="mt_20">
                  <li><a href="https://www.bilibili.com/video/BV1zz4y1n7zm/">Cambridge University Introduction - 49k
                      Clicks</a> </li>
                </p>
                <p class="mt_20">
                  <li><a href="https://www.bilibili.com/video/BV1Fz4y1j7ry/">【EVA】Harbin x
                      One Last Kiss - 177k Clicks</a> </li>
                </p>
              </div>
            </div>
          </div>

          <!-- Game Development Project -->
          <div class="custom_flex custom_flex_three">
            <div class="step_join_box">
              <div 
                class="step_join_content margin_right mt_140" 
                data-aos-duration="1000" 
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
              >
                <h1 class="project-tag project-game">Game Development</h1>
                <h2 class="head-text">Multiplayer FPS Game:</h2>
                <h2 class="head-text">Unreal Engine 5</h2>
                <h3 class="">Since 2020</h3>
                <p class="mt_15">
                  Unreal Engine 5 is the world's most open and advanced real-time 3D creation tool.Unreal
                  Engine enables game developers
                  and creators across industries to realize next-generation real-time 3D content and experiences with
                  greater freedom,
                  fidelity, and flexibility than ever before.
                </p>
              </div>
            </div>
            <div class="step_join_box">
              <img 
                data-aos-duration="1000" 
                data-aos="fade-up" 
                data-aos-anchor-placement="top-center"
                class="step_img mt_140 custom-left" 
                src="@assets/images/project/Project-UE5_MPFPS.png" 
                alt="UE5 Multiplayer FPS"
              >
            </div>
          </div>

          <!-- Backend Development Project -->
          <div class="custom_flex custom_flex_two custom_flex_four">
            <div class="step_join_box">
              <img 
                data-aos-duration="1000" 
                data-aos="fade-up" 
                data-aos-anchor-placement="top-center"
                class="step_img mt_140" 
                src="@assets/images/project/Project-GNetwork_server.jpg" 
                alt="GNetwork Server"
              >
              <img 
                data-aos-duration="1000" 
                data-aos="fade-up" 
                data-aos-anchor-placement="top-center"
                class="step_img mt_140" 
                src="@assets/images/project/Project-Dell-server.jpg" 
                alt="Dell Server"
              >
            </div>

            <div class="step_join_box">
              <div 
                class="step_join_content mt_80" 
                data-aos-duration="1000" 
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
              >
                <h1 class="project-tag project-backend">Backend Development</h1>
                <h2 class="head-text">Kurumi Server</h2>
                <h3 class="">Since 2018</h3>
                <p class="mt_15">
                  Kurumi Server Project is a integrated project about software and hardware. This project
                  started at 2018.
                  The server is self-hosted on 2U DELL R720 Rack Server.Running Vmware ESXI to provide virtual machine
                  (VM) platform for studying, testing new technology and technic.
                </p>
                <p class="mt_20">
                  Here are projects and technologies have been implemented on the server and deployed.
                </p>
                <p class="mt_20">
                  <h1 class="project-software-type">Software</h1>
                </p>
                <p class="mt_15">
                  <ol>Backend technology:
                    <li>Nginx - Reverse Proxy, HTTPS, Webbsite deploy</li>
                    <li>MySQL & MongoDB - Database</li>
                    <li>Vmware ESXI - Virtual Machine Management Platform</li>
                    <li>Dell iDRAC - Rack server life cycle management system</li>
                    <li>DDNSGO - ddns service for dynamic IP</li>
                    <li>Data risk control & Backup - Raid 10</li>
                  </ol>
                </p>
                <p class="mt_15">
                  <ol>Service deployed:
                    <li>Alist - Private cloud storage & NAS</li>
                    <li>Jellyfin - Online video streaming platform </li>
                    <li>AutoBangumi - Work with Jellyfin, to provide media information</li>
                    <li>Minecraft Server</li>
                    <li>websites (including this web)</li>
                  </ol>
                </p>
                <p class="mt_20">
                  <h1 class="project-hardware-type">Hardware</h1>
                  <ol>Dell R720
                    <li>Intel Xeon E5 2637v2 CPU * 2</li>
                    <li>DDR3 ECC RAM 1333MHZ 64G</li>
                    <li>SFP+ 10Gbps *2 network card</li>
                    <li>Nvidia Geforce GTX 750Ti</li>
                    <li>8TB HDD * 4 - Raid 10</li>
                  </ol>
                  <ol class="mt_20">Youcan 3-level switch (48 ports, 4 SFP+ fibre ports)
                    <p>Support VLAN, Routing, Link Aggregation</p>
                  </ol>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectsSection'
}
</script>
