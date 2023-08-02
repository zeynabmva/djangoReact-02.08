import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import React from "react"
function Blog_single() {
    const {id}=useParams();
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:1313/blog-singles/${id}`)
        .then((a)=>a.json ())
        .then((a)=> setData(a))
    },[])
  
    console.log(data)

  return (
    <>
     
        <section className="blog_single_first position full-container">
            <img src={data.image}/>
            <div className ="blog_single_prds">
                <div className ="blog_single_prd">
                    <div className="blog_single_info">
                        <h3>Posted On: <span className="p"> January 6, 2022</span></h3>
                        <div className="flex">
                            <i className="fa-solid fa-user"></i>
                            <p className="p">{data.farmer}</p>
                        </div>
                    </div>
                    <div className="blog_research">
                        <h2 className="h2">{data.header}</h2>
                        {/* summary */}
                          <p className="p">Podcasting on low-hanging fruit to identify a ballpark value added activity to beta test override matrix economically the digital. Efficiently on low-hanging fruit to identify a ballpark value added activity to beta test matrix economically override the digital. Objectively on low-hanging fruit to identify a ballpark value added activity to beta matrix economically</p>
                    </div>
                </div>
            </div>
        </section>
    

     <section className="blog_empty"></section>
    <section className="blog_single_second">
        <div className="blog_single_container">
            <p className="p">Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data and enterprise process improvements. Collaboratively expedite quality manufactured products via client-focused results quickly communicate enabled technology and turnkey leadership skills. Uniquely enable accurate supply chains rather than
            friction technology.</p>
            <h2>Preferred Form of Vitamin D?</h2>
            {/* vitamin */}
                  <p className="p">Appropriately empower dynamic leadership skills after business portals. Globally my coordinate interactive supply chains with distinctive quality vectors global sources services. Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data and enterprise process improvements.<br></br></p>
            <ul className="blog_single_ul_circle">
                      <li className="p">Dynamically target high-payoff intellectual capital for customized</li>
                      <li className="p">Interactively procrastinate high-payoff content</li>
                      <li className="p">Credibly reinter mediate backend ideas for cross-platform models</li>
            </ul>
            <div className="blog_single_div">
                <h3>“The first rule of any organic used in a business is that nature applied to an efficient operation will magnify the
                efficiency. The second is that organic applied to an inefficient operation will magnify the health.”</h3>
            </div>
            <h2>Make perfect organic product with us</h2>
                  <p className="p">Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI. <br></br></p >
    <ol className="blog_single_ol_order">
                      <li className="p">It brings the right people together with all the right information and tools to get work done</li>
                      <li className="p">We provide operational efficiency, data security, and flexible scale</li>
                      <li className="p">Your best work, together in one package that works seamlessly from your computer</li>
                      <li className="p">Delivers the tools you need to save time Improve field performance always</li>
    </ol>
             
        </div >
    </section >
    </>
  )
}

export default Blog_single