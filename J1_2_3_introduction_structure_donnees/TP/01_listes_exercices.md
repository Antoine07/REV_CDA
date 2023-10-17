# TP 01 

Ce TP est à faire en binôme.

## 01 Exercice max

 Créez une fonction searchMax pour retourner le max entre deux nombres puis entre 3 et enfin entre N nombres.
 
## 02 Exercice count digit

Soit la chaîne de caractères suivante, récupérez tous les numériques de cette chaîne dans un tableau :

```js
const phrase = '8790:bonjour le monde:8987:7777:Hello World:9007';
```

D'autres structures de données existent en JS comme les WeakSet, WeakMap par exemple. Nous vous invitons, pour approfondir vos connaissances, à les découvrir sur la documentation devlopper.mozilla.org.


## 03 Exercice Phones

1. Nettoyez les données priceHT, pour que celles-ci soient utilisables dans les prochains calculs.

2. Calculez les prix TTC et ajoutez-les au littérale phones.

3. Appliquez une promotion de 5% à tous les prix HT et TTC

```js
const phones = [
    { name: "iphone XX", priceHT: "900EURO" },
    { name: "iphone X", priceHT: "70EURO" },
    { name: "iphone B", priceHT: "200EURO" },
];
```

## 04 ( facultatif) Exercice température 

1. Donnez toutes les températures qui sont supérieures à 0.

2. Comparez les températures supérieures et inférieures à 0 (lesquelles ont été les plus prépondérantes ... )

3. Donnez le pourcentage des températures positives sur le mois.

4. Créez un tableau days pour les jours du mois et donnez les jours pour lesquels la température était supérieure à 0.

5. Donnez toutes les températures supérieures à 0 à partir du dixième jour du mois.

6. Remplacez maintenant les températures négatives par la moyenne des températures positives.

```js
const temperatures = [-2,  5, -5,  6, -2,  0,  6,  2,  8,  0,  6, -1,  3,  3,  7,  0, -5,
        7,  4,  7,  8, -1,  5, -2,  3, -3, -2,  7,  8,  4,  2]

```
