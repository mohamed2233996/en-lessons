import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';
import tricksicon from "@/imges/enTrickIcon.png"
import { motion } from 'framer-motion';


const Trick = () => {
    const { t } = useTranslation();

    return (
               <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="py-12 px-6 text-center text-white relative"
        >
            <div className="max-w-3xl mx-auto">
                <Image src={tricksicon} alt="EN Tricks Icon"
                    className="mx-auto w-32 h-32"
                />
                <h2 className="text-3xl font-bold mb-3">{t('newFeature')}</h2>
                <p className="text-lg mb-6">
                    {t('trickDescription')}
                </p>
                <a
                    href="/en-tricks"
                    className="inline-block bg-white text-hprimary font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition duration-300"
                >
                    {t('tryNow')}
                </a>
            </div>
 <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 150, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute bg-white dark:bg-black text-primary w-20 cursor-default h-20 flex items-center justify-center rounded-full
                top-2 md:right-24 sm:right-6 right-2"
            >
                <span className="costamF">{t('New')}</span>
            </motion.span>
        </motion.div>

    );
}

export default Trick;
