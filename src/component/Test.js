import React, { useState } from "react"
import './style.scss';
import { createStore } from "redux";

const initialState = {
    counter : 0
}

///reducer

const rootreducer = (state= initialState , action)=>{
 if(action.type === 'INCREMENT'){
     return state + 2
 }else{
     return state
 }    
}

/// store

const Store = createStore(rootreducer) 
console.log('state' , Store.getState())

///subscribtion
Store.subscribe(()=>{
    console.log(Store.getState() , 'state')
})

///dispatch action 
Store.dispatch({type : 'INCREMENT'})

const MenuItem = [
    {
        name:'Resources',
        id:'1',
        subMenu :[
            {
                Item:'Customer Stories',
                id:'11'
            },
            {
                Item:'Blog',
                id:'12'
            },
            {
                Item:'E-Book',
                id:'13'
            },
            {
                Item:'Podcast',
                id:'14'
            },
            {
                Item:'Customer Knowledge Base',
                id:'15'
            },
        ]
    },
    {
        name:'Pricing',
        id:'2'
    },
    {
        name:'Features',
        id:'3'
    },
    {
        name:'Business Types',
        id:'4'
    },
    {
        name:'EnterPrise',
        id:'5',
    }

]

const BlogItems = [
    {
        img:'/img/blog1.jpg',
        title:'Hiit and fitness studios',
        desc:'Manage your studio and boost your brand with our powerful fitness management software'
    },
    {
        img:'/img/blog2.jpg',
        title:'Gyms',
        desc:'Assess your gyms performance and optimise revenue with our BI and reporting features.'
    },
    {
        img:'/img/blog3.jpg',
        title:'Yoga, Pilates and barre',
        desc:'Build a loyal community and amplify sales with our easy-to-use sales and marketing tools.'
    },
    {
        img:'/img/blog4.jpg',
        title:'Indoor cycling and rowing',
        desc:'Improve member experience and elevate your brand with our slick and simple member app.'
    },
    {
        img:'/img/blog5.jpg',
        title:'Boxing and martial arts',
        desc:'Create a consistent multi-platform brand experience with our fully customisable platforms.'
    },
    {
        img:'/img/blog1.jpg',
        title:'Health and fitness clubs',
        desc:'Leverage a powerful suite of tools designed to streamline your fitness business and save you time'
    }
]

const SliderBrand=[
    {
        img:'/img/brandslider1.png'
    },
    {
        img:'/img/brandslider2.png'
    },
    {
        img:'/img/brandslider3.png'
    },
    {
        img:'/img/brandslider4.png'
    },
    {
        img:'/img/brandslider5.png'
    },
    {
        img:'/img/brandslider6.png'
    },
    {
        img:'/img/brandslider7.png'
    }
]

const Test = () => {

    const[open , setOpen] = useState(false)

    return (
        <div className="Header">
          <div className="Navbar">
            <div className="LoginItem">
                <div className="LogIn">LogIn</div>
                <div className="Demo">Demo & Pricing</div>
            </div>
            <div className={`MenuItem ${open && 'openMenu'}`}>
                {
                    MenuItem.map(item => <p className="NameMenu"> {item.name}</p>)
                }
                <div className="subMenuItem">
                {
                    MenuItem.map(subItem => 
                        subItem.subMenu && subItem.subMenu.map(name => <p>{name.Item}</p>)
                        )
                }
                </div>
            </div>
            <div className="menuMobile" onClick={()=>setOpen(!open)} ><MenuIcon/></div>
            <div className="Logo">
                <img src="/img/logome.svg"/>
            </div>
          </div>
          <div className="header">
              <div className="RightSection">
                  <img src="/img/headerImage.jpg" />
              </div>
              <div className="LeftSection"> 
                <h1>Powering the future of fitness</h1>
                <p>Innovative fitness management software, helping growing businesses retain and scale their brand and revenue.</p>
                <div className="HeaderInfo">
                  <input className="EmailBtn" placeholder="Email"></input>
                  <button className="DemoBtn">Get a Demo</button>
                </div>
                <div className="HeaderPoint">
                    <img src="/img/headerpoint.svg"/>
                </div>
               </div>
          </div>
          <div className="BrandSection">
                <h2>Join thousands of global businesses who trust in us</h2>
                <div className="Brands">
                    <div className="BrandItem"><img src="/img/brand1.png" /></div>
                    <div className="BrandItem"><img src="/img/brand2.png" /></div>
                    <div className="BrandItem"><img src="/img/brand3.png" /></div>
                    <div className="BrandItem"><img src="/img/brand4.png" /></div>
                    <div className="BrandItem"><img src="/img/brand5.png" /></div>
                </div>
                <button>View</button>
          </div>
          <div className="BlogPost">
                <div className="BlogPost-title">
                    <h3>Designed for fitness tailored to you</h3>
                    <p>Developed by fitness entrepreneurs for fitness entrepreneurs, we've built best-in-class 
                        management software to cater to the specific needs of fitness businesses.
                        Whether you own one location or one thousand, we offer a selection of plans
                         and innovative tools to suit your needs.</p>
                </div>
                <div className="BlogPost-Item">
                    {
                        BlogItems.map((content , i) =>
                        <div className="BlogPost-content">
                            <img src={content.img}/>
                            <h3>{content.title}</h3>
                            <p>{content.desc}</p>
                        </div>
                        )
                    }
                </div>
                <div className="sliderPost">
                    <div className="sliderPost-title">
                        <h3>Thousands of customers love us because<span>their members love them</span></h3>
                    </div>
                    <div className="slidercontent"></div>
                    <div className="sliderPost-Info">
                        <div className="sliderPost-Info-brands">
                            {
                                SliderBrand.map((brand,index)=>
                                    <img src={brand.img}/>
                                )
                            }
                        </div>
                        <button className="sliderPostInfo-btn">Request a Demo</button>
                    </div>
                </div>
                <div className="mobileApp">
                    <h3>Boost your business<span>with tools to deliver the best physical and digital member experience</span></h3>
                    <div className="mobileApp-mainSection">
                        <div className="mobileApp-mainSection-pic">
                            <img src="/img/mobile app.png"/>
                        </div>
                        <div className="mobileApp-mainSection-text">
                            <h4>Brand & marketing tools</h4>
                            <p>Amplify your brand, engage with your customer base and generate more revenue with our selection of effective and easy-to-use brand and marketing tools.</p>
                            <a>Explore Marketing Tools</a>
                            <ul>
                                <li><span><img src="/img/success.svg"/></span>Lead capture & social integrations</li>
                                <li><span><img src="/img/success.svg"/></span>Automated messaging & push notifications</li>
                                <li><span><img src="/img/success.svg"/></span>Custom mobile member experience</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mobileApp-descInfo">
                            <div className="mobileApp-descInfo-desciription">
                                <p>“Having the branded app is a huge benefit. It’s really user-friendly for both members and staff, delivering an easy, smooth experience for us all.”</p>
                                <div className="mobileApp-descInfo-desciription-parent">
                                    <div className="mobileApp-descInfo-desciription-profile">
                                      <img src="/img/profile.jpg" />
                                      <p>Hannah Bratcher — <span>Co-founder at Studio Fire</span></p>
                                    </div>
                                    <div className="mobileApp-descInfo-desciription-profile-img">
                                      <img className="img1" src="/img/infomobile.svg" />
                                      <img className="img2" src="/img/infomobile1.svg" />
                                    </div>
                                </div>
                            </div>
                            <div></div>
                        </div>
                </div>
          </div>
          <div className="FormSection">
            <div className="DescribeForm">
                <div className="DescribeForm-title">
                    <h2>Get a quote</h2>
                    <p>Take advantage of our flexible pricing structure. We'll show you the product and answer all your questions in 30 minutes.</p>
                </div>
                <div className="DescribeForm-desc">
                    <ul>
                        <li>Cut costs by 50%. Save thousands with glofox, compared to other management platforms.</li>
                        <li>Increase revenue by 133%. Our average customer more than doubles their revenue within eighteen months of implementing our platform.</li>
                        <li>Flat pricing. One low monthly price. No hidden fees or setup. No contracts.</li>
                    </ul>
                </div>
            </div>
            <div className="Form">
                <h4>fill in your details</h4>
                <div className="FormItem">
                    <label>Full name</label>
                    <input placeholder="Full name"/>
                    <label> Phone number</label>
                    <input placeholder="Phone number"/>
                    <label>Your email</label>
                    <input placeholder="Your email"/>
                    <button>Get a Quote</button>
                </div>
            </div>
          </div>
          <div className="footer">
            <div className="TopFooter">
                <div className="col">
                    <h5>Business Types</h5>
                    <a>Gyms</a>
                    <a>Yoga, Pilates and Barre</a>
                    <a>Indoor Cycling and Rowing</a>
                    <a>HIIT and Fitness Studios</a>
                    <a>Boxing and Martial Arts</a>
                    <a>Health and Fitness Clubs</a>
                </div>
                <div className="col">
                    <h5>Solutions</h5>
                    <a>Marketing Tools</a>
                    <a>Sales Tools</a>
                    <a>Management Tools</a>
                    <a>Member Experience</a>
                    <a>Retention Tools</a>
                </div>
                <div className="col">
                    <h5>Resources</h5>
                    <a>Customer Stories</a>
                    <a>Blog</a>
                    <a>E-Books</a>
                    <a>Podcasts</a>
                    <h5>support</h5>
                    <a>Knowledge Base</a>
                <div className="Users">
                    <a>Contact Us</a>
                    <div className="UserImgFooter"><img src="/img/userFooter.png" /></div>
                </div>
                </div>
              <div className="col">
                  <h5>Company</h5>
                  <a>About Us</a>
                  <a>Careers</a>
                  <a>Terms of Use</a>
                  <a>Privacy Policy</a>
              </div>
            </div>
            <div className="bottoomFooter">
                <div className="footerLogo"><img src="/img/logome.svg" /></div>
                <div className="copyRight">
                    <p>©2022 Glofox <span>— All Rights Reserved</span></p>
                </div>
                <div className="socialmedia">
                   <Instagram/>
                   <Telegram/>
                   <Twitter/>
                </div>
            </div>
          </div>
        </div>
    )
}


const MenuIcon = () => <svg width="18px" height="12px" viewBox="0 0 18 12" version="1.1"><g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Rounded" transform="translate(-885.000000, -3438.000000)"><g id="Navigation" transform="translate(100.000000, 3378.000000)"><g id="-Round-/-Navigation-/-menu" transform="translate(782.000000, 54.000000)"><g transform="translate(0.000000, 0.000000)"><polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon><path d="M4,18 L20,18 C20.55,18 21,17.55 21,17 C21,16.45 20.55,16 20,16 L4,16 C3.45,16 3,16.45 3,17 C3,17.55 3.45,18 4,18 Z M4,13 L20,13 C20.55,13 21,12.55 21,12 C21,11.45 20.55,11 20,11 L4,11 C3.45,11 3,11.45 3,12 C3,12.55 3.45,13 4,13 Z M3,7 C3,7.55 3.45,8 4,8 L20,8 C20.55,8 21,7.55 21,7 C21,6.45 20.55,6 20,6 L4,6 C3.45,6 3,6.45 3,7 Z" id="🔹-Icon-Color" fill="#1D1D1D"></path></g></g></g></g></g></svg>
const Instagram = () => <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM18.7233 11.2773C20.0886 11.2152 20.5249 11.2 24.0012 11.2H23.9972C27.4746 11.2 27.9092 11.2152 29.2746 11.2773C30.6373 11.3397 31.5679 11.5555 32.384 11.872C33.2266 12.1987 33.9386 12.636 34.6506 13.348C35.3627 14.0595 35.8 14.7736 36.128 15.6155C36.4427 16.4294 36.6587 17.3595 36.7227 18.7222C36.784 20.0876 36.8 20.5238 36.8 24.0001C36.8 27.4764 36.784 27.9116 36.7227 29.277C36.6587 30.6391 36.4427 31.5695 36.128 32.3837C35.8 33.2253 35.3627 33.9394 34.6506 34.6509C33.9394 35.3629 33.2264 35.8013 32.3848 36.1283C31.5703 36.4448 30.6391 36.6605 29.2765 36.7229C27.9111 36.7851 27.4762 36.8003 23.9996 36.8003C20.5236 36.8003 20.0876 36.7851 18.7222 36.7229C17.3598 36.6605 16.4294 36.4448 15.615 36.1283C14.7736 35.8013 14.0595 35.3629 13.3483 34.6509C12.6365 33.9394 12.1992 33.2253 11.872 32.3834C11.5557 31.5695 11.34 30.6394 11.2773 29.2767C11.2155 27.9114 11.2 27.4764 11.2 24.0001C11.2 20.5238 11.216 20.0873 11.2771 18.7219C11.3384 17.3598 11.5544 16.4294 11.8717 15.6152C12.1997 14.7736 12.6371 14.0595 13.3491 13.348C14.0606 12.6363 14.7747 12.1989 15.6166 11.872C16.4305 11.5555 17.3606 11.3397 18.7233 11.2773Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M22.853 13.5067C23.0759 13.5064 23.3158 13.5065 23.5746 13.5066L24.0013 13.5067C27.4189 13.5067 27.824 13.519 29.1736 13.5803C30.4216 13.6374 31.0989 13.8459 31.5501 14.0211C32.1475 14.2531 32.5733 14.5305 33.0211 14.9785C33.4691 15.4265 33.7464 15.8532 33.979 16.4505C34.1542 16.9012 34.363 17.5785 34.4198 18.8265C34.4811 20.1759 34.4944 20.5812 34.4944 23.9972C34.4944 27.4133 34.4811 27.8186 34.4198 29.168C34.3627 30.416 34.1542 31.0933 33.979 31.544C33.747 32.1413 33.4691 32.5667 33.0211 33.0144C32.5731 33.4624 32.1477 33.7398 31.5501 33.9718C31.0995 34.1478 30.4216 34.3558 29.1736 34.4128C27.8242 34.4742 27.4189 34.4875 24.0013 34.4875C20.5834 34.4875 20.1783 34.4742 18.8289 34.4128C17.5809 34.3552 16.9036 34.1467 16.4521 33.9715C15.8548 33.7395 15.4281 33.4621 14.9801 33.0141C14.5321 32.5661 14.2548 32.1405 14.0222 31.5429C13.847 31.0923 13.6382 30.4149 13.5814 29.1669C13.5201 27.8176 13.5078 27.4122 13.5078 23.994C13.5078 20.5759 13.5201 20.1727 13.5814 18.8233C13.6385 17.5753 13.847 16.898 14.0222 16.4468C14.2542 15.8494 14.5321 15.4228 14.9801 14.9748C15.4281 14.5268 15.8548 14.2494 16.4521 14.0169C16.9033 13.8409 17.5809 13.6329 18.8289 13.5755C20.0097 13.5222 20.4674 13.5062 22.853 13.5035V13.5067ZM30.8339 15.6321C29.9859 15.6321 29.2978 16.3193 29.2978 17.1676C29.2978 18.0156 29.9859 18.7036 30.8339 18.7036C31.6819 18.7036 32.3699 18.0156 32.3699 17.1676C32.3699 16.3196 31.6819 15.6316 30.8339 15.6316V15.6321ZM17.4279 24.0002C17.4279 20.3701 20.3709 17.4269 24.001 17.4268C27.6312 17.4268 30.5736 20.37 30.5736 24.0002C30.5736 27.6304 27.6314 30.5723 24.0013 30.5723C20.3711 30.5723 17.4279 27.6304 17.4279 24.0002Z" fill="black"/><path d="M24.0012 19.7334C26.3575 19.7334 28.2679 21.6436 28.2679 24.0001C28.2679 26.3564 26.3575 28.2668 24.0012 28.2668C21.6447 28.2668 19.7345 26.3564 19.7345 24.0001C19.7345 21.6436 21.6447 19.7334 24.0012 19.7334Z" fill="black"/></svg>
const Telegram = () => <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24ZM19.6 35L20.0083 28.8823L20.008 28.882L31.1369 18.839C31.6253 18.4055 31.0303 18.1941 30.3819 18.5873L16.6473 27.2523L10.7147 25.4007C9.4335 25.0084 9.4243 24.128 11.0023 23.4951L34.1203 14.5809C35.1762 14.1015 36.1953 14.8345 35.7922 16.4505L31.8552 35.0031C31.5803 36.3215 30.7837 36.6368 29.68 36.0278L23.6827 31.5969L20.8 34.4C20.7909 34.4088 20.7819 34.4176 20.7729 34.4264C20.4505 34.7403 20.1837 35 19.6 35Z" fill="black"/></svg>
const Twitter = () => <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM23.3316 20.338L23.2812 19.5075C23.1301 17.3551 24.4563 15.3891 26.5548 14.6265C27.327 14.3553 28.6364 14.3214 29.4926 14.5587C29.8283 14.6604 30.4663 14.9993 30.9195 15.3044L31.7421 15.8637L32.6486 15.5756C33.1523 15.423 33.8238 15.1688 34.1259 14.9993C34.4113 14.8468 34.6631 14.762 34.6631 14.8129C34.6631 15.101 34.042 16.084 33.5216 16.6263C32.8165 17.389 33.018 17.4568 34.4449 16.9483C35.3011 16.6602 35.3178 16.6602 35.15 16.9822C35.0492 17.1517 34.5288 17.7449 33.9748 18.2872C33.0347 19.2194 32.9844 19.3211 32.9844 20.1007C32.9844 21.304 32.4136 23.8123 31.8428 25.1851C30.7852 27.7612 28.5189 30.422 26.2526 31.7609C23.063 33.6422 18.8157 34.1167 15.24 33.0151C14.0481 32.6422 12 31.6931 12 31.5237C12 31.4728 12.6211 31.405 13.3766 31.3881C14.9546 31.3542 16.5326 30.9135 17.8756 30.1339L18.7822 29.5916L17.7413 29.2357C16.264 28.7272 14.9378 27.5578 14.6021 26.4562C14.5013 26.1003 14.5349 26.0833 15.475 26.0833L16.4487 26.0664L15.6261 25.6766C14.6524 25.1851 13.7627 24.3546 13.3262 23.5072C13.0072 22.8971 12.6044 21.3548 12.7219 21.2362C12.7554 21.1854 13.108 21.287 13.5109 21.4226C14.6692 21.8463 14.8203 21.7446 14.1488 21.0328C12.8897 19.7448 12.5036 17.8296 13.108 16.0162L13.3934 15.2027L14.5013 16.3043C16.7677 18.5245 19.4369 19.8465 22.4922 20.2363L23.3316 20.338Z" fill="black"/></svg>


export default Test ;