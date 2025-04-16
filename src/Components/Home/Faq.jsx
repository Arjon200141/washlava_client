import React from 'react';

const Faq = () => {
    return (
        <div className='m-16'>
            <div className="flex justify-center">
                <h2 className='text-center text-gray-700 border-y-4 border-[#0C9DCA]  py-6 w-[650px] text-5xl font-semibold mb-8'>Frequently Asked Questions</h2>
            </div>
           
            <p  className='text-center text-gray-700 text-lg mx-36 mt-6 mb-12'>Find answers to common queries about our laundry services at Washlava. Whether you're curious about pricing, available services, or how to schedule a pickup, we've got you covered!</p>
            <div className='flex gap-8 manrope'>
                <div className="join join-vertical w-full flex-1 mt-8">
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title text-xl font-medium">How much does it cost?</div>
                        <div className="collapse-content">
                            <p>The cost varies based on the type of service and number of clothes. Please check our pricing page for specific details on Wash & Fold, Wash & Iron, and Dry Wash services.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">How do I deliver my clothes?</div>
                        <div className="collapse-content">
                            <p>You can deliver your clothes to our nearest Washlava outlet or schedule a convenient home pickup via our app or website.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">What services are available?</div>
                        <div className="collapse-content">
                            <p>We offer three main services:
                                <ul>
                                    <li><strong>Wash & Fold</strong> - Standard laundry service where clothes are washed and folded.</li>
                                    <li><strong>Wash & Iron</strong> - Clothes are washed and ironed for a crisp finish.</li>
                                    <li><strong>Dry Wash</strong> - A professional cleaning process for delicate fabrics and garments that can’t be machine-washed.</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">What is the maximum number of clothes I can send for washing?</div>
                        <div className="collapse-content">
                            <p>There is no maximum limit! We can handle both small and large orders. For bulk orders, we recommend scheduling a pickup in advance.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">What payment methods are available?</div>
                        <div className="collapse-content">
                            <p>We accept mobile banking (Nagad, Bkash), credit/debit cards, cash on delivery (COD), and online bank transfers.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">Can I schedule a pickup for my laundry?</div>
                        <div className="collapse-content">
                            <p>Yes, you can easily schedule a pickup via our website or app. Just select your preferred pickup time, and we'll take care of the rest!</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">What is the turnaround time for my laundry?</div>
                        <div className="collapse-content">
                            <p>Our standard turnaround time is 1-2 days depending on the service. We also offer express services if you need your clothes sooner.</p>
                        </div>
                    </div>
                </div>

                <div className='flex-1'>
                    <img src="https://i.ibb.co.com/M57bY7rT/faq.jpg" alt="" className='h-[600px] rounded-xl'/>
                </div>
            </div>
        </div>
    );
};

export default Faq;