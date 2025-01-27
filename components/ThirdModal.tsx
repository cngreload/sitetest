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

export function ThirdModal ()
{
  const images = [
    'https://banner2.cleanpng.com/20240305/kj/transparent-rick-and-morty-scientists-in-lab-coats-with-1710850705468.webp',
    'https://banner2.cleanpng.com/20240305/zhg/transparent-rick-and-morty-characters-from-rick-and-morty-in-colorful-1710850818855.webp',
    'https://icon2.cleanpng.com/20240305/efo/transparent-rick-and-morty-cartoon-character-homer-simpson-smiling-1710850674695.webp',
  ];
  return (
    <div className="py-40  flex items-center justify-center">
      <Modal>
        <ModalTrigger className=" dark:text-white text-white flex justify-center group/modal-btn">
          <span className=" group-hover/modal-btn:translate-x-40 text-center text-lg md:text-2xl bg-red-600  p-10 rounded-xl rounded-l-full transition duration-200">
            شرکت <br /> نفت
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            <Image src="/svg/bmslogoclean.svg" alt="alt" width={ 40 } height={ 40 } />
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              💡 لپ{ ' ' }
              <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                کلام
              </span>{ ' ' }
              ما!
            </h4>
            <div className="md:items-center">
              <video src="/pilot.mp4" width="600" height="240" controls>
                عدم پشتیبانی مرورگر شما
              </video>
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
