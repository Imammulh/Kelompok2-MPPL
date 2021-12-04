/* eslint-disable no-useless-escape */

export const products = [
  {
    id: 1,
    img: "\product-image.png",
    name:'Harapan',
    category:'arabica single',
    linktokped:'#',
    desc: 'Nisi voluptate consequat cillum est reprehenderit aliquip eu ad ullamco.',
    long_desc:"Harapan Baik has been defined as \"describing spaces between Transparency and Flavor.\" Soon it will also be defined as \" That espresso based is your best value for your coffee supplies.\"\nSweet chocolate, Fruity acidity, well bodied and also work well with milk.\none of our most researches and developed that conveys a flavor profile that we intentionally designed to work well with milk.\nIt's our answer from our fidgetiness and we believe everyone deserves to have a good sip. A Gayo Wethull Processes and a Natural Argopuro. This blend has become one of our favorite espresso based. We love it as a black, and we love it as white.",
    price :150000,
    quantity: 5,
    size: 200,  
    blend :[
      {
        id: 12,
        origin :"Kediri",
        process :"Wethull",
        percentage:70
      },
      {
        id: 14,
        origin :"Argopuro",
        process :"Natural",
        percentage:30
      }
    ],
    white:[
      {
        batchdate:"20/10/2021",
        dose:18,
        yield:42,
        brewtime:37,
        temp:94,
        cappucino:180,
        latte:180,
      },
      {
        batchdate:"20/08/2021",
        dose:18,
        yield:42,
        brewtime:37,
        temp:94,
        cappucino:180,
        latte:180,
      }
    ],
    black:[
      {
        batchdate:"20/10/2021",
        dose:18,
        yield:42,
        brewtime:37,
        temp:94,
        americano:180,
      },
      {
        batchdate:"20/08/2021",
        dose:18,
        yield:42,
        brewtime:37,
        temp:94,
        americano:180,
      }
    ]
  },
  {
    id: 2,
    img: "\product02.png",
    name:'Product 2',
    desc:'Occaecat dolore proident cupidatat magna sint nostrud sit magna est culpa id non proident nostrud.'
  },
  {
    id: 3,
    img:"\product03.png",
    name:'Product 3',
    desc:'Ut nisi laborum laboris ut ex.'
  },
  {
    id: 4,
    img:"\product04.png",
    name:'Product 4',
    desc:'In ex consectetur fugiat labore labore quis fugiat sunt nulla mollit qui sit.'
  },
  {
    id: 5,
    img:"\product05.png",
    name:'Product 5',
    desc:'Aliqua voluptate dolor quis consequat proident sunt laboris dolor enim mollit aliqua.'
  },
  {
    id: 6,
    img:"\product05.png",
    name:'Product 5',
    desc:'Aliqua voluptate dolor quis consequat proident sunt laboris dolor enim mollit aliqua.'
  },
  {
    id: 7,
    img:"\product05.png",
    name:'Product 5',
    desc:'Aliqua voluptate dolor quis consequat proident sunt laboris dolor enim mollit aliqua.'
  }
];
