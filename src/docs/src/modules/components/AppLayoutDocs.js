import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { exactProp } from '@mui/utils';
import NoSsr from '@mui/material/NoSsr';
import Head from 'docs/src/modules/components/Head';
import AppFrame from 'docs/src/modules/components/AppFrame';
import AppContainer from 'docs/src/modules/components/AppContainer';
import AppTableOfContents from 'docs/src/modules/components/AppTableOfContents';
import AppLayoutDocsFooter from 'docs/src/modules/components/AppLayoutDocsFooter';

const TOC_WIDTH = 210;
const NAV_WIDTH = 240;

const Main = styled('main', {
  shouldForwardProp: (prop) => prop !== 'disableToc',
})(({ disableToc, theme }) => {
  return {
    display: 'flex',
    width: '100%',
    ...(disableToc && {
      [theme.breakpoints.up('lg')]: {
        marginRight: '5%',
      },
    }),
    [theme.breakpoints.up('lg')]: {
      width: `calc(100% - ${NAV_WIDTH}px)`,
    },
  };
});

const StyledAppContainer = styled(AppContainer, {
  shouldForwardProp: (prop) => prop !== 'disableAd' && prop !== 'disableToc',
})(({ disableAd, disableToc, theme }) => {
  return {
    position: 'relative',
    ...(!disableAd && {
      '&& .description': {
        marginBottom: 10,
      },
      '&& .description.ad': {
        marginBottom: 10,
      },
      ...(!disableToc && {
        [theme.breakpoints.up('sm')]: {
          width: `calc(100% - ${TOC_WIDTH}px)`,
        },
      }),
      ...(!disableToc && {
        [theme.breakpoints.up('lg')]: {
          paddingLeft: '60px',
          paddingRight: '60px',
        },
      }),
    }),
  };
});

const ActionsDiv = styled('div')(({ theme }) => ({
  display: 'flex',
  marginTop: -10,
  marginBottom: -15,
  [theme.breakpoints.up('lg')]: {
    justifyContent: 'flex-end',
  },
}));

function AppLayoutDocs(props) {
  const {
    children,
    description,
    disableAd = true,
    disableToc = false,
    location,
    title,
    toc,
  } = props;

  return (
    <AppFrame>
      <Head title={`${title} - Airslip`} description={description} />
      <Main disableToc={disableToc}>
        <StyledAppContainer>
          {children}
          <NoSsr>
            <AppLayoutDocsFooter />
          </NoSsr>
        </StyledAppContainer>
        {disableToc ? null : <AppTableOfContents toc={toc} />}
      </Main>
    </AppFrame>
  );
}

AppLayoutDocs.propTypes = {
  children: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
  disableAd: PropTypes.bool.isRequired,
  disableToc: PropTypes.bool.isRequired,
  location: PropTypes.string,
  title: PropTypes.string.isRequired,
  toc: PropTypes.array.isRequired,
};

if (process.env.NODE_ENV !== 'production') {
  AppLayoutDocs.propTypes = exactProp(AppLayoutDocs.propTypes);
}

export default AppLayoutDocs;
