export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'Iso ja raskas puhelin - ei kannata ostaa',
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'Hieno puhelin, mutta pas*a kamera',
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: 'Normiluuri, mutta ylihinnoteltu',
  },

  {
    id: 4,
    name: 'Phone Super',
    price: 269,
    description: 'Käyttökelvoton puhelin, täyttä roskaa',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
