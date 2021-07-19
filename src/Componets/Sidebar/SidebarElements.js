import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import {Link as LinkS} from 'react-scroll'

export const SidebarContainer=styled.aside`
    position:fixed;
    z-index:999;
    width:100%;
    height:100%;
    background:#0d0d0d;
    display:grid;
    align-items:center;
    top:0;
    left:0;
    transition:0.3s ease-in-out;
    opacity:${({isOpen }) => (isOpen ? '100%' : '0')};
    top:${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
    color:#fff;
`;

export const DivModa = styled.div`
    display:${({isOpen}) => (isOpen ? 'block' : 'none')};
    position:fixed;
    z-index:1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
`;

export const ModalCont = styled.div`
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 50%;
`;

export const Close = styled.span `
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
`;

export const Icon = styled.div`
    position:Absolute;
    top:1.2rem;
    right:1.2rem;
    background:transparent;
    font-size:1.2rem;
    cursor:pointer;
`;

export const SidebarWrapper=styled.div`
    color:#fff;
`;

export const SidebarMenu=styled.ul`
    display:grid;
    grid-template-columns:1fr;
    grid-template-rows:repeat(6,80px);
    text-align:center;

    @media screen and (max-width:768px){
        grid-template-rows: repeat(6,60px);
    }
`

export const SidebarLink = styled(LinkS)`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:1.5rem;
    text-decoration:none;
    list-style:none;
    transition:0.2s ease-in-out;
    text-decoration:none;
    color:#fff;
    cursor:pointer;

    &:hover{
        color:#ffd15c;
        transition: 0.2s ease-in-out;
    }
`;

