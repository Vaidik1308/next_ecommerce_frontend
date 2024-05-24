import { Category, GenderType, LatestProductType } from "@/types/client"

export const dummyData= {
    "categories": [
      {
        "value": 40,
        "heading": "Laptops"
      },
  
      {
        "value": 100,
        "heading": "Shoes"
      },
      {
        "value": 80,
        "heading": "Cameras"
      },
      {
        "value": 60,
        "heading": "Jeans"
      }
    ],
  
    "transaction": [
      {
        "_id": "ksdnfkjsdfx",
        "amount": 4000,
        "quantity": 4,
        "discount": 300,
        "status": "Processing"
      },
      {
        "_id": "sdsdssdsd",
        "amount": 5100,
        "quantity": 2,
        "discount": 900,
        "status": "Processing"
      },
      {
        "_id": "sdsdcvsssdsd",
        "amount": 13000,
        "quantity": 91,
        "discount": 0,
        "status": "Shipped"
      },
      {
        "_id": "dfddddfd",
        "amount": 2300,
        "quantity": 4,
        "discount": 2000,
        "status": "Processing"
      }
    ]
  }


export const latestProducts:LatestProductType[] = [
  {
    id:"45hg62",
    name:"laptop",
    price:"32,000",
    image:"https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug:"laptop"
  },
  {
    id:"45hg62",
    name:"Camera",
    price:"52,000",
    image:"https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug:"camera"
  },
  {
    id:"45hg62",
    name:"Mobile Phones",
    price:"12,000",
    image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug:"mobile-phone",
  },
  {
    id:"45hg62",
    name:"Shoes",
    price:"2,000",
    image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug:"shoes"
  },
  {
    id:"45hg62",
    name:"Gaming",
    price:"42,000",
    image:"https://images.unsplash.com/photo-1526509867162-5b0c0d1b4b33?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vdXNlJTIwZ2FtZXJ8ZW58MHx8MHx8fDA%3D",
    slug:"gaming"
  },
  {
    id:"45hg62",
    name:"watches",
    price:"32,000",
    image:"https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug:"watches"
  },
]

export const categories:Category[] = [
  {
    id:"45gf5d",
    categoryName:"Mobiles",
    image:"https://images.unsplash.com/photo-1578345218746-50a229b3d0f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9iaWxlc3xlbnwwfHwwfHx8MA%3D%3D",
    slug:"mobiles"
  },
  {
    id:"45gf5d",
    categoryName:"Fashion",
    image:"https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    slug:"fashion"
  },
  {
    id:"45gf5d",
    categoryName:"Appliances",
    image:"https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QXBwbGlhbmNlc3xlbnwwfHwwfHx8MA%3D%3D",
    slug:"appliances"
  },
  {
    id:"45gf5d",
    categoryName:"Electronics",
    image:"https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
    slug:"electronics"
  },
  {
    id:"45gf5d",
    categoryName:"Furniture",
    image:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8fDB8fHww",
    slug:"furniture"
  },
  {
    id:"45gf5d",
    categoryName:"Grocery",
    image:"https://images.unsplash.com/photo-1545601445-4d6a0a0565f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdyb2Nlcnl8ZW58MHx8MHx8fDA%3D",
    slug:"grocery"
  },
  {
    id:"45gf5d",
    categoryName:"Stationary",
    image:"https://images.unsplash.com/photo-1568871391149-449702439177?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhdGlvbmFyeXxlbnwwfHwwfHx8MA%3D%3D",
    slug:"stationary"
  },
  {
    id:"45gf5d",
    categoryName:"Traditional",
    image:"https://images.unsplash.com/photo-1627615951531-cfe7c4628dca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5kaWFuJTIwdHJhZGl0aW9uYWx8ZW58MHx8MHx8fDA%3D",
    slug:"traditional"
  },
  {
    id:"45gf5d",
    categoryName:"Beauty-Products",
    image:"https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
    slug:"beauty-products"
  },
  {
    id:"45gf5d",
    categoryName:"More",
    image:"https://images.unsplash.com/photo-1525011268546-bf3f9b007f6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXJyb3clMjByaWdodHxlbnwwfHwwfHx8MA%3D%3D",
    slug:"All"
  },
]


export const genderData:GenderType = [
  {
    value:"Female",
    label:"Female",
  },
  {
    value:"Other",
    label:"Other",
  },
  {
    value:"Male",
    label:"Male",
  },
]
  