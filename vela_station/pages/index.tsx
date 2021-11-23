import type { NextPage } from 'next'
import styled, { css } from 'styled-components';
import { mediaDown } from 'styles/mixins';
import { zIndexes } from 'styles/variables';
import { heights } from 'styles/variables';
import VelaStationPanel from 'components/organizms/heros/VelaStationPanel';
import AbductedTierSystemPanel from 'components/organizms/heros/AbductedTierSystemPanel';
import TokenomicsPanel from 'components/organizms/heros/TokenomicsPanel';
import LaunchPadOfThePastPanel from 'components/organizms/heros/LaunchPadOfThePastPanel';
import MenuSelector from 'components/molecules/MenuSelector';
import PanelSwitcher from 'components/organizms/PanelSwitcher';

const HomeStyled = styled.div`
  .home {
    position: fixed;
    display: grid;
    height: 100vh;
    grid-template-columns: auto;
    grid-template-rows: 0px 1fr ${heights.menuSelector};
    font-size: 16px;

    ${mediaDown('vga', css`
      grid-template-rows: 0px 1fr ${heights.menuSelector} 40px;
    `)};

    &__panel-list {
      ${mediaDown('xga', css`
        font-size: 14px;
      `)};

      ${mediaDown('vga', css`
        font-size: 10px;
      `)};
    }

    &__menu-selector {
      z-index: ${zIndexes.menuSelector};
      grid-column: 1 / 2;
      grid-row: 3 / 4;

      ${mediaDown('vga', css`
        grid-row: 3 / 5;
      `)};
    }
  }
`;

const Home: NextPage = () => {
  return (
    <HomeStyled>
      <div className='home'>
        <div className='home__panel-list'>
          <PanelSwitcher>
            <VelaStationPanel />
            <AbductedTierSystemPanel />
            <TokenomicsPanel />
            <LaunchPadOfThePastPanel />
          </PanelSwitcher>
        </div>
        <div className='home__menu-selector'>
          <MenuSelector />
        </div>
      </div>
    </HomeStyled>
  )
}

export default Home
