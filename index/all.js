 // 轮播图
Vue.component('lee', {
            props: ['nihao'],
            data() {
                return {
                    num: 0,
                    ind: 1,
                    type: false,
                    dir: null, //方向
                    arr: this.nihao
                }
            },
            methods: {
                right() {
                    this.dir = 'right'
                    this.ind++;
                    if (this.num >= this.arr.length - 1) {
                        return this.num = 0;
                    } else {
                        return this.num++;
                    }
                },
                left() {
                    this.dir = 'left'
                    this.ind++;
                    console.log(this.num);
                    if (this.num <= 0) {
                        return this.num = this.arr.length-1;
                    } else {
                        return this.num--;
                    }
                },
                out() {
                    this.type = true;
                },
                enter_in() {
                    this.type = false;
                }
            },
              template: `<div>
              <div @mouseenter="out()" @mouseleave="enter_in()" >
                                <li v-for="(item,index) in arr" :key="item" v-show="num==index">
                                    <img :src="item" />
                                </li>             
                            <div class="enter" :class="{active:type}">
                                <button @click="left()" style="float: left">&lt;</button>
                                <button @click="right()" style="float: right">&gt;</button>
                            </div>
                        </div>
             </div>`,


        })

 Vue.component('no2',{
    props:['A'],
        data(){
            return{
                a:0,
                json:this.A
            }
        },
    template:`<div >
            <div class="sand" style="min-height:200px;max-width: 22%;padding:50px 10px;border:1px #ccc solid;margin-left:110px;float:left" >
                <div class="sand-div" style="height: 40px;width: 100%;border-bottom: 1px #ccc solid; margin-bottom:30px;" >
                    <p>{{json.a}}</p>
                </div>
                <div style="font-size: 13px;text-align: left;margin-bottom: 20px;color:#ADADAD">
                    <p>{{json.b}}</p>
                </div>
                <div>
                    <div style="width: 30px;height: 27px;border:1px #ccc solid;line-height: 30px">
                        <span>→</span>
                    </div>
                </div>
            </div>
        </div>`
})
 Vue.component('on4',{
        template:`<div style="width:850px; display: flex; margin-bottom: 60px;">
                                <div style="flex: 1.3">
                                    <img src="img/24.jpg" style="width:160px;height: 100px;">
                                </div>
                                <div style="flex:4.3;">
                                    <h4 style="font-size: 16px;">医疗PPP有望成后起之秀 概念股早盘活跃</h4>
                                    <p style="color: #afafaf;font-size: 12px;">发布日期：2017年03月15日</p>
                                    <p style="color: #8c8c8c;font-size: 12px;">当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...</p>
                                </div>
                            </div>`,
 })
Vue.component('min',{
        template:`  <div style="padding: 20px;min-height: 200px;border:1px #ccc solid;">
                        <div class="hoot" style="border-bottom:1px #ccc dotted;width: 820px;margin-bottom: 30px;">
                            <h3 style="font-size: 18px;">区域销售经理</h3>
                            <p style="font-size: 12px;">发布日期：2016-08-10</p>
                        </div>
                        <div class="clx" style="width: 800px;display: flex;font-size: 15px;margin-bottom: 10px;">
                            <div style="flex: 2 ">
                                <div style="margin-bottom: 5px;">公司事业部：<span>某某公司</span></div>
                                <span>工作地点：<span>北京</span></span>
                            </div>
                            <div style="flex: 1; margin-bottom: 20px;">
                                <div style="margin-bottom: 5px;">
                                    职位性质：<span style=" display: inline-block">制造/生产/加工</span>
                                </div>
                                    招聘人数：<span>10人</span>
                            </div>
                        </div>
                         <div style="border-bottom:1px #ccc dotted;">
                            <div style="margin-bottom: 10px;">
                                <div>职位概述：</div>
                                <p>负责公司全产品华东区域分销工作。</p>
                            </div>
                            <div style="margin-bottom: 10px;line-height: 18px;">
                                <div style="font-size: 15px;">
                                        职位描述：
                                </div>
                                <span>
                                    <p>1. 负责指定地区设备的市场推广工作，完成各项销售目标；</p>
                                    <p>2. 负责完成订单并跟进，确保产品能够及时安装，提高客户满意度；</p>
                                    <p>3. 参与招投标工作，协调市场、产品、销售、物流和服务部门参与项目后期工作；</p>
                                    <p>4. 参与区域市场营销活动,了解参与此类活动的客户信息和动态；<p>
                                    <p> 定期拜访客户，收集客户需求信息并形成拜访报告,协调相关部门解决客户提出的问题；</p>
                                    <p> 参加销售培训，完成市场信息的收集和分析，周期性向销售经理汇报总结。</p>
                                </span>
                            </div>
                            <div style="margin-bottom: 30px;">
                                <div style="font-size: 15px;">
                                    任职条件：
                                </div>
                                <p>1. 理工科相关专业，大学本科以上学历；</p>                     
                                <p>2. 5年以上相关行业销售岗位经验，有大型设备销售经验者优先；</p>
                                <p>3. 掌握公司所在的行业动态，了解公司所经营的产品技术特点；</p>
                                <p>4. 优秀的沟通与执行能力，良好的客户服务意识，高度的敬业精神；</p>
                                <p> 5. 熟练使用WORD，EXCEL，POWERPOINT等办公软件，良好的英语应用能力。</p>
                            </div>
                        </div>
                        <div style="padding-top: 30px;">
                             <div style="padding: 10px 30px;background-color:rgb(227, 0, 131);width: 140px;color: #fff;">
                            申请该职位
                         </div>
                        </div>
                    </div> `
})

