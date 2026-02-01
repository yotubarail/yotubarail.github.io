<template>
  <div class="hello">
    <header>
     <nav>
       <ul>
         <li><a href="#" v-scroll-to="'#about'">About</a></li>
         <li><a href="#" v-scroll-to="'#works'">Works</a></li>
         <li><a href="#" v-scroll-to="'#contact'">Contact</a></li>
       </ul>
     </nav>
   </header>

   <main>
     <section id="firstView">
       <div class="js-name animated fadeInLeft">
         <h1>
            Hasuo
         </h1>
       </div>
     </section>

     <section id="about">
      <h1>About</h1>
      <div class="content">
        <div id="myImage">
          <img src="../img/nami.png" alt="似顔絵">
        </div>
        <div id="profile">
          <h2>ハスお</h2>
          <p>静岡市出身</p>
          <p>プログラミングや趣味についての<a href="https://yotubarail.work" target="_blank">ブログ</a>をちょこちょこ書いています</p>
          <div id="hobby">
            <h3>趣味</h3>
            <ul>
              <li>鉄道模型</li>
              <li>アニソンDJ</li>
              <li>アニメ・特撮鑑賞、関連グッズ集め</li>
              <li>アマチュア無線</li>
            </ul>
          </div>
          <div id="skill">
            <h3>スキル</h3>
            <ul>
              <li>HTML</li>
              <li>CSS(SCSS)</li>
              <li>JavaScript(Vue.js)</li>
              <li>Node.js</li>
              <li>TypeScript</li>
              <li>Swift(SwiftUI)</li>
              <li>Dart(Flutter)</li>
              <li>
                <a href="https://www.credly.com/badges/eb1c9191-986b-49d9-8fdb-3710f784591d/public_url">AWSクラウドプラクティショナー</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="link">
        <a href="https://twitter.com/yotubarail" target="_blank"><img src="../img/twittericon.png" alt="Twitter"></a>
        <a href="https://github.com/yotubarail" target="_blank"><img src="../img/githubicon.png" alt="GitHub"></a>
        <a href="https://codepen.io/yotubarail" target="_blank"><img src="../img/codepenlogo.png" alt="CodePen"></a>
        <a href="https://www.mixcloud.com/hasuosan/" target="_blank"><img src="../img/mixcloudicon.png" alt="Mixcloud"></a>
      </div>
     </section>

     <section id="works">
       <h1>Works</h1>
       <div class="content">
        <div class="list">
           <a href="https://youtu.be/2j1qZlkmWlg" target="_blank"><img src="../img/denonbu4thOnly.jpg" alt="電音部4th Live使用楽曲オンリーmix"></a>
           <p>電音部4th Live使用楽曲オンリーmix</p>
         </div>
        <div class="list">
           <a href="https://youtu.be/OiVTa2rAfM4" target="_blank"><img src="../img/denonbu3rdOnly.jpg" alt="電音部3rd Live使用楽曲オンリーmix"></a>
           <p>電音部3rd Live使用楽曲オンリーmix</p>
         </div>
        <div class="list">
           <a href="https://youtu.be/LEGZMrHbka4" target="_blank"><img src="../img/denonbu2ndOnly.jpg" alt="電音部2nd Live使用楽曲オンリーmix"></a>
           <p>電音部2nd Live使用楽曲オンリーmix</p>
         </div>
         <div class="list">
           <a href="https://youtu.be/UAOfQvmiRj4" target="_blank"><img src="../img/denonbuOnly.jpg" alt="電音部オンリーmix"></a>
           <p>電音部オンリーmix</p>
         </div>
        <div class="list">
          <router-link :to="{name: 'swiftevent'}">
            <img src="../img/work3.png" alt="Swiftevent">
          </router-link>
          <p>Swiftevent</p>
        </div>
       </div>
     </section>

     <section id="contact">
       <h1>Contact</h1>
       <div class="content">
         <p>お気軽にご連絡ください</p>
         <a href="mailto:313kei@gmail.com">313kei@gmail.com</a>
       </div>
     </section>
   </main>

   <footer>
     <small>&copy; 2021 Hasuo</small>
   </footer>
  </div>
</template>

<script>
export default {
}
</script>
