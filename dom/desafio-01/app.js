new Vue({
  el: desafio,

  data(){
      return{
          nome: "William Lodea Magnabosco",
          idade: "30",
          idadeMultiplicada:0, 
          link: "",
          message: "Me edite"
      }
  },
  
  mounted(){
      this.idadeMultiplicada = Number(this.idade) * 3;
      this.link = "https://images.pexels.com/photos/14005887/pexels-photo-14005887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  }
});