import React from 'react';
import { motion } from 'framer-motion';
import Button from "../components/Button"
function AboutSectionone() {
  return (
    <section className="relative w-full h-screen font-sans text-[#FFF3E7] overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          src="https://res.cloudinary.com/dqgxrwrgg/video/upload/v1753259176/Untitled_video_-_Made_with_Clipchamp_1_imn9mf.mp4"
          autoPlay
          loop
          muted
        />
        <div className="absolute inset-0 backdrop-blur-xs " /> {/* Latte Cream Overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 sm:px-10 lg:px-20">
        {/* Headings */}
        <motion.div
          className="max-w-3xl space-y-6"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight ">
           Here for every<br />
            <span className='text-[#D8A460]'>sip, slurp & spill.</span>
          </h1>

          <motion.div
            className="grid sm:grid-cols-3 gap-6 mt-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Feature
              icon="☕"
              title="Freshly Brewed Insights"
              description="Instant, rich details from every cup — no delays."
            />
            <Feature
              icon="🌿"
              title="Organic Wellness"
              description="Personalized blends tailored to your body's needs."
            />
            <Feature
              icon="🧠"
              title="Mindful Monitoring"
              description="Track your mood, nutrition, and habits holistically."
            />
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-12 max-w-xl flex flex-col gap-5 justify-center items-start"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold ">
            Every bean tells a story — we help you taste it.
          </h2>
          <Button> 
            Join the Brewlist
            
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function Feature({ icon, title, description }) {
  return (
    <div className="flex items-start gap-4">
      <div className="text-3xl">{icon}</div>
      <div>
        <h3 className="font-semibold ">{title}</h3>
        <p className="text-sm ">{description}</p>
      </div>
    </div>
  );
}

export default AboutSectionone;
