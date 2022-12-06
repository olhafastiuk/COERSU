import './projects.css';
import { ProjectsData } from './projectsData';
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Grid, Pagination } from 'swiper';

export default function Projects() {
    const webSites = useRef();
    const brandIdentity = useRef();
    const mobileApps = useRef();
    const digitalProducts = useRef();

    const webSitesButton = useRef();
    const brandIdentityButton = useRef();
    const mobileAppsButton = useRef();
    const digitalProductsButton = useRef();
    const projectsArr = [webSites, brandIdentity, mobileApps, digitalProducts];
    const projectsBtnArr = [
        webSitesButton,
        brandIdentityButton,
        mobileAppsButton,
        digitalProductsButton,
    ];

    const [slidesPerView, setSlidesPerView] = useState(
        window.innerWidth >= 1200 ? 2 : 1,
    );
    const [gridRows, setGridRows] = useState(window.innerWidth > 550 ? 2 : 1);

    const checkDevice = () => {
        if (window.innerWidth >= 1200) {
            setSlidesPerView(2);
            setGridRows(2);
        } else if (window.innerWidth <= 1200) {
            setSlidesPerView(1);
            setGridRows(2);
        }
        if (window.innerWidth <= 550) {
            setGridRows(1);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', checkDevice);
        return () => {
            window.removeEventListener('resize', checkDevice);
        };
    });

    const onClick = (e, block) => {
        projectsArr.forEach((el) => {
            if (el === block) {
                el.current.classList.remove('displayNone');
            } else {
                el.current.classList.add('displayNone');
            }
        });
        projectsBtnArr.forEach((el) => el.current.classList.remove('active'));
        e.target.classList.add('active');
    };

    return (
        <div id="projects">
            <h1>case studies</h1>
            <div className="vrLine projectsMenu">
                <p
                    ref={webSitesButton}
                    onClick={(e) => onClick(e, webSites)}
                    className="active">
                    web sites
                </p>
                <p
                    ref={brandIdentityButton}
                    onClick={(e) => onClick(e, brandIdentity)}
                    className="">
                    brand identity
                </p>
                <p
                    ref={mobileAppsButton}
                    onClick={(e) => onClick(e, mobileApps)}
                    className="">
                    mobile apps
                </p>
                <p
                    ref={digitalProductsButton}
                    onClick={(e) => onClick(e, digitalProducts)}
                    className="">
                    digital products
                </p>
            </div>

            <div id="webSites" ref={webSites} className="">
                <Swiper
                    slidesPerView={slidesPerView}
                    grid={{
                        rows: gridRows,
                    }}
                    spaceBetween={0}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Grid, Pagination]}
                    className="mySwiper">
                    {ProjectsData.webSites.map((project, i) => {
                        return (
                            <SwiperSlide key={i} className="projectBlock">
                                <img src={project.imgSrc} alt="" />
                                <div className="projectInfo">
                                    <p>{project.projectInfo.preHeader}</p>
                                    <h4>{project.projectInfo.header}</h4>
                                    <p>{project.projectInfo.content}</p>
                                    <h3>View project</h3>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>

            <div id="brandIdentity" ref={brandIdentity} className="displayNone">
                <Swiper
                    slidesPerView={slidesPerView}
                    grid={{
                        rows: gridRows,
                    }}
                    spaceBetween={0}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Grid, Pagination]}
                    className="mySwiper">
                    {ProjectsData.brandIdentity.map((project, i) => {
                        return (
                            <SwiperSlide key={i} className="projectBlock">
                                <img src={project.imgSrc} alt="" />
                                <div className="projectInfo">
                                    <p>{project.projectInfo.preHeader}</p>
                                    <h4>{project.projectInfo.header}</h4>
                                    <p>{project.projectInfo.content}</p>
                                    <h3>View project</h3>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
            <div id="mobileApps" ref={mobileApps} className="displayNone">
                <Swiper
                    slidesPerView={slidesPerView}
                    grid={{
                        rows: gridRows,
                    }}
                    spaceBetween={0}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Grid, Pagination]}
                    className="mySwiper">
                    {ProjectsData.mobileApps.map((project, i) => {
                        return (
                            <SwiperSlide key={i} className="projectBlock">
                                <img src={project.imgSrc} alt="" />
                                <div className="projectInfo">
                                    <p>{project.projectInfo.preHeader}</p>
                                    <h4>{project.projectInfo.header}</h4>
                                    <p>{project.projectInfo.content}</p>
                                    <h3>View project</h3>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
            <div
                id="digitalProducts"
                ref={digitalProducts}
                className="displayNone">
                <Swiper
                    slidesPerView={slidesPerView}
                    grid={{
                        rows: gridRows,
                    }}
                    spaceBetween={0}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Grid, Pagination]}
                    className="mySwiper">
                    {ProjectsData.digitalProducts.map((project, i) => {
                        return (
                            <SwiperSlide key={i} className="projectBlock">
                                <img src={project.imgSrc} alt="" />
                                <div className="projectInfo">
                                    <p>{project.projectInfo.preHeader}</p>
                                    <h4>{project.projectInfo.header}</h4>
                                    <p>{project.projectInfo.content}</p>
                                    <h3>View project</h3>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
}
