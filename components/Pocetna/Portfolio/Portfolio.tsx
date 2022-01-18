import React from 'react'
import { PortfolioWrapper,
         PortfolioHeading,
         PortfolioInfo,
         RadoviContainer,
         Rad,
         RadIme,
         RadImg
         
} from './PortfolioStyles'

const Portfolio = () => {
    return (
        <PortfolioWrapper>
           <PortfolioHeading>
               Portfolio
               </PortfolioHeading> 
               <PortfolioInfo>
               Neki od naših prethodnih radova.
               </PortfolioInfo>
               <RadoviContainer>
                   <Rad>
                      <RadImg src={'/flex.jpeg'}>

                      </RadImg>
                      <RadIme>
                          Flex Team
                      </RadIme>
                   </Rad>
                   <Rad>
                   <RadImg src={'/porsche.jpeg'}>

                 </RadImg>
                    <RadIme>
                       Porsche Club Serbia
                     </RadIme>   
                   </Rad>
                   <Rad>
                   <RadImg src={'/janovic.jpeg'}>

                    </RadImg>
                     <RadIme>
                         Janovic Camping
                          </RadIme>
                   </Rad>
               </RadoviContainer>
        </PortfolioWrapper>
    )
}

export default Portfolio
