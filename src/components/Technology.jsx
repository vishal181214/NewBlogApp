import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { contextData } from './ContextApi'


const Technology = () => {
    const [nav,setNav] = useState(false);
    return (
        <contextData.Consumer>
            {(props) => {
                return (
                    <div>
                        <div className='mainHeading'>
                            <div className="headAlign">
                                <p className='theHead'>{props.the}</p>
                                <p className='theSpiran'>{props.siren}</p>
                            </div>
                            <div className="navMenu" onClick={()=>{setNav(!nav);console.log(nav);}}></div>    
                        </div>
                        {
                            nav ? <div className='navigationRWD' style={{display:"block"}}>
                            <ul>
                                <li><Link to='/' style={{ textDecoration: 'none' }} className='navItem'>{props.home}</Link></li>
                                <li><Link to='/Bollywood' style={{ textDecoration: 'none' }} className='navItem'>{props.bolly}</Link></li>
                                <li><Link to='/Technology' style={{ textDecoration: 'none' }} className='navItem'>{props.techno}</Link></li>
                                <li><Link to='/Hollywood' style={{ textDecoration: 'none' }} className='navItem'>{props.holly}</Link></li>
                                <li><Link to='/Fitness' style={{ textDecoration: 'none' }} className='navItem'>{props.fit}</Link></li>
                                <li><Link to='/Food' style={{ textDecoration: 'none' }} className='navItem'>{props.foo}</Link></li>
                            </ul>
                        </div> : <div className='navigation'>
                            <ul>
                                <li><Link to='/' style={{ textDecoration: 'none' }} className='navItem'>{props.home}</Link></li>
                                <li><Link to='/Bollywood' style={{ textDecoration: 'none' }} className='navItem'>{props.bolly}</Link></li>
                                <li><Link to='/Technology' style={{ textDecoration: 'none' }} className='navItem'>{props.techno}</Link></li>
                                <li><Link to='/Hollywood' style={{ textDecoration: 'none' }} className='navItem'>{props.holly}</Link></li>
                                <li><Link to='/Fitness' style={{ textDecoration: 'none' }} className='navItem'>{props.fit}</Link></li>
                                <li><Link to='/Food' style={{ textDecoration: 'none' }} className='navItem'>{props.foo}</Link></li>
                            </ul>
                        </div>
                        }
                        <div className="mainContent">
                            <div className="firstContent">
                                <Link to='/TechnoImgFirst'>
                                <div className="TechnoImgText">
                                    <div className="TechnoleftImgText">
                                        <p className='titleText'>{props.firstTitle}</p>
                                        <p className='smallText'><span>{props.travel}</span> {props.travelDate}</p>
                                    </div>
                                </div>
                                </Link>
                                
                                <div className="rightimg">
                                <Link to='/TechnoImgFirst'>
                                    <div className="TechnorightTop">
                                        <div className="rightTopText">
                                            <p className='rightTopTitleText'>{props.secTitle}<br />{props.secTitleBr}</p>
                                            <p className='rightTopsmallText'>{props.travDate}</p>
                                        </div>
                                    </div>
                                </Link>
                                    <Link to='/TechnoImgFirst'>
                                    <div className="TechnorightSec">
                                        <div className="rightTopText">
                                            <p className='rightTopTitleText'>{props.secTitle}<br />{props.secTitleBr}</p>
                                            <p className='rightTopsmallText'>{props.travDate}</p>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="theLatest">
                                <p>{props.latest}</p>
                                <hr />
                            </div>
                            <div className="FitsecContent">
                                <div className="FinfoCard">
                                    <Link to='/TechnoImgTwo'><div className="Technoimage"></div></Link>
                                    <div className="imageText">
                                        <p className='imageTitle'>{props.imgCardTitle}<br />{props.imgCardTitleBr}</p>
                                        <p className='imgDesc'>{props.imgCardInfo}</p>
                                        <p className='lastBlock'><span className='travel'>{props.travel}</span> <span className='dateInfo'>{props.travelDate}</span></p>
                                    </div>
                                </div>
                                <div className="FinfoCard">
                                    <Link to='/TechnoImgTwo'><div className="Technoimage"></div></Link>
                                    <div className="imageText">
                                        <p className='imageTitle'>{props.imgCardTitle}<br />{props.imgCardTitleBr}</p>
                                        <p className='imgDesc'>{props.imgCardInfo}</p>
                                        <p className='lastBlock'><span className='travel'>{props.travel}</span> <span className='dateInfo'>{props.travelDate}</span></p>
                                    </div>
                                </div>
                                <div className="FinfoCard algn">
                                    <Link to='/TechnoImgTwo'><div className="Technoimage"></div></Link>
                                    <div className="imageText">
                                        <p className='imageTitle'>{props.imgCardTitle}<br />{props.imgCardTitleBr}</p>
                                        <p className='imgDesc'>{props.imgCardInfo}</p>
                                        <p className='lastBlock'><span className='travel'>{props.travel}</span> <span className='dateInfo'>{props.travelDate}</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="theLatest technoLat">
                                <p>{props.articles}</p>
                                <hr />
                            </div>
                            <div className="latestArt">
                                <div className="leftArticle">
                                    <hr />
                                    <div className="wavesBlock">
                                        <Link to='/TechnoImgFour'><div className="TechnowaveImg"></div></Link>
                                        <div className="waveText">
                                            <p className='waveTextHeading'>{props.waveHeading}<br/>{props.waveHeadingBr}</p>
                                            <p className='waveTextInfo'>{props.waveTextInfo}<br/>{props.waveTextInfoBr}</p>
                                            <p className='travAlgn'><span className='travel'>{props.travel}</span><span className='dateInfo'> {props.travelDate}</span></p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="wavesBlock">
                                        <Link to='/TechnoImgFour'><div className="TechnowaveImg"></div></Link>
                                        <div className="waveText">
                                            <p className='waveTextHeading'>{props.waveHeading}<br/>{props.waveHeadingBr}</p>
                                            <p className='waveTextInfo'>{props.waveTextInfo}<br/>{props.waveTextInfoBr}</p>
                                            <p className='travAlgn'><span className='travel'>{props.travel}</span><span className='dateInfo'> {props.travelDate}</span></p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="wavesBlock">
                                        <Link to='/TechnoImgFour'><div className="TechnowaveImg"></div></Link>
                                        <div className="waveText">
                                            <p className='waveTextHeading'>{props.waveHeading}<br/>{props.waveHeadingBr}</p>
                                            <p className='waveTextInfo'>{props.waveTextInfo}<br/>{props.waveTextInfoBr}</p>
                                            <p className='travAlgn'><span className='travel'>{props.travel}</span><span className='dateInfo'> {props.travelDate}</span></p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="wavesBlock">
                                        <Link to='/TechnoImgFour'><div className="TechnowaveImg"></div></Link>
                                        <div className="waveText">
                                            <p className='waveTextHeading'>{props.waveHeading}<br/>{props.waveHeadingBr}</p>
                                            <p className='waveTextInfo'>{props.waveTextInfo}<br/>{props.waveTextInfoBr}</p>
                                            <p className='travAlgn'><span className='travel'>{props.travel}</span><span className='dateInfo'> {props.travelDate}</span></p>
                                        </div>
                                    </div>
                                    <div className="loadMore">
                                        <div className="loadImg"></div>
                                        <p>{props.more}</p>
                                    </div>
                                    <Link to='/TechnoImgFirst'>
                                    <div className="TechnogalleryImg">
                                        <p className='gallTitle'>{props.firstTitle}</p>
                                        <p className='travGall'>{props.travDate}</p>
                                    </div>
                                    </Link>
                                </div>
                                <div className="rightArticle alignright">
                                    <div className="advert"><p>{props.adverb}</p></div>
                                    <div className="topPost techPost">
                                        <div className="theLatest">
                                            <p>{props.post}</p>
                                        </div>
                                        <p className='hey'></p>
                                        <Link to='/TechnoImgThree'><div className='TechnotopImage'></div></Link>
                                        <div className="topText">
                                            <div className="ltext">
                                                <p className="topTitle">{props.topTitle}<br/>{props.topTitleBr}</p>
                                                <p className='trav'><span className='travel'>{props.travel}</span><span className='dateInfo'> {props.travelDate}</span></p>
                                            </div>
                                            <div className="num">
                                                <p>{props.one}</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="TechnostopTextOne">
                                            <Link to='/TechnoImgFive'><div className="TechnotopTextImg"></div></Link>
                                            <div className="ltextOne">
                                                <p className="topTitle">{props.topTitle}<br/>{props.topTitleBr}</p>
                                                <p className='trav'><span className='travel'>{props.travel}</span><span className='dateInfo'> {props.travelDate}</span></p>
                                            </div>
                                            <div className="num">
                                                <p>{props.two}</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="TechnostopTextOne">
                                            <Link to='/TechnoImgFive'><div className="TechnotopTextImg"></div></Link>
                                            <div className="ltextOne">
                                                <p className="topTitle">{props.topTitle}<br/>{props.topTitleBr}</p>
                                                <p className='trav'><span className='travel'>{props.travel}</span><span className='dateInfo'> {props.travelDate}</span></p>
                                            </div>
                                            <div className="num">
                                                <p>{props.three}</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="TechnostopTextOne">
                                            <Link to='/TechnoImgFive'><div className="TechnotopTextImg"></div></Link>
                                            <div className="ltextOne">
                                                <p className="topTitle">{props.topTitle}<br/>{props.topTitleBr}</p>
                                                <p className='trav'><span className='travel'>{props.travel}</span><span className='dateInfo'> {props.travelDate}</span></p>
                                            </div>
                                            <div className="num">
                                                <p>{props.four}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="theLatest alignright">
                                <p>{props.articles}</p>
                                <hr />
                            </div>
                            <div className="cardInfo">
                                <hr />
                                <div className="cardDiv">
                                    <div className="cards">
                                        <p className='cardsTitle'>{props.waveHeading}<br/>{props.waveHeadingBr}</p>
                                        <p className='cardsInfo'>{props.imgCardInfo}</p>
                                        <p className='techDate'><span className='tech'>{props.cardTech} </span><span className='today'> {props.today}</span></p>
                                    </div>
                                    <hr />

                                    <div className="cards">
                                        <p className='cardsTitle'>{props.waveHeading}<br/>{props.waveHeadingBr}</p>
                                        <p className='cardsInfo'>{props.imgCardInfo}</p>
                                        <p className='techDate'><span className='tech'>{props.style} </span><span className='today'> {props.aug}</span></p>
                                    </div>
                                    <hr />

                                    <div className="cards">
                                        <p className='cardsTitle'>{props.waveHeading}<br/>{props.waveHeadingBr}</p>
                                        <p className='cardsInfo'>{props.imgCardInfo}</p>
                                        <p className='techDate'><span className='tech'>{props.cardTech} </span><span className='today'> {props.aug}</span></p>
                                    </div>

                                </div>
                                <hr />
                            </div>
                            <div className="loadMore">
                                <p>{props.more}</p>
                                <div className="viewMore"></div>
                            </div>
                        </div>
                    </div>
                )
            }}
        </contextData.Consumer>
    )
}

export default Technology;

