<template>
  <div class="publicity-page">
    <div class="bg-wrap">
      <img class="bg-1" src="https://image.yunhan100.com/wap-index/saas_img.png">
    </div>
    <div class="input-wrap">
      <p class="input-tips">——提交信息，免费体验——</p>
      <div class="input-inner">
        <p class="input-title">
          机构名称
          <span style="color:#eb4646;">*</span>
        </p>
        <input class="input" type="text" v-model="org_name">
      </div>
      <div class="input-inner">
        <p class="input-title">
          联系人
          <span style="color:#eb4646;">*</span>
        </p>
        <input class="input" type="text" v-model="fullname">
      </div>
      <div class="input-inner">
        <p class="input-title">
          联系电话
          <span style="color:#eb4646;">*</span>
        </p>
        <input class="input" type="text" v-model="telephone">
      </div>
      <button class="btn" @click.stop.prevent="submitForm">立即提交</button>
    </div>
    <div class="bg-wrap">
      <img class="bg-3" src="https://image.yunhan100.com/wap-index/saas_img_1.png">
    </div>
    <div class="bg-wrap">
      <img class="bg-4" src="https://image.yunhan100.com/wap-index/saas_img_2.png">
    </div>
    <div class="bg-wrap">
      <img class="bg-5" src="https://image.yunhan100.com/wap-index/saas_img_3.png">
    </div>
    <div class="bg-wrap">
      <img class="bg-6" src="https://image.yunhan100.com/wap-index/saas_img_4.png">
    </div>
    <div class="input-wrap">
      <p class="input-tips">——提交信息，免费体验——</p>
      <div class="input-inner">
        <p class="input-title">
          机构名称
          <span style="color:#eb4646;">*</span>
        </p>
        <input class="input" type="text" v-model="org_name">
      </div>
      <div class="input-inner">
        <p class="input-title">
          联系人
          <span style="color:#eb4646;">*</span>
        </p>
        <input class="input" type="text" v-model="fullname">
      </div>
      <div class="input-inner">
        <p class="input-title">
          联系电话
          <span style="color:#eb4646;">*</span>
        </p>
        <input class="input" type="text" v-model="telephone" maxlength="11">
      </div>
      <button class="btn" @click.stop.prevent="submitForm">立即提交</button>
    </div>
  </div>
</template>
<script >
  import { postUse, postUseCount } from "@/api/index";
  export default {
    name: "",
    props: {},
    data() {
      return {
        msg: "宣传页",
        org_name: "",
        fullname: "",
        telephone: "",
        api_flag: false,
        name: "",
        action: false,
        timer: [],
        source_id: ""
      };
    },
    created () {
      let searchParams = window.location.search.slice(1).split('&');
      for (let i = 0; i < searchParams.length; i++) {
        if (searchParams[i].includes('source_id')) {
          this.source_id = searchParams[i].split('=')[1];
          break;
        }
      }
    },
    methods: {
      submitForm() {
        if (this.org_name == "") {
          this.$toast.fail("请填写机构名称");
          return false;
        }
        if (this.fullname == "") {
          this.$toast.fail("请填写联系人");
          return false;
        }
        if (this.telephone.length != 11) {
          this.$toast.fail("请正确填写手机号码");
          return false;
        }
        if (this.api_flag) {
          this.$toast.fail("请勿重复点击");
          return false;
        }
        this.api_flag = true;
        let obj = {
          org_name: this.org_name, //机构名称
          fullname: this.fullname, //联系人
          telephone: this.telephone, //  联系电话
          source: "H5章鱼校长", //来源
          source_id: this.source_id || "0"
        };
        postUse(obj)
          .then(res => {
            this.$toast.success("提交成功");
            this.api_flag = false;
            this.fullname = "";
            this.telephone = "";
            this.org_name = "";
          })
          .catch(e => {
            this.$toast.fail(e);
            this.api_flag = false;
          });
      },

      addCount() {
        postUseCount({
          source_id: this.$route.query.source_id || "0"
        })
          .then(res => {
            this.name = res.data.real_name;
          })
          .catch(e => console.log(e));
      }
    },
    mounted() {
      let obj = {
        title: "章鱼校长，让办学更简单的教务信息化系统",
        link: window.location.href,
        imgUrl: "https://image.yunhan100.com/wap-index/saas_share_logo.png",
        desc: "好用、易用、能落地，还包含能招生的家校互动小程序"
      };
      this.$sharePage(obj);
      this.addCount();
    }
  };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .bg-wrap
    width: 100%;
    height: auto;
    img
      width 100%;
  .input-wrap
    background-color: #fff;
    padding: 50px 35px 70px;
    .input-tips
      font-size: 24px;
      color: #333;
      margin-bottom: 40px;
      text-align: center;
    .input-inner
      margin-bottom: 20px;
      .input-title
        font-size: 28px;
        color: #999;
        margin-bottom: 20px;
      .input
        width: 100%;
        height: 80px;
        line-height: 80px;
        padding: 0 20px;
        box-sizing: border-box;
        border: 2px solid #e5e5e5; /* no */
        border-radius: 5px;
    .btn
      margin-top: 40px;
      font-size: 32px;
      color: #fff;
      text-align: center;
      width: 100%;
      height: 95px;
      line-height: 95px;
      background-color: #0079ea;
      border-radius: 5px;
</style>
