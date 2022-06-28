import React from "react";
import styled from 'styled-components';
import {StyledButtonWrapper} from "../../styledComponents/Theme/button";
import {Link, NavLink} from 'react-router-dom';
import {PATHS} from "../../constants/common";
import Tumbler from "../Tumbler/tumbler";
import {
    LogoIcon,
    PhoneIcon,
    ProfileIcon,
    BellIcon,
    CartIcon,
    SearchIcon,
    ExitIcon,
} from "../../assets/icons";

const HeaderWrap = styled.header`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    background-color: black;
    height: 60px;
    border-radius: 12px;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 10px
    `;

const HeaderLogo = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    `;

const HeaderLogoLink = styled(Link)`
    outline: none;
    :hover,:focus{
    transform: scale(1.1);    
    }
`;

const HeaderTitleWrap = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-left: 10px;
    `;

const HeaderTitle = styled.span`
    font-weight: 800;
    margin-bottom: 5px;
    font-size: 14px;
    color: white;
    `;

const HeaderTitleDescription = styled.span`
    font-weight: 600;
    font-size: 14px;
    color: white;
    `;

const HeaderPhoneButton = styled(StyledButtonWrapper)`
    margin-left: 20px;
    `;

const HeaderSearchWrap = styled.form`
    background-color: #2f2f2f;
    border-radius: 10px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: 39%;
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    padding: 6px 10px;
    margin-left: 20px;
    position: relative;
    z-index: 1;
    `;

const SearchButton = styled.button`
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    cursor: pointer;
    width: 30px;
    height: 30px;
    background-color: #2f2f2f;
    -webkit-transition: .2s;
    transition: .2s;
    outline: none;
    border: none;
    border-radius: 5px;
    z-index: 1;
    text-decoration: none;
    color: inherit;
    `;

const SearchInput = styled.input`
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    margin-left: -30px;
    color: white;
    height: 30px;
    padding-left: 39px;
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: #1a1a1a;
    -webkit-box-shadow: 0px 4px 4px 0px #00000040;
    box-shadow: 0px 4px 4px 0px #00000040;
    `;

const HeaderAlertsButton = styled(StyledButtonWrapper)`
    margin-left: auto;

    `;

const HeaderCartButton = styled(StyledButtonWrapper)`
    margin-left: 20px;
    `;

const HeaderUserButton = styled(StyledButtonWrapper)`
`;

const HeaderLabelSwitch = styled.label`
    position: relative;
    display: inline-block;
    width: 40px;
    height: 36px;
    margin-left: 20px;
    margin-right: 20px;
    input {
      display:none;
    }
    `;

const HeaderExitButton = styled(HeaderCartButton)``;


const {
    LANDING,
    AUTH,
    CART
} = PATHS;

export const Header = () => {

    const setActive = ({isActive}) => (isActive ? " active" : "");


    return (
        <HeaderWrap>
            <HeaderLogo>
                <HeaderLogoLink to={LANDING}>
                    <LogoIcon color='#EE7500'/>
                </HeaderLogoLink>
            </HeaderLogo>
            <HeaderTitleWrap>
                <HeaderTitle>AutoSet</HeaderTitle>
                <HeaderTitleDescription>Автозапчасти в Беларуси</HeaderTitleDescription>
            </HeaderTitleWrap>
            <HeaderPhoneButton>
                <PhoneIcon color='#EE7500' bg='#2f2f2f' size={34}/>
            </HeaderPhoneButton>
            <HeaderSearchWrap>
                <SearchButton type="submit">
                    <SearchIcon color='#EE7500' size={34}/>
                </SearchButton>
                <SearchInput type="search" placeholder="Поиск..." name="search"/>
            </HeaderSearchWrap>
            <HeaderAlertsButton>
                <BellIcon color='#EE7500' bg='#2f2f2f' size={34}/>
            </HeaderAlertsButton>
            <HeaderCartButton>
                <NavLink to={CART} className={setActive}>
                    <CartIcon color='#EE7500' bg='#2f2f2f' size={34}/>
                </NavLink>
            </HeaderCartButton>
            <HeaderUserButton>
                <NavLink to={AUTH} className={setActive}>
                    <ProfileIcon color='#EE7500' bg='#2f2f2f' size={34}/>
                </NavLink>
            </HeaderUserButton>
            <HeaderExitButton>
                <ExitIcon color='#EE7500' bg='#2f2f2f' size={34}/>
            </HeaderExitButton>
            <HeaderLabelSwitch className="switch">
                <Tumbler/>
            </HeaderLabelSwitch>
        </HeaderWrap>


    );
};