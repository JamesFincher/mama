const posts = [
  {
    id: 1,
    title: "Crested Gecko Care Guide",
    href: "/care-guides/crested-gecko",
    description:
      "Everything you need to know about caring for crested geckos as pets. Covers habitat, diet, handling, and more.",
    imageUrl: "/images/crested-gecko.jpg",
    date: "Feb 12, 2023",
    datetime: "2023-02-12",
    category: { title: "Gecko Care", href: "/care-guides" },
    author: {
      name: "John Smith",
      role: "Author",
      href: "/authors/john-smith",
      imageUrl: "/images/authors/john-smith.jpg",
    },
  },

  {
    id: 2,
    title: "Crested Gecko Habitat Setup",
    href: "/care-guides/crested-gecko-habitat",
    description:
      "How to setup the perfect habitat for a crested gecko. Details on appropriate enclosure, heating, lighting, substrates, and decor.",
    imageUrl: "/images/crested-gecko-tank.jpg",
    date: "Jan 24, 2023",
    datetime: "2023-01-24",
    category: { title: "Gecko Care", href: "/care-guides" },
    author: {
      name: "Jane Doe",
      role: "Author",
      href: "/authors/jane-doe",
      imageUrl: "/images/authors/jane-doe.jpg",
    },
  },

  {
    id: 3,
    title: "Feeding Your Crested Gecko",
    href: "/care-guides/crested-gecko-feeding",
    description:
      "A guide to the dietary needs of crested geckos. Covers recommended feeder insects and crested gecko diet preparation.",
    imageUrl: "/images/crested-gecko-eating.jpg",
    date: "Feb 2, 2023",
    datetime: "2023-02-02",
    category: { title: "Gecko Care", href: "/care-guides" },
    author: {
      name: "James Johnson",
      role: "Author",
      href: "/authors/james-johnson",
      imageUrl: "/images/authors/james-johnson.jpg",
    },
  },

  {
    id: 4,
    title: "Gargoyle Gecko Care Guide",
    href: "/care-guides/gargoyle-gecko",
    description:
      "Everything you need to know about caring for gargoyle geckos as pets. Covers habitat, diet, handling, and more.",
    imageUrl: "/images/gargoyle-gecko.jpg",
    date: "Feb 28, 2023",
    datetime: "2023-02-28",
    category: { title: "Gecko Care", href: "/care-guides" },
    author: {
      name: "Jane Doe",
      role: "Author",
      href: "/authors/jane-doe",
      imageUrl: "/images/authors/jane-doe.jpg",
    },
  },

  {
    id: 5,
    title: "Gargoyle Gecko Habitat Setup",
    href: "/care-guides/gargoyle-gecko-habitat",
    description:
      "How to setup the perfect habitat for a gargoyle gecko. Details on appropriate enclosure, heating, lighting, substrates, and decor.",
    imageUrl: "/images/gargoyle-gecko-tank.jpg",
    date: "Mar 5, 2023",
    datetime: "2023-03-05",
    category: { title: "Gecko Care", href: "/care-guides" },
    author: {
      name: "Michael Smith",
      role: "Author",
      href: "/authors/michael-smith",
      imageUrl: "/images/authors/michael-smith.jpg",
    },
  },

  {
    id: 6,
    title: "Feeding Your Gargoyle Gecko",
    href: "/care-guides/gargoyle-gecko-feeding",
    description:
      "A guide to the dietary needs of gargoyle geckos. Covers recommended feeder insects and gargoyle gecko diet preparation.",
    imageUrl: "/images/gargoyle-gecko-eating.jpg",
    date: "Mar 12, 2023",
    datetime: "2023-03-12",
    category: { title: "Gecko Care", href: "/care-guides" },
    author: {
      name: "James Johnson",
      role: "Author",
      href: "/authors/james-johnson",
      imageUrl: "/images/authors/james-johnson.jpg",
    },
  },

  {
    id: 7,
    title: "Giant Canyon Isopod Care",
    href: "/care-guides/giant-canyon-isopod",
    description:
      "A complete guide to caring for Giant Canyon isopods. Covers habitat, substrate, feeding, water, and more.",
    imageUrl: "/images/giant-canyon-isopod.jpg",
    date: "April 1, 2023",
    datetime: "2023-04-01",
    category: { title: "Isopod Care", href: "/care-guides" },
    author: {
      name: "Jane Doe",
      role: "Author",
      href: "/authors/jane-doe",
      imageUrl: "/images/authors/jane-doe.jpg",
    },
  },

  // Other isopod posts
];

export default function PetCare() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Pet Care Tips
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            See the following articles for tips and tricks on caring for your
            pet.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col items-start justify-between"
            >
              <div className="relative w-full">
                <img
                  src={post.imageUrl}
                  alt=""
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    src={post.author.imageUrl}
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-100"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
