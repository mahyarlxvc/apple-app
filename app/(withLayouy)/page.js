import Link from "next/link";
import { DUMMY_IMAGES, DUMMY_LOGOS } from "../../constants/images";
import { DUMMY_SLOGANS } from "../../constants/slogans";
import FigureCard from "../../ui-components/cards/figure-card/FigureCard";
import SloganCard from "../../ui-components/cards/slogan-card/SloganCard";
import CoursesSlider from "../../ui-components/sliders/CoursesSlider";
import LandingSlider from "../../ui-components/sliders/LandingSlider";
import { getFigures, getLatestCourses } from "../utils";
import { IconArrowLeft } from "@tabler/icons-react";
import IntroVideo from "../../components/intro-video/IntroVideo";
import LogoSlider from "../../ui-components/sliders/LogoSliders";

export default async function Home() {
  const figures = await getFigures()
  const latestCourses = await getLatestCourses(8)
  return (
    <>

      {/* photo slider ***************** */}

      <section>
        <div className="w-full h-fit md:mt-1 mt-8">
          <div className="relative md:mx-40 mx-10 shadow-xl shadow-black/15">
            <LandingSlider slides={DUMMY_IMAGES} />
          </div>
        </div>
      </section>

      {/* figures  ***************** */}

      <section>
        <div className="mt-28">
          <div>
            <h1 className="text-center md:text-5xl text-2xl">
              اعداد قوی تر از کامات هستند
            </h1>
          </div>
          <div className="flex-center flex-wrap mt-14 md:gap-9 gap-2 md:px-28 px-2">
            {
              figures.map(figure => <FigureCard {...figure} />)
            }
          </div>
        </div>
      </section>

      {/* slogans  ***************** */}

      <section>
        <div className="mt-28">
          <div>
            <h1 className="text-center md:text-5xl text-2xl">
              مزیت‌های آموزش با اپل
            </h1>
          </div>
          <div className="mt-14">
            <h2 className="text-center md:text-2xl text-md">
              چرا باید یه دوره جدید رو با اپل بگذرونیم؟
            </h2>
          </div>
          <div className="flex-center flex-wrap mt-12 md:gap-8 gap-2">
            {
              DUMMY_SLOGANS.map(slogan => <SloganCard title={slogan} />)
            }
          </div>
        </div>
      </section>

      {/* latest courses  ***************** */}

      <section>
        <div className="mt-28">
          <div>
            <h1 className="text-center md:text-5xl text-2xl">
              جدیدترین دوره‌های اپل
            </h1>
          </div>
          <div className="mt-14 lg:px-0 px-16">
            <h2 className="text-center md:text-2xl text-md">
              اپل در این روزها چه دوره‌هایی برگزار می‌کنه؟ در این قسمت می‌تونید دوره‌های جدید مارو ببینید و ثبت‌نام کنید.
            </h2>
          </div>
          <div className="w-full mt-12">
            <CoursesSlider slides={latestCourses} />
          </div>
        </div>
      </section>

      {/* introduction video ***************** */}

      <section>
        <div className=" flex md:flex-row flex-col mt-28 mx-4 basis-[35%] bg-dark-color rounded-3xl">
          <div className="lg:px-16 lg:py-28 px-9 py-16">
            <div >
              <h1 className="md:text-4xl text-2xl text-white">آموزش سازمانی</h1>
            </div>
            <div className="lg:py-14 py-7">
              <h3 className="md:text-lg text-base text-white">ما در کنارتون هستیم تا با خدمات آموزش سازمانی، تیم قدرتمندتری بسازید.</h3>
            </div>
            <div className="w-fit">
              <Link href="./">
                <div className='basis-1/4 md:w-fit custom-transition rounded-3xl  bg-primary-color text-dark-color shadow-xl shadow-primary-color/40 hover:shadow-none'>
                  <div className='flex-center md:px-4 h-11 px-9'>
                    <p className='font-bold text-base text-nowrap' >برای مشاوره تماس بگیرید</p>
                    <IconArrowLeft className='w-[20px]' />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="py-12 px-4 basis-[65%] flex-center ">
            <IntroVideo />
          </div>
        </div>
      </section>

      {/* co-Operates ***************** */}

      <section>
        <div className="mt-28">
          <div>
            <h1 className="text-center md:text-5xl text-2xl">
              به چه سازمان‌هایی کمک کردیم؟
            </h1>
          </div>
          <div className="mt-14 lg:px-0 px-16">
            <h2 className="text-center md:text-2xl text-md ">
              از سال ۱۳۹۳ تا کنون به بیش از ۱۵۰۰ سازمان و شرکت داخلی و خارجی خدمات آموزشی و مشاوره داده‌ایم.
            </h2>
          </div>
          <div className="w-full mt-20">
            <LogoSlider slides={DUMMY_LOGOS} />
          </div>
        </div>
      </section>

      {/* about APPLE ***************** */}

      <section>
        <div className="mt-28 w[95%] px-2 py-10  bg-dark-color/20 rounded-3xl">
          <h2 className="text-dark-color text-2xl font-bold mb-6" >آموزشگاه مهندسی IT اپل</h2>
          <p>آموزشگاه مهندسی اپل، برگزارکننده‌ی دوره‌ های تخصصی IT در ایران است. اپل، موفق به کسب عنوان برترین آموزشگاه IT کشور شده و با ارائه‌ی خدمات آموزشی خود در حوزه‌های مختلف آموزش شبکه و آموزش برنامه نویسی، در جهت تسهیل آموزش دوره‌ های IT برای گروه‌های سنی مختلف گام برمی‌دارد.<br /><br />

            برای تحقق این هدف، دوره‌های آموزش IT به‌صورت حضوری، آنلاین و مکاتبه‌ای ارائه می‌شود.<br /><br /> دانشجویان اپل همچنین می‌توانند از جزوات و کتب حوزه‌های مختلف مهندسی شبکه و برنامه‌نویسی، منابع دست‌اول و به‌روز و مطالب بخش وبلاگ اپل هم برای آموزش دقیق‌تر و مطالعه استفاده کنند.<br /><br />

            نگاهی به دوره های آموزشی اپل
            آموزشگاه اپل کامل‌ترین دوره‌ها در زمینه مهندسی شبکه و برنامه‌نویسی را در برنامه‌های آموزشی خود گنجانده است. در  تمامی شاخه‌های مقدماتی، متوسطه و پیشرفته برنامه نویسی و شبکه، می‌توانید کلاس آموزشی متناسب با سطح دانش علمی خود را پیدا کنید.<br /><br />

            دوره ‌های آموزش شبکه اپل شامل سطوح مختلف مبتدی تا پیشرفته می‌شود.<br /><br />
          </p>
        </div>
      </section>
    </>
  );
}
