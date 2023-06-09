# HypeConnect
Teste Front-end magento Bis2Bis

## Docker e Magento
Usei o [Warden](https://docs.warden.dev/installing.html#prerequisites) para gerenciar os containers do docker.
Após configurar Warden, seguir para instalação do magento local, seguindo essa [documentação](https://docs.warden.dev/environments/magento2.html),  
siga o passo a passo até o comando warden shell, copiando inclusive os valores do arquivo env.  
Depois que o rodar o warden shell você irá entrar no container do php-fpm:  
![image](https://github.com/njrtecno/hype-conect/assets/7996926/f9db6fde-5d7d-4806-8851-6a1b65d788f1)  
use o comando exit e volte para a raiz do projeto.
Na raiz, deixei um dump.sql na para importar as configurações que fiz no admin da loja, basta rodar o comando abaixo na raiz do projeto.
```
warden db import dump.sql
```
Feito isso basta rodar novamente o comando warden shell e em seguida rodar:  
```
composer install  
//em seguida rode  
php bin/magento s:up && php bin/magento s:d:c && bin/magento s:s:d -f && bin/magento c:c  
```

## Desenvolvimento do Tema
O tema hype-conect está dentro de "app/design/frontend/Bis/".  
Caso seja necessário altere o tema padrão para "Bis/hype-conect" dentro do admin do magento.

Rode o comando  
```
php bin/magento s:up && php bin/magento s:d:c && bin/magento s:s:d -f && bin/magento c:c
```
Com isso tema será aplicado.  

### Sobre o teste
Acredito que é isso. consegui fazer boa parte do mesmo, acredito que esteja em 90/95%.
Ficaram faltando alguns ajustes de responsividade e também configuração de um mega menu.

Abaixo um link com um video curto mostrando o tema:
https://www.loom.com/share/1826f28829dc4a6eac3fd90c97c81d61

Espero que seja o suficiente para avaliarem meus conhecimentos.  

Qualquer duvida, ou dificuldade com a configuração do tema, me chamem!
