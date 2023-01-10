function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
        <div>
            <h1 className="text-7xl">Yohanseh Smythe</h1>
            <h2 className="mt-5 md:mt-0">
                If You're Interested In{" "}
                <span className="underline decoration-4 decoration-[#FF0000]">
                    CRYPTO, REAL ESTATE & ENTREPRENEURSHIP
                </span>{" "}
                This Is The Place For You
            </h2>
        </div>
        <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
            Real Estate | Crypto | Tech
        </p>
    </div>
  )
}

export default Banner