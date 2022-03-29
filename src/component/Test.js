import React, { useState } from "react"
import './style.scss'

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
    return (
        <div className="Header">
          <div className="Navbar">
            <div className="LoginItem">
                <div className="LogIn">LogIn</div>
                <div className="Demo">Demo & Pricing</div>
            </div>
            <div className="MenuItem">
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
        </div>
    )
}


export default Test ;