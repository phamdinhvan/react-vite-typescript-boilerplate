import React from 'react';
import clsx from 'clsx';
import Toggle from '../sidebar/Toggle';
import Logo from '../logo/Logo';
import { USER_SIGN_OUT } from '@/state/auth/authQueries';
import HeaderBreadcrumb from './header-breadcrumb/HeaderBreadcrumb';

// Menu data
import menu from '@/layouts/menu/MenuData';
import farmMenu from '@/layouts/menu/FarmMenuData';
import { useLocation } from 'react-router-dom';
import MenuCollapse from '@/assets/icons/menu/menu-collapse.svg';
import { ETSVG } from '@/components/Svg/ETSVG';
import { UserAvatar } from '@/components';

const Header: React.FC<any> = ({ fixed, theme, className, setVisibility, ...props }) => {
  const location = useLocation();

  const handleSignOut = () => {
    console.log('sign out');
  };
  const headerClass = clsx({
    'et-header': true,
    'et-header-fixed': fixed,
    [`is-light`]: theme === 'white',
    [`is-${theme}`]: theme !== 'white' && theme !== 'light',
    [`${className}`]: className,
  });
  return (
    <div className={headerClass}>
      <div className='et-header-wrap'>
        <div className='et-menu-trigger xl:tw-none'>
          <Toggle className='et-nav-toggle et-quick-nav-icon' click={props.sidebarToggle}>
            <ETSVG svgClassName='!tw-fill-ink-light' path={MenuCollapse} />
          </Toggle>
        </div>
        <div className='et-header-brand'>{/*<Logo />*/}</div>
        <span className='tw-et-text-heading-24'>
          <HeaderBreadcrumb
            menuData={location.pathname.split('/')[1] === 'farm' ? farmMenu() : menu}
          />
        </span>
        <div className='et-header-search tw-ml-3 tw-ml-xl-0'></div>
        <div className='et-header-tools'>
          <ul className='et-quick-nav'>
            <li className='user-dropdown'>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href={`#`} onClick={handleSignOut}>
                <li className='preview-item'>
                  <UserAvatar size='md' src='https://mui.com/static/images/avatar/2.jpg' />
                </li>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
