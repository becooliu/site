<template>
  <div class="container-fluid">
    <div class="row row-static">
      <div class="col-md-12">
        <nav class="navbar">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <div class="navbar-brand logo">
              <a href="index.html">
                <img src="../assets/images/logo.jpg" class="img-responsive" alt="logo">
              </a>
            </div>
          </div>

          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li :class="{active: activeFlag == 0}" @click="changeFlag(0)">
                <a href="index.html">
                  首页
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li :class="{active: activeFlag == 1}" @click="changeFlag(1)">
                <router-link :to="{name: 'case'}" tag="a">案例</router-link>
              </li>
              <!-- <li data-href="case">
                <a href="javascript:void(0);" v-link="/case">样板房</a>
              </li>-->
              <li :class="{active: activeFlag == 2}" @click="changeFlag(2)">
                <router-link tag="a" :to="{name: 'news'}">新闻</router-link>
              </li>

              <li :class="{active: activeFlag == 3}" @click="changeFlag(3)">
                <router-link tab="a" :to="{name: 'about'}">关于我们</router-link>
              </li>
              <li :class="{active: activeFlag == 4}" @click="changeFlag(4)">
                <a href="team.html">核心团队</a>
              </li>
              <li :class="{active: activeFlag == 5}" @click="changeFlag(5)">
                <a href="contact.html">联系我们</a>
              </li>
            </ul>
          </div>
          <!-- /.navbar-collapse -->
        </nav>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      activeFlag: 0
    };
  },
  methods: {
    changeFlag(num) {
      this.activeFlag = num;
    }
  }
};
</script>
<style lang="css" scope>
.nav.navbar-nav li.active a {
  background-color: #eee;
}
</style>