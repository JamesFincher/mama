/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
  {
    id: 1,
    name: "Crested Gecko - Harlequin",
    href: "https://images.unsplash.com/photo-1667578355034-b8a682c3a628?q=80&w=3078&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$249.99",
    description: "Captive Bred Juvenile",
    imageSrc: "/images/crested-gecko-harlequin.jpg",
    imageAlt: "Harlequin crested gecko clinging to branch",
  },
  {
    id: 2,
    name: "Crested Gecko - Tiger",
    href: "/geckos/crested-gecko-tiger",
    price: "$199.99",
    description: "Captive Bred Baby",
    imageSrc: "/images/crested-gecko-tiger.jpg",
    imageAlt: "Tiger patterned crested gecko on hand",
  },
  {
    id: 3,
    name: "Gargoyle Gecko",
    href: "/geckos/gargoyle-gecko",
    price: "$179.99",
    description: "Captive Bred Juvenile",
    imageSrc: "/images/gargoyle-gecko.jpg",
    imageAlt: "Red gargoyle gecko clinging to glass",
  },
];

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 id="products-heading" className="sr-only">
          Products
        </h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2">
                <img
                  src="https://images.unsplash.com/photo-1667578355034-b8a682c3a628?q=80&w=3078&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
              <p className="mt-1 text-sm italic text-gray-500">
                {product.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
