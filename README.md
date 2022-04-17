# Market Monitoring
## É necessário as instalações:
##### 1. Para acessar o banco de dados:
   * Wamp-server. (https://www.wampserver.com/en/)
   * Instalação do Mysql. (https://www.mysql.com/)
   * Instalação do Nodej.s (https://nodejs.dev/)
## Execução do sistema:
##### 1. Primeiro precisa cadastrar no site rapidapi para ser gerado uma chave de acesso a api externa
   * (Link https://rapidapi.com/apidojo/api/yh-finance/)
##### 2. No diretório market-monitoring-backend:
   * Adicionar a chave no header do arquivo ExternalMarketService que fica dentro do diretório services.
      ```javascript
            const getOptions = (url, method = 'GET') => ({
                method,
                url,
                headers: {
                    'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com',
                    'X-RapidAPI-Key': 'Adicionar a chave aqui'
                }
            })
   * Digitar o comando npm i no terminal para as instalações dos pacotes.
   * Digitar o comando node index para executa.
##### 3. No diretório market-monitoring-frontend:
   * Digitar o comando npm i no terminal para as instalações dos pacotes.
   * Digitar o comando npm start no terminal para executar.
