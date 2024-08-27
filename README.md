# Challenge Full Cycle 3.0 - Docker

Repositorio criado com o intuíto da realização do desafio do módulo de Docker dentro do curso Full Cycle 3.0

## Desafio 1 - Imagem com GOLANG
Para o desafio 1 é necessário criar uma imagem docker com golang, com tamanho inferior a 2 MB, para printar na tela a seguinte frase: Full Cycle Rocks!!.
Além disso, é necessário realizar o push da imagem para o Docker Hub.

### O que foi feito

Foram geradas 4 imagens diferentes para as comparações de tamanhos e seus respectivos métodos para comprimir os seus tamanhos.
| Multistage Building | Imagem | Tamanho | Nome do Dockerfile | Docker Hub| 
| --- | --- |  --- |  --- |  --- |
| --- | golang:latest | 868.88 MB | Dockerfile | [Hub](https://hub.docker.com/layers/mateusmarquesmontagnoli/go-challenge/latest/images/sha256-795bb38d9c60ef31c294700df1916250e99914e8f748eb5399be07cd0ffb3d39?context=explore)
| Alpine | golang:latest | 9.92 MB | Dockerfile.alpine | [Hub](https://hub.docker.com/layers/mateusmarquesmontagnoli/go-challenge/alpine/images/sha256-fb12dc8b9f5ea4c2da20412ace6ba381dbd1e710a562d05cbc596034f77daf57?context=explore)
| Scratch | golang:latest | 2.12 MB | Dockerfile.latest.scratch | [Hub](https://hub.docker.com/layers/mateusmarquesmontagnoli/go-challenge/scratch-latest/images/sha256-cc2fd64476fba107a52d6c2ec7fada6ac36070be3f26c3dd32527549df1d366e?context=explore)
| Scratch | golang:1.18 | 1.76 MB | Dockerfile.scratch | [Hub](https://hub.docker.com/layers/mateusmarquesmontagnoli/go-challenge/scratch-1.18/images/sha256-6625707b54b5e437a82bf81487bc3458cfc2c6b6c75fffc88fb5bb2b582bef31?context=explore)

Após a geração de todas as imagens, é possível checar o tamanhos das imagens através do docker image ls
```bash
docker image ls | grep <seu-filtro>
```

Após o comando temos os tamanhos das imagens
```bash
mateusmarquesmontagnoli/go-scratch-latest   latest    bfcfece0d844   5 minutes ago   2.12MB
mateusmarquesmontagnoli/go-scratch          latest    4f7ecaa46b07   8 minutes ago   1.76MB
mateusmarquesmontagnoli/go-alpine           latest    d591a488c74d   8 minutes ago   9.92MB
mateusmarquesmontagnoli/go-basic            latest    fa7856b8390d   9 minutes ago   869MB
```
Ao executar a imagem via run:
```bash
docker run -it nome_da_imagem"
```
No terminal deverá aparecer Full Cycle Rocks!!

## Desafio 2 - Proxy Reverso com NGINX
Para o desefio 2 é necessário criar uma aplicação node.js que utilize o NGINX como proxy reverso e consiga conectar-se com um banco mysql.
A porta de conexão do NGINX será 8080 -> 80, na qual deve redirecionar para o node.js que está expondo a porta 3000.
Ao ser requisitado, o node deve mostrar na tela os seguintes dados:
-  `<h1>Full Cycle Rocks</h1>`;
- Lista de nomes cadastrada no banco de dados.

### O que foi feito

Para o fluxo de redirecionamento e conexão com o banco, foi necessário colocar depências entre os containers, aonde o node é depende do db estar rodando, enquanto isso, o nginx é dependente do node para iniciar.

Foram criadas duas networks entre os containers:
| Network | Integrantes | 
| --- | --- | 
| node-nginx-network | node-application | 
| node-nginx-network | nginx | 
| node-mysql-network | node-application | 
| node-mysql-network | nodechallengedb | 

Para a utilizar o nginx como proxy reverso, foi necessário a criação do nginx.conf para configurar o encaminhamento das solicitações para o container do node

Para subir os containers basta utilizar o comando abaixo: 
```bash
docker-compose up -d
```
Na renderização da tela foi utilizado uma view com ejs.

