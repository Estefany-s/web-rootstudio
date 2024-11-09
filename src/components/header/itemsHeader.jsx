import styled from 'styled-components';
import {Link} from 'react-router-dom';

const UnorderedLists = styled.ul`
  display: flex;
  
  & > li {
    display: flex;
    font-weight: bold;
    margin-right: 30px;
    display: block;
    position: relative;
    border: 2px solid transparent;
  }
`
const Item = styled.li`
  border: ${({selected}) => selected ? '2px solid #f7b733 !important' : ''};
  cursor: pointer;
  &:hover a{
    color: ${(props) => props.headerStudio ? '#f7b733' : ''};
  } 
  & > a {
    text-decoration: none;
    color: #000;
    padding: 7px 15px;
    display: inline-block;
  } 
  &:hover {
    border: ${(props) => props.headerStudio ? '2px solid #f7b733' : '2px solid #ffffff'};
  }
`

const isItemSelected = (route) => window.location.pathname === route;

const ItemsHeader = ({headerStudio}) => {
  return (
    <UnorderedLists>
      <Item headerStudio={headerStudio} selected={isItemSelected('/studio')} ><Link to="/studio">Studio</Link></Item>
      <Item headerStudio={headerStudio} selected={isItemSelected('/work')} ><Link to="/work">Work</Link></Item>
      <Item headerStudio={headerStudio} selected={isItemSelected('/notes')} ><Link to="/notes">Notes</Link></Item>
      <Item headerStudio={headerStudio} selected={isItemSelected('/contact')}><Link to="/contact">Contact</Link></Item>
      <Item headerStudio={headerStudio} selected={isItemSelected('/we-are-hiring')} ><Link to="/we-are-hiring">We're Hiring</Link></Item>
    </UnorderedLists>
  )
}

export default ItemsHeader;