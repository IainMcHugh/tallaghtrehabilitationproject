import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Facebook, Instagram, Twitter } from 'react-feather';

import { breakpoints } from 'styles/breakpoints';

type TSocialMedia = 'FACEBOOK' | 'INSTAGRAM' | 'TWITTER';

const SocialMediaData = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.S24};
  bottom: ${({ theme }) => theme.spacing.S24};
  left: ${({ theme }) => theme.spacing.S8};
  right: ${({ theme }) => theme.spacing.S8};
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  ${breakpoints.large} {
    top: ${({ theme }) => theme.spacing.S48};
    bottom: ${({ theme }) => theme.spacing.S48};
    left: ${({ theme }) => theme.spacing.S80};
    right: ${({ theme }) => theme.spacing.S80};
  }
`;

const SocialMediaHeading = styled.h2`
  ${({ theme }) => theme.fontSize.F1824};
  color: ${({ theme }) => theme.colors.GREY_DARK};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  margin-bottom: ${({ theme }) => theme.spacing.S16};

  ${breakpoints.large} {
    ${({ theme }) => theme.fontSize.F2424};
  }
`;

const SocialMediaIcons = styled.div`
  display: grid;
  grid-template-columns: ${({ theme }) => `repeat(3, ${theme.spacing.S48})`};
  column-gap: ${({ theme }) => theme.spacing.S8};
  margin-bottom: ${({ theme }) => theme.spacing.S16};
`;

const SocialMediaIcon = styled.button`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.GREY_DARK};
`;

const SocialMediaEmbed = styled.div`
  height: 100%;
  overflow-y: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.all8};
`;

const InstagramImage = styled.img`
  width: 400px;
  height: auto;
`;

function SocialMediaToggle() {
  const [active, setActive] = useState<TSocialMedia>();

  //   useEffect(() => {
  //     if (active) {
  //       embedToggle();
  //     }
  //   }, [active]);

  //   function embedToggle() {
  //     switch (active) {
  //       case 'FACEBOOK':
  //         return (
  //           <div
  //             className="fb-page"
  //             data-href="https://www.facebook.com/pages/category/Community-Organization/Tallaght-Rehabilitation-Project-Tallaght-Wide-Aftercare-Services-174568196235168/"
  //             data-tabs="timeline"
  //             data-width="400"
  //             data-height=""
  //             data-small-header="true"
  //             data-adapt-container-width="true"
  //             data-hide-cover="false"
  //             data-show-facepile="true"
  //           >
  //             <blockquote
  //               cite="https://www.facebook.com/pages/category/Community-Organization/Tallaght-Rehabilitation-Project-Tallaght-Wide-Aftercare-Services-174568196235168/"
  //               className="fb-xfbml-parse-ignore"
  //             >
  //               <a href="https://www.facebook.com/pages/category/Community-Organization/Tallaght-Rehabilitation-Project-Tallaght-Wide-Aftercare-Services-174568196235168/">
  //                 Tallaght Rehabilitation Project &amp; Tallaght Wide Aftercare
  //                 Services
  //               </a>
  //             </blockquote>
  //           </div>
  //         );
  //       case 'INSTAGRAM':
  //         return (
  //           <a
  //             href="https://www.instagram.com/trp_tallaght_wide_aftercare/"
  //             target="_blank"
  //             rel="noopener noreferrer"
  //           >
  //             <img
  //               className="instagram_image"
  //               src={require('images/instagram.jpg')}
  //               alt="Instagram"
  //             />
  //           </a>
  //         );
  //       case 'TWITTER':
  //         return (
  //           <>
  //             <a
  //               className="twitter-timeline"
  //               data-theme="dark"
  //               href="https://twitter.com/TRPDublin?ref_src=twsrc%5Etfw"
  //             >
  //               Tweets by TRPDublin
  //             </a>{' '}
  //             <script
  //               async
  //               src="https://platform.twitter.com/widgets.js"
  //               charSet="utf-8"
  //             ></script>
  //           </>
  //         );
  //       default:
  //         return null;
  //     }
  //   }

  return (
    <SocialMediaData>
      <SocialMediaHeading>Follow us on Social Media!</SocialMediaHeading>
      <SocialMediaIcons>
        <SocialMediaIcon onClick={() => setActive('FACEBOOK')}>
          <Facebook size={32} />
        </SocialMediaIcon>
        <SocialMediaIcon onClick={() => setActive('INSTAGRAM')}>
          <Instagram size={32} />
        </SocialMediaIcon>
        <SocialMediaIcon onClick={() => setActive('TWITTER')}>
          <Twitter size={32} />
        </SocialMediaIcon>
      </SocialMediaIcons>
      <SocialMediaEmbed>
        {active === 'FACEBOOK' && (
          <div
            className="fb-page"
            data-href="https://www.facebook.com/pages/category/Community-Organization/Tallaght-Rehabilitation-Project-Tallaght-Wide-Aftercare-Services-174568196235168/"
            data-tabs="timeline"
            data-width="400"
            data-height=""
            data-small-header="true"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
          >
            <blockquote
              cite="https://www.facebook.com/pages/category/Community-Organization/Tallaght-Rehabilitation-Project-Tallaght-Wide-Aftercare-Services-174568196235168/"
              className="fb-xfbml-parse-ignore"
            >
              <a href="https://www.facebook.com/pages/category/Community-Organization/Tallaght-Rehabilitation-Project-Tallaght-Wide-Aftercare-Services-174568196235168/">
                Tallaght Rehabilitation Project &amp; Tallaght Wide Aftercare
                Services
              </a>
            </blockquote>
          </div>
        )}
        {active === 'INSTAGRAM' && (
          <a
            href="https://www.instagram.com/trp_tallaght_wide_aftercare/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramImage
              className="instagram_image"
              src={require('images/instagram.jpg')}
              alt="Instagram"
            />
          </a>
        )}
        {active === 'TWITTER' && (
          <>
            <a
              className="twitter-timeline"
              data-theme="dark"
              data-height="500"
              href="https://twitter.com/TRPDublin?ref_src=twsrc%5Etfw"
            >
              Tweets by TRPDublin
            </a>{' '}
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charSet="utf-8"
            ></script>
          </>
        )}
      </SocialMediaEmbed>
    </SocialMediaData>
  );
}

export { SocialMediaToggle };
