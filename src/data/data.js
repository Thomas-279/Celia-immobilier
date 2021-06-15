/* eslint-disable import/no-anonymous-default-export */
import pic1 from './datapics/pic1.JPG'
import pic2 from './datapics/pic2.JPG'
import pic3 from './datapics/pic3.JPG'
import pic4 from './datapics/pic4.JPG'

export default [
  {
    id: 1,
    location: 'Versailles (78000)',
    type: 'Maison',
    size: '5 pièces, 120m2',
    price: '3 250 000 €',
    status: 'A vendre',
    description: 'Ici c est une super maison',
    exclu: true,
    pics: {
        pic1: `${pic1}`,
        pic2: `${pic2}`,
        pic3: `${pic3}`,
        pic4: `${pic4}`,
    },
  },
  {
    id: 2,
    location: 'New York (USA)',
    type: 'Appartement',
    size: '3 pièces, 80m2',
    price: '551 000 €',
    status: 'Vendu',
    description: 'Ici c est une super maison',
    exclu: false,
    pics: {
      pic1: `${pic1}`,
      pic2: `${pic2}`,
      pic3: `${pic3}`,
      pic4: `${pic4}`,
  },
  },  
  {
    id: 3,
    location: 'Dijon (21000)',
    type: 'Maison',
    size: '6 pièces, grand jardin 120m2',
    price: '251 000 €',
    status: 'A vendre',
    description: 'Ici c est une super maison',
    exclu: true,
    pics: {
      pic1: `${pic1}`,
      pic2: `${pic2}`,
      pic3: `${pic3}`,
      pic4: `${pic4}`,
  },
  },
]