# crm-erp-nocode-platform-fontend

######Em desenvolvimento, parte grafica.

Plataforma nocode para geração de aplicativos, necessita somente parametrização simples atravez de um arquivo json (tela grafica planejada) para definir e criar todas as entidades de um systema.

Exemplo de Json:

```
[
  {
    "name": "clintescontas",
    "localizedName": "Clientes",
    "image": "images/person-2.png",
    "principalPropriety": "Name",
    "tables": [
      {
        "condiditons": "{ \"Gender\": \"male\" }",
        "localizedName": "Clientes maculos",
        "name": "Clientesmaculos",
        "isEqual": true,
        "display": [ "Name", "Country", "CPF" ]
      },
      {
        "condiditons": "{ \"Gender\": \"female\" }",
        "localizedName": "Clientes Femininos",
        "name": "ClientesFemininos",
        "isEqual": true,
        "display": [ "Name", "Country", "CPF" ]
      },
      {
        "condiditons": "{}",
        "name": "Todososclientes",
        "localizedName": "Todos os clientes",
        "isEqual": true,
        "display": [ "Name", "Country", "CPF", "Gender" ]
      }
    ],
    "proprieties": [
      {
        "name": "Name",
        "localizedName": "Name",
        "Type": "TextBox",
        "image": "images/contact-3.png",
        "unique": true,
        "required": true,
        "exposition": false,
        "coolSize": 1
      },
      {
        "name": "Apelido",
        "localizedName": "Apelido",
        "Type": "TextBox",
        "image": "",
        "unique": false,
        "required": false,
        "exposition": true,
        "coolSize": 1
      },
      {
        "name": "Country",
        "localizedName": "Country",
        "Type": "TextBox",
        "image": "no",
        "unique": false,
        "required": false,
        "exposition": true,
        "coolSize": 1
      },
      {
        "name": "CPF",
        "localizedName": "CPF",
        "Type": "TextBox",
        "image": "no",
        "unique": false,
        "required": false,
        "exposition": true,
        "coolSize": 3
      },
      {
        "name": "Gender",
        "localizedName": "Gender",
        "Type": "DropBox",
        "image": "no",
        "unique": false,
        "required": true,
        "exposition": true,
        "coolSize": 3,
        "dataArray": [ "male", "female", "apache helicopter" ]
      },
      {
        "name": "Estado",
        "localizedName": "Estado",
        "Type": "DropBox",
        "image": "no",
        "unique": false,
        "required": true,
        "exposition": true,
        "coolSize": 1,
        "dataArray": [ "MG", "SP", "SC", "BA", "RS", "ETC" ]
      },
      {
        "name": "Cidade",
        "localizedName": "Cidade",
        "Type": "TextBox",
        "image": "no",
        "unique": false,
        "required": false,
        "exposition": false,
        "coolSize": 1
      },
      {
        "name": "Bairro",
        "localizedName": "Bairro",
        "Type": "TextBox",
        "image": "no",
        "unique": false,
        "required": false,
        "exposition": false,
        "coolSize": 1
      },
      {
        "name": "Rua",
        "localizedName": "Rua",
        "Type": "TextBox",
        "image": "no",
        "unique": false,
        "required": false,
        "exposition": false,
        "coolSize": 2
      },
      {
        "name": "Complemento",
        "localizedName": "Complemento",
        "Type": "TextBox",
        "image": "no",
        "unique": false,
        "required": false,
        "exposition": false,
        "coolSize": 1
      }
    ]

  },
  {
    "name": "produtos",
    "localizedName": "Produtos",
    "image": "images/work-1.png",
    "principalPropriety": "Name",
    "tables": [
      {
        "condiditons": "{}",
        "name": "TodosProdutos",
        "localizedName": "Todos os Produtos",
        "isEqual": true,
        "display": [ "Name", "Valor" ]
      }
    ],
    "proprieties": [
      {
        "name": "Name",
        "localizedName": "Name",
        "Type": "TextBox",
        "image": "no",
        "unique": false,
        "required": false,
        "exposition": false,
        "coolSize": 1
      },
      {
        "name": "Valor",
        "localizedName": "Valor",
        "Type": "TextBox",
        "image": "no",
        "unique": false,
        "required": false,
        "exposition": false,
        "coolSize": 1
      }
    ]
  },
  {
    "name": "visitas",
    "localizedName": "visitas",
    "image": "images/calendar-1.png",
    "principalPropriety": "Name",
    "tables": [
      {
        "condiditons": "{}",
        "name": "Todososvisitas",
        "localizedName": "Todos as visitas",
        "isEqual": true,
        "display": [ "Name_Cliente", "hectare", "Safra" ]
      }
    ],
    "proprieties": [
      {
        "name": "Name_Cliente",
        "localizedName": "Name Cliente",
        "Type": "TextBox",
        "image": "images/contact-3.png",
        "unique": false,
        "required": false,
        "exposition": false,
        "coolSize": 1
      },
      {
        "name": "hectare",
        "localizedName": "hectare",
        "Type": "NumberBox",
        "image": "no",
        "unique": false,
        "required": false,
        "exposition": false,
        "coolSize": 1
      },
      {
        "name": "Safra",
        "localizedName": "Safra",
        "Type": "DropBox",
        "image": "no",
        "unique": false,
        "required": true,
        "exposition": true,
        "coolSize": 3,
        "dataArray": [ "Feijão", "Trigo", "Soja" ]
      }
    ]
  },
  {
    "name": "Tipo_de_Equipamentos",
    "localizedName": "Tipo de Equipamentos",
    "image": "images/info-1.png",
    "principalPropriety": "Name",
    "tables": [
      {
        "condiditons": "{}",
        "name": "TodosEquimantos",
        "localizedName": "Todos os Equipamentos",
        "isEqual": true,
        "display": [ "Cliente", "Name", "Qunatidade" ]
      }
    ],
    "proprieties": [
      {
        "name": "Cliente",
        "localizedName": "Cliente",
        "Type": "TextBox",
        "image": "images/contact-3.png",
        "unique": false,
        "required": false,
        "exposition": false,
        "coolSize": 3
      },
      {
        "name": "Name",
        "localizedName": "Name",
        "Type": "TextBox",
        "image": "no",
        "unique": false,
        "required": false,
        "exposition": false,
        "coolSize": 1
      },
      {
        "name": "chassi",
        "localizedName": "Chassi",
        "Type": "NumberBox",
        "image": "no",
        "unique": false,
        "required": false,
        "exposition": false,
        "coolSize": 1
      },
      {
        "name": "Qunatidade",
        "localizedName": "Quantidade",
        "Type": "NumberBox",
        "image": "no",
        "unique": false,
        "required": false,
        "exposition": false,
        "coolSize": 1
      },
      {
        "name": "Marca",
        "localizedName": "Marca",
        "Type": "DropBox",
        "image": "no",
        "unique": false,
        "required": true,
        "exposition": true,
        "coolSize": 3,
        "dataArray": [ "john deere", "New Holland", "Valtra", "Jacto" ]
      }
    ]
  },
  {
    "name": "Participantes",
    "localizedName": "Participantes",
    "image": "images/calendar-1.png",
    "principalPropriety": "Name",
    "tables": [
      {
        "condiditons": "{}",
        "name": "TodososParticipantes",
        "localizedName": "Todos os Participantes",
        "isEqual": true,
        "display": [ "Name", "Tipo_Funcionario", "Estado", "Cidade" ]
      }
    ],
    "proprieties": [
      {
        "name": "Name",
        "localizedName": "Name",
        "Type": "TextBox",
        "image": "images/person-2.png",
        "unique": false,
        "required": true,
        "exposition": false,
        "coolSize": 2
      },
      {
        "name": "Tipo_Funcionario",
        "localizedName": "Funcionario",
        "Type": "DropBox",
        "image": "no",
        "unique": false,
        "required": true,
        "exposition": true,
        "coolSize": 1,
        "dataArray": [ "Interno", "Externo" ]
      },
      {
        "name": "Estado",
        "localizedName": "Estado",
        "Type": "DropBox",
        "image": "no",
        "unique": false,
        "required": true,
        "exposition": true,
        "coolSize": 1,
        "dataArray": [ "MG", "SP", "SC", "BA", "RS", "ETC" ]
      },
      {
        "name": "Cidade",
        "localizedName": "Cidade",
        "Type": "TextBox",
        "image": "no",
        "unique": false,
        "required": false,
        "exposition": false,
        "coolSize": 1
      },
      {
        "name": "Bairro",
        "localizedName": "Bairro",
        "Type": "TextBox",
        "image": "no",
        "unique": false,
        "required": false,
        "exposition": false,
        "coolSize": 1
      },
      {
        "name": "Rua",
        "localizedName": "Rua",
        "Type": "TextBox",
        "image": "no",
        "unique": false,
        "required": false,
        "exposition": false,
        "coolSize": 2
      },
      {
        "name": "Complemento",
        "localizedName": "Complemento",
        "Type": "TextBox",
        "image": "no",
        "unique": false,
        "required": false,
        "exposition": false,
        "coolSize": 1
      }
    ]
  }
]
```
