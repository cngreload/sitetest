'use client';
import React from 'react';
import
{
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from '@/components/ui/animated-modal';
import Image from 'next/image';
import { motion } from 'framer-motion';


export function FirstModal ()
{
  const images = [
    "/svg/bmslogoclean.svg" ];
  return (
    <div className=" flex items-center justify-center">
      <Modal>
        <ModalTrigger className=" dark:text-white text-black  flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center text-lg md:text-2xl bg-green-600  p-10 rounded-xl rounded-r-full transition duration-200">
            مصوبه <br /> وزیران          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            <Image src="/svg/bmslogoclean.svg" alt="alt" width={ 40 } height={ 40 } />
          </div>
        </ModalTrigger>
        <ModalBody className='h-fit'>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              💡 لپ{ ' ' }
              <span className="px-1 py-0.5 rounded-md bg-gray-300 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                کلام
              </span>{ ' ' }
              ما!
            </h4>
            <div className="flex justify-center items-center">
              { images.map( ( image, idx ) => (
                <motion.div
                  key={ 'images' + idx }
                  style={ {
                    rotate: Math.random() * 20 - 10,
                  } }
                  whileHover={ {
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  } }
                  whileTap={ {
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  } }
                  className="rounded-xl -mr-4 p-0.25 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                >
                  <Image
                    src={ image }
                    alt="bali images"
                    width="500"
                    height="500"
                    className="rounded-lg h-20 w-20 object-cover flex-shrink-0"
                  />
                </motion.div>
              ) ) }
            </div>
            <div>
              {/* <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
              <div className="flex  items-center justify-center">
                <PlaneIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  5 connecting flights
                </span>
              </div>
              <div className="flex items-center justify-center">
                <ElevatorIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  12 hotels
                </span>
              </div>
              <div className="flex items-center justify-center">
                <VacationIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  69 visiting spots
                </span>
              </div>
              <div className="flex  items-center justify-center">
                <FoodIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Good food everyday
                </span>
              </div>
              <div className="flex items-center justify-center">
                <MicIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Open Mic
                </span>
              </div>
              <div className="flex items-center justify-center">
                <ParachuteIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Paragliding
                </span>
              </div> */}
              <div className="-m-2 md:-m-4">
                <p className="text-sm">
                  🛈 معرفی شرکت و چشم‌انداز:
                  <br />
                  شرکت بارمان محور اسپادانا از سال ۱۳۹۸ با هدف توسعه فناوری‌های
                  نوین و اهداف انقلاب صنعتی چهارم فعالیت خود را آغاز کرده است.
                  تمرکز شرکت بر طراحی و تولید سامانه‌های هوشمند برای بهبود
                  بهره‌وری، مدیریت فرآیندها و امنیت زیرساخت‌ها است.
                  <br />
                  چشم‌انداز شرکت، ارائه سامانه‌های هوشمند مقرون‌به‌صرفه و👁️
                  قابل‌اعتماد برای صنایع و زیرساخت‌های کشور است.
                  <br />
                  ♚♞♟ اقدامات و دستاوردهای اجرایی:
                  <br />

                  ⛽️🚗⚡⚙️طراحی و تولید سامانه هوشمند جایگاه‌های سوخت CNG:
                  <br />
                  سامانه کاملاً بومی با تأییدیه‌های امنیتی و مجوزهای لازم طراحی
                  شده است.
                  🎯 اجرای پایلوت موفق در سال ۱۴۰۲ در جایگاه پونک تهران عملکرد
                  آن رااثبات کرده است. <br />
                  <br />
                  💯🤝آماده‌سازی برای تجاری‌سازی:
                  <br />
                  سامانه آماده پیاده‌سازی گسترده در جایگاه‌های سوخت کشور برای
                  ارتقای بهره‌وری و ایمنی است.
                </p>
              </div>
            </div>
          </ModalContent>
          <ModalFooter className="gap-4">
            <a href="./Core">
              <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                ورود به سایت
              </button>
            </a>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}
