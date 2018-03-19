# Training

Ce dépôt héberge un ensemble de fichiers permettant de s'entraîner / de se tester
dans le développement d'application frontend avec des technologies modernes (notamment React et SCSS).

L'objectif est de réaliser le footer correspondant à cette maquette : https://projects.invisionapp.com/d/main#/projects/prototypes/13574471.
Le résultat doit:

* Être **responsive**
* Avoir le moins possible de code mort / inutile
* Être valide selon les règles définies dans le fichier `.eslintrc`
* Respecter la nomenclature des classes définie dans ce fichier

# Quick-start

```bash
git clone <repo> octree-training
cd octree-training
npm install
npm run dev
# > http://localhost:3000
```

# Utilisation

## Découpage des composants

Nous utilisons un découpage des composants inspiré de la méthode Atomic BEM (ABEM)
avec des _pages_ composées de 4 niveaux de composants:

* _atom_: Micro-composant (visuel ou fonctionnel) assurant une unique fonction (Exemples: image, paragraph, title, icon)
* _molecule_: Composant relativement petit composé d'atomes (Exemples: carte, button)
* _organisms_: Bloc visuel composant une page, constitué de molecules (Exemples: grille de cartes, formulaire de contact)
* _templates_: Bloc logique d'organismes. Parfois facultatif, on peut utiliser des organismes directement au niveau des page (Exemples: footer, navbar, bannière).
  Un template peut être vu comme une strate / section de page.

> L'objectif du découpage est d'avoir des fichiers / composants les plus génériques possibles pour ne pas
> avoir a ré-inventer la roue à chaque fois. De plus, cela apporte une facilité de compréhension et limite
> les conflits avec git.

## Création d'un composant

1.  Créer un fichier `<nom-du-composant>.js` dans le bon dossier de composants (atoms, molecules, organisms, templates).
2.  Ajouter le fichier à l'index dans le même dossier
    Exemple: `export { default as Hero } from "./hero";`
3.  Créer un fichier `_<nom-du-composant>.scss` dans le dossier de style correspondant
4.  Ajouter le fichier de style à l'index dans le même dossier
    Exemple: `@import 'hero';`

> Il est parfois nécessaire de redémarrer next (`npm run dev`) pour que les nouveaux fichiers soient pris en compte

## Nomenclature des classes

La nomenclature se base sur le concept ABEM (https://css-tricks.com/abem-useful-adaptation-bem/) avec quelques optimisations:

* La toute première lettre, en minuscule, correspond au type de composant
  * `p`: page
  * `t`: template
  * `o`: organism
  * `m`: molecule
  * `a`: atom
* Ensuite vient le nom du composant en CamelCase : `Hero`, `MainBanner`, `FooterMobile`
* Si c'est un sous élément de composant, on rajoute le nom du sous composant de la forme `_<nom>` (un seul underscore)
* Pour les modifiers, on utilise un nom de classe supplémentaire plutôt que d'utiliser `--`.

Exemple:

```html
<div className="oNewsGrid">
  <div className="oNewsGrid_title">Title</div>
  <div className="oNewsGrid_content">
    <div className="oNewsGrid_column one">First column</div>
    <div className="oNewsGrid_column two">Second column</div>
  </div>
</div>
```

## Gestion des classes dans le SCSS

Dans les feuilles de styles, on crée un fichier pour chaque composant.
Avec les possibilités offertes par SCSS/SASS, il est facile d'écrire le style de chaque sous-éléments:

```SCSS
.oNewsGrid {
  width: 100%;

  &_title {
    color: red;
  }

  &_content {
    display:flex;
    flex-wrap: wrap;
    width: 50vw;
    margin: 0 auto;
  }

  &_column {
    flex-grow: 1;
  }

  &_column.one {
    width: 75%;

    @include bp(small) {
      width: 100%;
    }
  }

  &_column.two {
    width: 25%;
  }
}
```

## Récupération des données

Pour simplifier, l'application récupère des données à partir du fichier `data-backend.json`.
Pour simuler un backend, un composant HOC (High Order Component) nommé _getData_ prend ce fichier et
le fourni à la page `pages/index.js` en tant que `props`.
Ainsi, l'objet `data` contient toutes les données de l'application.

## Fichiers statiques

Il est possible de mettre des fichiers statiques (images, fonts, icons...) dans le dossier `static`.
Grâce à NextJS, ils seront disponible sur `/static/<nom-du-fichier>`

## Configuration supplémentaire

Cette application se repose largement sur le fonctionnement de NextJS.
Pour plus de détails et configuration plus fine, voir la [doc de NextJS](/NEXTJS.md).
