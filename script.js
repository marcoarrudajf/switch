
 var mes;
 function verificames() {
     mes = parseInt(document.calender.nummes.value);

     switch (mes) {
         case 1: document.calender.nommes.value = 'Janeiro'; break;
         case 2: document.calender.nommes.value = 'Fevereiro'; break;
         case 3: document.calender.nommes.value = 'Março'; break;
         case 4: document.calender.nommes.value = 'Abril'; break;
         case 5: document.calender.nommes.value = 'Maio'; break;
         case 6: document.calender.nommes.value = 'Junho'; break;
         case 7: document.calender.nommes.value = 'Julho'; break;
         case 8: document.calender.nommes.value = 'Agosto'; break;
         case 9: document.calender.nommes.value = 'Setembro'; break;
         case 10: document.calender.nommes.value = 'Outubro'; break;
         case 11: document.calender.nommes.value = 'Novembro'; break;
         case 12: document.calender.nommes.value = 'Dezembro'; break;
         default: document.calender.nommes.value = 'Mês Inválido'; break;
     }

 }