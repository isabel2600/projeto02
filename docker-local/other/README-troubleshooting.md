## Troubleshooting
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
## Outras opções

Parar os containers sem removê-los:
```
docker-compose stop
```
Reiniciar os containers parados com comando **stop**:
```
docker-compose start
```
Reiniciar container em execução:
```
docker-compose restart
```
## Limpando imagens criadas

Para visualizar as imagens em sua máquina local:
```
docker images
```
Para remover uma ou mais imagens
```
docker rmi id_ou_nome_da_imagem
```