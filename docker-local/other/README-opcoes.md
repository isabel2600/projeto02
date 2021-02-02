# Outras opções
## Up
Se você quiser ver os logs durante a execução, basta retirar a opção **-d**.
```
docker-compose up --build
```

Duas opções bem interessantes são a **--force-recreate** e **--no-recreate**. Para forçar ou não a criação de um container já existente.

```
docker-compose up -d --build --force-recreate
```

```
docker-compose up -d --build --no-recreate
```

Se quiser forçar a criação de um novo volume ao invés de utilizar um volume já criado anteriormente, utilize **-V**.

```
docker-compose up -d --build -V
```

Para utilizar as imagens locais, sem fazer o build novamente, **--no-build**. *Obs: tenha certeza que a imagem está disponível na máquina.

```
docker-compose up -d --no-build
```

Esse comando tem bastantes opções, se precisar de uma solução mais personalizada, a [documentação oficial](https://docs.docker.com/compose/reference/up/) é bem completa.

## Down
Para todos os containers e os remove:
```
docker-compose down
```
Para todos os containers, remove e remove todas as imagens utilizadas.
```
docker-compose down --rmi all
```
Para todos os containers, remove e remove os volumes montados.
```
docker-compose down -v
```
Todas opções combinadas
```
docker-compose down --rmi all -v
```




## Start, stop e restart

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