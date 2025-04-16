const Benifits = () => {
    return (
        <div className="my-12 mt-16">
            <div className="flex justify-center">
                <h2 className='text-center text-gray-700 border-y-4 border-[#0C9DCA]  py-6 w-[650px] text-5xl font-semibold mb-12'>Why We're the Best Choice</h2>
            </div>

            <p className='text-center text-gray-700 text-lg mx-36 mt-6 mb-12'>We are committed to providing exceptional value, combining expertise and innovation to meet your needs. Our customer-centric approach ensures that every interaction is personalized, efficient, and results-driven</p>
            <div className="grid grid-cols-3 gap-8 mx-16">
                <div className="card card-compact bg-sky-100/35  shadow-lg">
                    <figure>
                        <img
                            src="https://i.ibb.co.com/wFyvFHFF/flex.jpg"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-3xl font-semibold text-center mx-4"> We Offer Flexible 
                        Price Range</h2>
                        <div className="card-actions mt-6 justify-center">
                            <button className="text-xl">Read More...</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-sky-100/35  shadow-lg">
                    <figure>
                        <img
                            src="https://i.ibb.co.com/fVD5FJ7T/fast.jpg"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-3xl font-semibold text-center mx-4">We Deliver in 24 or
                        48 Hours</h2>
                        <div className="card-actions mt-6 justify-center">
                            <button className="text-xl">Read More...</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-sky-100/35  shadow-lg">
                    <figure>
                        <img
                        className=""
                            src="https://i.ibb.co.com/zWJGCDKQ/friend.jpg"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-3xl font-semibold text-center mx-4">Helpful & Friendly
                        Attendants</h2>
                        <div className="card-actions mt-6 justify-center">
                            <button className="text-xl">Read More...</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benifits;