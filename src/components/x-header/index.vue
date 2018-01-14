<template>
  <div class="vux-header">
    <div class="vux-header-left">
      <slot name="overwrite-left">
        <transition :name="transition">
          <!--<a class="vux-header-back" @click.preventDefault v-show="_leftOptions.showBack" @click="onClickBack">{{ typeof _leftOptions.backText === 'undefined' ? $t('back_text') : _leftOptions.backText}}</a>-->
        </transition>
        <transition :name="transition">
          <div class="left-arrow" @click="onClickBack" v-show="_leftOptions.showBack"></div>
        </transition>
      </slot>
      <slot name="left"></slot>
    </div>
    <h1 class="vux-header-title" @click="$emit('on-click-title')" v-if="!shouldOverWriteTitle">
      <slot>
        <transition :name="transition">
          <span v-show="title">{{title}}</span>
        </transition>
      </slot>
    </h1>
    <div class="vux-header-title-area" v-if="shouldOverWriteTitle">
      <slot name="overwrite-title"></slot>
    </div>
    <div class="vux-header-right">
      <a class="vux-header-more" @click.preventDefault @click="$emit('on-click-more')" v-if="rightOptions.showMore"></a>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<i18n>
back_text:
  en: Back
  zh-CN: 返回
</i18n>

<script>
import objectAssign from 'object-assign'

export default {
  name: 'x-header',
  props: {
    leftOptions: Object,
    title: String,
    transition: String,
    rightOptions: {
      type: Object,
      default () {
        return {
          showMore: false
        }
      }
    }
  },
  beforeMount () {
    if (this.$slots['overwrite-title']) {
      this.shouldOverWriteTitle = true
    }
  },
  computed: {
    _leftOptions () {
      return objectAssign({
        showBack: true,
        preventGoBack: false
      }, this.leftOptions || {})
    }
  },
  methods: {
    onClickBack () {
      if (this._leftOptions.preventGoBack) {
        this.$emit('on-click-back')
      } else {
        this.$router ? this.$router.back() : window.history.back()
      }
    }
  },
  data () {
    return {
      shouldOverWriteTitle: false
    }
  }
}
</script>

<style lang="less">
@import '../../styles/variable.less';

.vux-header {
  position: relative;
  padding: 3px 0;
  box-sizing: border-box;
  background-color: @header-background-color;
}
.vux-header .vux-header-title {
  line-height: 40px;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  color: @header-title-color;
}
.vux-header-title-area, .vux-header .vux-header-title {
  margin: 0 88px;
  height: 40px;
  width: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.vux-header .vux-header-title > span {
  display: inline-block;
}
.vux-header .vux-header-left,.vux-header .vux-header-right {
  position: absolute;
  top: 14px;
  display: block;
  font-size: 14px;
  line-height: 21px;
  color: @header-text-color;
}
.vux-header .vux-header-left a,.vux-header .vux-header-left button,.vux-header .vux-header-right a,.vux-header .vux-header-right button {
  float: left;
  margin-right: 8px;
  color: @header-text-color;
}
.vux-header .vux-header-left a:active,.vux-header .vux-header-left button:active,.vux-header .vux-header-right a:active,.vux-header .vux-header-right button:active {
  opacity: .5
}
.vux-header .vux-header-left {
  left: 18px
}
.vux-header .vux-header-left .vux-header-back {
  padding-left: 16px
}
.vux-header .vux-header-left .left-arrow {
  position: absolute;
  width: 30px;
  height: 30px;
  top: -5px;
  left: -5px;

  &:before {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    border: 1px solid @header-arrow-color;
    border-width: 1px 0 0 1px;
    transform: rotate(315deg);
    top: 8px;
    left: 7px;
  }
}
.vux-header .vux-header-right {
  right: 15px
}
.vux-header .vux-header-right a,.vux-header .vux-header-right button {
  margin-left: 8px;
  margin-right: 0
}
.vux-header .vux-header-right .vux-header-more:after {
  content: "\2022\0020\2022\0020\2022\0020";
  font-size: 16px;
}
.vux-header-fade-in-right-enter-active {
  animation: fadeinR .5s;
}
.vux-header-fade-in-left-enter-active {
  animation: fadeinL .5s;
}
@keyframes fadeinR {
  0% {
    opacity: 0;
    transform: translateX(150px);
  }
  100% {
    opacity:1;
    transform:translateX(0);
  }
}
@keyframes fadeinL{
  0% {
    opacity: 0;
    transform: translateX(-150px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Andy add */

/*.vux-header {*/
  /*background-color: #3B435B;*/
/*}*/
/*.vux-header .vux-header-left,.vux-header .vux-header-right {*/
  /*top: 19px;*/
/*}*/
/*.vux-header .vux-header-title{*/
  /*height: 50px;*/
  /*line-height: 50px;*/
/*}*/
/*.homeContainer{*/
  /*position: absolute;*/
  /*background-color: #2C2F34;*/
  /*top:0;*/
  /*left:0;*/
  /*right:0;*/
  /*bottom:0;*/
/*}*/
/*.homeContainer .row{*/
  /*display: flex;*/
/*}*/
/*.homeContainer .row>span{*/
  /*display: block;*/
/*}*/
/*.homeContainer select{*/
  /*background-color: #373B4E;*/
  /*border: none;*/
/*}*/
/*.frontContainer{*/
  /*position: absolute;*/
  /*background-color: #3B435B;*/
  /*padding: 18px;*/
  /*border-radius: 10px;*/
  /*left: 20px;*/
  /*right: 20px;*/
/*}*/
/*.frontContainer.main{*/
  /*top: 66px;*/
  /*bottom: 20px;*/
/*}*/
/*.frontContainer.account{*/
  /*top: 16px;*/
  /*color: #fff;*/
/*}*/
/*.tabContainer{*/
  /*position: absolute;*/
  /*background-color: #3B435B;*/
  /*padding: 28px;*/
  /*left: 0;*/
  /*right: 0;*/
  /*bottom: 0;*/
  /*top: 110px;*/
/*}*/
/*.homeContainer .weui-cells:before{*/
  /*border: none;*/
/*}*/
/*.homeContainer .weui-cells:after{*/
  /*border: none;*/
/*}*/
/*.homeContainer .weui-cell:before{*/
  /*border: none;*/
/*}*/
/*.homeContainer .weui-cells{*/
  /*background-color: inherit;*/
/*}*/
/*.homeContainer .weui-input{*/
  /*color: #fff;*/
/*}*/
/*.homeContainer .vux-x-input{*/
  /*background-color: #373B4E;*/
/*}*/
/*.homeContainer div.textarea{*/
  /*background-color: #373B4E;*/
  /*padding: 10px 15px;*/
  /*margin-bottom: 20px;*/
/*}*/
/*.homeContainer textarea{*/
  /*background-color: inherit;*/
  /*width: 100%;*/
  /*border: none;*/
  /*height: 100px;*/
  /*color: #fff;*/
  /*font-size: inherit;*/
  /*resize: none;*/
  /*overflow: scroll;*/
/*}*/
/*.homeContainer textarea:focus, .homeContainer select:focus{*/
  /*outline: none;*/
/*}*/
/*div.mainButton .weui-btn{*/
  /*background-color: #E6863E;*/
  /*color: #fff;*/
/*}*/
/*div.mainButton .weui-btn.weui-btn_disabled{*/
  /*opacity: 0.6;*/
/*}*/
/*div.securityCode .weui-btn_primary{*/
  /*border-radius: 10px;*/
  /*line-height: 2.3;*/
  /*background-color: transparent;*/
  /*border: 1px solid #E6863E;*/
  /*color: #E6863E;*/
/*}*/
/*div.securityCode .vux-flexbox-item:first-child{*/
  /*padding-right: 10px;*/
/*}*/
/*.weui-cells>.weui-cell{*/
  /*margin-bottom: 18px;*/
/*}*/
/*div.agreementCheck{*/
  /*color: #fff;*/
/*}*/
/*div.agreementCheck a{*/
  /*color: #DBAA83;*/
/*}*/
/*div.agreementCheck .weui-cells{*/
  /*font-size: 14px;*/
/*}*/
/*div.paymentCheck .weui-cells{*/
  /*color: #eee;*/
  /*font-size: 14px;*/
  /*line-height: 14px;*/
  /*display: flex;*/
/*}*/
/*div.paymentCheck .weui-cells>label{*/
  /*flex: 1;*/
  /*text-align: center;*/
/*}*/
/*.notice{*/
  /*color: #E6863E;*/
  /*text-decoration-line: underline;*/
  /*font-size: 10px;*/
  /*padding: 4px;*/
  /*text-align: left;*/
/*}*/
/*.notice.center, .notice.center p{*/
  /*text-align: center;*/
/*}*/
/*.tabSwitch{*/
  /*position: absolute;*/
  /*top: 60px;*/
  /*left: 0;*/
  /*right: 0;*/
  /*height: 50px;*/
  /*display: flex;*/
/*}*/
/*.tabSwitch div{*/
  /*flex: 1;*/
  /*text-align: center;*/
  /*line-height: 50px;*/
  /*margin: 0 35px;*/
  /*background-color: #363A4C;*/
  /*color: #BDC7C4;*/
  /*position:relative;*/
/*}*/
/*.tabSwitch div.active{*/
  /*background-color: #3B435B;*/
  /*color: #fff;*/
/*}*/
/*.tabSwitch div:before{*/
  /*content:'';*/
  /*display:block;*/
  /*width:35px;*/
  /*height:50px;*/
  /*position:absolute;*/
  /*transform:skewX(-10deg);*/
  /*background: inherit;*/
  /*border-top-left-radius:5px;*/
  /*left:-30px;*/
  /*top:0;*/
/*}*/
/*.tabSwitch div:after{*/
  /*content:'';*/
  /*display:block;*/
  /*width:35px;*/
  /*height:50px;*/
  /*position:absolute;*/
  /*transform:skewX(10deg);*/
  /*background: inherit;*/
  /*border-top-right-radius:5px;*/
  /*top:0;*/
  /*right:-30px;*/
/*}*/
/*.tokenIcon{*/
  /*position: relative;*/
/*}*/
/*.tokenIcon img{*/
  /*width: 30px;*/
  /*position: absolute;*/
  /*left: 10px;*/
  /*top: 10px;*/
/*}*/
/*.tokenIcon div{*/
  /*color: #BDC7C4;*/
  /*position: absolute;*/
  /*top: 13px;*/
  /*left: 50px;*/
/*}*/


/*!* 个人中心 *!*/

/*.floatContainer{*/
  /*position: relative;*/
  /*background-color: #3B435B;*/
  /*padding: 15px;*/
  /*border-radius: 10px;*/
  /*margin: 15px;*/
/*}*/
/*.floatContainer.infoUp{*/
  /*margin-top: 50px;*/
  /*padding-top: 40px;*/
/*}*/
/*.floatContainer.infoUp div{*/
  /*color: #fff;*/
  /*word-break: break-all;*/
  /*position: relative;*/
/*}*/
/*.floatContainer.infoUp .help{*/
  /*position: absolute;*/
  /*width: 25px;*/
  /*top: 10px;*/
  /*right: 10px;*/
/*}*/
/*.floatContainer.infoUp .userPhone{*/
  /*text-align: center;*/
  /*font-size: 18px;*/
  /*margin-bottom: 10px;*/
/*}*/
/*.floatContainer.infoUp .userId{*/
  /*text-align: center;*/
  /*font-size: 14px;*/
  /*margin-bottom: 10px;*/
/*}*/
/*.floatContainer.infoUp .userWallet{*/
  /*font-size: 14px;*/
  /*line-height: 16px;*/
  /*padding: 0 45px;*/
/*}*/
/*.floatContainer.infoUp .editor{*/
  /*position: absolute;*/
  /*width: 22px;*/
  /*top: 3px;*/
  /*margin-left: 25px;*/
/*}*/
/*.floatContainer.infoUp .share, .frontContainer.account .share{*/
  /*position: absolute;*/
  /*width: 22px;*/
  /*top: 50%;*/
  /*margin-top: -11px;*/
  /*margin-left: 20px;*/
/*}*/
/*.floatContainer.infoUp .userWallet .share{*/
  /*right: 7%;*/
/*}*/
/*.floatContainer.infoMid{*/
  /*display: flex;*/
/*}*/
/*.floatContainer.infoMid img{*/
  /*width: 22px;*/
  /*height: 22px;*/
  /*margin-right: 10px;*/
/*}*/
/*.floatContainer.infoMid span{*/
  /*display: block;*/
  /*color: #fff;*/
  /*font-size: 14px;*/
  /*line-height: 25px;*/
/*}*/
/*.floatContainer.infoMid span:last-child{*/
  /*flex:1;*/
  /*text-align: right;*/
/*}*/
/*.floatContainer.infoDown{*/
  /*padding: 0;*/
/*}*/
/*.floatContainer.infoDown ul>li{*/
  /*list-style: none;*/
  /*display: flex;*/
  /*color: #fff;*/
  /*padding: 18px;*/
  /*position: relative;*/
/*}*/
/*.floatContainer.infoDown ul>li img{*/
  /*width: 18px;*/
  /*height: 18px;*/
  /*margin-right: 16px;*/
/*}*/
/*.floatContainer.infoDown ul>li span{*/
  /*display: block;*/
  /*font-size: 13px;*/
  /*letter-spacing: 1px;*/
/*}*/
/*.floatContainer.infoDown ul>li span:nth-child(2){*/
  /*width: 110px;*/
/*}*/
/*.floatContainer.infoDown ul>li span:last-child{*/
  /*position: absolute;*/
  /*top: 50%;*/
  /*margin-top: -10px;*/
  /*right: 4%;*/
/*}*/
/*.homeContainer>.mainButton{*/
  /*margin: 0 15px;*/
/*}*/
/*.homeAvatar{*/
  /*position: absolute;*/
  /*width: 70px;*/
  /*height: 70px;*/
  /*top: -35px;*/
  /*left: 50%;*/
  /*margin-left: -35px;*/

/*}*/

/*!* 个人钱包 *!*/

/*.frontContainer.account .avatar img{*/
  /*margin: 10px auto auto 0;*/
/*}*/
/*.frontContainer.account>div{*/
  /*text-align: center;*/
/*}*/
/*.frontContainer.account .userId{*/
  /*position: relative;*/
  /*font-size: 13px;*/
  /*margin-top: 10px;*/
/*}*/
/*.frontContainer.account .mainButton{*/
  /*margin-top: 20px;*/
  /*padding: 5px 30px;*/
/*}*/
/*.frontContainer.account .mainButton button{*/
  /*font-size: 15px;*/
/*}*/
/*.frontContainer.account .tokenInfo {*/
  /*display: flex;*/
  /*padding-bottom: 5px;*/
/*}*/
/*.frontContainer.account .tokenInfo img{*/
  /*width: 30px;*/
  /*height: 30px;*/
  /*margin-right: 10px;*/
/*}*/
/*.frontContainer.account .tokenInfo span{*/
  /*display: block;*/
  /*color: #fff;*/
  /*font-size: 13px;*/
  /*line-height: 30px;*/
/*}*/
/*.frontContainer.account .tokenInfo span:last-child{*/
  /*flex:1;*/
  /*text-align: right;*/
  /*font-size: 16px;*/
  /*color: #E6863E;*/
/*}*/






/*.frontContainer.transfer{*/
  /*top: 230px;*/
  /*bottom: 0;*/
  /*padding-top: 10px;*/
  /*border-radius: 10px 10px 0 0;*/
/*}*/
/*.frontContainer.transfer ul>li{*/
  /*display: flex;*/
  /*color: #fff;*/
  /*padding: 20px 0;*/
  /*border-bottom: 1px solid #4C5469;*/
/*}*/
/*.frontContainer.transfer ul>li:last-child{*/
  /*border-bottom: none;*/
/*}*/
/*.frontContainer.transfer ul>li div{*/
  /*line-height: 30px;*/
  /*font-size: 14px;*/
/*}*/
/*.frontContainer.transfer ul>li div:last-child{*/
  /*flex: 1;*/
  /*text-align: right;*/
/*}*/
/*.frontContainer.transfer ul>li img{*/
  /*width: 30px;*/
  /*height: 30px;*/
  /*margin-right: 10px;*/
/*}*/
/*.homeContainer .transferCover{*/
  /*position: absolute;*/
  /*top: 0;*/
  /*left: 0;*/
  /*right: 0;*/
  /*z-index: 10;*/
  /*background-color: #3B3E4E;*/
  /*min-height: 100%;*/
  /*display: flex;*/
/*}*/
/*.homeContainer .transferCover .leftHandle{*/
  /*flex: 0 0 20%;*/
  /*background-color: #B4B6BC;*/
/*}*/
/*.homeContainer .transferCover .main{*/
  /*position: relative;*/
  /*flex: 0 0 80%;*/
/*}*/
/*.transferCover .main>ul>li{*/
  /*list-style: none;*/
  /*display: flex;*/
  /*color: #fff;*/
  /*background-color: #4A546D;*/
  /*padding: 20px 0;*/
  /*border-bottom: 1px solid #4C5469;*/
/*}*/
/*.transferCover .main>ul>li img{*/
  /*width: 30px;*/
  /*height: 30px;*/
  /*margin: 0 10px;*/
/*}*/
/*.transferCover header{*/
  /*color: #fff;*/
  /*background-color: #3D4865;*/
  /*padding: 15px;*/
  /*text-align: center;*/
  /*position: relative;*/
/*}*/
/*.transferCover header span{*/
  /*display: block;*/
  /*position: absolute;*/
  /*padding-right: 10px;*/
  /*right: 0;*/
  /*top: 15px;*/
/*}*/
/*.transferCover .targetInfo div:first-child{*/
  /*font-size: 10px;*/
  /*color: #fff;*/
/*}*/
/*.transferCover .targetInfo div:last-child{*/
  /*font-size: 10px;*/
  /*color: #9DA6AB;*/
/*}*/
/*.transferCover .main .amountInfo{*/
  /*flex: 1;*/
  /*font-size: 10px;*/
  /*text-align: right;*/
  /*padding-right: 5px;*/
/*}*/
/*.transferCover .main .mainButton{*/
  /*position: absolute;*/
  /*bottom: 0;*/
  /*left: 0;*/
  /*right: 0;*/
/*}*/

/*.homeContainer .dialogWindow{*/
  /*position: fixed;*/
  /*top: 0;*/
  /*left: 0;*/
  /*right: 0;*/
  /*bottom: 0;*/
  /*background-color: rgba(0,0,0,0);*/
  /*z-index: 50;*/
/*}*/
/*.dialogWindow>section{*/
  /*background-color: #3A435B;*/
  /*border-radius: 5px;*/
  /*overflow: hidden;*/
  /*margin: 80px auto 0 auto;*/
  /*width: 80%;*/
/*}*/
/*.dialogWindow .main{*/
  /*padding: 0 10px;*/
/*}*/
/*.dialogWindow .main.transferInfo{*/
  /*padding: 0 25px 25px 25px;*/
/*}*/
/*.dialogWindow .main.transferInit>div{*/
  /*margin:10px 0;*/
/*}*/
/*.dialogWindow .main.transferInit>div:last-child{*/
  /*margin-bottom: 5px;*/
/*}*/
/*.dialogWindow .main.transferInfo .summary{*/
  /*color: #fff;*/
  /*position: relative;*/
/*}*/
/*.dialogWindow .main.transferInfo .summary img{*/
  /*width: 20px;*/
  /*height: 20px;*/
  /*margin-left: auto;*/
/*}*/
/*.dialogWindow .main.transferInfo .summary div{*/
  /*margin-right: auto;*/
  /*margin-left: 5px;*/
  /*line-height: 20px;*/
/*}*/
/*.dialogWindow .transferInfo .partyInfo div:first-child{*/
  /*color: #C8D2CE;*/
  /*font-size: 15px;*/
/*}*/
/*.dialogWindow .transferInfo .partyInfo div:nth-child(2){*/
  /*-ms-word-break: break-all;*/
  /*word-break: break-all;*/
  /*flex: 1;*/
/*}*/
/*.dialogWindow .transferInfo .partyInfo span{*/
  /*display: block;*/
/*}*/
/*.dialogWindow .transferInfo .partyInfo span:first-child{*/
  /*color: #fff;*/
  /*font-size: 14px;*/
  /*line-height: 16px;*/
  /*padding-top: 4px;*/
/*}*/
/*.dialogWindow .transferInfo .partyInfo span:nth-child(2){*/
  /*color: #757575;*/
  /*font-size: 12px;*/
/*}*/
/*.dialogWindow .transferInfo .details{*/
  /*color: #909AA0;*/
  /*font-size: 12px;*/
  /*line-height: 13px;*/
/*}*/
/*.dialogWindow .transferInfo .details span:last-child{*/
  /*flex: 1;*/
  /*text-align: right;*/
/*}*/
/*.dialogWindow .transferInfo .details .verify{*/
  /*color: inherit;*/
  /*padding: 2px 16px;*/
  /*font-size: 10px;*/
  /*border: 1px solid #8E654E;*/
  /*border-radius: 3px;*/
/*}*/
/*.dialogWindow header{*/
  /*color: #fff;*/
  /*font-size: 14px;*/
  /*margin-bottom: 10px;*/
  /*background-color: #3D4865;*/
  /*line-height: 35px;*/
  /*position: relative;*/
/*}*/
/*.dialogWindow header .close{*/
  /*position: absolute;*/
  /*right: 5px;*/
/*}*/
/*.dialogWindow .mainButton button{*/
  /*border-radius: unset;*/
/*}*/
/*.dialogWindow .targetId img{*/
  /*width: 30px;*/
  /*height: 30px;*/
  /*margin: 6px;*/
/*}*/
/*.dialogWindow .targetId .vux-x-input{*/
  /*flex: 1;*/
/*}*/

/*.dialogWindow .nickName img{*/
  /*width: 35px;*/
  /*height: 35px;*/
/*}*/
/*.dialogWindow .amount .vux-x-input{*/
  /*flex: 1;*/
/*}*/
/*.dialogWindow .amount select{*/
  /*margin-left: 10px;*/
  /*color: #757575;*/
  /*min-width: 70px;*/
  /*padding-left: 5px;*/
/*}*/
/*.dialogWindow .serviceCharge{*/
  /*padding: 0 10px;*/
  /*color: #8F989D;*/
/*}*/
/*.dialogWindow .serviceCharge span{*/
  /*display: block;*/
  /*font-size: 12px;*/
/*}*/
/*.dialogWindow .serviceCharge span:last-child{*/
  /*flex:1;*/
  /*text-align: right;*/
/*}*/

  /*!* 支付页面 *!*/
/*.homeContainer .payTitle h1:first-child{*/
  /*color: #eee;*/
  /*font-size: 20px;*/
  /*flex: 1;*/
/*}*/
/*.homeContainer .payTitle h1:last-child{*/
  /*color: #F3B992;*/
  /*font-size: 20px;*/
/*}*/
/*.homeContainer .payTitle{*/
  /*padding-bottom: 10px;*/
  /*border-bottom: 1px solid #3F4C66;*/
/*}*/
/*.homeContainer .advertise h2{*/
  /*color: #eee;*/
  /*font-size: 19px;*/
/*}*/
/*.homeContainer .advertise{*/
  /*margin: 10px 0;*/
/*}*/
/*.homeContainer .advBlocks div{*/
  /*flex: 1;*/
/*}*/
/*.homeContainer .advBlocks div>p{*/
  /*border: 1px solid #615251;*/
  /*border-radius: 3px;*/
  /*color: #eee;*/
  /*font-size: 12px;*/
  /*padding: 4px 12px;*/
  /*width: 65px;*/
  /*height: 82%;*/
  /*margin: 0 auto;*/
/*}*/
/*.homeContainer .advBlocks div:nth-child(2){*/

/*}*/
/*.homeContainer .promotionCode{*/
  /*margin-top: 10px;*/
/*}*/
/*.homeContainer .codeWarnings{*/
  /*color: #929B9F;*/
  /*font-size: 13px;*/
/*}*/
</style>
