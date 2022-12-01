import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import { DiscordIcon, InstagramIcon, MediumIcon, TelegramIcon, TwitterIcon } from 'app/components/Icon'
import Typography from 'app/components/Typography'
import { useActiveWeb3React } from 'app/services/web3'
import React from 'react'

import Container from '../Container'

const Footer = () => {
  const { chainId } = useActiveWeb3React()
  const { i18n } = useLingui()

  return (
    <div className="w-full border-t border-t-2 border-[#6E6E6E]">
      <Container maxWidth="7xl" className="mx-auto h-[491px] flex flex-row">
        <div className="relative self-start max-w-sm h-full py-6 border-r border-r-2 border-[#6E6E6E] w-[190px]"></div>
        <div className="flex flex-col p-10">
          <div className="flex items-center pb-4">
            <svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M30.3389 48.7892C34.062 45.0342 31.3961 38.6598 26.1958 38.6598H2.84584C0.639542 48.786 6.00567 59.4648 15.8539 63.3985L30.3389 48.7892ZM26.95 64.9214C28.8247 64.939 31.0524 64.939 33.7248 64.939C37.8484 64.939 40.907 64.9388 43.2348 64.8751C45.58 64.8109 47.0745 64.6835 48.109 64.4603C62.7174 61.3077 69.7605 44.4104 61.7256 31.6628C61.1566 30.7601 60.1973 29.5946 58.5982 27.8631C57.0108 26.1443 54.866 23.9445 51.9746 20.9793L33.7248 2.26351L29.7961 6.29252L55.226 31.9408C56.4492 33.1745 56.4492 35.1689 55.226 36.4026L26.95 64.9214ZM33.6172 2.15316C33.6174 2.15334 33.6176 2.15352 33.6177 2.1537L33.6172 2.15316L33.7248 2.04824L33.6172 2.15316ZM30.3389 19.5542L23.5456 12.7026L15.4749 20.9795C14.5928 21.8841 13.6967 22.759 12.8087 23.626C10.787 25.6 8.80716 27.533 7.12871 29.6836H26.1958C31.3961 29.6836 34.062 23.3092 30.3389 19.5542Z"
                fill="#F7F7F7"
                stroke="#F7F7F7"
                strokeWidth="3.29316"
              />
            </svg>

            <svg width="294" height="83" viewBox="0 0 294 83" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.744141 67.0452H29.0909V64.6704H25.3811C20.6249 64.6704 18.7225 62.7706 18.7225 58.021V45.3423C18.7225 39.2628 21.565 35.7481 26.6065 35.7481C33.3491 35.7481 35.6321 40.8777 36.1077 49.9969H38.0101V20.1694H36.1077C35.6321 28.7187 33.3491 33.5633 26.6065 33.5633C21.565 33.5633 18.7225 30.2386 18.7225 25.679V9.57503C18.7225 4.82542 20.5298 2.92559 25.286 2.92559H33.6569C46.118 2.92559 50.7791 9.00508 52.4913 21.639H54.3938V0.550781H0.744141V2.92559H4.45395C9.21013 2.92559 11.1126 4.82542 11.1126 9.57503V58.021C11.1126 62.7706 9.21013 64.6704 4.45395 64.6704H0.744141V67.0452Z"
                fill="#F7F7F7"
              />
              <path
                d="M52.3828 33.513H54.7609C57.2341 29.7133 60.1829 26.4836 62.2756 26.4836C62.9415 26.4836 63.1317 27.0536 63.1317 27.5285C63.1317 27.8135 63.0366 28.2884 62.8464 28.7634L53.334 53.0814C51.1462 58.5909 52.6682 68.1851 57.8999 68.1851C60.0878 68.1851 64.3683 65.6203 68.9343 56.5961H66.6513C64.1781 61.2507 60.5634 65.8103 58.2804 65.8103C57.5195 65.8103 56.9487 65.3353 56.9487 64.4804C56.9487 63.9105 57.139 63.3405 57.5195 62.2006L66.9367 36.7427C67.5074 35.1279 67.8879 33.418 67.8879 31.7082C67.8879 27.7185 66.2708 24.1088 63.1317 24.1088C59.8024 24.1088 56.1877 27.5285 52.3828 33.513ZM65.3196 12.1398C65.3196 14.4196 67.222 16.5094 69.7904 16.5094C72.7392 16.5094 75.2124 14.3246 75.2124 11.5699C75.2124 9.29005 73.3099 7.20022 70.6465 7.20022C67.7928 7.20022 65.3196 9.38504 65.3196 12.1398Z"
                fill="#F7F7F7"
              />
              <path
                d="M91.3187 82.4339C97.1213 82.4339 101.497 81.199 104.731 79.1092C109.297 76.1644 111.295 72.3647 111.295 69.04C111.295 64.1004 106.729 59.9208 99.0237 59.9208H82.3771C79.7137 59.9208 79.2381 59.0659 79.2381 57.926C79.2381 56.881 80.5698 54.8862 82.9479 53.3663C85.9918 54.4113 88.465 54.9812 91.0334 54.9812C100.165 54.9812 108.441 45.767 108.441 39.5925C108.441 37.0277 106.634 34.2729 105.112 31.9931C104.731 31.3282 104.541 30.7582 104.541 30.1883C104.541 28.0985 106.634 26.6736 107.965 26.6736C108.536 26.6736 109.012 26.9586 109.012 27.5285C109.012 28.3834 108.06 28.5734 108.06 30.2833C108.06 31.9931 109.773 33.228 111.485 33.228C113.482 33.228 115.67 31.8032 115.67 28.7634C115.67 25.8187 113.007 24.0138 110.248 24.0138C106.634 24.0138 104.16 26.7686 101.307 26.7686C98.8335 26.7686 95.6944 24.1088 91.0334 24.1088C82.1869 24.1088 73.5307 33.893 73.5307 39.4975C73.5307 42.8222 76.1941 46.3369 78.382 48.8067C79.7137 50.2316 79.9039 50.8965 79.9039 51.8465C79.9039 52.7014 79.5234 53.5563 78.382 54.6962L76.6697 56.5011C75.0526 58.1159 74.6721 58.7809 74.6721 60.3008C74.6721 61.5357 75.5282 62.6756 76.7648 64.1954C77.2405 64.8604 77.5258 65.4303 77.5258 66.0003C77.5258 66.6652 77.2405 67.3302 76.4795 67.9951L74.1014 70.1799C72.6745 71.4148 72.2941 72.3647 72.2941 73.5047C72.2941 76.2594 77.9063 82.4339 91.3187 82.4339ZM77.9063 72.9347C77.9063 71.4148 78.6673 68.7551 79.9039 67.0452H98.1676C103.59 67.0452 105.778 69.325 105.778 72.3647C105.778 75.5945 102.258 80.0591 91.6041 80.0591C80.5698 80.0591 77.9063 76.5444 77.9063 72.9347ZM81.6161 43.3922V35.9828C81.6161 29.5233 85.8016 26.4836 90.9382 26.4836C96.0749 26.4836 100.355 29.5233 100.355 35.9828V43.3922C100.355 49.4717 96.0749 52.6064 91.0334 52.6064C85.9918 52.6064 81.6161 49.2817 81.6161 43.3922Z"
                fill="#F7F7F7"
              />
              <path
                d="M134.51 68.1851C143.452 68.1851 148.779 61.3457 148.779 55.8361C148.779 47.8568 142.691 44.6271 136.698 42.7272L131.086 40.9224C126.71 39.4975 123.285 38.3576 123.285 33.228C123.285 29.3334 126.52 26.4836 131.276 26.4836C136.983 26.4836 143.071 30.1883 144.688 39.0225H146.591V25.2487H144.688C144.498 26.5786 143.832 27.6235 142.31 27.6235C140.122 27.6235 136.983 24.1088 131.276 24.1088C123.856 24.1088 119.29 30.0933 119.29 35.8878C119.29 42.5373 122.62 45.862 129.468 48.0468L135.366 49.9466C141.359 51.8465 144.308 53.9363 144.308 58.3059C144.308 62.2006 141.454 65.8103 134.51 65.8103C125.759 65.8103 120.432 58.8759 119.385 50.7066H117.483V67.0452H119.481C119.766 65.6203 120.337 64.1004 122.144 64.1004C124.522 64.1004 127.566 68.1851 134.51 68.1851Z"
                fill="#F7F7F7"
              />
              <path
                d="M161.45 68.1851C165.54 68.1851 169.25 66.0003 173.245 62.5806C174.767 66.0953 177.431 68.1851 181.616 68.1851C195.124 68.1851 207.585 48.5217 207.585 33.703C207.585 28.5734 204.826 24.2038 200.45 24.2038C197.502 24.2038 194.172 26.9586 194.172 30.4733C194.172 33.0381 196.17 35.5078 198.548 35.5078C201.972 35.5078 201.877 33.418 203.494 33.418C204.255 33.418 204.826 33.893 204.826 35.5078C204.826 46.4319 195.504 63.6255 184.565 63.6255C181.045 63.6255 178.572 62.2006 177.05 58.9709C184.66 50.6116 190.367 39.0225 190.367 30.7582C190.367 26.8636 188.56 24.1088 185.136 24.1088C176.479 24.1088 171.723 41.8723 171.723 53.2714C171.723 55.8361 171.913 58.2109 172.484 60.2058C168.869 63.9105 165.635 65.8103 161.925 65.8103C159.072 65.8103 157.55 64.1954 157.55 61.5357C157.55 60.2058 158.025 58.5909 158.786 56.7861L165.73 39.2125C166.682 36.7427 167.443 33.798 167.443 31.2332C167.443 27.3385 166.016 24.1088 162.591 24.1088C160.308 24.1088 155.838 26.6736 150.701 35.6978H152.984C155.838 31.0432 159.642 26.4836 161.925 26.4836C162.686 26.4836 163.257 26.7686 163.257 27.6235C163.257 28.1935 162.972 28.9534 162.496 30.0933L155.267 47.6668C154.22 50.2316 153.555 53.3663 153.555 56.3111C153.555 62.4856 155.742 68.1851 161.45 68.1851ZM175.243 49.1867V47.8568C175.243 38.2626 178.001 29.9983 182.757 29.9983C185.231 29.9983 186.467 31.8981 186.467 35.1279C186.467 39.3075 185.04 44.0571 181.806 49.1867C180.094 51.9415 178.192 53.7463 177.05 53.7463C175.813 53.7463 175.243 51.7515 175.243 49.1867Z"
                fill="#F7F7F7"
              />
              <path
                d="M223.374 65.0504C222.233 65.0504 221.377 64.7654 220.806 64.0055C220.045 63.2455 219.76 61.8206 219.76 59.9208V54.6012C219.76 49.3767 222.899 47.2869 227.084 45.862L230.699 44.6271C232.316 44.0571 233.077 43.9621 233.838 43.9621C235.836 43.9621 237.548 45.007 237.548 48.4268C237.548 56.1211 230.033 65.0504 223.374 65.0504ZM211.199 58.6859C211.199 62.3906 216.145 68.1851 221.948 68.1851C226.418 68.1851 230.794 65.3353 234.123 62.2006C234.789 61.5357 235.36 61.2507 235.931 61.2507C236.597 61.2507 237.072 61.9156 237.453 62.9605C238.499 66.2853 240.782 68.1851 244.111 68.1851C248.582 68.1851 250.96 65.4303 250.96 60.6807V55.7411H248.868V60.2058C248.868 63.3405 247.821 64.3854 246.204 64.3854C245.348 64.3854 244.682 64.1004 244.206 63.4355C243.921 62.9605 243.731 62.2006 243.731 61.1557L244.206 42.2523C244.302 40.0675 243.921 37.8826 243.16 35.8878C240.592 29.0484 233.648 24.1088 225.848 24.1088C218.333 24.1088 211.484 28.6684 211.484 34.8429C211.484 38.1676 213.672 40.2574 216.526 40.2574C219.094 40.2574 221.282 38.2626 221.282 35.9828C221.282 32.4681 217.857 31.9931 217.857 30.1883C217.857 28.2885 220.806 26.3886 225.848 26.3886C231.27 26.3886 237.262 29.3334 237.262 35.6028C237.262 38.6426 235.55 40.4474 232.982 41.3974L224.135 44.8171C214.338 48.6167 211.199 55.3612 211.199 58.6859Z"
                fill="#F7F7F7"
              />
              <path
                d="M249.04 81.294H269.967V78.9192H267.304C264.45 78.9192 262.833 76.9244 262.833 74.0746V63.8155C262.833 62.6756 263.499 62.1056 264.26 62.1056C265.021 62.1056 265.877 62.8655 266.923 63.8155C269.111 65.8103 272.25 68.1851 276.911 68.1851C285.948 68.1851 293.939 55.8361 293.939 46.2419C293.939 36.6477 286.043 24.1088 277.007 24.1088C272.346 24.1088 269.206 26.4836 267.019 28.4784C265.972 29.4284 265.116 30.1883 264.355 30.1883C263.499 30.1883 262.928 29.6183 262.928 28.4784V25.2487H249.04V27.6235H251.704C254.557 27.6235 256.175 28.9534 256.175 32.4681V74.0746C256.175 76.9244 254.557 78.9192 251.704 78.9192H249.04V81.294ZM262.548 46.2419C262.548 35.7928 269.682 26.4836 276.816 26.4836C280.716 26.4836 285.282 28.9534 285.282 38.4526V53.9363C285.282 63.3405 280.716 65.8103 276.816 65.8103C269.682 65.8103 262.548 56.7861 262.548 46.2419Z"
                fill="#F7F7F7"
              />
            </svg>
          </div>
          <Typography variant="h1" className="text-low-emphesis">
            {i18n._(t`The first ever trading`)}
          </Typography>
          <Typography variant="h1" className="text-low-emphesis">
            {i18n._(t`platform on Filecoin.`)}
          </Typography>
          <Typography variant="sm" className="text-low-emphesis absolute bottom-0 pb-8">
            {i18n._(t`Copyright © Banyan Storage Inc. 2022. All rights reserved`)}
          </Typography>
        </div>

        <div className="grid grid-cols-2 gap-10 pt-8 ml-44">
          <div className="flex flex-col gap-1">
            <Typography variant="h3" weight={700} className="mt-2.5 hover:text-high-emphesis">
              {i18n._(t`Resources`)}
            </Typography>
            <a href="https://docs.sushi.com" target="_blank" rel="noreferrer">
              <Typography variant="h2" className="text-white">
                {i18n._(t`Documentation`)}
              </Typography>
            </a>
            <a href="https://discord.gg/NVPXN4e" target="_blank" rel="noreferrer">
              <Typography variant="h2" className="text-white">
                {i18n._(t`Github`)}
              </Typography>
            </a>
            <a href="https://twitter.com/sushiswap" target="_blank" rel="noreferrer">
              <Typography variant="h2" className="text-white">
                {i18n._(t`FAQ`)}
              </Typography>
            </a>
          </div>
          <div className="flex flex-col gap-1">
            <Typography variant="h3" weight={700} className="mt-2.5 hover:text-high-emphesis">
              {i18n._(t`Banyan`)}
            </Typography>
            <a href="https://docs.sushi.com" target="_blank" rel="noreferrer">
              <Typography variant="h2" className="text-white">
                {i18n._(t`About`)}
              </Typography>
            </a>
            <a href="https://github.com/sushiswap" target="_blank" rel="noreferrer">
              <Typography variant="h2" className="text-white">
                {i18n._(t`Brand Assets`)}
              </Typography>
            </a>
            <a href="https://dev.sushi.com" target="_blank" rel="noreferrer">
              <Typography variant="h2" className="text-white">
                {i18n._(t`Careers`)}
              </Typography>
            </a>
          </div>
          <div className="flex flex-col gap-1">
            <Typography variant="h3" weight={700} className="mt-2.5 hover:text-high-emphesis">
              {i18n._(t`Contact`)}
            </Typography>
            <a href="https://forum.sushi.com" target="_blank" rel="noreferrer">
              <Typography variant="h2" className="text-white">
                {i18n._(t`Support`)}
              </Typography>
            </a>
            <a href="https://snapshot.org/#/sushigov.eth" target="_blank" rel="noreferrer">
              <Typography variant="h2" className="text-white">
                {i18n._(t`Feedback`)}
              </Typography>
            </a>
            <a href="https://snapshot.org/#/sushigov.eth" target="_blank" rel="noreferrer">
              <Typography variant="h2" className="text-white">
                {i18n._(t`Press inquries`)}
              </Typography>
            </a>
            <a href="https://snapshot.org/#/sushigov.eth" target="_blank" rel="noreferrer">
              <Typography variant="h2" className="text-white">
                {i18n._(t`Get in touch`)}
              </Typography>
            </a>
          </div>

          <div className="flex flex-col gap-14">
            <div className="flex items-center gap-6">
              <a href="https://twitter.com/sushiswap" target="_blank" rel="noreferrer">
                <TwitterIcon width={27} color="white" />
              </a>
              <a href="https://discord.gg/NVPXN4e" target="_blank" rel="noreferrer">
                <TelegramIcon width={27} color="white" />
              </a>
              <a href="https://instagram.com/instasushiswap" target="_blank" rel="noreferrer">
                <InstagramIcon width={27} color="white" />
              </a>
              <a href="https://discord.gg/NVPXN4e" target="_blank" rel="noreferrer">
                <DiscordIcon width={27} color="white" />
              </a>
              <a href="https://medium.com/sushiswap-org" target="_blank" rel="noreferrer">
                <MediumIcon width={27} color="white" />
              </a>
            </div>
            <svg width="233" height="30" viewBox="0 0 233 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M119.442 24.4003C120.724 23.9122 121.906 23.2636 122.969 22.4494C123.228 22.2514 123.588 22.2514 123.847 22.4494C124.91 23.2636 126.092 23.9122 127.373 24.4003C129.21 23.701 130.842 22.6722 132.211 21.2988C133.581 19.9254 134.607 18.2891 135.305 16.4478C134.818 15.1627 134.171 13.9774 133.359 12.9116C133.161 12.6524 133.161 12.2906 133.359 12.0315C134.171 10.9657 134.818 9.78048 135.305 8.49535C134.607 6.65408 133.581 5.0177 132.211 3.64431C130.842 2.27082 129.21 1.2422 127.373 0.542804C126.092 1.03097 124.91 1.67948 123.847 2.49373C123.588 2.69175 123.227 2.69175 122.969 2.49373C121.906 1.67948 120.724 1.03097 119.442 0.542804C117.606 1.2422 115.974 2.27082 114.604 3.64431C113.235 5.0177 112.209 6.65408 111.511 8.49535C111.998 9.78048 112.645 10.9657 113.457 12.0315C113.654 12.2906 113.654 12.6524 113.457 12.9116C112.645 13.9774 111.998 15.1627 111.511 16.4478C112.209 18.2891 113.235 19.9254 114.604 21.2988C115.974 22.6722 117.606 23.701 119.442 24.4003ZM125.287 3.15297C124.754 3.36216 124.679 4.04374 125.048 4.48364C126.04 5.66848 126.813 7.01573 127.373 8.49535C128.849 9.05729 130.193 9.83189 131.374 10.8272C131.813 11.1967 132.493 11.122 132.701 10.5869C133.503 8.5296 133.076 6.1015 131.418 4.43956C129.761 2.77754 127.339 2.34868 125.287 3.15297ZM120.027 14.1989C120.382 14.1653 120.704 13.9852 120.949 13.725C120.988 13.6834 121.027 13.6419 121.065 13.6006C121.656 12.9637 121.656 11.9794 121.065 11.3425C121.027 11.3012 120.988 11.2597 120.949 11.2181C120.704 10.9579 120.382 10.7782 120.027 10.7418C118.733 10.6093 117.402 10.9181 116.278 11.6683C116.133 11.7653 115.974 11.887 115.818 12.0173C115.532 12.2558 115.531 12.6888 115.822 12.9207C117.032 13.8841 118.572 14.3361 120.027 14.1989ZM121.683 9.07906C121.719 9.4366 121.9 9.75954 122.162 10.0042C122.202 10.0414 122.243 10.0795 122.285 10.1183C122.924 10.7074 123.892 10.7074 124.53 10.1183C124.572 10.0795 124.614 10.0414 124.653 10.0042C124.916 9.75953 125.097 9.43658 125.131 9.07884C125.267 7.62057 124.816 6.0781 123.856 4.8653C123.625 4.57326 123.191 4.57318 122.959 4.8641C122.01 6.0505 121.531 7.55414 121.683 9.07906ZM124.53 14.8248C123.892 14.2357 122.924 14.2357 122.285 14.8248C122.243 14.8636 122.202 14.9017 122.162 14.9389C121.9 15.1836 121.718 15.5066 121.685 15.8644C121.549 17.3226 122 18.865 122.96 20.0778C123.191 20.3698 123.625 20.3698 123.856 20.0778C124.816 18.8649 125.267 17.3225 125.131 15.8642C125.097 15.5065 124.916 15.1835 124.653 14.9389C124.614 14.9017 124.572 14.8636 124.53 14.8248ZM115.397 20.5036C117.055 22.1655 119.477 22.5943 121.528 21.7901C122.062 21.5809 122.136 20.8993 121.768 20.4594C120.775 19.2745 120.003 17.9274 119.442 16.4478C117.967 15.8859 116.623 15.1113 115.442 14.116C115.003 13.7464 114.323 13.8211 114.114 14.3562C113.312 16.4135 113.74 18.8416 115.397 20.5036ZM131.418 20.5036C133.076 18.8416 133.503 16.4136 132.701 14.3562C132.493 13.8211 131.813 13.7465 131.374 14.116C130.193 15.1113 128.849 15.8859 127.373 16.4478C126.813 17.9274 126.04 19.2746 125.048 20.4595C124.679 20.8994 124.754 21.581 125.287 21.7902C127.339 22.5944 129.761 22.1655 131.418 20.5036ZM130.994 12.9207C131.285 12.6888 131.285 12.2543 130.994 12.0224C129.784 11.0595 128.246 10.6075 126.791 10.744C126.435 10.7775 126.113 10.9595 125.869 11.2227C125.832 11.2626 125.794 11.3038 125.755 11.3459C125.167 11.9858 125.167 12.9573 125.755 13.5971C125.794 13.6393 125.832 13.6805 125.869 13.7204C126.113 13.9835 126.435 14.1656 126.791 14.1991C128.246 14.3356 129.784 13.8835 130.994 12.9207ZM121.528 3.153C122.062 3.36218 122.136 4.04375 121.768 4.48366C120.775 5.66849 120.003 7.01572 119.442 8.49526C117.967 9.05727 116.623 9.83189 115.441 10.8272C115.003 11.1967 114.323 11.1221 114.114 10.587C113.445 8.87002 113.632 6.89485 114.676 5.32233C114.883 5.0105 115.123 4.71449 115.397 4.43956C115.672 4.16455 115.967 3.92336 116.278 3.71583C117.846 2.66938 119.816 2.48179 121.528 3.153Z"
                fill="#595959"
              />
              <path
                d="M135.305 24.2323H146.229C150.586 24.2323 153.971 20.9392 153.971 18.2175C153.971 15.8989 151.893 13.95 149.346 12.6731C149.011 12.5051 148.91 12.4043 148.91 12.2363C148.91 12.0347 149.078 11.9003 149.379 11.7323C151.859 10.3546 153.434 8.50649 153.434 6.49037C153.434 4.03742 150.15 0.710814 145.794 0.710814H135.305V1.55087H136.611C138.287 1.55087 138.957 2.22291 138.957 3.90301V21.0401C138.957 22.7202 138.287 23.3922 136.611 23.3922H135.305V24.2323ZM141.638 21.0401V14.7565C141.638 13.3788 142.275 12.7067 143.682 12.7067H146.196C149.145 12.7067 150.787 14.5213 150.787 17.2766V19.0911C150.787 21.8465 149.145 23.3922 146.196 23.3922H143.951C142.275 23.3922 141.638 22.7202 141.638 21.0401ZM141.638 9.81697V3.90301C141.638 2.22291 142.275 1.55087 143.951 1.55087H145.827C148.776 1.55087 150.418 3.19737 150.418 5.95273V7.49843C150.418 10.2538 148.776 11.8667 145.827 11.8667H143.682C142.275 11.8667 141.638 11.1947 141.638 9.81697Z"
                fill="#595959"
              />
              <path
                d="M159.52 23.5266C159.118 23.5266 158.816 23.4258 158.615 23.157C158.347 22.8882 158.247 22.3841 158.247 21.7121V19.8304C158.247 17.9823 159.353 17.243 160.827 16.739L162.1 16.3022C162.67 16.1006 162.938 16.067 163.206 16.067C163.91 16.067 164.513 16.4366 164.513 17.6462C164.513 20.368 161.866 23.5266 159.52 23.5266ZM155.231 21.2753C155.231 22.5857 156.973 24.6355 159.017 24.6355C160.592 24.6355 162.134 23.6274 163.307 22.5185C163.541 22.2833 163.743 22.1825 163.944 22.1825C164.178 22.1825 164.346 22.4177 164.48 22.7874C164.848 23.9634 165.653 24.6355 166.826 24.6355C168.401 24.6355 169.238 23.661 169.238 21.9809V20.2336H168.501V21.8129C168.501 22.9218 168.133 23.2914 167.563 23.2914C167.261 23.2914 167.027 23.1906 166.859 22.9554C166.759 22.7874 166.692 22.5185 166.692 22.1489L166.859 15.4621C166.893 14.6893 166.759 13.9164 166.491 13.2108C165.586 10.7914 163.139 9.04412 160.391 9.04412C157.744 9.04412 155.331 10.657 155.331 12.8412C155.331 14.0172 156.102 14.7565 157.107 14.7565C158.012 14.7565 158.783 14.0508 158.783 13.2444C158.783 12.0011 157.576 11.8331 157.576 11.1947C157.576 10.5226 158.615 9.85057 160.391 9.85057C162.302 9.85057 164.413 10.8922 164.413 13.11C164.413 14.1852 163.81 14.8237 162.905 15.1597L159.788 16.3694C156.336 17.7135 155.231 20.0992 155.231 21.2753Z"
                fill="#595959"
              />
              <path
                d="M170.269 24.2323H177.373V23.3922H176.703C175.698 23.3922 175.128 22.6866 175.128 21.6785V18.1503C175.128 15.0253 175.932 13.278 176.737 12.2027C177.809 10.7578 178.781 9.91778 179.92 9.91778C181.06 9.91778 181.864 10.7578 181.864 12.1355V21.6785C181.864 22.6866 181.294 23.3922 180.289 23.3922H179.619V24.2323H186.723V23.3922H185.785C184.779 23.3922 184.21 22.6866 184.21 21.6785V13.9836C184.21 11.4299 182.166 9.04412 179.92 9.04412C178.178 9.04412 177.005 10.4554 176.066 11.6315C175.832 11.9339 175.698 11.9675 175.53 11.9675C175.296 11.9675 175.128 11.7995 175.128 11.4971V9.44735H170.269V10.2874H171.207C172.213 10.2874 172.782 10.7578 172.782 12.0011V21.6785C172.782 22.6866 172.213 23.3922 171.207 23.3922H170.269V24.2323Z"
                fill="#595959"
              />
              <path
                d="M188.405 29.6758C191.22 29.6758 192.46 26.7524 193.465 24.0978L198.056 12.0011C198.559 10.6906 199.363 10.2874 200.033 10.2874H200.536V9.44735H194.805V10.2874H195.576C196.347 10.2874 197.051 10.657 197.051 11.5979C197.051 11.9003 196.95 12.3035 196.783 12.7403L194.839 17.8815C194.47 18.8223 194.135 19.1919 193.633 19.1919C193.13 19.1919 192.828 18.8559 192.493 17.9823L190.147 11.5643C190.08 11.3627 190.047 11.1947 190.047 11.0602C190.047 10.5898 190.348 10.2874 190.918 10.2874H191.957V9.44735H185.355V10.2874H185.791C186.796 10.2874 187.265 10.6234 187.768 12.0011L191.253 21.2417C192.761 25.2739 191.119 28.7685 188.74 28.7685C188.371 28.7685 188.036 28.6677 188.036 28.3989C188.036 27.9957 188.773 27.8277 188.773 26.954C188.773 26.2148 188.103 25.6435 187.332 25.6435C186.495 25.6435 185.724 26.1812 185.724 27.4244C185.724 28.8021 186.83 29.6758 188.405 29.6758Z"
                fill="#595959"
              />
              <path
                d="M205.193 23.5266C204.791 23.5266 204.489 23.4258 204.288 23.157C204.02 22.8882 203.919 22.3841 203.919 21.7121V19.8304C203.919 17.9823 205.025 17.243 206.5 16.739L207.773 16.3022C208.343 16.1006 208.611 16.067 208.879 16.067C209.583 16.067 210.186 16.4366 210.186 17.6462C210.186 20.368 207.539 23.5266 205.193 23.5266ZM200.903 21.2753C200.903 22.5857 202.646 24.6355 204.69 24.6355C206.265 24.6355 207.807 23.6274 208.98 22.5185C209.214 22.2833 209.415 22.1825 209.616 22.1825C209.851 22.1825 210.018 22.4177 210.152 22.7874C210.521 23.9634 211.325 24.6355 212.498 24.6355C214.073 24.6355 214.911 23.661 214.911 21.9809V20.2336H214.174V21.8129C214.174 22.9218 213.805 23.2914 213.236 23.2914C212.934 23.2914 212.699 23.1906 212.532 22.9554C212.431 22.7874 212.364 22.5185 212.364 22.1489L212.532 15.4621C212.565 14.6893 212.431 13.9164 212.163 13.2108C211.258 10.7914 208.812 9.04412 206.064 9.04412C203.417 9.04412 201.004 10.657 201.004 12.8412C201.004 14.0172 201.775 14.7565 202.78 14.7565C203.685 14.7565 204.456 14.0508 204.456 13.2444C204.456 12.0011 203.249 11.8331 203.249 11.1947C203.249 10.5226 204.288 9.85057 206.064 9.85057C207.974 9.85057 210.085 10.8922 210.085 13.11C210.085 14.1852 209.482 14.8237 208.577 15.1597L205.461 16.3694C202.009 17.7135 200.903 20.0992 200.903 21.2753Z"
                fill="#595959"
              />
              <path
                d="M215.942 24.2323H223.046V23.3922H222.376C221.371 23.3922 220.801 22.6866 220.801 21.6785V18.1503C220.801 15.0253 221.605 13.278 222.409 12.2027C223.482 10.7578 224.454 9.91778 225.593 9.91778C226.732 9.91778 227.537 10.7578 227.537 12.1355V21.6785C227.537 22.6866 226.967 23.3922 225.962 23.3922H225.291V24.2323H232.396V23.3922H231.457C230.452 23.3922 229.882 22.6866 229.882 21.6785V13.9836C229.882 11.4299 227.838 9.04412 225.593 9.04412C223.85 9.04412 222.677 10.4554 221.739 11.6315C221.505 11.9339 221.37 11.9675 221.203 11.9675C220.968 11.9675 220.801 11.7995 220.801 11.4971V9.44735H215.942V10.2874H216.88C217.885 10.2874 218.455 10.7578 218.455 12.0011V21.6785C218.455 22.6866 217.885 23.3922 216.88 23.3922H215.942V24.2323Z"
                fill="#595959"
              />
              <path
                d="M0.375 23.7327H8.72051V22.8892H7.40811C5.72555 22.8892 5.05253 22.2143 5.05253 20.5272V5.81569C5.05253 5.07336 5.22078 4.66846 5.72555 4.66846C6.06206 4.66846 6.26397 4.87091 6.39858 5.20833L13.1961 23.7327H13.9701L20.9696 5.30956C21.1378 4.90465 21.3397 4.66846 21.6762 4.66846C22.181 4.66846 22.3493 5.07336 22.3493 5.81569V20.5272C22.3493 22.2143 21.6762 22.8892 19.9937 22.8892H18.6813V23.7327H28.7094V22.8892H27.397C25.7144 22.8892 25.0414 22.2143 25.0414 20.5272V3.31878C25.0414 1.63167 25.7144 0.956834 27.397 0.956834H28.7094V0.113281H21.9118L16.1238 15.331C15.7873 16.242 15.3835 16.9506 14.5758 16.9506C13.8355 16.9506 13.499 16.5794 12.9942 15.2297L7.40811 0.113281H0.375V0.956834H1.6874C3.36996 0.956834 4.04299 1.63167 4.04299 3.31878V20.5272C4.04299 22.2143 3.36996 22.8892 1.6874 22.8892H0.375V23.7327Z"
                fill="#595959"
              />
              <path
                d="M33.6918 23.0241C33.288 23.0241 32.9852 22.9229 32.7833 22.653C32.5141 22.383 32.4131 21.8769 32.4131 21.2021V19.3125C32.4131 17.4567 33.5236 16.7144 35.0042 16.2082L36.283 15.7696C36.8551 15.5671 37.1243 15.5334 37.3935 15.5334C38.1002 15.5334 38.7059 15.9046 38.7059 17.1193C38.7059 19.8524 36.0474 23.0241 33.6918 23.0241ZM29.3845 20.7634C29.3845 22.0794 31.1343 24.1376 33.1871 24.1376C34.7687 24.1376 36.3166 23.1254 37.4944 22.0119C37.73 21.7757 37.9319 21.6745 38.1338 21.6745C38.3694 21.6745 38.5376 21.9107 38.6722 22.2818C39.0424 23.4628 39.85 24.1376 41.0278 24.1376C42.6094 24.1376 43.4507 23.1591 43.4507 21.472V19.7174H42.7104V21.3033C42.7104 22.4168 42.3402 22.7879 41.7681 22.7879C41.4653 22.7879 41.2297 22.6867 41.0615 22.4505C40.9605 22.2818 40.8932 22.0119 40.8932 21.6407L41.0615 14.926C41.0951 14.15 40.9605 13.3739 40.6913 12.6653C39.7827 10.2359 37.3262 8.48131 34.5668 8.48131C31.9083 8.48131 29.4854 10.1009 29.4854 12.2942C29.4854 13.4751 30.2594 14.2175 31.269 14.2175C32.1775 14.2175 32.9515 13.5089 32.9515 12.6991C32.9515 11.4506 31.7401 11.2819 31.7401 10.6408C31.7401 9.96596 32.7833 9.29112 34.5668 9.29112C36.4849 9.29112 38.6049 10.3371 38.6049 12.5641C38.6049 13.6438 37.9992 14.2849 37.0906 14.6224L33.9611 15.8371C30.495 17.1868 29.3845 19.5825 29.3845 20.7634Z"
                fill="#595959"
              />
              <path
                d="M49.6341 23.2941C47.5141 23.2941 46.6392 21.5057 46.6392 19.0426V13.5426C46.6392 10.2022 48.2544 9.32486 49.6341 9.32486C52.158 9.32486 54.6818 12.5304 54.6818 16.2757C54.6818 19.9874 52.158 23.2941 49.6341 23.2941ZM43.5769 16.2757C43.5769 19.6837 46.37 24.1376 49.5668 24.1376C51.2157 24.1376 52.3262 23.2941 53.1002 22.5855C53.4704 22.2481 53.7396 21.9781 53.9751 21.9781C54.3117 21.9781 54.5472 22.1806 54.5472 22.5855V23.7327H59.4603V22.8892H58.5181C57.5085 22.8892 56.9365 22.4168 56.9365 21.1683V0.113281H51.9897V0.956834H52.9993C54.0088 0.956834 54.5809 1.42922 54.5809 2.67768V10.0334C54.5809 10.4384 54.3453 10.6408 54.0761 10.6408C53.8069 10.6408 53.504 10.3709 53.1339 10.0334C52.3599 9.32486 51.2494 8.48131 49.6005 8.48131C46.4036 8.48131 43.5769 12.8678 43.5769 16.2757Z"
                fill="#595959"
              />
              <path
                d="M66.0331 24.1376C68.6579 24.1376 70.9798 22.1806 71.4846 19.1775H70.7442C70.2058 21.8432 68.2541 23.2941 66.2686 23.2941C63.4756 23.2941 61.6248 21.607 61.6248 17.3892C61.6248 16.5794 61.9276 16.3095 62.6679 16.3095H72.1239C72.4268 13.6776 69.5328 8.48131 65.562 8.48131C61.6921 8.48131 58.6298 13.0365 58.6298 16.4107C58.6298 19.7174 61.5575 24.1376 66.0331 24.1376ZM61.6584 14.2512C61.6584 11.0457 63.3746 9.25738 65.461 9.25738C67.7493 9.25738 69.129 10.9445 69.129 12.7666C69.129 14.8248 67.5474 15.4659 66.2686 15.4659H62.7689C61.9276 15.4659 61.6584 15.061 61.6584 14.2512Z"
                fill="#595959"
              />
              <path
                d="M85.7664 24.1376C88.9632 24.1376 91.79 19.7512 91.79 16.3432C91.79 12.9353 88.9969 8.48131 85.8 8.48131C84.1511 8.48131 83.007 9.32486 82.233 10.0334C81.8628 10.3709 81.56 10.6408 81.2571 10.6408C80.9879 10.6408 80.786 10.4384 80.786 10.0334V0.113281H75.9066V0.956834H76.8488C77.8583 0.956834 78.4304 1.42922 78.4304 2.67768V23.7327H79.0361L79.7428 22.6192C79.9784 22.2481 80.2812 21.9107 80.8869 21.9107C81.3244 21.9107 81.7282 22.2143 82.3339 22.6867C83.3435 23.4628 84.353 24.1376 85.7664 24.1376ZM80.685 16.3432C80.685 12.5978 83.2089 9.32486 85.7327 9.32486C86.5067 9.32486 87.3816 9.62854 87.9874 10.5733C88.4585 11.3156 88.7277 12.4966 88.7277 14.2849V18.6377C88.7277 22.3156 87.1124 23.2941 85.7327 23.2941C84.5549 23.2941 83.4108 22.6192 82.5022 21.5057C81.4254 20.2235 80.685 18.3677 80.685 16.3432Z"
                fill="#595959"
              />
              <path
                d="M93.4772 29.1989C96.304 29.1989 97.549 26.2634 98.5586 23.5978L103.169 11.4506C103.674 10.1347 104.481 9.72977 105.154 9.72977H105.659V8.88622H99.9046V9.72977H100.679C101.453 9.72977 102.159 10.1009 102.159 11.0457C102.159 11.3494 102.058 11.7543 101.89 12.1929L99.9383 17.3555C99.5681 18.3003 99.2316 18.6714 98.7268 18.6714C98.2221 18.6714 97.9192 18.334 97.5827 17.4567L95.2271 11.012C95.1598 10.8095 95.1262 10.6408 95.1262 10.5058C95.1262 10.0334 95.429 9.72977 96.0011 9.72977H97.0443V8.88622H90.415V9.72977H90.8524C91.862 9.72977 92.3331 10.0672 92.8379 11.4506L96.3376 20.7297C97.8519 24.7787 96.203 28.2879 93.8138 28.2879C93.4436 28.2879 93.1071 28.1867 93.1071 27.9167C93.1071 27.5118 93.8474 27.3431 93.8474 26.4658C93.8474 25.7235 93.1744 25.1499 92.4004 25.1499C91.5591 25.1499 90.7851 25.6898 90.7851 26.9382C90.7851 28.3216 91.8956 29.1989 93.4772 29.1989Z"
                fill="#595959"
              />
            </svg>

            <div className="flex flex-row whitespace-nowrap gap-4">
              <a href="https://snapshot.org/#/sushigov.eth" target="_blank" rel="noreferrer">
                <Typography variant="lg" className="text-low-emphesis hover:text-high-emphesis">
                  {i18n._(t`Terms of Use`)}
                </Typography>
              </a>
              <a href="https://snapshot.org/#/sushigov.eth" target="_blank" rel="noreferrer">
                <Typography variant="lg" className="text-low-emphesis hover:text-high-emphesis">
                  {i18n._(t`Privacy Policy`)}
                </Typography>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer
