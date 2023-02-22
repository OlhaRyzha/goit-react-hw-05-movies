import { Outlet } from 'react-router-dom';
import {
  HeaderWrapper,
  LinkWrapper,
  NavBar,
  NavLinkStyled,
} from './Header.styled';

export function Header() {
  return (
    <>
      <NavBar>
        <HeaderWrapper>
          <LinkWrapper>
            <NavLinkStyled to="/">Home</NavLinkStyled>
          </LinkWrapper>
          <LinkWrapper>
            <NavLinkStyled to="/movies">Movies</NavLinkStyled>
          </LinkWrapper>
        </HeaderWrapper>
      </NavBar>
      <Outlet />
    </>
  );
}
