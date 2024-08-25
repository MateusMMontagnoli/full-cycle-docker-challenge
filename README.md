# Challenge Full Cycle 3.0 - Docker

Repositorio criado com o intuíto da realização do desafio do módulo de Docker dentro do curso Full Cycle 3.0

## Desafio 1 - Imagem com GOLANG
Para o desafio 1 é necessário criar uma imagem docker com golang para printar na tela a seguinte frase: Full Cycle Rocks!!.
Além disso, é necessário realizar o push da imagem para o Docker Hub.

### O que foi feito

Foram geradas 4 imagens diferentes para as comparações de tamanhos e seus respectivos métodos para comprimir os seus tamanhos.

- Sem nenhuma compressão - golang:latest - 868.88 MB - Dockerfile - Hub:
- Compressão com Alpine - golang:latest - 9.92 MB - Dockerfile.alpine - Hub:
- Compressão com Scratch - golang:latest - 2.12 MB - Dockerfile.latest.scratch - Hub:
- Compressão com Scratch - golang:1.18 - 1.76 MB - Dockerfile.scratch - Hub:




