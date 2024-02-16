export default function Hero() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            {/* Update the logo to the store's logo */}
            <img
              className="h-11"
              src="https://images.unsplash.com/photo-1610857013704-308eaf37de25?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Exotic Reptiles Co."
            />
            <div className="hidden sm:mt-32 sm:flex lg:mt-16">
              {/* Updated to reflect reptile care or species information */}
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Discover the joys of crested gecko companionship!{" "}
                <a
                  href="/care-guides"
                  className="whitespace-nowrap font-semibold text-indigo-600"
                >
                  <span className="absolute inset-0" aria-hidden="true" />
                  Care Guides <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            {/* Updated header text */}
            <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
              Exotic Reptiles for Enthusiasts and Collectors
            </h1>
            {/* Updated description */}
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Step into a world of vibrant scales and unique creatures. Our
              carefully curated selection of crested geckos, isopods, and
              accessories ensures the highest quality for your exotic pet needs.
            </p>
            {/* Updated buttons */}
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="/shop"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Shop Now
              </a>
              <a
                href="/about"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                About Us <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        {/* Updated image to reflect the store's offerings */}
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img
            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src="https://images.unsplash.com/photo-1610857013704-308eaf37de25?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Crested Geckos and Isopods"
          />
        </div>
      </div>
    </div>
  );
}
