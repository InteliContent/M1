# Semana 4: Entrega do Projeto Individual  

Na primeira parte desta atividade você vai visitar o **Tutorial Oficial do Phaser** e construir o jogo de plataforma proposto ali. Na segunda parte, você vai estudar duas versões de código do Jogo do Dragão e investigar a estrutura de cenas do Phaser. No final deste tutorial, você deve entregar e publicar os resultados do seu Projeto Individual.

<br>

## Parte 4.1: Exercício Tutorial Phaser 

<img src="assets/bn-phaser3.png" alt="Banner Tutorial Phaser" style="width:75%"/>

<p>
<br>

Agora que você já realizou pelo menos 3 exercícios usando o Phaser e estruturando alguns arquivos, **realize o tutorial disponível no site do Phaser**. É um tutorial dividido em 10 etapas que guia a construção de um jogo de plataforma com plano de fundo, plataformas, personagem, placar, estrelas, bombas e diferentes dificuldades. 

Acesse aqui: [Tutorial Phaser](https://phaser.io/tutorials/making-your-first-phaser-3-game/part1). 

Siga as etapas indicadas no Tutorial Phaser e realize o jogo. Você deve conseguir realizar um jogo como o da imagem a seguir. 

<img src="assets/resultado_part10.png" alt="Banner Tutorial Phaser" style="width:55%"/>

<p>
<br>

## Parte 4.2: Exercício do Dragão 
### Dividindo em cenas

<img src="assets/bn-dragon.png" alt="Banner Dragão" style="width:60%"/>

<p>
<br>

Depois de ter realizado o Tutorial do Phaser, estude os códigos disponibilizados nos links a seguir. São duas versões do mesmo jogo "Flappy Dragon" ('uma cena' e 'duas cenas'). Os dois jogos são praticamente iguais, mas a estrutura de seus códigos apresentam uma diferença importante: enquanto uma das versões foi feita com a estrutura de código que usamos até aqui (versão 'uma cena'), a segunda versão apresenta o mesmo jogo, mas usa a estrutura de Cenas (scenes) do Phaser (versão 'duas cenas').

**Flappy Dragon (uma cena): [Jogável Dragão (uma cena)](https://intelicontent.github.io/M1-EX/exercicio_dragao/CenaUnica/oneScene.html)  e [Código Jogo Dragão (uma cena)](https://github.com/InteliContent/M1-EX/blob/main/exercicio_dragao/CenaUnica/oneScene.html)**.

O Phaser oferece uma arquitetura baseada em *scenes* (cenas) para organizar e gerenciar diferentes partes do jogo. As cenas são instâncias da classe ``Phaser.Scene`` e representam diferentes estados ou fases do jogo. Cada cena contém sua própria lógica, gráficos e interações, além de seus elementos, como backgrounds, sprites, textos, e outros.  

**Versão do jogo feito com duas cenas: [Jogável Dragão (duas cenas)](https://intelicontent.github.io/M1-EX/exercicio_dragao/duasCenas.html) e [Código Jogo Dragão (duas cenas)](https://github.com/InteliContent/M1-EX/tree/main/exercicio_dragao)**  

Comece explorando o arquivo ``duasCenas.html``. Depois, veja os arquivos ``welcome.js`` e ``flappyDragon.js`` (pasta ``scenes``). Repare que no arquivo ``duasCenas.html`` incluímos as duas cenas construídas usando o comando ``scene: [Welcome, FlappyDragon]`` dentro das configurações.

A estrutura que você encontrará nos arquivos ``.js`` da versão ``duas cenas`` é similar a estrutura apresentada a seguir. Para construir uma cena Phaser, precisamos declarar o nome da classe que vamos construir ``Scene1``, além de declarar as funções ``preload(), create() e update()``, seguindo a mesma lógica que usamos nos outros exercícios.

```
class Scene1 extends Phaser.Scene {
    constructor() {
        super({ key: 'Scene1' });
    }

    preload() {
        // Carregar recursos
    }

    create() {
        // Configuração inicial da cena
    }

    update() {
        // Lógica de atualização da cena
    }
}
```

**Compare as duas versões do código e tente entender como esse jogo foi estruturado em duas cenas.**

<br>

## Desenvolvendo o Projeto Individual

Depois de ter realizado diversos exercícios com Phaser, chegou a hora de desenvolver seu Projeto Individual: um mini jogo de plataforma. Inspire-se nos exercícios que fizemos até aqui, adapte códigos, assets e estruturas e crie o seu jogo de plataforma autoral.  

Consideraremos que o seu jogo é ``autoral`` se houverem suficientes modificações nos códigos e exemplos adaptados na entrega, ou seja, **não devem ser apresentados enquanto resultado do ``Projeto Individual`` "cópias" dos exercícios realizados até aqui**.  

É esperado que você adapte os recursos que usamos, mas também que inclua novos cenários, modifique o formato da tela, a narrativa do jogo, a imagem e os movimentos do personagem, adapte os controles, altere a gravidade, dentre muitas outras modificações possíveis para as estruturas exploradas até aqui. Use sua criatividade!  

Veja a seguir os requisitos mínimos desse Projeto Individual (mini jogo), as instruções de entrega e a atribuição de pontos.

<br>

### Requisitos do Projeto Individual  

**Elementos do Jogo**  
Você deve apresentar pelo menos um cenário, um personagem, uma plataforma (ou barreira) e um sistema de pontuação (placar).

**Estrutura em Cenas (mínimo de duas)**  
Você deve estruturar seu jogo em Cenas (Scenes), apresentando pelo menos duas, por exemplo uma tela de início *(welcome)* e uma fase jogável. Você também pode incluir uma cena (ou um estado) para o fim do jogo *(game over)*.

**Controle do Jogo**  
Você deve construir e apresentar para o seu jogador os controles de seu jogo. Indique na tela de início "como jogar". Você deve apresentar pelo menos dois "controles" (por exemplo, ``seta direita`` e ``seta esquerda``) para o seu jogo.

**Elemento Animado ou Efeito Especial**  
Você deve incluir pelo menos um elemento com animação (como no exercício do pássaro e no tutorial do phaser) ou um "efeito especial" para o personagem (como no exercício do alienígena, onde incluímos o "efeito turbo").

**Estrutura Lógica no Jogo**  
Você deve apresentar as estruturas de dados, condicionais e repetições que vimos até aqui em seu jogo. Use, por exemplo, a estrutura ``if (condição) {acontecimento}`` para estabelecer alguma condição que dispare um evento no jogo, a estrutura de ``lista`` para organizar um conjunto de dados, e as estruturas ``while`` ou ``for`` para construir repetições.

**Colisão ou Overlap**  
Estabeleça pelo menos uma decorrência em função de uma colisão ou overlap de dois elementos na tela. 

**Código Organizado e Comentado**  
Mantenha seu código organizado e comentado. Crie comentários para as principais funções do seu jogo e para todos os detalhes que considerar importantes para o entendimento de sua estrutura. Revise o nome de suas variáveis, mantendo as nomeações padronizados e compreensíveis, além de rever as identações de seu código (espaços e tabulações para alinhar e estruturar os blocos de código).

<br>

### Realizando a entrega

Depois de testar seu jogo, publique em seu GitHub Individual e disponibilize, no card da Adalove, dois links: o **link para o código do seu Projeto Individual** e o **link para versão jogável (publique no GitHub Pages)**. 

**Inclua no card da Adalove** o título de seu jogo, além de uma descrição narrativa ou contextual (*"um alienígena precisa pegar moedas no cenário"*) e a descrição dos controles de seu jogo (*"use as setas do teclado para mover o alienígena"*). 

Você pode copiar essa estrutura e completá-la com sua resposta: 


```
1. Título do Jogo: (insira aqui o nome do seu jogo)

2. Contexto: (insira aqui uma pequena explicação da narrativa do seu jogo)

3. Controles: (insira aqui os controles do seu jogo)

4. Link do código (GitHub Individual): (insira aqui o link para o código do seu Projeto Individual)

5. Link da versão jogável (GitHub Pages): (insira aqui o link da versão jogável do seu Projeto Individual)

6. Dúvidas, dificuldades ou comentários?

```


#### Sobre a avaliação  

- Inseriu e estruturou corretamente todos os elementos necessários no jogo (cenário, personagem, obstáculo/plataforma e placar): até 1 ponto
- Estruturou e apresentou corretamente os controles do jogo: até 1 ponto
- Construiu corretamente o jogo com uma estrutura de 2 cenas: até 1 ponto
- Inseriu e configurou corretamente um elemento animado (movimento na tela ou uso de spritesheet): até 1 ponto
- Utilizou e explorou as estruturas apresentadas no módulo (apresente pelo menos uma estrutura condicional, uma estrutura de repetição, uma função e uma lista): até 1 ponto
- Utilizou e configurou corretamente recursos de overlap ou colisão: até 1 ponto
- Apresentou código organizado e comentado: até 1 ponto
- Publicou o projeto (com pastas organizadas) no GitHub Individual: até 1 ponto
- Apresentou título e explicou contexto e controle do jogo (na resposta do card da Adalove): até 1 ponto
- Desafio! Publicou uma versão jogável de seu Projeto Individual no GitHub Pages (não esqueça de enviar o link no card da Adalove!): até 1 ponto