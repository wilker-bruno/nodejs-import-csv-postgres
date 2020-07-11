## NodeJS-CSV-PostgreSQL
Ler arquivo local '.csv' e salvar no banco de dados PostgreSQL.

## Bibliotecas usadas
- readline (ler o arquivo linha por linha)
- csvtojson (ler o arquivo e converte para json)

## Como executar?
- Acesse a pasta clonada e execute um yarn para instalar as dependências
- Configure o acesso ao banco de dados
- Execute a migrate para criar a tabela no banco de dados (yarn sequelize db:migrate)
- Execute os servidor (yarnd dev)
- Acesse localhost:3333
- Veja os dados cadastrados no banco

## Como adaptar o projeto para os meus dados?
Crie uma tabela e um model de acordo com a sua necessidade, após o retorno da função 'convertCsvToJson' manipule o arquivo se necessário e então salve os dados no banco de dados.
