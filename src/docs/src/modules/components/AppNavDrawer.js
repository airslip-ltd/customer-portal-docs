import * as React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import Divider from '@mui/material/Divider';
import { styled, alpha } from '@mui/material/styles';
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import { unstable_useEnhancedEffect as useEnhancedEffect } from '@mui/utils';
import SvgAirslipLogo from 'docs/src/icons/SvgAirslipLogo';
import AppNavDrawerItem from 'docs/src/modules/components/AppNavDrawerItem';
import { pageToTitleI18n } from 'docs/src/modules/utils/helpers';
import PageContext from 'docs/src/modules/components/PageContext';
import { useTranslate } from 'docs/src/modules/utils/i18n';

const savedScrollTop = {};

function PersistScroll(props) {
  const { slot, children, enabled } = props;
  const rootRef = React.useRef();

  useEnhancedEffect(() => {
    const parent = rootRef.current ? rootRef.current.parentElement : null;
    const activeElement = parent.querySelector('.app-drawer-active');

    if (!enabled || !parent || !activeElement || !activeElement.scrollIntoView) {
      return undefined;
    }

    parent.scrollTop = savedScrollTop[slot];

    const activeBox = activeElement.getBoundingClientRect();

    if (activeBox.top < 0 || activeBox.top > window.innerHeight) {
      parent.scrollTop += activeBox.top - 8 - 32;
    }

    return () => {
      savedScrollTop[slot] = parent.scrollTop;
    };
  }, [enabled, slot]);

  return <div ref={rootRef}>{children}</div>;
}

PersistScroll.propTypes = {
  children: PropTypes.node.isRequired,
  enabled: PropTypes.bool.isRequired,
  slot: PropTypes.string.isRequired,
};

// https://github.com/philipwalton/flexbugs#3-min-height-on-a-flex-container-wont-apply-to-its-flex-items
const ToolbarIE11 = styled('div')({ display: 'flex' });

const ToolbarDiv = styled('div')(({ theme }) => {
  return {
    paddingTop: theme.spacing(1.6),
    paddingBottom: theme.spacing(1.6),
    paddingLeft: theme.spacing(3),
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  };
});

const StyledDrawer = styled(Drawer)(({ theme }) => {
  return {
    [theme.breakpoints.up('xs')]: {
      display: 'none',
    },
    [theme.breakpoints.up('lg')]: {
      display: 'block',
    },
  };
});

const SwipeableDrawerPaperComponent = styled('div')({
  width: 250,
  boxShadow: 'none',
});

function renderNavItems(options) {
  const { pages, ...params } = options;

  return (
    <List disablePadding>
      {pages.reduce(
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        (items, page) => reduceChildRoutes({ items, page, ...params }),
        [],
      )}
    </List>
  );
}

/**
 * @param {object} context
 * @param {import('docs/src/pages').MuiPage} context.page
 */
function reduceChildRoutes(context) {
  const { onClose, activePage, items, depth, t } = context;
  let { page } = context;
  if (page.ordered === false) {
    return items;
  }

  if (page.children && page.children.length > 0) {
    const title = pageToTitleI18n(page, t);
    const topLevel = activePage ? activePage.pathname.indexOf(`${page.pathname}/`) === 0 : false;

    items.push(
      <AppNavDrawerItem
        linkProps={page.linkProps}
        depth={depth}
        key={title}
        topLevel={topLevel && !page.subheader}
        openImmediately={topLevel || Boolean(page.subheader)}
        title={title}
        icon={page.icon}
      >
        {renderNavItems({ onClose, pages: page.children, activePage, depth: depth + 1, t })}
      </AppNavDrawerItem>,
    );
  } else {
    const title = pageToTitleI18n(page, t);
    page = page.children && page.children.length === 1 ? page.children[0] : page;

    items.push(
      <AppNavDrawerItem
        linkProps={page.linkProps}
        depth={depth}
        key={title}
        title={title}
        href={page.pathname}
        onClick={onClose}
        icon={page.icon}
      />,
    );
  }

  return items;
}

// iOS is hosted on high-end devices. We can enable the backdrop transition without
// dropping frames. The performance will be good enough.
// So: <SwipeableDrawer disableBackdropTransition={false} />
const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

function AppNavDrawer(props) {
  const { className, disablePermanent, mobileOpen, onClose, onOpen } = props;
  const { activePage, pages } = React.useContext(PageContext);
  const t = useTranslate();
  const mobile = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  const drawer = React.useMemo(() => {
    const navItems = renderNavItems({ onClose, pages, activePage, depth: 0, t });

    return (
      <React.Fragment>
        <ToolbarIE11>
          <ToolbarDiv>
            <NextLink href="/" passHref onClick={onClose}>
              <Box component="a" aria-label={t('goToHome')} sx={{ lineHeight: 0, mr: 2 }}>
                <SvgAirslipLogo width={30} />
              </Box>
            </NextLink>
          </ToolbarDiv>
        </ToolbarIE11>
        <Divider
          sx={{
            borderColor: (theme) =>
              theme.palette.mode === 'dark'
                ? alpha(theme.palette.primary[100], 0.08)
                : theme.palette.grey[100],
          }}
        />
        {navItems}
        <Box sx={{ height: 40 }} />
      </React.Fragment>
    );
  }, [activePage, pages, onClose, t]);

  return (
    <nav className={className} aria-label={t('mainNavigation')}>
      {disablePermanent || mobile ? (
        <SwipeableDrawer
          disableBackdropTransition={!iOS}
          variant="temporary"
          open={mobileOpen}
          onOpen={onOpen}
          onClose={onClose}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            className: 'algolia-drawer',
            component: SwipeableDrawerPaperComponent,
            sx: {
              background: (theme) =>
                theme.palette.mode === 'dark' ? theme.palette.primaryDark[900] : '#FFF',
            },
          }}
        >
          <PersistScroll slot="swipeable" enabled={mobileOpen}>
            {drawer}
          </PersistScroll>
        </SwipeableDrawer>
      ) : null}
      {disablePermanent || mobile ? null : (
        <StyledDrawer
          variant="permanent"
          PaperProps={{
            component: SwipeableDrawerPaperComponent,
            sx: {
              background: (theme) =>
                theme.palette.mode === 'dark' ? theme.palette.primaryDark[900] : '#fff',
              borderColor: (theme) =>
                theme.palette.mode === 'dark'
                  ? alpha(theme.palette.primary[100], 0.08)
                  : theme.palette.grey[100],
            },
          }}
          open
        >
          <PersistScroll slot="side" enabled>
            {drawer}
          </PersistScroll>
        </StyledDrawer>
      )}
    </nav>
  );
}

AppNavDrawer.propTypes = {
  className: PropTypes.string,
  disablePermanent: PropTypes.bool.isRequired,
  mobileOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired,
};

export default AppNavDrawer;
