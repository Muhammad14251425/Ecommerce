const data = [
    {
        heading: "Beginner",
        price: "35",
        p1: "Basic sales & marketing for up to 2 users",
        p2: "Account & Sales management",
        p3: "No customization",
        p4: "No support",
        b1: "Instant setup, satisfied or reimbursed.",
        button: "Order now"
    },
    {
        heading: "Professional",
        price: "65",
        p1: "Complete CRM for any size team",
        p2: "Get access to all modules",
        p3: "Limited customization",
        p4: "Email support",
        b1: "Instant setup, satisfied or reimbursed.",
        button: "Start now"
    },
    {
        heading: "Expert",
        price: "125",
        p1: "Unlimited CRM power and support",
        p2: "Get access to all modules and features",
        p3: "Unlimited customization",
        p4: "24x7 toll-free support",
        b1: "Instant setup, satisfied or reimbursed.",
        button: "Contact now"
    },
]
const MoreBelow = () => {
    return (
        <div>
            <div className="bg-pic1 bg-fixed bg-no-repeat bg-cover h-[600px] w-full"/>
        <div className='bg-[#79DFC1]'>
            <div className='py-6 px-4 pb-4 tzz:grid tzz:grid-cols-3 mx-auto '>


                {
                    data.map((item,index)=>(
                        <div className='max-w-sm mx-auto sm:max-w-md md:max-w-2xl mt-10 text-center border border-[#59ab9d] tzz:mx-6 ' key={index}>
                        <div className="">
                            
                        <h3 className='bg-[#59ab9d] font-bold py-2 text-2xl'>{item.heading}</h3>
                        <div className='bg-white text-sm '>
                            <div className='p-4 border-b-2 border-[#59ab9d]'>
                                <h2 className=' font-bold flex justify-center items-center gap-x-2 text-xl mb-3'>$ <span className='text-7xl'>{item.price}</span>.00</h2>
                                <p >/month</p>
                            </div>
                            <h3 className='px-4 py-3 border-b'>{item.p1}</h3>
                            <h3 className='px-4 py-3 border-b'>{item.p2}</h3>
                            <h3 className='px-4 py-3 border-b'>{item.p3}</h3>
                            <h3 className='px-4 py-3 border-b'>{item.p4}</h3>
                        </div>
                        <div className='bg-[#59ab9d] px-4 py-3 text-sm'>
                            <p className=' italic mb-5'>{item.b1}</p>
                            <button className='bg-white px-4 py-2 rounded-full'>{item.button}</button>
                        </div>
                        </div>
                    </div >
                ))}






            </div>
        </div>
                </div>
    )
}

export default MoreBelow