import React, { useState } from "react";
import './style.scss'


const PostItem =  [
    {
        img:'/img/imgpost1.png',
        desc:'White Bear',
        code:'#54385',
        bookname:'bear',
        price:'1.20$'
    },
    {
        img:'/img/imgpost2.jpg',
        desc:'Happy Luco',
        code:'#54395',
        bookname:'luco',
        price:'3.30$'
    },
    {
        img:'/img/imgpost3.png',
        desc:'Dodo',
        code:'#54376',
        bookname:'dodo',
        price:'4.30$'
    },
    {
        img:'/img/imgpost4.png',
        desc:'Nono Nono',
        code:'#54348',
        bookname:'Nono',
        price:'3.30$'
    },
    {
        img:'/img/imgpost5.png',
        desc:'Zombie',
        code:'#54337',
        bookname:'zombie',
        price:'4.30$'
    },
    {
        img:'/img/imgpost6.jpg',
        desc:'Pink Devil',
        code:'#54392',
        bookname:'Devil',
        price:'7.90$',
    }

]

const FAQ = [
    {
        question:'Donce posuere massa nec scelerisque,blandit mattis justo blandit',
        answer:'Suspendisse sem neque, auctor a elementum ut,',
        id:0
    },
    {
        question:'Quisque at justo semper , faucibus eros sit amet , scelerisque lorem',
        answer:'Suspendisse sem neque, auctor a elementum ut,',
        id:1
    },
    {
        question:'Nulla eget justo at erso varius consequat',
        answer:'Suspendisse sem neque, auctor a elementum ut,',
        id:2
    },
    {
        question:'vivamus nan nibh quis massa laoreet semper et eu quam',
        answer:'Suspendisse sem neque, auctor a elementum ut,',
        id:3
    },
    {
        question:'Morbi quis nisi tempus,mollid turpis ut,mollis massa',
        answer:'Suspendisse sem neque, auctor a elementum ut,',
        id:4
    }
]

/////please run in googlechorom or firefox
const TestComponent = () => {

    const[openA , setOpenA] = useState(0)
    const[changeColorPink , setChangeColorPink] = useState(false)
    const[changeColorRed , setChangeColorRed] = useState(false)
    const[deactive , setdeactive] = useState(0)
    

    const nextItem = passindex =>{
        if(passindex > openA){
            setOpenA(passindex)
            const rangeArray = new Array(passindex).fill('').map((_,i)=>i)
            setdeactive(rangeArray)
        }
        else{
            setOpenA(passindex)
           // const newRange = deactive.slice(0 , deactive.indexOf(passindex))
            //setdeactive(newRange)
        }
    }

    const changecolortoRed = () =>{
        setChangeColorPink(false)
        setChangeColorRed(true)
    }

    const changecolortopink = () => {
        setChangeColorPink(true)
        setChangeColorRed(false)
    }
    const changecolortonormal = () =>{
        setChangeColorRed(false)
        setChangeColorPink(false)
    }
    

    return(
        <div>
            <div className="navbar">
                <div className="leftsection">
                <div className="navbarLogo">logo</div>
                <div className="navbarMenu">
                    <a>about us</a>
                    <a>contact us</a>
                    <a>colors</a>
                </div>
                </div>
                <div className="rightsection">
                <div className="navbarSocial">
                    <a><Instagram/></a>
                    <a><Telegram/></a>
                    <a><Twitter/></a>
                </div>
                <div className="navbarLogin">login</div>
                </div>
            </div>
            <div className="header">
                <div className="textheader">
                    <h1>Change your <span>Digital Experience</span></h1>
                    <p>Suspendisse sem neque, auctor a elementum ut, varius vel leo.Donec diam arcu,porta et magna at</p>
                </div>
                <div className="imageheader">
                    <img src="/img/avatar.avif" />
                </div>
            </div>
            <div className="InfoCard">
                <h2>Hey there , <span>we are</span></h2>
                <p>Suspendisse sem neque, auctor a elementum ut, varius vel leo.Donec diam arcu,porta et magna at</p>
                <div className="userInfo">
                    <div className="user">
                        <div className="userColor">
                            <p onClick={changecolortonormal}>normal</p>
                            <p onClick={changecolortopink}>pink</p>
                            <p onClick={changecolortoRed}>red</p>
                        </div>
                        <div className={`AvatarIcon ${changeColorPink && 'pink'} ${changeColorRed && 'red'}`}>     
                            <Avatar/>
                        </div>    
                    </div>
                    <div className="Info">
                        <h2>pellentesque blandit in quam rhoncus</h2>
                        <p>
                        Suspendisse sem neque, auctor a elementum ut, varius vel leo.Donec diam arcu,porta et magna atSuspendisse sem neque, auctor a elementum ut, varius vel leo.Donec diam arcu,porta et magna atSuspendisse sem neque, auctor a elementum ut, varius vel leo.Donec diam arcu,porta et magna atSuspendisse sem neque, auctor a elementum ut, varius vel leo.Donec diam arcu,porta et magna at
                        </p>
                    </div>
                </div>
                <div></div>

            </div>
            <div className="descUser">
                <div className="Descs">
                    <div className="DescsItem">
                        <span style={{backgroundColor:'#fdc228'}}>01</span>
                        <p className="title">Motion Graphic</p>
                        <p className="desc"> Suspendisse sem neque, auctor a elementum ut, varius vel leo.Donec diam arcu,porta et magna atSuspendisse sem neque, auctor a elementum ut, varius vel leo.Donec diam arcu,porta et magna atSuspendisse sem neque, auctor a elementum ut, varius vel leo.Donec diam arcu,porta et magna atSuspendisse sem neque, auctor a elementum ut, varius vel leo.Donec diam arcu,porta et magna at</p>
                    </div>
                    <div className="DescsItem">
                        <span style={{backgroundColor:'#77b8a0'}}>02</span>
                        <p className="title">Motion Graphic</p>
                        <p className="desc"> Suspendisse sem neque, auctor a elementum ut, varius vel leo.Donec diam arcu,porta et magna atSuspendisse sem neque, auctor a elementum ut, varius vel leo.Donec diam arcu,porta et magna atSuspendisse sem neque, auctor a elementum ut, varius vel leo.Donec diam arcu,porta et magna atSuspendisse sem neque, auctor a elementum ut, varius vel leo.Donec diam arcu,porta et magna at</p>
                    </div>
                    <div className="DescsItem">
                        <span style={{backgroundColor:'#f5aeea'}}>03</span>
                        <p className="title">Motion Graphic</p>
                        <p className="desc"> Suspendisse sem neque, auctor a elementum ut, varius vel leo.Donec diam arcu,porta et magna atSuspendisse sem neque, auctor a elementum ut, varius vel leo.Donec diam arcu,porta et magna atSuspendisse sem neque, auctor a elementum ut, varius vel leo.Donec diam arcu,porta et magna atSuspendisse sem neque, auctor a elementum ut, varius vel leo.Donec diam arcu,porta et magna at</p>
                    </div>
                </div>
                <div className="userImage">
                    <img src="/img/Avatar.jpg"/>
                </div>
            </div>
            <div className="userPost">
                <h2>TopPst</h2>
                <div className="Posts">
                {
                  PostItem.map((content , index)=>
                  <div className="Item">
                      <div className="ItemImage">
                          <img src={content.img} />
                      </div>
                      <div className="ItemInfo">
                        <div className="ItemInfoName">
                            <p>{content.desc}</p>
                            <p>{content.code}</p>
                        </div>
                        <div className="ItemInfoIcon">
                            <LockIcon/>
                            {/*<VisitIcon/>*/}
                            <VisitProduct item={content}/>
                        </div>
                      </div>
                  </div>
                  )
                }
                </div>
            </div>
            <div className="FAQ">
                <h3>FAQ</h3>
                <div className="faqBox">
                            {
                                FAQ.map((item , i) => 
                                
                                <div>
                                 <div className="QandAItem" key={i}>   
                                    <p className={`QItem ${openA === i ? 'openQ':''}`} onClick={()=> setOpenA(false)}>{item.question}</p>
                                    <p className={`AItem ${openA === i  ?'open' :''}`}>{item.answer}</p>
                                 </div>
                                 <div className="IconFAQ" onClick={()=> nextItem(i)}>
                                    <AngleBottom/>
                                 </div>
                                </div>                                
                                )
                            }
                </div>
            </div>
            <div className="Footer">
                <div className="TopFooter">
                <div className="LogoSocial">
                    <p>Logo</p>
                    <div className="Logo">
                        <p>join the community</p>
                        <div className="Socials">
                            <Instagram/>
                            <Twitter/>
                            <Telegram/>
                        </div>    
                    </div>
                </div>
                <div className="About">
                    <p>Site</p>
                    <div>
                        <a>About us</a>
                        <a>NFTs</a>
                        <a>Contact</a>
                    </div>    
                </div>                            
                <div className="Utility">
                    <p>Utility</p>
                    <div>
                        <a>Style guide</a>
                        <a>Licensing</a>
                        <a>404</a>
                    </div>    
                </div>                            
                <div className="shop">
                    <p className="shopTitle">stay in the loop</p>
                    <p className="shopText"> Suspendisse sem neque, auctor a elementum ut, varius vel leo.Donec diam arcu,porta et magna atSuspendisse sem neque, auctor a elementum ut, varius vel leo.Donec diam arcu,porta et magna atSuspendisse sem neque, auctor a elementum ut, varius vel leo.Donec diam arcu,porta et magna atSuspendisse sem neque, auctor a elementum ut, varius vel leo.Donec diam arcu,porta et magna at</p>
                    <div className="shopForm">
                        <input placeholder="your email"/>
                        <button>sign up</button>
                    </div>
                </div>
                </div>
                <p className="LicenceText">2022 All rights reserved.</p>                            
            </div>
        </div>
    )

}

const VisitProduct = ({item}) =>{
    const[activeVisit , setActiveVisit] = useState(false)
    const[counter , setCounter] = useState(0)

    const Increase = () =>{
        setCounter(count => count +1)
    }
    const Decrease = () => {
        setCounter(count => count -1)
    }
    return(
    <div className="VisitProduct">
        <div className="VisitIcon" onClick={() => setActiveVisit(true)}>
            <VisitIcon/>
        </div>
        <div className={`VisitBox ${activeVisit && 'active'}`}>
            <div className="closeIcon" onClick={() => setActiveVisit(false)}>
                <CloseIcon/>
            </div>
            <div className={`product ${activeVisit && 'activeBox'}`}>
                <div className="productItem">
                    <div className="imgproduct"><img src={item.img} /></div>
                    <div className="productInfo">
                        <div className="priceproduct">
                            <p className="title">Price</p>
                            <p className="price">{item.price}</p>
                        </div>
                        <div className="nameproduct">
                            <p className="title">Name</p>
                            <p className="name">{item.bookname}</p>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="AddProduct">
                    <div className="AddProductItem">
                        <p className="title">Add Number you Want</p>
                        <div className="counter">
                            <p onClick={Increase} className="increas">+</p>
                            {/*<p className="countText">Count of pro</p>*/}
                            <p onClick={Decrease} className="decreas">-</p>
                        </div>
                    </div>  
                    <div className="BuyIcon"><div>{counter}</div><BuyIcon/></div>  
                </div>                
            </div>
        </div>    

    </div>
    )
}

const Instagram = () => <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM18.7233 11.2773C20.0886 11.2152 20.5249 11.2 24.0012 11.2H23.9972C27.4746 11.2 27.9092 11.2152 29.2746 11.2773C30.6373 11.3397 31.5679 11.5555 32.384 11.872C33.2266 12.1987 33.9386 12.636 34.6506 13.348C35.3627 14.0595 35.8 14.7736 36.128 15.6155C36.4427 16.4294 36.6587 17.3595 36.7227 18.7222C36.784 20.0876 36.8 20.5238 36.8 24.0001C36.8 27.4764 36.784 27.9116 36.7227 29.277C36.6587 30.6391 36.4427 31.5695 36.128 32.3837C35.8 33.2253 35.3627 33.9394 34.6506 34.6509C33.9394 35.3629 33.2264 35.8013 32.3848 36.1283C31.5703 36.4448 30.6391 36.6605 29.2765 36.7229C27.9111 36.7851 27.4762 36.8003 23.9996 36.8003C20.5236 36.8003 20.0876 36.7851 18.7222 36.7229C17.3598 36.6605 16.4294 36.4448 15.615 36.1283C14.7736 35.8013 14.0595 35.3629 13.3483 34.6509C12.6365 33.9394 12.1992 33.2253 11.872 32.3834C11.5557 31.5695 11.34 30.6394 11.2773 29.2767C11.2155 27.9114 11.2 27.4764 11.2 24.0001C11.2 20.5238 11.216 20.0873 11.2771 18.7219C11.3384 17.3598 11.5544 16.4294 11.8717 15.6152C12.1997 14.7736 12.6371 14.0595 13.3491 13.348C14.0606 12.6363 14.7747 12.1989 15.6166 11.872C16.4305 11.5555 17.3606 11.3397 18.7233 11.2773Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M22.853 13.5067C23.0759 13.5064 23.3158 13.5065 23.5746 13.5066L24.0013 13.5067C27.4189 13.5067 27.824 13.519 29.1736 13.5803C30.4216 13.6374 31.0989 13.8459 31.5501 14.0211C32.1475 14.2531 32.5733 14.5305 33.0211 14.9785C33.4691 15.4265 33.7464 15.8532 33.979 16.4505C34.1542 16.9012 34.363 17.5785 34.4198 18.8265C34.4811 20.1759 34.4944 20.5812 34.4944 23.9972C34.4944 27.4133 34.4811 27.8186 34.4198 29.168C34.3627 30.416 34.1542 31.0933 33.979 31.544C33.747 32.1413 33.4691 32.5667 33.0211 33.0144C32.5731 33.4624 32.1477 33.7398 31.5501 33.9718C31.0995 34.1478 30.4216 34.3558 29.1736 34.4128C27.8242 34.4742 27.4189 34.4875 24.0013 34.4875C20.5834 34.4875 20.1783 34.4742 18.8289 34.4128C17.5809 34.3552 16.9036 34.1467 16.4521 33.9715C15.8548 33.7395 15.4281 33.4621 14.9801 33.0141C14.5321 32.5661 14.2548 32.1405 14.0222 31.5429C13.847 31.0923 13.6382 30.4149 13.5814 29.1669C13.5201 27.8176 13.5078 27.4122 13.5078 23.994C13.5078 20.5759 13.5201 20.1727 13.5814 18.8233C13.6385 17.5753 13.847 16.898 14.0222 16.4468C14.2542 15.8494 14.5321 15.4228 14.9801 14.9748C15.4281 14.5268 15.8548 14.2494 16.4521 14.0169C16.9033 13.8409 17.5809 13.6329 18.8289 13.5755C20.0097 13.5222 20.4674 13.5062 22.853 13.5035V13.5067ZM30.8339 15.6321C29.9859 15.6321 29.2978 16.3193 29.2978 17.1676C29.2978 18.0156 29.9859 18.7036 30.8339 18.7036C31.6819 18.7036 32.3699 18.0156 32.3699 17.1676C32.3699 16.3196 31.6819 15.6316 30.8339 15.6316V15.6321ZM17.4279 24.0002C17.4279 20.3701 20.3709 17.4269 24.001 17.4268C27.6312 17.4268 30.5736 20.37 30.5736 24.0002C30.5736 27.6304 27.6314 30.5723 24.0013 30.5723C20.3711 30.5723 17.4279 27.6304 17.4279 24.0002Z" fill="black"/><path d="M24.0012 19.7334C26.3575 19.7334 28.2679 21.6436 28.2679 24.0001C28.2679 26.3564 26.3575 28.2668 24.0012 28.2668C21.6447 28.2668 19.7345 26.3564 19.7345 24.0001C19.7345 21.6436 21.6447 19.7334 24.0012 19.7334Z" fill="black"/></svg>
const Telegram = () => <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24ZM19.6 35L20.0083 28.8823L20.008 28.882L31.1369 18.839C31.6253 18.4055 31.0303 18.1941 30.3819 18.5873L16.6473 27.2523L10.7147 25.4007C9.4335 25.0084 9.4243 24.128 11.0023 23.4951L34.1203 14.5809C35.1762 14.1015 36.1953 14.8345 35.7922 16.4505L31.8552 35.0031C31.5803 36.3215 30.7837 36.6368 29.68 36.0278L23.6827 31.5969L20.8 34.4C20.7909 34.4088 20.7819 34.4176 20.7729 34.4264C20.4505 34.7403 20.1837 35 19.6 35Z" fill="black"/></svg>
const Twitter = () => <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM23.3316 20.338L23.2812 19.5075C23.1301 17.3551 24.4563 15.3891 26.5548 14.6265C27.327 14.3553 28.6364 14.3214 29.4926 14.5587C29.8283 14.6604 30.4663 14.9993 30.9195 15.3044L31.7421 15.8637L32.6486 15.5756C33.1523 15.423 33.8238 15.1688 34.1259 14.9993C34.4113 14.8468 34.6631 14.762 34.6631 14.8129C34.6631 15.101 34.042 16.084 33.5216 16.6263C32.8165 17.389 33.018 17.4568 34.4449 16.9483C35.3011 16.6602 35.3178 16.6602 35.15 16.9822C35.0492 17.1517 34.5288 17.7449 33.9748 18.2872C33.0347 19.2194 32.9844 19.3211 32.9844 20.1007C32.9844 21.304 32.4136 23.8123 31.8428 25.1851C30.7852 27.7612 28.5189 30.422 26.2526 31.7609C23.063 33.6422 18.8157 34.1167 15.24 33.0151C14.0481 32.6422 12 31.6931 12 31.5237C12 31.4728 12.6211 31.405 13.3766 31.3881C14.9546 31.3542 16.5326 30.9135 17.8756 30.1339L18.7822 29.5916L17.7413 29.2357C16.264 28.7272 14.9378 27.5578 14.6021 26.4562C14.5013 26.1003 14.5349 26.0833 15.475 26.0833L16.4487 26.0664L15.6261 25.6766C14.6524 25.1851 13.7627 24.3546 13.3262 23.5072C13.0072 22.8971 12.6044 21.3548 12.7219 21.2362C12.7554 21.1854 13.108 21.287 13.5109 21.4226C14.6692 21.8463 14.8203 21.7446 14.1488 21.0328C12.8897 19.7448 12.5036 17.8296 13.108 16.0162L13.3934 15.2027L14.5013 16.3043C16.7677 18.5245 19.4369 19.8465 22.4922 20.2363L23.3316 20.338Z" fill="black"/></svg>
const Avatar = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>among us 2</title><g id="among_us_2" data-name="among us 2"><path d="M11.27,31A2.11,2.11,0,0,1,8.9,29.08c-.16-4-.42-16.18.58-24.55a4,4,0,0,1,4-3.53h4.93a8,8,0,0,1,8,7.73c.16,5.88.08,13.89-.25,19.4a2,2,0,0,1-2,1.87H22.27A2.07,2.07,0,0,1,20,28V24H16v4a3,3,0,0,1-3,3Z" fill="#24a9bf"/><path d="M9.13,8v.11C9,9.27,9,10.47,8.91,11.72c-.15,3.11-.2,8.54-.15,12.26l-.1,0H5.84a2,2,0,0,1-2-1.87,77.13,77.13,0,0,1,.06-9.76c.09-1,.21-1.88.37-2.73A2,2,0,0,1,6.24,8H9.09Z" fill="#24a9bf"/><path d="M9.13,8v.11C9,9.27,9,10.47,8.91,11.72c0,.09,0,.18,0,.28H6.11a2,2,0,0,0-2,1.64c-.16.85-.28,1.77-.37,2.73,0,.22,0,2.44,0,2.66,0-1.62,0-5.19.18-6.66.09-1,.21-1.88.37-2.73A2,2,0,0,1,6.24,8H9.09Z" fill="#37fedb"/><path d="M21.16,21H15.8c-1.8,0-3.39-3.17-3.89-4.89A34.61,34.61,0,0,1,10.86,2.77,1,1,0,0,1,11.79,2c1.67-.66,4.31-.64,7.13-.48a6.29,6.29,0,0,1,6.69,6.62l-.4,7.08C25.09,17.32,23.32,21,21.16,21Z" fill="#37fedb"/><path d="M28.48,10.9a3.76,3.76,0,0,1-.8,2,3.62,3.62,0,0,1-2.58,1.35l-6.2.44h-.26A3.65,3.65,0,0,1,15,11.09V9a2,2,0,0,1,2-2h7.84a3.67,3.67,0,0,1,3.61,3.12A4.07,4.07,0,0,1,28.48,10.9Z" fill="#4a646d"/><path d="M28.48,10.9a3.42,3.42,0,0,1-1.38.38l-6.2.44h-.26A3.65,3.65,0,0,1,17,8.09V7h7.84a3.67,3.67,0,0,1,3.61,3.12A4.07,4.07,0,0,1,28.48,10.9Z" fill="#93c8da"/><rect x="21.55" y="8.57" width="4.44" height="1.6" rx="0.8" fill="#fff"/><path d="M29.44,10A4.67,4.67,0,0,0,27,6.57,9.08,9.08,0,0,0,18.37,0H13.44A5,5,0,0,0,8.49,4.41C8.38,5.27,8.3,6.15,8.22,7A1.43,1.43,0,0,0,8,7H6.24a3,3,0,0,0-3,2.46A65.54,65.54,0,0,0,2.84,22.2a3,3,0,0,0,3,2.8H7.78c0,1.69.08,3.1.12,4.12A3.09,3.09,0,0,0,11.27,32H13a4,4,0,0,0,4-4V25h2v3a3.08,3.08,0,0,0,3.27,3h1.85a3,3,0,0,0,3-2.81c.22-3.75.33-9.69.33-13.73a4.79,4.79,0,0,0,1-.9A4.7,4.7,0,0,0,29.44,10ZM5.84,23a1,1,0,0,1-1-.94A62.15,62.15,0,0,1,5.25,9.81a1,1,0,0,1,1-.81H8.06c-.29,4.22-.34,10.5-.31,14Zm19.28,5.07a1,1,0,0,1-1,.93H22.27c-.76,0-1.27-.4-1.27-1V25a1,1,0,0,0,0-2H17a2,2,0,0,0-2,2v3a2,2,0,0,1-2,2H11.27c-.82,0-1.35-.37-1.37-1-.16-3.95-.43-16,.57-24.39a3,3,0,0,1,3-2.65h4.93a7,7,0,0,1,6.3,4H17a3,3,0,0,0-3,3v2.09a4.64,4.64,0,0,0,4.64,4.64H19l6.2-.44.27,0C25.43,19,25.33,24.6,25.12,28.07ZM26.9,12.31a2.63,2.63,0,0,1-1.87,1l-6.2.44a2.57,2.57,0,0,1-2-.7A2.61,2.61,0,0,1,16,11.09V9a1,1,0,0,1,1-1h7.84a2.65,2.65,0,0,1,2.06,4.31Z"/></g></svg>
const LockIcon =()=><svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>icon 114 lock</title><desc>Created with Sketch.</desc><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="icon-114-lock" fill="#000000"><path d="M16,21.9146472 L16,24.5089948 C16,24.7801695 16.2319336,25 16.5,25 C16.7761424,25 17,24.7721195 17,24.5089948 L17,21.9146472 C17.5825962,21.708729 18,21.1531095 18,20.5 C18,19.6715728 17.3284272,19 16.5,19 C15.6715728,19 15,19.6715728 15,20.5 C15,21.1531095 15.4174038,21.708729 16,21.9146472 L16,21.9146472 L16,21.9146472 Z M15,22.5001831 L15,24.4983244 C15,25.3276769 15.6657972,26 16.5,26 C17.3284271,26 18,25.3288106 18,24.4983244 L18,22.5001831 C18.6072234,22.04408 19,21.317909 19,20.5 C19,19.1192881 17.8807119,18 16.5,18 C15.1192881,18 14,19.1192881 14,20.5 C14,21.317909 14.3927766,22.04408 15,22.5001831 L15,22.5001831 L15,22.5001831 Z M9,14.0000125 L9,10.499235 C9,6.35670485 12.3578644,3 16.5,3 C20.6337072,3 24,6.35752188 24,10.499235 L24,14.0000125 C25.6591471,14.0047488 27,15.3503174 27,17.0094776 L27,26.9905224 C27,28.6633689 25.6529197,30 23.991212,30 L9.00878799,30 C7.34559019,30 6,28.652611 6,26.9905224 L6,17.0094776 C6,15.339581 7.34233349,14.0047152 9,14.0000125 L9,14.0000125 L9,14.0000125 Z M10,14 L10,10.4934269 C10,6.90817171 12.9101491,4 16.5,4 C20.0825462,4 23,6.90720623 23,10.4934269 L23,14 L22,14 L22,10.5090731 C22,7.46649603 19.5313853,5 16.5,5 C13.4624339,5 11,7.46140289 11,10.5090731 L11,14 L10,14 L10,14 Z M12,14 L12,10.5008537 C12,8.0092478 14.0147186,6 16.5,6 C18.9802243,6 21,8.01510082 21,10.5008537 L21,14 L12,14 L12,14 L12,14 Z M8.99742191,15 C7.89427625,15 7,15.8970601 7,17.0058587 L7,26.9941413 C7,28.1019465 7.89092539,29 8.99742191,29 L24.0025781,29 C25.1057238,29 26,28.1029399 26,26.9941413 L26,17.0058587 C26,15.8980535 25.1090746,15 24.0025781,15 L8.99742191,15 L8.99742191,15 Z" id="lock"></path></g></g></svg>
const VisitIcon = () => <svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1"><title>icon 22 eye</title><desc>Created with Sketch.</desc><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="icon-22-eye"  fill="#000000"><path d="M16,9 C7,9 3,16 3,16 C3,16 7,23.000001 16,23 C25,22.999999 29,16 29,16 C29,16 25,9 16,9 L16,9 L16,9 Z M16,10 C8,10 4.19995117,16 4.19995117,16 C4.19995117,16 8,22.0000006 16,22 C24,21.999999 27.8000488,16 27.8000488,16 C27.8000488,16 24,10 16,10 L16,10 L16,10 Z M16,20 C18.2091391,20 20,18.2091391 20,16 C20,13.7908609 18.2091391,12 16,12 C13.7908609,12 12,13.7908609 12,16 C12,18.2091391 13.7908609,20 16,20 L16,20 L16,20 Z M16,19 C17.6568543,19 19,17.6568543 19,16 C19,14.3431457 17.6568543,13 16,13 C14.3431457,13 13,14.3431457 13,16 C13,17.6568543 14.3431457,19 16,19 L16,19 L16,19 Z M16,17 C16.5522848,17 17,16.5522848 17,16 C17,15.4477152 16.5522848,15 16,15 C15.4477152,15 15,15.4477152 15,16 C15,16.5522848 15.4477152,17 16,17 L16,17 L16,17 Z" id="eye"></path></g></g></svg>
const AngleBottom = () => <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"viewBox="0 0 50 50" ><g id="Layer_1"><path d="M25,1C11.767,1,1,11.767,1,25s10.767,24,24,24s24-10.767,24-24S38.233,1,25,1z M25,47C12.869,47,3,37.131,3,25S12.869,3,25,3s22,9.869,22,22S37.131,47,25,47z"/><polygon points="10.293,30.293 11.707,31.707 25,18.414 38.293,31.707 39.707,30.293 25,15.586 "/></g><g></g></svg>
const CloseIcon = () => <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 60.963 60.842" ><path  d="M59.595,52.861L37.094,30.359L59.473,7.98c1.825-1.826,1.825-4.786,0-6.611c-1.826-1.825-4.785-1.825-6.611,0L30.483,23.748L8.105,1.369c-1.826-1.825-4.785-1.825-6.611,0c-1.826,1.826-1.826,4.786,0,6.611l22.378,22.379L1.369,52.861c-1.826,1.826-1.826,4.785,0,6.611c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369l22.502-22.502l22.501,22.502c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369C61.42,57.647,61.42,54.687,59.595,52.861z"/></svg>
const BuyIcon  = () => <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"viewBox="0 0 208.955 208.955"><path d="M190.85,200.227L178.135,58.626c-0.347-3.867-3.588-6.829-7.47-6.829h-26.221V39.971c0-22.04-17.93-39.971-39.969-39.971C82.437,0,64.509,17.931,64.509,39.971v11.826H38.27c-3.882,0-7.123,2.962-7.47,6.829L18.035,200.784c-0.188,2.098,0.514,4.177,1.935,5.731s3.43,2.439,5.535,2.439h157.926c0.006,0,0.014,0,0.02,0c4.143,0,7.5-3.358,7.5-7.5C190.95,201.037,190.916,200.626,190.85,200.227z M79.509,39.971c0-13.769,11.2-24.971,24.967-24.971c13.768,0,24.969,11.202,24.969,24.971v11.826H79.509V39.971z M33.709,193.955L45.127,66.797h19.382v13.412c0,4.142,3.357,7.5,7.5,7.5c4.143,0,7.5-3.358,7.5-7.5V66.797h49.936v13.412c0,4.142,3.357,7.5,7.5,7.5c4.143,0,7.5-3.358,7.5-7.5V66.797h19.364l11.418,127.158H33.709z"/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>


export default TestComponent