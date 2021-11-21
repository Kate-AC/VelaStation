import type { NextPage } from 'next'
import styled from 'styled-components';
import { zIndexes } from 'styles/variables';
import { heights } from 'styles/variables';
import VelaStationPanel from 'components/organizms/heros/VelaStationPanel';
import AbductedTierSystemPanel from 'components/organizms/heros/AbductedTierSystemPanel';
import TokenomicsPanel from 'components/organizms/heros/TokenomicsPanel';
import LaunchPadOfThePastPanel from 'components/organizms/heros/LaunchPadOfThePastPanel';
import MenuSelector from 'components/molecules/MenuSelector';
import { getSelectMenuState } from 'contexts/SelectMenuContext';
import PanelSwitcher from 'components/organizms/PanelSwitcher';

const HomeStyled = styled.div`
  .home {
    position: fixed;
    display: grid;
    height: 100vh;
    grid-template-columns: auto;
    grid-template-rows: 0px 1fr ${heights.menuSelector};

    &__menu-selector {
      z-index: ${zIndexes.menuSelector};
      grid-column: 1 / 2;
      grid-row: 3 / 4;
    }
  }
`;

const Home: NextPage = () => {
  const { clickedMenu } = getSelectMenuState();

  const switchMenu = () => {
    switch (clickedMenu) {
      case 1:
        return <VelaStationPanel />;
      case 2:
        return <AbductedTierSystemPanel />;
      case 3:
        return <TokenomicsPanel />;
      case 4:
        return <LaunchPadOfThePastPanel />;
      default:
        return <VelaStationPanel />;
    }
  }

  return (
    <HomeStyled>
      <div className='home'>
        <PanelSwitcher>
          <VelaStationPanel />
          <AbductedTierSystemPanel />
          <TokenomicsPanel />
          <LaunchPadOfThePastPanel />
        </PanelSwitcher>
        <div className='home__menu-selector'>
          <MenuSelector />
        </div>
      </div>
    </HomeStyled>
  )
}

export default Home
