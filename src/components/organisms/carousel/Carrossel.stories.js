import React from "react";
import { number } from "@storybook/addon-knobs";

import Carrossel from "./Carrossel";

import image1 from "assets/hero.jpg";
import image2 from "assets/serv-01.jpg";
import image3 from "assets/serv-02.jpg";

export default {
  title: "Components/Organisms/Carrossel",
  component: Carrossel,
};

const imagensCarrosel = [
  { id: 1, imagem: image1, legenda: "Imagem 1" },
  { id: 2, imagem: image2, legenda: "Imagem 2" },
  { id: 3, imagem: image3, legenda: "Imagem 3" },
];

const mainGroupId = "Main";

export const usage = () => (
  <Carrossel
    number={number("centerSlidePercentage", 100, {}, mainGroupId)}
    imagens={imagensCarrosel}
  ></Carrossel>
);

// #region Documentação Basic - react-responsive-carousel - Storybook

// import React, { CSSProperties } from 'react';
// import { action } from '@storybook/addon-actions';
// import { Carousel } from '../src/index';

// import { withKnobs, boolean, number } from '@storybook/addon-knobs';

// // carousel styles
// import '../src/main.scss';
// import '../src/carousel.scss';
// import '../src/examples/presentation/presentation.scss';

// const createCarouselItemImage = (index, options = {}) => (
//     <div key={index}>
//         <img src={`/assets/${index}.jpg`} />
//         <p className="legend">Legend {index}</p>
//     </div>
// );

// const baseChildren = <div>{[1, 2, 3, 4, 5].map(createCarouselItemImage)}</div>;

// const tooglesGroupId = 'Toggles';
// const valuesGroupId = 'Values';
// const mainGroupId = 'Main';

// const getConfigurableProps = () => ({
//     showArrows: boolean('showArrows', true, tooglesGroupId),
//     showStatus: boolean('showStatus', true, tooglesGroupId),
//     showIndicators: boolean('showIndicators', true, tooglesGroupId),
//     infiniteLoop: boolean('infiniteLoop', true, tooglesGroupId),
//     showThumbs: boolean('showThumbs', true, tooglesGroupId),
//     useKeyboardArrows: boolean('useKeyboardArrows', true, tooglesGroupId),
//     autoPlay: boolean('autoPlay', true, tooglesGroupId),
//     stopOnHover: boolean('stopOnHover', true, tooglesGroupId),
//     swipeable: boolean('swipeable', true, tooglesGroupId),
//     dynamicHeight: boolean('dynamicHeight', true, tooglesGroupId),
//     emulateTouch: boolean('emulateTouch', true, tooglesGroupId),
//     autoFocus: boolean('autoFocus', false, tooglesGroupId),
//     thumbWidth: number('thumbWidth', 100, {}, valuesGroupId),
//     selectedItem: number('selectedItem', 0, {}, valuesGroupId),
//     interval: number('interval', 2000, {}, valuesGroupId),
//     transitionTime: number('transitionTime', 500, {}, valuesGroupId),
//     swipeScrollTolerance: number('swipeScrollTolerance', 5, {}, valuesGroupId),
// });

// export default {
//     title: '01 - Basic',
//     decorators: [withKnobs],
//     component: Carousel,
// };

// export const base = () => <Carousel {...getConfigurableProps()}>{baseChildren.props.children}</Carousel>;

// export const vertical = () => (
//     <Carousel axis="vertical" {...getConfigurableProps()}>
//         {baseChildren.props.children}
//     </Carousel>
// );

// export const centerMode = () => (
//     <Carousel
//         infiniteLoop
//         centerMode
//         centerSlidePercentage={number('centerSlidePercentage', 80, {}, mainGroupId)}
//         {...getConfigurableProps()}
//     >
//         {baseChildren.props.children}
//     </Carousel>
// );

// export const handlers = () => (
//     <Carousel onClickThumb={action('click thumb')} onClickItem={action('click item')} onChange={action('change')}>
//         {baseChildren.props.children}
//     </Carousel>
// );

// export const withCustomStatusArrowsAndIndicators = () => {
//     const arrowStyles: CSSProperties = {
//         position: 'absolute',
//         zIndex: 2,
//         top: 'calc(50% - 15px)',
//         width: 30,
//         height: 30,
//         cursor: 'pointer',
//     };

//     const indicatorStyles: CSSProperties = {
//         background: '#fff',
//         width: 8,
//         height: 8,
//         display: 'inline-block',
//         margin: '0 8px',
//     };

//     return (
//         <Carousel
//             statusFormatter={(current, total) => `Current slide: ${current} / Total: ${total}`}
//             renderArrowPrev={(onClickHandler, hasPrev, label) =>
//                 hasPrev && (
//                     <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 15 }}>
//                         -
//                     </button>
//                 )
//             }
//             renderArrowNext={(onClickHandler, hasNext, label) =>
//                 hasNext && (
//                     <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 15 }}>
//                         +
//                     </button>
//                 )
//             }
//             renderIndicator={(onClickHandler, isSelected, index, label) => {
//                 if (isSelected) {
//                     return (
//                         <li
//                             style={{ ...indicatorStyles, background: '#000' }}
//                             aria-label={`Selected: ${label} ${index + 1}`}
//                             title={`Selected: ${label} ${index + 1}`}
//                         />
//                     );
//                 }
//                 return (
//                     <li
//                         style={indicatorStyles}
//                         onClick={onClickHandler}
//                         onKeyDown={onClickHandler}
//                         value={index}
//                         key={index}
//                         role="button"
//                         tabIndex={0}
//                         title={`${label} ${index + 1}`}
//                         aria-label={`${label} ${index + 1}`}
//                     />
//                 );
//             }}
//         >
//             {baseChildren.props.children}
//         </Carousel>
//     );
// };

// export const fixedWidth = () => <Carousel width="700px">{baseChildren.props.children}</Carousel>;
// export const noChildren = () => <Carousel />;
// export const noImages = () => (
//     <Carousel>
//         <div key="slide1" style={{ padding: 20, height: 150 }}>
//             Text 01
//         </div>
//         <div key="slide2" style={{ padding: 20, height: 150 }}>
//             Text 02
//         </div>
//     </Carousel>
// );

// export const dynamicHeightImages = () => (
//     <Carousel showArrows={false} dynamicHeight={true}>
//         <div key="slide1">
//             <img src="http://placehold.it/350x150" />
//         </div>
//         <div key="slide2">
//             <img src="http://placehold.it/255x150" />
//         </div>
//         <div key="slide3">
//             <img src="http://placehold.it/295x150" />
//         </div>
//         <div key="slide4">
//             <img src="http://placehold.it/310x150" />
//         </div>
//         <div key="slide5">
//             <img src="http://placehold.it/575x250" />
//         </div>
//         <div key="slide6">
//             <img src="http://placehold.it/450x150" />
//         </div>
//     </Carousel>
// );

// export const fade = () => (
//     <Carousel {...getConfigurableProps()} animationHandler="fade" swipeable={false}>
//         {baseChildren.props.children}
//     </Carousel>
// );

// #endregion

// #region Documentação Advanced - react-responsive-carousel - Storybook

// import React, { Component } from 'react';
// import ReactPlayer from 'react-player';
// import Carousel, { Props } from '../src/components/Carousel';

// // carousel styles
// import '../src/main.scss';
// import '../src/carousel.scss';
// import '../src/examples/presentation/presentation.scss';

// const createCarouselItemImage = (index, options = {}) => (
//     <div key={index}>
//         <img src={`/assets/${index}.jpeg`} />
//         <p className="legend">Legend {index}</p>
//     </div>
// );

// const baseChildren = <div>{[1, 2, 3, 4, 5].map(createCarouselItemImage)}</div>;

// export default {
//     title: '02 - Advanced',
//     component: Carousel,
// };

// export const lazyLoaded = () => {
//     class LazyLoadedCarousel extends Component<{}, { slides: Props['children'] }> {
//         constructor(props) {
//             super(props);

//             this.state = {
//                 slides: null,
//             };

//             this.loadSlides = this.loadSlides.bind(this);
//         }

//         loadSlides() {
//             this.setState({
//                 slides: baseChildren.props.children,
//             });
//         }

//         render() {
//             return (
//                 <div>
//                     <p>Click the button to asynchronously load the slides</p>
//                     <button onClick={this.loadSlides} style={{ padding: '10px', margin: '10px', fontSize: '1.5em' }}>
//                         Load slides
//                     </button>
//                     <Carousel>{this.state.slides}</Carousel>
//                 </div>
//             );
//         }
//     }

//     return <LazyLoadedCarousel />;
// };

// const YoutubeSlide = ({ url, isSelected }: { url: string; isSelected?: boolean }) => (
//     <ReactPlayer width="100%" url={url} playing={isSelected} />
// );

// export const youtubeAutoplayWithCustomThumbs = () => {
//     const customRenderItem = (item, props) => <item.type {...item.props} {...props} />;

//     const getVideoThumb = (videoId) => `https://img.youtube.com/vi/${videoId}/default.jpg`;

//     const getVideoId = (url) => url.substr('https://www.youtube.com/embed/'.length, url.length);

//     const customRenderThumb = (children) =>
//         children.map((item) => {
//             const videoId = getVideoId(item.props.url);
//             return <img src={getVideoThumb(videoId)} />;
//         });

//     return (
//         <Carousel renderItem={customRenderItem} renderThumbs={customRenderThumb}>
//             <YoutubeSlide key="youtube-1" url="https://www.youtube.com/embed/AVn-Yjr7kDc" />
//             <YoutubeSlide key="youtube-2" url="https://www.youtube.com/embed/mOdmi9SVeWY" />
//             <YoutubeSlide key="youtube-3" url="https://www.youtube.com/embed/n0F6hSpxaFc" />
//             <YoutubeSlide key="youtube-4" url="https://www.youtube.com/embed/0uGETVnkujA" />
//         </Carousel>
//     );
// };

// export const withExternalControls = () => {
//     class ExternalControlledCarousel extends Component<{}, { currentSlide: number; autoPlay: boolean }> {
//         constructor(props) {
//             super(props);

//             this.state = {
//                 currentSlide: 0,
//                 autoPlay: true,
//             };
//         }

//         next = () => {
//             this.setState((state) => ({
//                 currentSlide: state.currentSlide + 1,
//             }));
//         };

//         prev = () => {
//             this.setState((state) => ({
//                 currentSlide: state.currentSlide - 1,
//             }));
//         };

//         changeAutoPlay = () => {
//             this.setState((state) => ({
//                 autoPlay: !state.autoPlay,
//             }));
//         };

//         updateCurrentSlide = (index) => {
//             const { currentSlide } = this.state;

//             if (currentSlide !== index) {
//                 this.setState({
//                     currentSlide: index,
//                 });
//             }
//         };

//         render() {
//             const buttonStyle = { fontSize: 20, padding: '5px 20px', margin: '5px 0px' };
//             const containerStyle = { margin: '5px 0 20px' };
//             return (
//                 <div>
//                     <div style={containerStyle}>
//                         <p style={containerStyle}>
//                             Use the buttons below to change the selected item in the carousel
//                             <br />
//                             <small>
//                                 <i>
//                                     Note that the external controls might not respect the carousel boundaries but the
//                                     carousel won't go past it.
//                                 </i>
//                             </small>
//                         </p>
//                         <p>External slide value: {this.state.currentSlide}</p>
//                         <button onClick={this.prev} style={buttonStyle}>
//                             Prev
//                         </button>
//                         <button onClick={this.next} style={buttonStyle}>
//                             Next
//                         </button>
//                         <button onClick={this.changeAutoPlay} style={buttonStyle}>
//                             Toggle Autoplay ({this.state.autoPlay ? 'true' : 'false'})
//                         </button>
//                     </div>
//                     <Carousel
//                         autoPlay={this.state.autoPlay}
//                         selectedItem={this.state.currentSlide}
//                         onChange={this.updateCurrentSlide}
//                         {...this.props}
//                     >
//                         {baseChildren.props.children}
//                     </Carousel>
//                 </div>
//             );
//         }
//     }

//     return <ExternalControlledCarousel />;
// };

// export const presentationMode = () => (
//     <Carousel autoFocus={true} showThumbs={false} showStatus={false} useKeyboardArrows className="presentation-mode">
//         <div key="content-0" className="my-slide primary">
//             <h1>Presentation mode</h1>
//         </div>
//         <div key="content-1" className="my-slide secondary">
//             <h2>It's just a couple of new styles...</h2>
//         </div>
//         <div key="content-2" className="my-slide content">
//             <p>...and the carousel can be used to present something!</p>
//         </div>
//         <div key="content-3" className="my-slide content">
//             <img src="/assets/meme.png" />
//         </div>
//         <div key="content-4" className="my-slide content">
//             <p>
//                 See the <a href="./examples/presentation/presentation.scss">source code</a>...
//             </p>
//         </div>
//         <div key="content-5" className="my-slide secondary complex">
//             <h2>It supports:</h2>
//             <ul>
//                 <li>Headers (h1 - h6)</li>
//                 <li>Paragraphs (p)</li>
//                 <li>Images and videos (Youtube, Vimeo)</li>
//                 <li>
//                     Lists
//                     <ol>
//                         <li>Ordered lists (ol)</li>
//                         <li>Bullet points (ul)</li>
//                     </ol>
//                 </li>
//             </ul>
//         </div>
//         <div key="content-6" className="my-slide secondary complex">
//             <h2>Pre baked slides:</h2>
//             <ul>
//                 <li>Primary - for titles</li>
//                 <li>Secondary - for subtitles</li>
//                 <li>Content</li>
//             </ul>
//         </div>
//         <div key="content-7" className="my-slide content">
//             <iframe width="560" height="315" src="https://www.youtube.com/embed/n0F6hSpxaFc" />
//         </div>
//         <div key="content-8" className="my-slide content">
//             <iframe src="https://player.vimeo.com/video/105955605" width="640" height="360" />
//         </div>
//         <div key="content-9" className="my-slide primary">
//             <h1>Lorem Ipsum</h1>
//         </div>
//         <div key="content-10" className="my-slide secondary">
//             <h2>What is Lorem Ipsum?</h2>
//         </div>
//         <div key="content-11" className="my-slide content">
//             <p>
//                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
//                 industry's standard dummy text ever since the <strong>1500s</strong>, when an unknown printer took a
//                 galley of type and scrambled it to make a type specimen book.{' '}
//             </p>
//         </div>
//         <div key="content-12" className="my-slide content">
//             <blockquote>
//                 It has survived not only <em>five centuries</em>, but also the leap into electronic typesetting,
//                 remaining essentially unchanged.{' '}
//             </blockquote>
//         </div>
//         <div key="content-13" className="my-slide content">
//             <p>
//                 It was popularised in the <strong>1960s</strong> with the release of Letraset sheets containing Lorem
//                 Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
//                 versions of Lorem Ipsum.
//             </p>
//         </div>
//         <div key="content-14" className="my-slide secondary">
//             <h2>Where does it come from?</h2>
//         </div>
//         <div key="content-15" className="my-slide content">
//             <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
//         </div>
//         <div key="content-16" className="my-slide content">
//             <p>
//                 It has roots in a piece of classical Latin literature from <strong>45 BC</strong>, making it over{' '}
//                 <strong>2000</strong> years old.
//             </p>
//         </div>
//         <div key="content-17" className="my-slide primary">
//             <h1>Thanks...</h1>
//         </div>
//     </Carousel>
// );

//#endregion
