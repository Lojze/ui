<template>
  <div id="app">
    <div class="button">
      <z-Button>默认按钮</z-button>
      <z-Button type="success">成功按钮</z-button>
      <z-Button type="warning">警告按钮</z-button>
      <z-Button type="error">错误按钮</z-button>
      <z-Button type="link">文字按钮</z-button>
    </div>
    <div class="main">
      <div class="icon" v-for="(item, index) in iconList" :key="index">
        <z-icon class="i" :name="item" />
        <span>{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      iconList: [],
    };
  },
  created() {
    this.filterFn();
  },
  methods: {
    filterFn() {
      let laptop = {
        list:
          "fileprotect,diff-fill,file-add,file-copy-fill,file-excel,snippets-fill,file-exclamation,batchfolding-fill,file-pdf,reconciliation-fill,file-image,folder-add-fill,file-markdown,folder-fill,file-unknown,folder-open-fill,file-ppt,database-fill,file-word,container-fill,file,sever-fill,file-zip,calendar-check-fill,file-text,image-fill,file-copy,idcard-fill,snippets,creditcard-fill,audit,fund-fill,diff,read-fill,Batchfolding,contacts-fill,securityscan,delete-fill,propertysafety,notification-fill,safetycertificate,flag-fill,insurance,moneycollect-fill,alert,medicinebox-fill,delete,rest-fill,hourglass,shopping-fill,bulb,skin-fill,experiment,video-fill,bell,sound-fill,trophy,bulb-fill,rest,bell-fill,USB,filter-fill,skin,fire-fill,home,funnelplot-fill,bank,gift-fill,filter,hourglass-fill,funnelplot,home-fill,like,trophy-fill,unlike,location-fill,unlock,cloud-fill,lock,customerservice-fill,customerservice,experiment-fill,flag,eye-fill,moneycollect,like-fill,medicinebox,lock-fill,shop,unlike-fill,rocket,star-fill,shopping,unlock-fill,folder,alert-fill,folder-open,api-fill,folder-add,highlight-fill,deploymentunit,phone-fill,accountbook,edit-fill,contacts,pushpin-fill,carryout,rocket-fill,calendar-check,thunderbolt-fill,calendar,tag-fill,scan,wrench-fill,select,tags-fill,boxplot,bank-fill,build,camera-fill,sliders,error-fill,laptop,crown-fill,barcode,mail-fill,camera,car-fill,cluster,printer-fill,gateway,shop-fill,car,setting-fill,printer,USB-fill,read,golden-fill,cloud-server,build-fill,cloud-upload,boxplot-fill,cloud,sliders-fill,cloud-download,alibaba,cloud-sync,alibabacloud,video,antdesign,notification,ant-cloud,sound,behance,radarchart,googleplus,qrcode,medium,fund,google,image,IE,mail,amazon,table,slack,idcard,alipay,creditcard,taobao,heart,zhihu,block,HTML,error,linkedin,star,yahoo,gold,facebook,heatmap,skype,wifi,CodeSandbox,attachment,chrome,edit,codepen,key,aliwangwang,api,apple,disconnect,android,highlight,sketch,monitor,Gitlab,link,dribbble,man,instagram,percentage,reddit,pushpin,windows,phone,yuque,shake,Youtube,tag,Gitlab-fill,wrench,dropbox,tags,dingtalk,scissor,android-fill,mr,apple-fill,share,HTML-fill,branches,windows-fill,fork,QQ,shrink,twitter,arrawsalt,skype-fill,verticalright,weibo,verticalleft,yuque-fill,right,Youtube-fill,left,yahoo-fill,up,wechat-fill,down,chrome-fill,fullscreen,alipay-circle-fill,fullscreen-exit,aliwangwang-fill,doubleleft,behance-circle-fill,doubleright,amazon-circle-fill,arrowright,codepen-circle-fill,arrowup,CodeSandbox-circle-f,arrowleft,dropbox-circle-fill,arrowdown,github-fill,upload,dribbble-circle-fill,colum-height,googleplus-circle-f,vertical-align-botto,medium-circle-fill,vertical-align-middl,QQ-circle-fill,totop,IE-circle-fill,vertical-align-top,google-circle-fill,download,dingtalk-circle-fill,sort-descending,sort-ascending,fall,swap,stock,rise,indent,outdent,menu,unorderedlist,orderedlist,align-right,align-center,align-left,pic-center,pic-right,pic-left,bold,font-colors,exclaimination,check-circle,font-size,CI,infomation,Dollar,line-height,compass,strikethrough,close-circle,underline,frown,number,info-circle,italic,left-circle,code,down-circle,column-width,EURO,check,copyright,ellipsis,minus-circle,dash,meh,close,plus-circle,enter,play-circle,line,question-circle,minus,Pound,question,right-circle,rollback,smile,small-dash,trademark,pause,time-circle,bg-colors,timeout,crown,earth,drag,YUAN,desktop,up-circle,gift,warning-circle,stop,sync,fire,transaction,thunderbolt,undo,check-circle-fill,redo,left-circle-fill,reload,down-circle-fill,reloadtime,minus-circle-fill,message,close-circle-fill,dashboard,info-circle-fill,issuesclose,up-circle-fill,poweroff,right-circle-fill,logout,plus-circle-fill,piechart,question-circle-fill,setting,EURO-circle-fill,eye,frown-fill,location,copyright-circle-fil,edit-square,CI-circle-fill,export,compass-fill,save,Dollar-circle-fill,Import,poweroff-circle-fill,appstore,meh-fill,close-square,play-circle-fill,down-square,Pound-circle-fill,layout,smile-fill,left-square,stop-fill,play-square,warning-circle-fill,control,time-circle-fill,codelibrary,trademark-circle-fil,detail,YUAN-circle-fill,minus-square,heart-fill,plus-square,piechart-circle-fil,right-square,dashboard-fill,project,message-fill,wallet,check-square-fill,up-square,down-square-fill,calculator,minus-square-fill,interation,close-square-fill,check-square,codelibrary-fill,border,left-square-fill,border-outer,play-square-fill,border-top,up-square-fill,border-bottom,right-square-fill,border-left,plus-square-fill,border-right,accountbook-fill,border-inner,carryout-fill,border-verticle,calendar-fill,border-horizontal,calculator-fill,radius-bottomleft,interation-fill,radius-bottomright,project-fill,radius-upleft,detail-fill,radius-upright,save-fill,radius-setting,wallet-fill,adduser,control-fill,deleteteam,layout-fill,deleteuser,appstore-fill,addteam,mobile-fill,user,tablet-fill,team,book-fill,areachart,redenvelope-fill,linechart,safetycertificate-f,barchart,propertysafety-fill,pointmap,insurance-fill,container,securityscan-fill,database,file-exclamation-fil,sever,file-add-fill,mobile,file-fill,tablet,file-excel-fill,redenvelope,file-markdown-fill,book,file-text-fill,filedone,file-ppt-fill,reconciliation,file-unknown-fill,file-exception,file-word-fill,filesync,file-zip-fill,filesearch,file-pdf-fill,solution,file-image-fill",
      };
      this.iconList = laptop.list.split(",");
    },
  },
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<style scope>
.main {
  /* display: flex;
  flex-wrap: wrap; */
  direction: ltr;
}
.icon {
  position: relative;
  float: left;
  width: 16.66%;
  height: 100px;
  margin: 3px 0;
  padding: 10px 0 0;
  overflow: hidden;
  color: #555;
  text-align: center;
  list-style: none;
  background-color: inherit;
  border-radius: 4px;
  cursor: pointer;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.icon:hover {
  color: #fff;
  background-color: #1890ff;
}
.icon:hover .i svg {
  fill: #fff !important;
}
</style>
