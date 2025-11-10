'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  return (
    <motion.section 
      id="about"
      className="w-full py-16 sm:py-20 md:py-24"
      style={{ backgroundColor: '#F5F3EE' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-3 lg:px-3 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Heading and Question */}
          <motion.div variants={leftVariants}>
            {/* IA LANDS IN TRICITY Heading */}
            <motion.div className="mb-6 sm:mb-8 flex items-center gap-3">
              <motion.div 
                className="w-2 h-2 sm:w-2.5 sm:h-2.5"
                style={{ backgroundColor: '#C82516' }}
                variants={itemVariants}
              />
              <motion.div 
                className="text-base sm:text-lg md:text-lg font-medium uppercase"
                style={{ 
                  fontFamily: 'var(--font-poppins), sans-serif',
                  color: '#2D2420'
                }}
                variants={itemVariants}
              >
                IA LANDS IN TRICITY
              </motion.div>
            </motion.div>
            
            {/* Are You Ready to Step In? Question */}
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl leading-tight"
              style={{ 
                fontFamily: 'var(--font-poppins), sans-serif',
                color: '#2D2420'
              }}
              variants={itemVariants}
            >
              Big ideas don’t belong to <br />
              big cities anymore
            </motion.h2>
          </motion.div>

          {/* Right Side - Description */}
          <motion.div 
            className="flex flex-col gap-6"
            variants={rightVariants}
          >
            {/* Heading above description */}
            <motion.h3 
              className="text-2xl sm:text-4xl md:text-4xl lg:text-4xl leading-tight mb-2"
              style={{ 
                fontFamily: 'var(--font-poppins), sans-serif',
                color: '#2D2420'
              }}
              variants={itemVariants}
            >
              Are You Ready
              to Step In?
            </motion.h3>
            
            <motion.p 
              className="text-base sm:text-lg md:text-lg leading-relaxed"
              style={{ fontFamily: 'var(--font-poppins), sans-serif', color: '#3D3530' }}
              variants={itemVariants}
            >
              Not every big idea starts in metros. Some start right here—in Tricity's hostels, co-working corners and late-night chai break chats. IA's Next Stop brings early to growth-stage founders from Chandigarh, Mohali and Panchkula to pitch live on stage and showcase what they have been building silently.
            </motion.p>
            <motion.p 
              className="text-base sm:text-lg md:text-xl font-medium leading-relaxed"
              style={{ fontFamily: 'var(--font-poppins), sans-serif', color: '#2D2420' }}
              variants={itemVariants}
            >
              Your idea deserves its moment.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="mt-4"
            >
              <Link href="/apply">
                <Button
                  size="lg"
                  effect="expandIcon"
                  icon={ArrowRight}
                  iconPlacement="right"
                  className="text-white text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold border-none"
                  style={{ 
                    background: '#2D2420',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
                    fontFamily: 'var(--font-poppins), sans-serif'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#C82516';
                    e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(200, 37, 22, 0.5)';
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#2D2420';
                    e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  APPLY NOW
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

