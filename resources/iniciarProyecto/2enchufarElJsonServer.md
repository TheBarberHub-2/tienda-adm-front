Lo primero es ir a https://github.com/typicode/json-server/tree/v0

Lo segundo es

```
npm install -g json-server@0.17.4    # NPM
```

prueba para saber si tira o no tira.
Copio lo de abajo literal en un json, que ira en resources como yo quiera que se llame. En este caso, recursoshumanos

```
{
  "recursosHumanos": [
    {
      "id": 1,
      "nombre": "Ana",
      "cargo": "Programadora",
      "fotoi": "1.jpg",
      "votos": 0
    },
    {
      "id": 2,
      "nombre": "Elena",
      "cargo": "Administrativa",
      "fotoi": "2.jpg",
      "votos": 0
    },
    {
      "id": 3,
      "nombre": "Juan",
      "cargo": "Analista",
      "fotoi": "3.jpg",
      "votos": 0
    },
    {
      "id": 4,
      "nombre": "Luis",
      "cargo": "Programador",
      "fotoi": "4.jpg",
      "votos": 0
    },
    {
      "id": 5,
      "nombre": "Maria",
      "cargo": "Diseñadora",
      "fotoi": "5.jpg",
      "votos": 0
    },
    {
      "id": 6,
      "nombre": "Pedro",
      "cargo": "Marketing",
      "fotoi": "6.jpg",
      "votos": 0
    }
  ]
}


```

Y ahora para enchufarlo y la ruta y nombre del archivo.json (en este caso "recursosHumanos.json")

```
json-server --watch ./src/resources/recursosHumanos.json
```
