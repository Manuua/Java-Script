function verificar (){
   var data = new Date() // data atual
   var ano = data.getFullYear() // ano atual
   var fano = document.getElementById('fano') // ano digitado pelo usuário
   var res = document.getElementById('resposta') // transforma resposta em variavel
      if (fano.value.length == 0 || Number(fano.value )> ano) {
        window.alert('[erro] Verifique se os dados estão corretos')
    
      } else {
       var fsex = document.getElementsByName ('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked){
          genero= "homem" 
          if (idade <= 2 ){
             //bebe
             img.setAttribute('src' , 'imagens/babyboy.png')
             document.body.style.background = '#F2D091'

          } else if  (idade >= 0 && idade <10){
                  //criança 
            img.setAttribute('src' , 'imagens/kidboy.png')
            document.body.style.background = '#F2D091'
          }else if (idade < 25 ){
                  //jovem 
            img.setAttribute('src' , 'imagens/homenteen.png')
            document.body.style.background = '#F2D091'
          }else if (idade <50 ) {
                   // adulto
            img.setAttribute('src' , 'imagens/homenadulto.png')
            document.body.style.background = ' #ADB8CE'
          }else {
                  //idoso
            img.setAttribute ('src' , 'imagens/idosohomen.png')
            document.body.style.background = ' #ADB8CE'
          }
       }else if (fsex[1].checked){
          genero="Mulher"

          if (idade <=2 ){
             //bebe
             img.setAttribute('src', 'imagens/babygirl.png')
             document.body.style.background = '#BF9821'

          }else if (idade >= 0 && idade <10){
                     // criança 
            img.setAttribute('src', 'imagens/kidgirl.png')
            document.body.style.background = '#F2D091'
          }else if (idade < 25 ){
                    //jovem 
            img.setAttribute('src', 'imagens/mulherteen.png')
            document.body.style.background = '#F2D091'
          }else if (idade <50 ) {
                   // adulto
            img.setAttribute('src', 'imagens/mulheradulta.png')
            document.body.style.background = '#F2D091'
          }else {
                  //idoso
            img.setAttribute('src', 'imagens/mulheridosa.png')
            document.body.style.background = '#F2D091'
          }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img)
    }
}

