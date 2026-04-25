/* eslint-disable no-fallthrough */
/** @jsxImportSource react */

import { Container } from "react-bootstrap";
import Banner from '../components/banner/banner';
import TimeToTalk from '../components/timeToTalk/timeToTalk';
import CommonHeartRisk from '../components/commonHeartRisk/commonHeartRisk';
import ObesityRising from '../components/obesityRising/obesityRising';
import VideoSection from '../components/videoSection/videoSection';
import Judgement from '../components/judgement/judgement';
import Cta from '../components/cta/cta';
import ImageSection from '../components/imageSection/imageScetion';
import BmiCalculate from '../components/bmiCalculate/bmiCalculate';
import EducationalResource from '../components/educationalResource/educationalResource';
import Trackers from '../components/trackers/trackers';
import StartSection from '../components/startSection/startSection';
import Footer from '../layouts/footer/footer';

export const renderWidget = (type, item, index, bnrContent, pageName, visibleCallback, className, setSpecialityValue, selectedCityCookie, fetchDoctorByAllFilter, setSpecialtiesModal, specialtiesModal) => {
    switch (type) {
        case "web-banner-v1":
            if (item?.slug == "home") {
                return (
                    <>
                        <section data-aos="fade-up" data-aos-duration="3000">
                            <Banner item={item} />
                        </section>
                    </>
                )
            }

        case "web-call-by-reference-card-custom-v1": 

        if (item?.card_type == "widget-2") {
            return (
                <>
                    <section data-aos="fade-up" data-aos-duration="3000">
                        <TimeToTalk item={item} />
                    </section>
                </>
            )
        }

        if (item?.card_type == "widget-3") {
            return (
                <>
                    <section data-aos="fade-up" data-aos-duration="3000">
                        <CommonHeartRisk item={item} />
                    </section>
                </>
            )
        }

        if (item?.card_type === "widget-4") {
            return (
                <>
                    <section data-aos="fade-up" data-aos-duration="3000">
                        <ObesityRising item={item} />
                    </section>
                </>
            )
        }

         if (item?.card_type === "widget-5") {
            return (
                <>
                    <section data-aos="fade-up" data-aos-duration="3000">
                        <VideoSection item={item} />
                    </section>
                </>
            )
        }

        if (item?.card_type === "widget-6") {
            return (
                <>
                    <section data-aos="fade-up" data-aos-duration="3000">
                        <Judgement item={item} />
                    </section>
                </>
            )
        }

        if (item?.card_type === "widget-7") {
            return (
                <>
                    <section data-aos="fade-up" data-aos-duration="3000">
                        <Cta  item={item} />
                    </section>
                </>
            )
        }

        if (item?.card_type === "widget-8") {
            return (
                <>
                    <section data-aos="fade-up" data-aos-duration="3000">
                        <ImageSection  item={item} />
                    </section>
                </>
            )
        }

        if (item?.card_type === "widget-9") {
            return (
                <>
                    <section data-aos="fade-up" data-aos-duration="3000">
                        <BmiCalculate  item={item} />
                    </section>
                </>
            )
        }

         if (item?.card_type === "widget-10") {
            return (
                <>
                    <section data-aos="fade-up" data-aos-duration="3000">
                        <EducationalResource  item={item} />
                    </section>
                </>
            )
        }

            if (item?.card_type === "widget-11") {
                return (
                    <>
                        <section data-aos="fade-up" data-aos-duration="3000">
                            <Trackers item={item} />
                        </section>
                    </>
                )
            }

          if (item?.card_type === "widget-12") {
            return (
                <>
                    <section data-aos="fade-up" data-aos-duration="3000">
                        <StartSection  item={item} />
                    </section>
                </>
            )
        }

        if (item?.card_type === "widget-13") {
            return (
                <>
                    <section data-aos="fade-up" data-aos-duration="3000">
                        <TimeToTalk  item={item} />
                    </section>
                </>
            )
        }

         if (item?.card_type === "widget-14") {
            return (
                <>
                    <section data-aos="fade-up" data-aos-duration="3000">
                        <Footer  item={item} />
                    </section>
                </>
            )
        }
        default:
            return null;
    }
};
