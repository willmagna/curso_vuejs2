new Vue({
	el: '#desafio',
	data: {
		className: null,
		isLoad04: false,
		isLoad05: false,
		colorNumber05: "red",
		className05: null,
		initiateLoading: false,
		styleSheet: {
			width: '100px',
			height: '100px'
		}
	},
	methods: {
		iniciarEfeito() {
		
			const element = document.getElementById("efeito");
			element.classList.add("destaque");
			setInterval(() => {
				element.classList.toggle("encolher");
			}, 500);

		},
		iniciarProgresso() {
			this.initiateLoading = true;
		}
	},

	computed: {
		styleNumber05(){
			return {
				backgroundColor: this.colorNumber05,
			}
		}
	}
})
