# Troubleshooting
Se você quiser ver os logs durante a execução, basta retirar a opção **-d**.
```
docker-compose up --build
```
Para visualizar os containers criados:
```
docker ps
```
Se o comando **docker ps** não lista nenhum container, utilize:
```
docker ps -a
```
Você verá os containers, seus ID's e Exit Codes respectivos. Para debug, utilize a opção:
```
docker logs id_ou_nome_do_container
```
O **docker-compose** também tem seu comando para logs.
```
docker-compose logs --follow
```
## Shell interativo
Para "entrar" dentro do container:
```
docker exec -it id_ou_nome_do_container sh
```
Esse comando irá executar o shell interativo dentro do seu container. É possível utilizar comando Linux/Unix básicos em praticamente todas as imagens. Navegar por diretórios, visualizar e editar arquivos de texto, etc.

Saia normalmente como um shell comum com a opção **exit**.