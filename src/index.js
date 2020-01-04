import lee from './lee.vue'

var index = {
	install(Vue){
		Vue.component('lees',lee)
		Vue.component('xxx',{
			template:'<p>hello</p>'
		})
		Vue.filter('c',(a)=>{
			return a+'hello'
		})
	}
}

export default index

