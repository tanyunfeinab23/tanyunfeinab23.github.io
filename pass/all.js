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
                                    <img :src="item" style=" width: 680px;height: 310px;"/>
                                </li>             
                            <div class="enter" :class="{active:type}">
                                <button @click="left()" style="float: left">&lt;</button>
                                <button @click="right()" style="float: right">&gt;</button>
                            </div>
                        </div>
             </div>`,


        })


