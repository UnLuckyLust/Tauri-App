import { styles } from '../styles';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import { faHouse, faGlobe, faSliders, faQuestion } from '@fortawesome/free-solid-svg-icons'
library.add(faHouse, faSliders, faGlobe, faBitcoin, faQuestion)

export const logo = "https://cdn.discordapp.com/attachments/1036329368118640712/1171036114962878464/logo.png";

export const AppName = "Tauri App";
export const Organization = "Dreams Weaver";
export const WebSite = "https://DreamsWeaver.co";
export const Version = "1.0.0";

export const Highlight_Color = '#bb2e2e';
export const Highlight_Color_orange = '#ea7216';
export const Highlight_Color_red = '#920000';
export const Highlight_Color_blue = '#0066ff';
export const Highlight_Color_purple = '#9258cd';
export const Highlight_Color_green = '#009440';

export const navLinks = [
  {
    id: "Home",
    id_tag: "/",
    title: "Home",
    icon: "fa-solid fa-house"
  },
  {
    id: "Settings",
    id_tag: "/",
    title: "Settings",
    icon: "fa-solid fa-sliders"
  },
  {
    id: "About",
    id_tag: "/",
    title: "About us",
    icon: "fa-solid fa-question"
  },
];
export const donationLinks = [
  {
    id: "BTC",
    title: "Bitcoin",
    icon: "fa-brands fa-bitcoin",
    data: "bc1qm6x7lcgck5h8lrrs9glv243mty0pnv72236sz8"
  },
  {
    id: "ETH",
    title: "Ethereum Network",
    icon: "fa-solid fa-globe",
    data: "0xb01083a46AC44862F6f41c9F420Cbdc405A7b765"
  },
];
export { styles };