import React from 'react'
import { Link } from 'react-router-dom'
import { contextData } from '../ContextApi'
import imageOne from '../img/foodOne.jpg'
import imageTwo from '../img/foodTwo.jpeg'
import natureTemp from '../img/foodSix.webp'


export function FoodImgFirst() {
    return (
        <contextData.Consumer>
            {(props) => {
                return (
                    <>
                        <div className="Imageheader">
                            <Link to='/'><p className='ImageHead'>{props.the}</p><p className='imageSpiran'>{props.siren}</p></Link>
                            <button className='btnGet'>{props.btnName}</button>
                        </div>
                        <hr className='footSepe'/>
                        <div className="imageContent">
                            <div className="options">
                                <div className="stickyText">
                                <div className="clap">
                                    <div className="clapImg"></div>
                                    <p className='followers'>{props.followers}</p>
                                </div>
                                <div className="share">
                                    <div className="shareImg"></div>
                                    <p className='shareMsg'>{props.shareArt}</p>
                                </div>
                                </div>
                            </div>
                            <div className="imageDataInfo">
                                <p className="imgInfoHeading">{props.fivhead}</p>
                                <div className="userProf">
                                    <div className="img"></div>
                                    <div className="userDesc">
                                        <p className='userName'>{props.userName}</p>
                                        <p className='userInfo'>{props.userRead}</p>
                                    </div>
                                    <div className="socialIcon">
                                        <ul>
                                            <li className="facebook"></li>
                                            <li className="twitter"></li>
                                            <li className="instagram"></li>
                                            <li className="youtube"></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="reactImage"><img src={imageOne}/></div>
                                <div className="contImg">
                                    <p>{props.contImgText}</p><br/>
                                    <p>{props.contImgText}</p>
                                    <p style={{marginTop:'5vh'}}>{props.talk}</p>
                                </div>
                                <div className="codeImg"><img src={imageOne}/></div>
                                <div className="Rjava">
                                    <div className="lang"><p>{props.react}</p></div>
                                    <div className="lang"><p>{props.js}</p></div>
                                    <div className="lang"><p>{props.ani}</p></div>
                                </div>
                                <div className="clapalgn">
                                    <div className="clapalgnImg"></div>
                                    <p className='clapalgnfollowers'>{props.followers}</p>
                                    <p className='clasps'>{props.clap}</p>
                                </div>
                                <hr className='sepe'/>
                                    <div className="userProfTwo">
                                        <div className="userImageTwo"></div>
                                        <div className="userInfoTwo">
                                            <p className='autInfo'>{props.authInfo}</p>
                                            <p className='authName'>{props.authName}</p>
                                            <p className='authDate'>{props.authDat}</p>
                                        </div>
                                    </div>
                                <hr className='sepe'/>
                            </div>
                            <div className="blankDiv">
                            </div>
                        </div>
                        <div className="footColor">
                        <div className="footer">
                            <div className="moreSiren"><p>{props.mSiren}</p></div>
                            <hr className='footSepe'/>
                            <div className="userCards">
                                <div className="userCared">
                                    <p className='taggedText'>{props.tagged}</p>
                                    <div className="authImage"><img src={imageOne}/></div>
                                    <p className='Joshua'>{props.authText}</p>
                                    <div className="authInfoCard">
                                        <div className="Authpic"></div>
                                        <div className="picInfo">
                                            <p className='AuthPicName'>{props.authName}</p>
                                            <p className='AuthPicDate'>{props.augdate}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="userCared">
                                <p className='taggedText'>{props.tagged}</p>
                                    <div className="authImage"><img src={imageOne}/></div>
                                    <p className='Joshua'>{props.authText}</p>
                                    <div className="authInfoCard">
                                        <div className="Authpic"></div>
                                        <div className="picInfo">
                                            <p className='AuthPicName'>{props.authName}</p>
                                            <p className='AuthPicDate'>{props.augdate}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="userCared">
                                <p className='taggedText'>{props.tagged}</p>
                                    <div className="authImage"><img src={imageOne}/></div>
                                    <p className='Joshua'>{props.authText}</p>
                                    <div className="authInfoCard">
                                        <div className="Authpic"></div>
                                        <div className="picInfo">
                                            <p className='AuthPicName'>{props.authName}</p>
                                            <p className='AuthPicDate'>{props.augdate}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </>
                ) 
            }}
        </contextData.Consumer>
    )
}

export  function FoodImgTwo() {
    return (
        <contextData.Consumer>
            {(props) => {
                return (
                    <>
                        <div className="Imageheader">
                            <Link to='/'><p className='ImageHead'>{props.the}</p><p className='imageSpiran'>{props.siren}</p></Link>
                            <button className='btnGet'>{props.btnName}</button>
                        </div>
                        <hr className='footSepe'/>
                        <div className="imageContent">
                            <div className="options">
                                <div className="stickyText">
                                <div className="clap">
                                    <div className="clapImg"></div>
                                    <p className='followers'>{props.followers}</p>
                                </div>
                                <div className="share">
                                    <div className="shareImg"></div>
                                    <p className='shareMsg'>{props.shareArt}</p>
                                </div>
                                </div>
                            </div>
                            <div className="imageDataInfo">
                                <p className="imgInfoHeading">{props.fivhead}</p>
                                <div className="userProf">
                                    <div className="img"></div>
                                    <div className="userDesc">
                                        <p className='userName'>{props.userName}</p>
                                        <p className='userInfo'>{props.userRead}</p>
                                    </div>
                                    <div className="socialIcon">
                                        <ul>
                                            <li className="facebook"></li>
                                            <li className="twitter"></li>
                                            <li className="instagram"></li>
                                            <li className="youtube"></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="reactImage"><img src={imageTwo}/></div>
                                <div className="contImg">
                                    <p>{props.contImgText}</p><br/>
                                    <p>{props.contImgText}</p>
                                    <p style={{marginTop:'5vh'}}>{props.talk}</p>
                                </div>
                                <div className="codeImg"><img src={imageTwo}/></div>
                                <div className="Rjava">
                                    <div className="lang"><p>{props.react}</p></div>
                                    <div className="lang"><p>{props.js}</p></div>
                                    <div className="lang"><p>{props.ani}</p></div>
                                </div>
                                <div className="clapalgn">
                                    <div className="clapalgnImg"></div>
                                    <p className='clapalgnfollowers'>{props.followers}</p>
                                    <p className='clasps'>{props.clap}</p>
                                </div>
                                <hr className='sepe'/>
                                    <div className="userProfTwo">
                                        <div className="userImageTwo"></div>
                                        <div className="userInfoTwo">
                                            <p className='autInfo'>{props.authInfo}</p>
                                            <p className='authName'>{props.authName}</p>
                                            <p className='authDate'>{props.authDat}</p>
                                        </div>
                                    </div>
                                <hr className='sepe'/>
                            </div>
                            <div className="blankDiv">
                            </div>
                        </div>
                        <div className="footColor">
                        <div className="footer">
                            <div className="moreSiren"><p>{props.mSiren}</p></div>
                            <hr className='footSepe'/>
                            <div className="userCards">
                                <div className="userCared">
                                    <p className='taggedText'>{props.tagged}</p>
                                    <div className="authImage"><img src={imageTwo}/></div>
                                    <p className='Joshua'>{props.authText}</p>
                                    <div className="authInfoCard">
                                        <div className="Authpic"></div>
                                        <div className="picInfo">
                                            <p className='AuthPicName'>{props.authName}</p>
                                            <p className='AuthPicDate'>{props.augdate}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="userCared">
                                <p className='taggedText'>{props.tagged}</p>
                                    <div className="authImage"><img src={imageTwo}/></div>
                                    <p className='Joshua'>{props.authText}</p>
                                    <div className="authInfoCard">
                                        <div className="Authpic"></div>
                                        <div className="picInfo">
                                            <p className='AuthPicName'>{props.authName}</p>
                                            <p className='AuthPicDate'>{props.augdate}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="userCared">
                                <p className='taggedText'>{props.tagged}</p>
                                    <div className="authImage"><img src={imageTwo}/></div>
                                    <p className='Joshua'>{props.authText}</p>
                                    <div className="authInfoCard">
                                        <div className="Authpic"></div>
                                        <div className="picInfo">
                                            <p className='AuthPicName'>{props.authName}</p>
                                            <p className='AuthPicDate'>{props.augdate}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </>
                ) 
            }}
        </contextData.Consumer>
    )
}

export  function FoodImgThree() {
    return (
        <contextData.Consumer>
            {(props) => {
                return (
                    <>
                        <div className="Imageheader">
                            <Link to='/'><p className='ImageHead'>{props.the}</p><p className='imageSpiran'>{props.siren}</p></Link>
                            <button className='btnGet'>{props.btnName}</button>
                        </div>
                        <hr className='footSepe'/>
                        <div className="imageContent">
                            <div className="options">
                                <div className="stickyText">
                                <div className="clap">
                                    <div className="clapImg"></div>
                                    <p className='followers'>{props.followers}</p>
                                </div>
                                <div className="share">
                                    <div className="shareImg"></div>
                                    <p className='shareMsg'>{props.shareArt}</p>
                                </div>
                                </div>
                            </div>
                            <div className="imageDataInfo">
                                <p className="imgInfoHeading">{props.fivhead}</p>
                                <div className="userProf">
                                    <div className="img"></div>
                                    <div className="userDesc">
                                        <p className='userName'>{props.userName}</p>
                                        <p className='userInfo'>{props.userRead}</p>
                                    </div>
                                    <div className="socialIcon">
                                        <ul>
                                            <li className="facebook"></li>
                                            <li className="twitter"></li>
                                            <li className="instagram"></li>
                                            <li className="youtube"></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="reactImage"><img src={natureTemp}/></div>
                                <div className="contImg">
                                    <p>{props.contImgText}</p><br/>
                                    <p>{props.contImgText}</p>
                                    <p style={{marginTop:'5vh'}}>{props.talk}</p>
                                </div>
                                <div className="codeImg"><img src={natureTemp}/></div>
                                <div className="Rjava">
                                    <div className="lang"><p>{props.react}</p></div>
                                    <div className="lang"><p>{props.js}</p></div>
                                    <div className="lang"><p>{props.ani}</p></div>
                                </div>
                                <div className="clapalgn">
                                    <div className="clapalgnImg"></div>
                                    <p className='clapalgnfollowers'>{props.followers}</p>
                                    <p className='clasps'>{props.clap}</p>
                                </div>
                                <hr className='sepe'/>
                                    <div className="userProfTwo">
                                        <div className="userImageTwo"></div>
                                        <div className="userInfoTwo">
                                            <p className='autInfo'>{props.authInfo}</p>
                                            <p className='authName'>{props.authName}</p>
                                            <p className='authDate'>{props.authDat}</p>
                                        </div>
                                    </div>
                                <hr className='sepe'/>
                            </div>
                            <div className="blankDiv">
                            </div>
                        </div>
                        <div className="footColor">
                        <div className="footer">
                            <div className="moreSiren"><p>{props.mSiren}</p></div>
                            <hr className='footSepe'/>
                            <div className="userCards">
                                <div className="userCared">
                                    <p className='taggedText'>{props.tagged}</p>
                                    <div className="authImage"><img src={natureTemp}/></div>
                                    <p className='Joshua'>{props.authText}</p>
                                    <div className="authInfoCard">
                                        <div className="Authpic"></div>
                                        <div className="picInfo">
                                            <p className='AuthPicName'>{props.authName}</p>
                                            <p className='AuthPicDate'>{props.augdate}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="userCared">
                                <p className='taggedText'>{props.tagged}</p>
                                    <div className="authImage"><img src={natureTemp}/></div>
                                    <p className='Joshua'>{props.authText}</p>
                                    <div className="authInfoCard">
                                        <div className="Authpic"></div>
                                        <div className="picInfo">
                                            <p className='AuthPicName'>{props.authName}</p>
                                            <p className='AuthPicDate'>{props.augdate}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="userCared">
                                <p className='taggedText'>{props.tagged}</p>
                                    <div className="authImage"><img src={natureTemp}/></div>
                                    <p className='Joshua'>{props.authText}</p>
                                    <div className="authInfoCard">
                                        <div className="Authpic"></div>
                                        <div className="picInfo">
                                            <p className='AuthPicName'>{props.authName}</p>
                                            <p className='AuthPicDate'>{props.augdate}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </>
                ) 
            }}
        </contextData.Consumer>
    )
}


