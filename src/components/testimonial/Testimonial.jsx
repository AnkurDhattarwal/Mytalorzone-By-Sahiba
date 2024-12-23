import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Testimonial() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <div>
            <section className=''>
                <div className=" container mx-auto px-5 py-10">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{ color: mode === 'dark' ? 'white' : '' }}>Testimonial</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{ color: mode === 'dark' ? 'white' : '' }}>What our <span className=' text-teal-500'>customers</span> are saying</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://media.licdn.com/dms/image/D5603AQEb5n7dZcJs8A/profile-displayphoto-shrink_200_200/0/1703242114372?e=2147483647&v=beta&t=j8L1aOOiEU9f6URpCsq0MfMT-Ve_IZKG14sV4g15I1Y" />
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia molestiae tempore minima. Obcaecati, eligendi ea hic quisquam iste quis dolorum! Praesentium repellendus odio sapiente velit obcaecati consequatur animi pariatur quidem debitis corrupti aut, deserunt amet earum libero ipsam aliquid, veniam, officiis ab explicabo dolore deleniti. Autem at aperiam iusto minima!</p>
                                <span className="inline-block h-1 w-10 rounded bg-teal-500 mt-6 mb-4" />
                                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Ankur Dhattarwal</h2>
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500">Web Designer</p>
                            </div>
                        </div>

                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://cdn-icons-png.flaticon.com/128/2763/2763444.png" />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, sequi, distinctio a minus voluptas facilis placeat assumenda alias illum nam aut ducimus corrupti. Quae dicta aut esse pariatur laborum, corrupti doloremque nam ut ipsum hic quidem cum nulla recusandae impedit in. Eos magnam est maxime incidunt totam, voluptatibus beatae at?</p>
                                <span className="inline-block h-1 w-10 rounded bg-teal-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">React Js</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">UI Develeoper</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://webknudocs.vercel.app/logo/react.png" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias veniam earum repellat itaque excepturi commodi dignissimos. Aut nam autem adipisci nesciunt ducimus. Iure sed animi neque expedita soluta vel quo quod quam nostrum facere hic, vitae nulla fugit asperiores tempora sunt, corrupti iusto maxime explicabo consequuntur harum, laudantium aperiam voluptatem.</p>
                                <span className="inline-block h-1 w-10 rounded bg-teal-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">React Js</h2>
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="text-gray-500">CTO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial