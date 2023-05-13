function openCourse() {
    var selectBox = document.getElementById("courseSelect");
    var selectedCourse = selectBox.options[selectBox.selectedIndex].text;

    var confirmation = confirm(
      "Deseja abrir a página do curso: " + selectedCourse + "?"
    );
    if (confirmation) {
      var newWindow = window.open("", "", "width=600,height=300");
      newWindow.document.write("<h1>" + selectedCourse + "</h1>");
       
      if(selectBox.selectedIndex === 0){
        newWindow.document.write(
            `
            <p>O curso de Análise e Desenvolvimento de Sistemas prepara os alunos para atuarem na área de tecnologia da 
            informação, com foco no desenvolvimento e gerenciamento de sistemas. Os estudantes aprendem a 
            projetar, implementar e manter sistemas computacionais, utilizando diversas linguagens de programação, bancos de dados 
            e tecnologias web. Além disso, o curso aborda temas como análise de requisitos, 
            segurança da informação e gestão de projetos.</p>
            `
          )
      }

      if(selectBox.selectedIndex === 1){
        newWindow.document.write(
            `
            <p>O curso de Logística tem como objetivo formar profissionais capacitados para planejar, executar e controlar as 
            atividades de transporte, armazenamento e distribuição de produtos. Os estudantes aprendem a gerenciar a cadeia de 
            suprimentos, otimizando o fluxo de materiais e informações desde a origem até o destino final. Além disso, o 
            curso abrange temas como gestão de estoques, logística reversa, negociação e operações logísticas.</p>
            `
            
          )
      }

      if(selectBox.selectedIndex === 2){
        newWindow.document.write(
            `
            <p>O curso de Fabricação Mecânica oferece uma formação sólida em processos industriais, com ênfase na 
            produção de peças e componentes mecânicos. Os alunos aprendem a utilizar ferramentas, máquinas e 
            equipamentos para realizar atividades como usinagem, soldagem, montagem e controle de qualidade. O curso abrange 
            conhecimentos técnicos, como desenho técnico, metrologia e automação industrial, além de promover o desenvolvimento de 
            habilidades práticas essenciais para a indústria.</p>
            `
            
          )
      }

    }
  }