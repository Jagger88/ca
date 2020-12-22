import React from 'react';
import './verticalnav.styles.scss';

// fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';


const VerticalNav =  () => (
    <>
    <FontAwesomeIcon icon={faHamburger} />
    <div><FontAwesomeIcon icon={faHome} />Home</div>
    <div><FontAwesomeIcon icon={faCheckCircle} />My Tasks</div>
    <div><FontAwesomeIcon  className='greenm' icon={faCheckCircle} />Done</div>
    <FontAwesomeIcon icon={['fas', 'faCheckCircle']} /> anything? 
    <FontAwesomeIcon icon={['far', 'faCheckCircle']} />
    <svg className="NavIcon HomeNavIcon" viewBox="0 0 40 40"><path d="M37.9,15L22.2,3.8c-1.3-1-3.1-1-4.4-0.1L2.2,14.4c-0.7,0.5-0.9,1.4-0.4,2.1c0.5,0.7,1.4,0.9,2.1,0.4L6,15.4v12.3c0,4.6,3.7,8.3,8.3,8.3h11.4c4.6,0,8.3-3.7,8.3-8.3V15.9l2.1,1.5c0.3,0.2,0.6,0.3,0.9,0.3c0.5,0,0.9-0.2,1.2-0.6C38.7,16.4,38.5,15.5,37.9,15z M31,27.7c0,2.9-2.4,5.3-5.3,5.3H14.3C11.4,33,9,30.6,9,27.7V13.3l10.6-7.2c0.2-0.2,0.5-0.2,0.8,0L31,13.7V27.7z"></path></svg>
    <svg className="NavIcon CheckNavIcon" viewBox="0 0 40 40"><path d="M20,2.5C10.4,2.5,2.5,10.4,2.5,20S10.4,37.5,20,37.5S37.5,29.6,37.5,20S29.6,2.5,20,2.5z M20,34.5C12,34.5,5.5,28,5.5,20S12,5.5,20,5.5S34.5,12,34.5,20S28,34.5,20,34.5z M27.7,15c0.6,0.6,0.6,1.5,0,2.1l-10,10c-0.2,0.2-0.6,0.3-1,0.3c-0.4,0-0.8-0.1-1.1-0.4l-4.1-4.1c-0.6-0.6-0.6-1.5,0-2.1c0.6-0.6,1.5-0.6,2.1,0l3.1,3.1l8.9-8.9C26.2,14.4,27.1,14.4,27.7,15z"></path></svg>
    <svg className="NavIcon BellNavIcon" viewBox="0 0 40 40"><path d="M7.5,32L7.5,32h-1c-1.5,0-2.8-0.8-3.4-2c-0.8-1.5-0.4-3.4,0.9-4.5c1.2-1,1.9-2.4,2-3.9v-6.1C6,8.1,12.3,2,20,2s14,6.1,14,13.5V22c0.2,1.4,0.9,2.6,2,3.5c1.3,1.1,1.7,2.9,0.9,4.5c-0.6,1.2-2,2-3.4,2h-0.9H7.5z M7.6,29h25.8c0.3,0,0.7-0.2,0.8-0.4c0.2-0.4,0-0.7-0.2-0.8l0,0c-1.6-1.4-2.7-3.3-3-5.5c0-0.1,0-0.1,0-0.2v-6.6C31,9.7,26.1,5,20,5S9,9.7,9,15.5v6.1v0.1c-0.2,2.4-1.3,4.5-3.1,6c-0.2,0.2-0.3,0.5-0.2,0.8C5.9,28.8,6.2,29,6.5,29H7.6L7.6,29z M24.7,34c-0.7,1.9-2.5,3.2-4.7,3.2s-4-1.3-4.7-3.2H24.7z"></path></svg>
    <svg className="NavIcon PortfolioNavIcon" viewBox="0 0 40 40"><path d="M10,32.5c0,0.8-0.7,1.5-1.5,1.5l0,0C7.7,34,7,33.3,7,32.5v-27C7,4.7,7.7,4,8.5,4l0,0C9.3,4,10,4.7,10,5.5V32.5z M18,17.5  c0-0.8-0.7-1.5-1.5-1.5l0,0c-0.8,0-1.5,0.7-1.5,1.5v15c0,0.8,0.7,1.5,1.5,1.5l0,0c0.8,0,1.5-0.7,1.5-1.5V17.5z M26,9.5  C26,8.7,25.3,8,24.5,8l0,0C23.7,8,23,8.7,23,9.5v23c0,0.8,0.7,1.5,1.5,1.5l0,0c0.8,0,1.5-0.7,1.5-1.5V9.5z M34,24.5  c0-0.8-0.7-1.5-1.5-1.5l0,0c-0.8,0-1.5,0.7-1.5,1.5v8c0,0.8,0.7,1.5,1.5,1.5l0,0c0.8,0,1.5-0.7,1.5-1.5V24.5z"></path></svg>
    <div>
    <svg className="box" focusable="false" viewBox="0 0 24 24"><path d="M10.4,4h3.2c2.2,0,3,0.2,3.9,0.7c0.8,0.4,1.5,1.1,1.9,1.9s0.7,1.6,0.7,3.9v3.2c0,2.2-0.2,3-0.7,3.9c-0.4,0.8-1.1,1.5-1.9,1.9s-1.6,0.7-3.9,0.7h-3.2c-2.2,0-3-0.2-3.9-0.7c-0.8-0.4-1.5-1.1-1.9-1.9c-0.4-1-0.6-1.8-0.6-4v-3.2c0-2.2,0.2-3,0.7-3.9C5.1,5.7,5.8,5,6.6,4.6C7.4,4.2,8.2,4,10.4,4z"></path></svg>
    Project A
    </div>
    <svg className="NavIcon StarIcon" focusable="false" viewBox="0 0 32 32"><path d="M8.2,30c-0.4,0-0.7-0.1-1-0.3c-0.5-0.4-0.8-1-0.7-1.7l1.3-7.8l-5.7-5.5c-0.5-0.5-0.6-1.2-0.4-1.8c0.2-0.6,0.7-1.1,1.4-1.2l7.8-1.1l3.5-7.1c0.3-0.6,0.9-1,1.6-1c0,0,0,0,0,0c0.7,0,1.3,0.4,1.6,1v0l3.5,7.1l7.8,1.1c0.7,0.1,1.2,0.6,1.4,1.2c0.2,0.6,0,1.3-0.4,1.8l-5.7,5.5l1.3,7.8c0.1,0.7-0.2,1.3-0.7,1.7c-0.5,0.4-1.2,0.4-1.8,0.1l-7-3.7l-7,3.7C8.8,30,8.5,30,8.2,30z M16,23.9l7.5,3.9l-1.4-8.3l6.1-5.9l-8.4-1.2L16,4.8l-3.7,7.6l-8.4,1.2l6.1,5.9l-1.4,8.3L16,23.9z"></path></svg>
    <div className="HelpButton" role="button" aria-label="Help" tabindex="0">
        <svg className="Icon QuestionMarkIcon" focusable="false" viewBox="0 0 32 32"><path d="M9,10.5277402 L12.358774,10.5277402 C12.5048077,8.44925575 13.9489183,7.13396482 16.188101,7.13396482 C18.4110577,7.13396482 19.8551683,8.43301759 19.8551683,10.2192152 C19.8551683,11.8592693 19.1574519,12.7848444 17.1941106,13.97023 C14.9711538,15.3017591 13.9813702,16.7631935 14.0625,19.1014885 L14.078726,20.3355886 L17.4375,20.3355886 L17.4375,19.3612991 C17.4375,17.7212449 18.0378606,16.8606225 20.1310096,15.6265223 C22.2728365,14.3437077 23.5384615,12.5737483 23.5384615,10.0730717 C23.5384615,6.54939107 20.6502404,4 16.3665865,4 C11.6610577,4 9.14603365,6.79296346 9,10.5277402 Z M15.9609375,28 C17.453726,28 18.4597356,27.0094723 18.4597356,25.5317997 C18.4597356,24.0216509 17.453726,23.0311231 15.9609375,23.0311231 C14.468149,23.0311231 13.4459135,24.0216509 13.4459135,25.5317997 C13.4459135,27.0094723 14.468149,28 15.9609375,28 Z"></path></svg>
    </div>
    <svg className="NavIcon ThinBurgerIcon" focusable="false" viewBox="0 0 32 32"><path d="M31,4H1C0.4,4,0,3.6,0,3s0.4-1,1-1h30c0.6,0,1,0.4,1,1S31.6,4,31,4z M31,16H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h30c0.6,0,1,0.4,1,1S31.6,16,31,16z M31,28H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h30c0.6,0,1,0.4,1,1S31.6,28,31,28z"></path></svg>
    <svg className='NavIcon2' viewBox="0 0 50 32"><path d="M49,4H19c-0.6,0-1-0.4-1-1s0.4-1,1-1h30c0.6,0,1,0.4,1,1S49.6,4,49,4z"></path><path d="M49,16H19c-0.6,0-1-0.4-1-1s0.4-1,1-1h30c0.6,0,1,0.4,1,1S49.6,16,49,16z"></path><path d="M49,28H19c-0.6,0-1-0.4-1-1s0.4-1,1-1h30c0.6,0,1,0.4,1,1S49.6,28,49,28z"></path><path d="M8.1,22.8c-0.3,0-0.5-0.1-0.7-0.3L0.7,15l6.7-7.8c0.4-0.4,1-0.5,1.4-0.1c0.4,0.4,0.5,1,0.1,1.4L3.3,15l5.5,6.2   c0.4,0.4,0.3,1-0.1,1.4C8.6,22.7,8.4,22.8,8.1,22.8z"></path></svg>
    <svg className="NavIcon MenuItem-itemIcon DuplicateIcon" focusable="false" viewBox="0 0 32 32"><path d="M25.959,6.041h-14a6.018,6.018,0,0,0-6,6v14a6.018,6.018,0,0,0,6,6h14a6.018,6.018,0,0,0,6-6v-14A6.018,6.018,0,0,0,25.959,6.041Zm4,20a4.012,4.012,0,0,1-4,4h-14a4.012,4.012,0,0,1-4-4v-14a4.012,4.012,0,0,1,4-4h14a4.012,4.012,0,0,1,4,4Zm-4-7a.945.945,0,0,1-1,1h-5v5a1,1,0,0,1-2,0v-5h-5a1,1,0,0,1,0-2h5v-5a1,1,0,0,1,2,0v5h5A.945.945,0,0,1,25.959,19.041Zm-22.4,4.2a1.075,1.075,0,0,1,.2,1.4.909.909,0,0,1-.8.4,1.421,1.421,0,0,1-.6-.2,5.967,5.967,0,0,1-2.4-4.8v-14a6.018,6.018,0,0,1,6-6h14a5.967,5.967,0,0,1,4.8,2.4,1.075,1.075,0,0,1-.2,1.4,1.075,1.075,0,0,1-1.4-.2,4.026,4.026,0,0,0-3.2-1.6h-14a4.012,4.012,0,0,0-4,4v14A4.026,4.026,0,0,0,3.559,23.241Z"></path></svg>
    <svg className="NavIcon MenuItem-itemIcon TaskMenuItems-trashIcon TrashIcon" focusable="false" viewBox="0 0 32 32"><path d="M30,6h-8V4c0-2.2-1.8-4-4-4h-4c-2.2,0-4,1.8-4,4v2H2C1.4,6,1,6.4,1,7s0.4,1,1,1h2v18c0,3.3,2.7,6,6,6h12c3.3,0,6-2.7,6-6V8h2c0.6,0,1-0.4,1-1S30.6,6,30,6z M12,4c0-1.1,0.9-2,2-2h4c1.1,0,2,0.9,2,2v2h-8V4z M26,26c0,2.2-1.8,4-4,4H10c-2.2,0-4-1.8-4-4V8h20V26z M12,23v-8c0-0.6,0.4-1,1-1s1,0.4,1,1v8c0,0.6-0.4,1-1,1S12,23.6,12,23z M18,23v-8c0-0.6,0.4-1,1-1s1,0.4,1,1v8c0,0.6-0.4,1-1,1S18,23.6,18,23z"></path></svg>
    <svg className="NavIcon AbstractThemeableRectangularButton-leftIcon SortMiniIcon" focusable="false" viewBox="0 0 24 24"><path d="M11.7,9.7c-0.2,0.2-0.4,0.3-0.6,0.3H8v9c0,0.6-0.4,1-1,1s-1-0.4-1-1v-9H2.9C2.4,10,2,9.6,2,9.1c0-0.2,0.1-0.5,0.3-0.6l4.1-4.1C6.7,4,7.3,4,7.6,4.3l0,0l4.1,4.1C12.1,8.8,12.1,9.4,11.7,9.7z M21.7,14.3c-0.2-0.2-0.4-0.3-0.6-0.3H18V5c0-0.6-0.4-1-1-1s-1,0.4-1,1v9h-3.1c-0.5,0-0.9,0.4-0.9,0.9c0,0.2,0.1,0.5,0.3,0.6l4.1,4.1c0.4,0.4,0.9,0.4,1.3,0l0,0l4.1-4.1C22.1,15.2,22.1,14.6,21.7,14.3z"></path></svg>
    <svg className="NavIcon AbstractThemeableRectangularButton-leftIcon AppsIconMini" focusable="false" viewBox="0 0 24 24"><path d="M7,2c0.55,0,1,0.45,1,1v4c0,0.55-0.45,1-1,1H3C2.45,8,2,7.55,2,7V3c0-0.55,0.45-1,1-1H7 M7,0H3C1.34,0,0,1.34,0,3v4  c0,1.66,1.34,3,3,3h4c1.66,0,3-1.34,3-3V3C10,1.34,8.66,0,7,0L7,0z M7,16c0.55,0,1,0.45,1,1v4c0,0.55-0.45,1-1,1H3  c-0.55,0-1-0.45-1-1v-4c0-0.55,0.45-1,1-1H7 M7,14H3c-1.66,0-3,1.34-3,3v4c0,1.66,1.34,3,3,3h4c1.66,0,3-1.34,3-3v-4  C10,15.34,8.66,14,7,14L7,14z M21,2c0.55,0,1,0.45,1,1v4c0,0.55-0.45,1-1,1h-4c-0.55,0-1-0.45-1-1V3c0-0.55,0.45-1,1-1H21 M21,0h-4  c-1.66,0-3,1.34-3,3v4c0,1.66,1.34,3,3,3h4c1.66,0,3-1.34,3-3V3C24,1.34,22.66,0,21,0L21,0z M23,18h-3v-3c0-0.55-0.45-1-1-1  s-1,0.45-1,1v3h-3c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1h3v3c0,0.55,0.45,1,1,1s1-0.45,1-1v-3h3c0.55,0,1-0.45,1-1  C24,18.45,23.55,18,23,18z"></path></svg>
    <svg className="NavIcon DownIcon" focusable="false" viewBox="0 0 32 32"><path d="M16,22.5c-0.3,0-0.7-0.1-0.9-0.3l-11-9c-0.6-0.5-0.7-1.5-0.2-2.1s1.5-0.7,2.1-0.2l10,8.2l10-8.2c0.6-0.5,1.6-0.4,2.1,0.2c0.5,0.6,0.4,1.6-0.2,2.1l-11,9C16.7,22.4,16.3,22.5,16,22.5z"></path></svg>
    <svg className="NavIcon InfoIcon" focusable="false" viewBox="0 0 32 32"><path d="M16,0C7.2,0,0,7.2,0,16s7.2,16,16,16s16-7.2,16-16S24.8,0,16,0z M16,30C8.3,30,2,23.7,2,16S8.3,2,16,2s14,6.3,14,14  S23.7,30,16,30z M17,15.5v7c0,0.6-0.4,1-1,1s-1-0.4-1-1v-7c0-0.6,0.4-1,1-1S17,14.9,17,15.5z M17.5,10c0,0.8-0.7,1.5-1.5,1.5  s-1.5-0.7-1.5-1.5c0-0.8,0.7-1.5,1.5-1.5S17.5,9.2,17.5,10z"></path></svg>
    <svg className="NavIcon MenuItem-itemIcon PencilIcon" focusable="false" viewBox="0 0 32 32"><path d="M28.3,4.3c-1.2-1.4-3-2.1-4.9-1.9c-1.3,0.1-2.5,0.8-3.5,1.8L6,18c-0.6,0.6-1.1,1.4-1.4,2.2l-2.2,6.4C2.1,27.5,2.3,28.4,3,29c0.4,0.4,1,0.7,1.6,0.7c0.3,0,0.5,0,0.8-0.1l6.4-2.2c0.8-0.3,1.6-0.8,2.2-1.4l13.9-13.9C30,10,30.1,6.4,28.3,4.3z M4.7,27.7c-0.2,0.1-0.3,0-0.3-0.1c-0.1-0.1-0.1-0.2-0.1-0.3l2-5.8l4.2,4.2L4.7,27.7z M26.4,10.7L12.5,24.6c-0.1,0.1-0.1,0.1-0.2,0.1l-5.1-5.1c0-0.1,0.1-0.1,0.1-0.2l14-13.8c0.7-0.7,1.5-1.1,2.3-1.2c1.2-0.1,2.4,0.3,3.2,1.2C28,7,27.8,9.4,26.4,10.7z"></path></svg>
    <svg className="NavIcon MenuItem-itemIcon DuplicateIcon" focusable="false" viewBox="0 0 32 32"><path d="M25.959,6.041h-14a6.018,6.018,0,0,0-6,6v14a6.018,6.018,0,0,0,6,6h14a6.018,6.018,0,0,0,6-6v-14A6.018,6.018,0,0,0,25.959,6.041Zm4,20a4.012,4.012,0,0,1-4,4h-14a4.012,4.012,0,0,1-4-4v-14a4.012,4.012,0,0,1,4-4h14a4.012,4.012,0,0,1,4,4Zm-4-7a.945.945,0,0,1-1,1h-5v5a1,1,0,0,1-2,0v-5h-5a1,1,0,0,1,0-2h5v-5a1,1,0,0,1,2,0v5h5A.945.945,0,0,1,25.959,19.041Zm-22.4,4.2a1.075,1.075,0,0,1,.2,1.4.909.909,0,0,1-.8.4,1.421,1.421,0,0,1-.6-.2,5.967,5.967,0,0,1-2.4-4.8v-14a6.018,6.018,0,0,1,6-6h14a5.967,5.967,0,0,1,4.8,2.4,1.075,1.075,0,0,1-.2,1.4,1.075,1.075,0,0,1-1.4-.2,4.026,4.026,0,0,0-3.2-1.6h-14a4.012,4.012,0,0,0-4,4v14A4.026,4.026,0,0,0,3.559,23.241Z"></path></svg>
    <svg className="NavIcon MenuItem-itemIcon LinkIcon" focusable="false" viewBox="0 0 32 32"><path d="M9,32c-2.3,0-4.6-0.9-6.4-2.6c-3.5-3.5-3.5-9.2,0-12.7l4-4c0.4-0.4,1-0.4,1.4,0c0.4,0.4,0.4,1,0,1.4l-4,4c-2.7,2.7-2.7,7.2,0,9.9s7.2,2.7,9.9,0l4-4c2.7-2.7,2.7-7.2,0-9.9c-0.8-0.8-1.8-1.4-2.9-1.7c-0.5-0.2-0.8-0.7-0.7-1.3c0.2-0.5,0.7-0.8,1.3-0.7c1.4,0.4,2.7,1.2,3.7,2.2c3.5,3.5,3.5,9.2,0,12.7l-4,4C13.6,31.1,11.3,32,9,32z M16.6,21.6c-0.1,0-0.2,0-0.3,0c-1.4-0.4-2.7-1.2-3.7-2.2c-1.7-1.7-2.6-4-2.6-6.4s0.9-4.7,2.6-6.4l4-4c3.5-3.5,9.2-3.5,12.7,0s3.5,9.2,0,12.7l-4,4c-0.4,0.4-1,0.4-1.4,0s-0.4-1,0-1.4l4-4c2.7-2.7,2.7-7.2,0-9.9S20.7,1.3,18,4l-4,4c-1.3,1.4-2,3.1-2,5s0.7,3.6,2.1,5c0.8,0.8,1.8,1.4,2.9,1.7c0.5,0.2,0.8,0.7,0.7,1.3C17.5,21.4,17.1,21.6,16.6,21.6z"></path></svg>
    <svg className="NavIcon TopbarSearchTypeahead-icon MagnifyerIcon" focusable="false" viewBox="0 0 32 32"><path d="M29.707,28.293l-8.256-8.256C23.042,18.13,24,15.677,24,13c0-6.075-4.925-11-11-11S2,6.925,2,13s4.925,11,11,11c2.677,0,5.13-0.958,7.037-2.549l8.256,8.256L29.707,28.293z M4,13c0-4.963,4.037-9,9-9c4.963,0,9,4.037,9,9s-4.037,9-9,9C8.037,22,4,17.963,4,13z"></path></svg>

    <svg className="NavIcon AbstractThemeableRectangularButton-leftIcon UsersMiniIcon" focusable="false" viewBox="0 0 24 24"><path d="M18.3,16h-0.7c-0.8,0-1.3,0.9-0.8,1.5c0.8,1.2,1.2,2.6,1.2,4l0,0v0.1l0,0c0,0.3-0.1,0.7-0.1,1c-0.2,0.7,0.3,1.3,0.9,1.3h2.8c1.3,0,2.4-1.1,2.4-2.4C24,18.5,21.4,16,18.3,16z M14.8,13.9c0.7,0.2,1.5,0.2,2.3,0c2.1-0.4,3.8-2.1,4.2-4.2C22.1,6.1,19.4,3,16,3c-0.4,0-0.8,0-1.2,0.1c-0.7,0.2-0.9,0.9-0.6,1.5c0.7,1.1,1.1,2.4,1.1,3.8s-0.4,2.7-1.1,3.8C13.9,12.9,14.1,13.7,14.8,13.9z M12,16.3c-0.5-0.2-1.1-0.3-1.7-0.3H5.7C2.6,16,0,18.5,0,21.6C0,22.9,1.1,24,2.4,24h11.2c1.3,0,2.4-1.1,2.4-2.4C16,19.1,14.3,17,12,16.3z M8,3c3,0,5.5,2.5,5.5,5.5S11,14,8,14s-5.5-2.5-5.5-5.5S5,3,8,3z"></path></svg>

    <div className='add' role="button" aria-label="Create new" tabindex="0"><svg class="NavIcon Icon PlusIcon" focusable="false" viewBox="0 0 32 32"><path d="M26,14h-8V6c0-1.1-0.9-2-2-2l0,0c-1.1,0-2,0.9-2,2v8H6c-1.1,0-2,0.9-2,2l0,0c0,1.1,0.9,2,2,2h8v8c0,1.1,0.9,2,2,2l0,0c1.1,0,2-0.9,2-2v-8h8c1.1,0,2-0.9,2-2l0,0C28,14.9,27.1,14,26,14z"></path></svg></div>



    </>

)

export default VerticalNav;
