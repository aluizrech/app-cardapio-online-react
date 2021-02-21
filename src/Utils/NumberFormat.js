export default {

    getFormatter(){
      return new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
      });
    },

}