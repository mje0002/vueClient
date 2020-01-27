import Vue from "vue"

let v = new Vue({
	el: "#app",
	template: `<label>{{name}}</label>`,
	data: {
		name: "World"
	}
})